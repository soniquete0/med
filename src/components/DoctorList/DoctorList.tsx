import * as React from 'react';
import { withRouter, RouteComponentProps } from 'react-router-dom';

import List from '../List';
import Link from '../../partials/Link';
import Media from '../../partials/Media';
import Select from '../../partials/Select';
import Button from '../../partials/Button';

interface Doctors {
  name: string;
  field: string;
  clinicName: string;
  image: LooseObject;
  clinicUrl: LooseObject;
  doctorUrl: LooseObject;
}
export interface DoctorListProps {
  languageCode?: string;
  data: {
    title: string;
    doctors: Doctors[];
    excludedDoctor: string;
  };
}

export interface DoctorListState {
  numberOfPage: number;
  filter: string;
}

class DoctorList extends React.Component<RouteComponentProps<{}> & DoctorListProps, DoctorListState> {
  constructor(props: RouteComponentProps<{}> & DoctorListProps) {
    super(props);

    this.state = {
      numberOfPage: 1,
      filter: ''
    };

    this.handleChangeSelect = this.handleChangeSelect.bind(this);
  }

  handleChangeSelect(event: React.ChangeEvent<HTMLSelectElement>) {
    const { history } = this.props;

    this.setState({ filter: event.target.value });
    history.push({
      search: `?clinic=${this.transformSearchParamToClinicName(event.target.value)}`
    });
    
  }

  getUniquePolyclinicNames(items: LooseObject<any>[]) {
    return [...new Set(items.map(item => item.clinicName.replace(/Poliklinika/, '').trim()))];
  }

  componentDidMount() {
    // ?clinic=Vysocany
    const { search } = this.props.location;
    if (search.length > 0) {
      this.setFilterBySerchParam(search.split('=')[1]);
    }
  }

  transformSearchParamToClinicName(param: string) {
    switch (param) {
      case 'Vysočany':      return 'Vysocany';
      case 'Budějovická':   return 'Budejovicka';
      case 'Zelený pruh':   return 'ZelenyPruh';
      case 'Holešovice':    return 'Holesovice';

      default:              return '';
    }
  }

  setFilterBySerchParam(param: string) {
    switch (param) {
      case 'Vysocany':
        this.setState({ filter: 'Vysočany' });
        break;
      case 'Budejovicka':
        this.setState({ filter: 'Budějovická' });
        break;
      case 'ZelenyPruh':
        this.setState({ filter: 'Zelený pruh' });
        break;
      case 'Holesovice':
        this.setState({ filter: 'Holešovice' });
        break;

      default:
        this.setState({ filter: '' });
        break;
    }
  }

  render() {
    const { doctors, title, excludedDoctor } = this.props.data;
    
    return (
      <List
        data={doctors}
        searchedText={this.state.filter}
        exclude={{ key: 'name', value: excludedDoctor }}
        searchKeys={['content.doctorPersonalInformation.polyclinic.name']}
      >
        {({ getPage }) => {
          const { items, lastPage } = getPage(this.state.numberOfPage, 'infinite', 6);
          
          return (
            <section className={'doctorList'}>
              <div className={'container'}>
                {title && <h3>{title}</h3>}

                <Select
                  value={this.state.filter}
                  className={'hCenterBlock'}
                  onChange={this.handleChangeSelect}
                  defaultValue={'Všechny polikliniky'}
                  items={this.getUniquePolyclinicNames(items)}
                />

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

export default withRouter(DoctorList);