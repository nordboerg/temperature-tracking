import './style.css';
import { dispatch, subscribe } from './src/store/store.js';
import TemperatureCard from './src/components/TemperatureCard.js';
import TemperatureTable from './src/components/TemperatureTable.js';
import Chart from './src/components/Chart/Chart.js';
import { addReadingAction } from './src/store/actions.js';
import { getCurrentTemperature } from './src/services/temperature.service.js';
import { poll } from './src/services/utils.js';

const city = 'London';

function setupComponent(component) {
  if (typeof component.mount === 'function') {
    component.mount();
  }
  subscribe(component);
}

setupComponent(TemperatureCard);
setupComponent(TemperatureTable);
setupComponent(Chart);

void poll(city, getCurrentTemperature, addReading);
