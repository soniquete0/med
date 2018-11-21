import * as React from 'react';
import SearchBar from '../SearchBar/SearchBar';

export interface HeroProps {}

export interface HeroState {}

class Hero extends React.Component<HeroProps, HeroState> {
  public render() {
    return (
      <div className="fullWidthContainer">
        <section className={'hero'}>
          <div className={'container'}>
            <h1>title</h1>

            <div className={'hero__text'}>Řešení pro každý zdravotní problém naleznete v našich poliklinikách.</div>

            <SearchBar placeholder={'Hledám odbornost'} barColor={'lightBlue'} />
          </div>
        </section>
      </div>
    );
  }
}

export default Hero;
