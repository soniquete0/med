import * as React from 'react';

export interface CrossRoadsProps {}

const CrossRoads = (props: CrossRoadsProps) => {
  return (
    <section className={'crossRoads'}>
      <div className={'container'}>
        <a className={'crossRoads__wrapper'}>
          <a className={'crossRoads__card'} href="">
            <div className={'crossRoads__card__img'}>
              <img src="./assets/medicon/images/polikliniky.png" />
            </div>
            <p>Hledám polikliniku</p>
          </a>

          <a className={'crossRoads__card'} href="">
            <div className={'crossRoads__card__img'}>
              <img src="./assets/medicon/images/lekari.png" />
            </div>
            <p>Hledám lékaře</p>
          </a>

          <a className={'crossRoads__card'} href="">
            <div className={'crossRoads__card__img'}>
              <img src="./assets/medicon/images/rada.png" />
            </div>
            <p>Potřebuji poradit</p>
          </a>
        </a>
      </div>
    </section>
  );
};

export default CrossRoads;
