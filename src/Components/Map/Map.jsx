import React from 'react';
import { YMaps, Map, Placemark } from 'react-yandex-maps';

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
