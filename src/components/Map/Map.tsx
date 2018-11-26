import * as React from 'react';
import GoogleMapReact from 'google-map-react';
export const GoogleMapsApiKey = 'AIzaSyCSpatDLsxXguzdvuwbTrK3TulOh10MULI';
import Marker from './components/Marker';
import MapBox from './components/MapBox';

class Map extends React.Component<any, any> {
  public render() {
    const defaultCenter = { lat: 49.743825, lng: 15.13865 };
    let center = defaultCenter;
    const defaultZoom = 7;
    const zoom = 7;
    return (
      <div className="fullWidthContainer">
        <section className={'map'}>
          <div className={'map__container'}>
            <button>Zobrazit všechny polikliniky</button>
          </div>

          <MapBox />

          <GoogleMapReact
            bootstrapURLKeys={{ key: GoogleMapsApiKey }}
            defaultCenter={defaultCenter}
            defaultZoom={defaultZoom}
            center={center}
            zoom={zoom}
            options={{
              scrollwheel: false,
            }}
          >
            {/* <Marker /> */}
          </GoogleMapReact>
        </section>
      </div>
    );
  }
}

export default Map;
