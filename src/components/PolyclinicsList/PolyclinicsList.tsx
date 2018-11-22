import * as React from 'react';
import PcTitle from './components/title';

const data = {
  items: [{ name: 'asd' }],
};

const PolyclinicsList = () => (
  <section className="polyclinicsList">
    {data.items.map((item, index) => (
      <div className={'pcitem'} key={index}>
        <div className="fullWidthContainer">
          <div className="container">
            <div className="pcitem__wrapper">
              <div className={'pcitem__img'}>
                <img src="assets/medicon/images/policlinic1.png" alt="" />
              </div>

              <div className={'pcitem__info'}>
                <PcTitle />

                <div className={'pcitem__info__list'}>
                  <ul>
                    <li>Psychologie</li>
                    <li>Neurologie</li>
                    <li>Mammacentrum</li>
                    <li>Psychologie</li>
                    <li>Neurologie</li>
                    <li>Mammacentrum</li>
                    <li>Psychologie</li>
                    <li>Neurologie</li>
                    <li>Mammacentrum</li>
                  </ul>

                  <div>Další odbornosti</div>
                </div>

                <div className={'pcitem__info__desc'}>
                  <div className={'pcitem__info__desc__txt'}>
                    Poliklinika Budějovická je největší nestátní ambulantní zařízení v Praze. Klientům poskytuje široké
                    spektrum ambulantních specializací včetně nejmodernějšími přístroji vybavené gastroenterologie a
                    špičkově vybaveného oddělení RDG a zobrazovacích metod. To vše pod jednou střechou.
                  </div>

                  <div>
                    <button className={'btn btn--small btnFirst'}>vice info</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    ))}
  </section>
);

export default PolyclinicsList;
