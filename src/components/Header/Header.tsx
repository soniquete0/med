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
        <div className="container">
          <div className={'header__wrapper'}>
            <div className={'header__logo'}>
              <a href={''}>
                <img src="/assets/medicon/images/logo.png" alt="Medicon Logo" />
              </a>
            </div>

            <nav>
              <ul>
                <li>
                  <a href="">Domu</a>
                </li>
                <li>
                  <a href="">O nas</a>
                </li>
                <li>
                  <a href="">kontakty</a>
                </li>
              </ul>

              <div className={'hamburgerHolder'}>
                <div className={'hamburger'}>
                  <div />
                </div>
                <span>menu</span>
              </div>
            </nav>
          </div>
        </div>

        <div className={'header__iso'}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none">
            <polygon fill="white" points="0,0 0,50 15,100 100,0" />
          </svg>
        </div>
      </header>
    );
  }
}

export default Header;
