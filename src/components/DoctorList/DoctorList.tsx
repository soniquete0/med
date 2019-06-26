import * as React from 'react';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';
import Button from '../../partials/Button';

interface Doctors {
  name: string;
  clinicName: string;
  clinicUrl: LooseObject;
  doctorUrl: LooseObject;
  field: string;
  image: LooseObject;
}
export interface DoctorListProps {
  languageCode?: string;
  data: {
    title: string;
    excludedDoctor: string;
    doctors: Doctors[];
  };
}

export interface DoctorListState {
  numberOfPage: number;
}

export default class DoctorList extends React.Component<DoctorListProps, DoctorListState> {
  constructor(props: DoctorListProps) {
    super(props);

    this.state = {
      numberOfPage: 1,
    };
  }

  render() {
    const { doctors, title, excludedDoctor } = this.props.data;

    return (
      <List data={doctors} exclude={{ key: 'name', value: excludedDoctor }}>
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 9);

          return (
            <section className={'doctorList'}>
              <div className={'container'}>
                {title && <h3>{title}</h3>}

                <div className="doctorList__wrapper">
                  {items &&
                    items.map((doctor, index) => {
                      return (
                        <div className={'doctorList__item'} key={index}>
                          <div className={'doctorList__item__img'}>
                            {(doctor.image && doctor.image.filename && <Media data={doctor.image} type="image" />) || (
                              <img
                                className="avatarImg"
                                src={'../../../assets/medicon/images/doctorIcon.svg'}
                                alt="Medicon Doctor Icon"
                              />
                            )}
                          </div>

                          <div className={'doctorList__item__info'}>
                            <h3>{doctor.name}</h3>
                            {doctor.field && <div className={'doctorList__item__info__description'}>
                              <div className={'doctorList__item__info__description--container'}>
                                <p>{doctor.field}</p>
                              </div>
                            </div>}
                            <p className={'doctorList__item__info--mobileField'}>{doctor.field}</p>
                            <Link {...doctor.clinicUrl} className={'doctorList__item__info__link'}>
                              {doctor.clinicName}
                            </Link>
                            <Button classes="btn--blueBorder btn--small" url={doctor.doctorUrl}>
                              více informací
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                </div>
                {this.state.numberOfPage < lastPage && <div className="doctorList__btnHolder">
                  <button
                    className={'btn btn--blueBkg'}
                    onClick={() => this.setState({ numberOfPage: lastPage })}
                  >
                    zobrazit více
                  </button>
                </div>}
              </div>
            </section>
          );
        }}
      </List>
    );
  }
}