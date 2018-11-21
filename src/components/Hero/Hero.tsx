import * as React from 'react';

export interface HeroProps {}

export interface HeroState {}

class Hero extends React.Component<HeroProps, HeroState> {
  public render() {
    return (
      <div className="container">
        <section className={'hero'}>
          <h1>title</h1>
        </section>

        <div className="heroTest">
          <div>
            <h2>Hello</h2> <p>this is some crazy text </p>
          </div>
          <div>
            <h2>Hello</h2> <p>this is some crazy text </p>
          </div>
          <div>
            <h2>Hello</h2> <p>this is some crazy text </p>
          </div>
          <div>
            <h2>Hello</h2> <p>this is some crazy text </p>
          </div>
        </div>

        <div className={'heroBtn'}>
          <button>waka</button>
          <button>waka</button>
          <button>waka</button>
        </div>
      </div>
    );
  }
}

export default Hero;
