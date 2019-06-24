import * as React from 'react';
import { debounce } from 'lodash';

import SvgIcon from '../../partials/SvgIcon';
import BlogSearchResults from './components/BlogSearchResults';
import DoctorSearchResults from './components/DoctorSearchResults';

export interface SearchBarProps {
  placeholder: string;
  barColor: string;
  doctorsLink?: LooseObject;
  blogSearchResults?: LooseObject;
}

export interface SearchBarState {
  focused: boolean;
  query: string;
  doctorResults: null | number;
  blogResults: null | number;
}

const doctorSearchResultsTemplate: LooseObject = {
  datasourceId: 'cjrkew3eu02gp0d71xoi0i5em',
  data: {
    name: '%doctorPersonalInformation,firstName% %doctorPersonalInformation,lastName% ',
    speciality: '%doctorPersonalInformation,expertises,0,name% ',
    clinic: '%doctorPersonalInformation,polyclinic,name% ',
    workingHours: '%doctorPersonalInformation,workingHours% ',
    link: {
      url: '/medicon/cs/ds:doctor',
      pageId: 'cjoy8qfdl001b0845fwgt2200',
      urlNewWindow: false,
    },
  },
  filters: [],
};

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  // tslint:disable-next-line:no-any
  public searchBar: any;
  // tslint:disable-next-line:no-any
  public input: any;

  constructor(props: SearchBarProps) {
    super(props);

    this.state = {
      query: '',
      focused: false,
      doctorResults: null,
      blogResults: null
    };

    this.input = React.createRef();
    this.searchBar = React.createRef();

    this.checkDoctorResults = debounce(this.checkDoctorResults, 10).bind(this);
    this.checkBlogResults = debounce(this.checkBlogResults, 10).bind(this);

    this.handleClick = this.handleClick.bind(this);
    this.clearData = debounce(this.clearData, 300).bind(this);
    this.changeSearchQuery = debounce(this.changeSearchQuery, 300).bind(this);
  }

  componentDidMount() {
    document.addEventListener('click', this.handleClick, false);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.handleClick, false);
  }

  checkDoctorResults(value: number | null) {
    return this.setState({ doctorResults: value });
  }

  checkBlogResults(value: number | null) {
    return this.setState({ blogResults: value });
  }

  handleFocus = () => {
    this.setState({
      focused: !this.state.focused,
    });
  }

  // tslint:disable-next-line:typedef
  public changeSearchQuery(query) {
    this.setState({
      query,
    });
  }

  handleClick(e: LooseObject) {
    if (this.searchBar.current && this.searchBar && this.searchBar.current.contains(e.target)) {
      return;
    } else {
      this.changeSearchQuery('');
    }
  }

  clearData() {
    this.setState({ focused: false, query: '' });
    this.input.current.value = '';
  }
  
  renderNoResults() {
    if (this.state.doctorResults === null && this.state.blogResults === null) {
      return (
        <div className={'searchBarResults__noResults'}>
          Bohužel jsme nenašli žádné vysledky.
        </div>
      );
    } else { return <></>; }
  }

  public render() {
    const { placeholder, barColor } = this.props;
   
    let doctorSearchResults = { ...doctorSearchResultsTemplate };
    
    if (this.props.doctorsLink) {
      doctorSearchResults = {
        ...doctorSearchResults,
        data: {
          ...doctorSearchResults.data,
          link: this.props.doctorsLink,
        },
      };
    }

    return (
      <div
        ref={this.searchBar}
        className={`searchBar ${this.state.focused ? 'searchBar--focused' : ''} searchBar--${barColor}`}
      >
        <div className={'searchBar__input'}>
          <input
            type="text"
            ref={this.input}
            placeholder={placeholder}
            onFocus={() => this.handleFocus()}
            onBlur={() => this.handleFocus()}
            onChange={e => this.changeSearchQuery(e.target.value)}
          />
          <SvgIcon name={'search'} type={barColor} />
        </div>

        <div className={`searchBar__bar`} />
        {this.state.query.length > 2 &&
          <div className={`searchBarResults ${this.state.query.length > 2 ? 'active' : ''}`}>
            {this.props.blogSearchResults && this.state.query.length > 2 && (
              <BlogSearchResults
                query={this.state.query}
                searchKeys={['translations.0.name', 'annotations.perex', 'annotations.title']}
                searchResults={this.props.blogSearchResults}
                checkBlogResults={this.checkBlogResults}
              />
            )}
            
            {doctorSearchResults && this.state.query.length > 2 && (
              <DoctorSearchResults
                searchResults={doctorSearchResults}
                query={this.state.query}
                searchKeys={[
                  'content.doctorPersonalInformation.firstName',
                  'content.doctorPersonalInformation.lastName',
                  'content.doctorPersonalInformation.expertises.0.name',
                  'content.doctorPersonalInformation.polyclinic.name'
                ]}
                clearData={this.clearData}
                checkDoctorResults={this.checkDoctorResults}
              />
            )}

            {this.renderNoResults()}
        </div>
      }
      </div>
    );
  }
}

export default SearchBar;