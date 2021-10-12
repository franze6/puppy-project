import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

// ymaps.ready(init);

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

const mapData = {
  center: [54.628987, 39.739606],
  zoom: 11,
};

const coordinates = [
  [54.615371, 39.75275],
  [54.670144, 39.65143],
  [54.629414, 39.71901],
  [54.63611, 39.650226],
  [54.622878, 39.752508],
  [54.635214, 39.717447],
];

const Map1 = () => (
  <YMaps>
    <Map defaultState={mapData}>
      {coordinates.map((coordinate, id) => (
        <Placemark key={id} geometry={coordinate} />
      ))}
    </Map>
  </YMaps>
);

export default Map1;
