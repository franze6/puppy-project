import React, { useState, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import { YMaps, Map, Placemark, SearchControl } from 'react-yandex-maps';

const mapData = {
  center: [54.628987, 39.739606],
  zoom: 12,
  controls: [],
};

// const coordinate = [[54.615371, 39.75275]];

const Maps = () => {
  // храним текущий текст
  const [text, setText] = useState(null);
  // ref searchcontrol
  const searchRef = useRef(0);

  const [maps, setMaps] = useState(null);
  const [address, setAddress] = useState('');

  const getGeoLocation = e => {
    const coord = e.get('target').getCenter();

    const resp = maps.geocode(coord);
    resp.then(res => {
      setAddress(res.geoObjects.get(0).getAddressLine());
    });
  };

  const onLoad = map => {
    setMaps(map);
  };

  useEffect(() => {
    if (text && searchRef.current) {
      // Меняем текст searchcontrol при изменении text
      searchRef.current.search(text);
    }
  }, [text]);

  return (
    <YMaps>
      <Map
        defaultState={mapData}
        onBoundsChange={ymaps => getGeoLocation(ymaps)}
        modules={['geolocation', 'geocode']}
        onLoad={ymaps => onLoad(ymaps)}
      >
        <Placemark geometry={[54.615371, 39.75275]} onClick={() => setText('Test 1')} />
        <SearchControl
          instanceRef={ref => {
            if (ref) searchRef.current = ref;
          }}
          // query={{
          //   apikey: '0740cd90-ad81-4427-8000-b08f7d934ddf',
          // }}
        />
      </Map>
      {address}
    </YMaps>
  );
};

// const Maps = () => (
//   <YMaps>
//     <Map defaultState={mapData}>
//       {coordinates.map((coordinate, id) => (
//         <Placemark key={id} geometry={coordinate} />
//       ))}
//       <SearchControl options={{ float: 'right' }} />
//     </Map>
//   </YMaps>
// );
const rootElement = document.getElementById('root');
ReactDOM.render(<Maps />, rootElement);

export default Maps;
