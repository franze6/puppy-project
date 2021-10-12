import React from 'react';
import {
  YMaps,
  Map,
  // SearchControl,
  FullscreenControl,
  ZoomControl,
  Placemark,
  // Polyline,
  // GeoObject,
} from 'react-yandex-maps';

// const placemarks = [
//   {
//     latitude: 54.615371,
//     longitude: 39.75275,
//     hintContent: '<div class="map__hint">ул. Маяковского, д. 1 А</div>',
//   },
//   {
//     latitude: 54.670144,
//     longitude: 39.65143,
//     hintContent: '<div class="map__hint">ул. Бирюзова, д. 10</div>',
//   },
//   {
//     latitude: 54.629414,
//     longitude: 39.71901,
//     hintContent: '<div class="map__hint">ул. Первомайский пр-т, д. 56</div>',
//   },
//   {
//     latitude: 54.63611,
//     longitude: 39.650226,
//     hintContent: '<div class="map__hint">ул. Новаторов, д. 2</div>',
//   },
//   {
//     latitude: 54.622878,
//     longitude: 39.752508,
//     hintContent: '<div class="map__hint">ул. Радищева, д. 12</div>',
//   },
//   {
//     latitude: 54.635214,
//     longitude: 39.717447,
//     hintContent: '<div class="map__hint">ул. 2-Бутырки, д. 11</div>',
//   },
// ];
// const geoObjects = [];

const Map1 = () => {
  return (
    <YMaps>
      <div>
        <Map
          defaultState={{
            center: [54.628987, 39.739606],
            zoom: 11,
          }}
        >
          <Placemark geometry={[54.615371, 39.75275]} />
          <Placemark geometry={[54.670144, 39.65143]} />
          <Placemark geometry={[54.629414, 39.71901]} />
          <Placemark geometry={[54.63611, 39.650226]} />
          <Placemark geometry={[54.622878, 39.752508]} />
          <Placemark geometry={[54.635214, 39.717447]} />

          {/* <GeolocationControl options={{ float: 'left' }} /> */}
          {/* <SearchControl options={{ float: 'left' }} /> */}
          <FullscreenControl options={{ float: 'left' }} />
          <ZoomControl options={{ float: 'right' }} />
        </Map>
      </div>
    </YMaps>
  );
};

export default Map1;
