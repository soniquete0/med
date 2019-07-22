import * as React from 'react';
import * as moment from 'moment';

import List from '../../../List';
import Link from '../../../../partials/Link';

interface DoctorSearchResultsProps {
  query: string;
  searchResults?: LooseObject;
  searchKeys?: Array<string>;
  clearData: Function;
  checkDoctorResults: Function;
}

function isDoctorActive(workingHours: LooseObject) {
  const weekDayKey = getWeekDayKey();

  if (
    workingHours &&
    workingHours.weeks &&
    workingHours.weeks[0] &&
    workingHours.weeks[0].days &&
    workingHours.weeks[0].days[weekDayKey] &&
    workingHours.weeks[0].days[weekDayKey] &&
    workingHours.weeks[0].days[weekDayKey] &&
    workingHours.weeks[0].days[weekDayKey].length > 0 &&
    workingHours.weeks[0].days[weekDayKey].length > 0
  ) {
    return workingHours.weeks[0].days[weekDayKey].some(doctorWorkingHours => {
      const regex = /^\s*([0-9]{2}):([0-9]{2})\s*$/;
      const from = regex.exec(doctorWorkingHours.from);
      const to = regex.exec(doctorWorkingHours.to);

      if (from && from[1] && from[2] && to && to[1] && to[2]) {
        const startOfShift = moment()
          .startOf('day')
          .add(from[1], 'hours')
          .add(from[2], 'minutes');
        const endOfShift = moment()
          .startOf('day')
          .add(to[1], 'hours')
          .add(to[2], 'minutes');
        const now = moment();

        if (now.isSameOrBefore(endOfShift) && now.isSameOrAfter(startOfShift)) {
          return true;
        }
      }
      return false;
    });
  }

  return null;
}

function getWeekDayKey() {
  let day;

  switch (moment().isoWeekday()) {
    case 1:
      day = 'mo';
      break;
    case 2:
      day = 'tu';
      break;
    case 3:
      day = 'we';
      break;
    case 4:
      day = 'th';
      break;
    case 5:
      day = 'fr';
      break;
    case 6:
      day = 'st';
      break;
    case 7:
      day = 'su';
      break;
    default:
      day = 'mo';
      break;
  }

  return day;
}

export default function DoctorSearchResults (props: DoctorSearchResultsProps) {
  const { searchResults, query, searchKeys, clearData, checkDoctorResults } = props;
  
  return (
    <List
      data={searchResults}
      searchedText={query}
      searchKeys={searchKeys}
    >
      {({ data }) => {
        if (data.length > 0) {
          checkDoctorResults(data.length);
          
          return (
            <ul className={'searchBarResults__doctors'}>
              {data
                .map(
                  (item): LooseObject => {
                    let workingHours = null;
                    try {
                      workingHours = JSON.parse(item.workingHours);
                    } catch (e) {
                      console.log('error', e);
                    }

                    return {
                      ...item,
                      isDoctorActive: isDoctorActive(workingHours),
                    };
                  }
                )
                .sort((a, b) => (a.isDoctorActive === true ? -1 : 1))
                .map((doctor, i) => {
                  return (
                    <li 
                      key={i} 
                      className={
                        (doctor.isDoctorActive === true || doctor.isDoctorActive === null)
                        ? 'active' : ''
                      }
                      onClick={() => clearData()}
                    >
                      <Link {...doctor.link}>
                        <span>
                          <p>
                            <span className={doctor.isDoctorActive === null ? 'noTimetable' : ''}>
                              {doctor.name}
                            </span>

                            {doctor.isDoctorActive !== null && 
                              <>
                                <span 
                                  style={
                                    doctor.isDoctorActive ? 
                                    {color: '#31a031'} : 
                                    {color: '#c23636'} 
                                  }
                                >
                                  {doctor.isDoctorActive ? 'ordinuje' : 'v tuto chvíli neordinuje'}
                                </span>
                              </>
                            }
                          </p>
                          <p>{doctor.speciality}</p>
                        </span>
                        <span>{doctor.clinic}</span>
                      </Link>
                    </li>
                  );
                })}
            </ul>
          );
        } else {
          checkDoctorResults(null);
          return (<></>);
        }
      }}
    </List>
  );
}