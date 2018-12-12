import * as React from 'react';

export interface CrossRoadsProps {
  data: {
    items: [
      {
        text: string;
        image: object;
      }
    ];
  };
}

const CrossRoads = (props: CrossRoadsProps) => {
  const { items } = props.data;

  return (
    <section className={'crossRoads'}>
      <div className={'container'}>
        <div className={'crossRoads__wrapper'}>
          {items &&
            items.map((item, index) => (
              <a className={'crossRoads__card'} href="" key={index}>
                <div className={'crossRoads__card__img'}>
                  <img src="./assets/medicon/images/polikliniky.png" />
                </div>
                <p>{item.text}</p>
              </a>
            ))}
        </div>
      </div>
    </section>
  );
};

export default CrossRoads;
