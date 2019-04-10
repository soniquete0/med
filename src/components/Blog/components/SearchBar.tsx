import * as React from 'react';
import SvgIcon from '@source/partials/SvgIcon';

export interface SearchBarProps {
  placeholder: string;
  barColor: string;
  onChange?: any;
  value?: string;
}

export interface SearchBarState {
  focused: boolean;
}

class SearchBar extends React.Component<SearchBarProps, SearchBarState> {
  // tslint:disable-next-line:no-any
  public searchBar: any;
  constructor(props: SearchBarProps) {
    super(props);
    this.searchBar = React.createRef();

    this.state = { focused: false };
  }

  handleFocus = () => {
    this.setState({
      focused: !this.state.focused,
    });
  }

  public render() {
    const { placeholder, barColor, value, onChange } = this.props;

    return (
      <div
        className={`searchbar ${this.state.focused ? 'searchbar--focused' : ''} searchbar--${barColor}`}
        ref={this.searchBar}
      >
        <div className={'searchbar__input'}>
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e)}
            placeholder={placeholder}
            onFocus={() => this.handleFocus()}
            onBlur={() => this.handleFocus()}
          />
          <SvgIcon name={'search'} type={barColor} />
        </div>

        <div className={`searchbar__bar`} />
      </div>
    );
  }
}

export default SearchBar;