const GET_DATA_URL = 'https://23.javascript.pages.academy/keksobooking/data';
const POST_DATA_URL = 'https://23.javascript.pages.academy/keksobooking';
const INITIAL_MAP_ZOOM = 13;
const ADS_MAX = 10;

const INITIAL_MAP_VIEW = {
  lat: 35.6894,
  lng: 139.69235,
};

const MARKER_ICON = L.icon({
  iconUrl: '../img/map-pins/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

export {
  GET_DATA_URL,
  POST_DATA_URL,
  INITIAL_MAP_ZOOM,
  ADS_MAX,
  INITIAL_MAP_VIEW,
  MARKER_ICON
};
