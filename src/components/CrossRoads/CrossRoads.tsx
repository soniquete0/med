import * as React from 'react';

export interface CrossRoadsProps {}

const CrossRoads = (props: CrossRoadsProps) => {
  return (
    <div className={'crossRoads'}>
      <div className={'container'}>
        <a className={'crossRoads__wrapper'}>
          <a className={'crossRoads__card'} href="">
            <div className={'crossRoads__card__img'}>
              <img src="./assets/images/polikliniky.png" />
            </div>
            <h3>Hledám polikliniku</h3>
          </a>

          <a className={'crossRoads__card'} href="">
            <div className={'crossRoads__card__img'}>
              <img src="./assets/images/lekari.png" />
            </div>
            <h3>Hledám lékaře</h3>
          </a>

          <a className={'crossRoads__card'} href="">
            <div className={'crossRoads__card__img'}>
              <img src="./assets/images/rada.png" />
            </div>
            <h3>Potřebuji poradit</h3>
          </a>
        </a>
      </div>
    </div>
  );
};

export default CrossRoads;
