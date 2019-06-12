import * as React from 'react';

import Media from '../../partials/Media';
import DividerCircles from '../DividerCircles';

export interface ContactsProps {
  data: {
    geo: string;
    clinic?: string;
    clinicColor?: string;
    phone: string;
    transport: string;  
    transportImage: LooseObject;
  };
}

const PolyclinicInfo = (props: ContactsProps) => {
  const { geo, phone, transport, transportImage, clinic, clinicColor } = props.data;

  return (
    <div className={'policlinicInfo'}>
      <div className="container">
        {/* <DividerCircles /> */}

        <div className="row policlinicInfo__list">
          <div className="col-12 col-lg-4">
            <div className={'policlinicInfo__item'}>
              <img src={'/assets/medicon/images/geo.svg'} alt="address" />
              <div className={'policlinicInfo__item--content'}>
                <p style={{ display: 'block' }}>{geo}</p>
                {clinic && <p style={clinicColor ? {color: `${clinicColor}`} : {}}>{clinic}</p>}
              </div>
            </div>  
          </div>
          <div className="col-12 col-lg-4">
            <div className={'policlinicInfo__item'}>
              <img src={'/assets/medicon/images/phone.svg'} alt="phone nubmer" />
              <p className={'policlinicInfo__item--content'}>{phone}</p>
            </div>
          </div>
          <div className="col-12 col-lg-4">
            <div className={'policlinicInfo__item'}>
              {transportImage && <Media type={'image'} data={transportImage} />}
              <p className={'policlinicInfo__item--content'}>{transport}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PolyclinicInfo;