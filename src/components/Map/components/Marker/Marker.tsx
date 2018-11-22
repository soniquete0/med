import * as React from 'react';
import MapBox from '../../components/MapBox';

interface MarkerProps {}

const Marker: React.SFC<MarkerProps> = () => {
  return (
    <div className={'markerHolder'}>
      <MapBox />
    </div>
  );
};

export default Marker;
