import * as React from 'react';

interface MapBoxProps {}

const MapBox: React.SFC<MapBoxProps> = props => {
  return (
    <div className={'mapBox'}>
      <img src={'assets/medicon/assets/mapbox.png'} />

      <div className={'mapBox__contacts'}>
        <div>asd</div>

        <div>asd</div>
      </div>

      <div className={'mapBox__buttons'}>
        <button>ambulance</button>
        <button>kuddy k nam</button>
      </div>
    </div>
  );
};

export default MapBox;
