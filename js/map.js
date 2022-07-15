import { INITIAL_MAP_VIEW, INITIAL_MAP_ZOOM } from './const.js';
import { enableForm } from './utils.js';

const adForm = document.querySelector('.ad-form');

const loadMap = () => {
  const map = L.map('map-canvas')
    .on('load', enableForm(adForm))
    .setView(INITIAL_MAP_VIEW, INITIAL_MAP_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
  ).addTo(map);
};

export { loadMap };