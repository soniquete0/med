import * as React from 'react';

export interface HeaderProps {}

export interface HeaderState {}

class Header extends React.Component<HeaderProps, HeaderState> {
  constructor(props: HeaderProps) {
    super(props);

    this.state = {};
  }

  public render() {
    return (
      <header className={'header'}>
        <nav>
          <li>
            <a>link</a>
            <a>link</a>
            <a>link</a>
          </li>
        </nav>
      </header>
    );
  }
}

export default Header;
