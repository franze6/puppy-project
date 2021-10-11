import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

const Map1 = () => {
  return (
    <YMaps>
      <div>
        <Map
          defaultState={{
            center: [54.628987, 39.739606],
            zoom: 5,
          }}
        >
          <Placemark geometry={[54.615371, 39.75275]} />
        </Map>
      </div>
    </YMaps>
  );
};

export default Map1;
