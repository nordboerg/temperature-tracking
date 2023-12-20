import './style.css';
import { dispatch, subscribe } from './src/store/store.js';
import TemperatureCard from './src/components/TemperatureCard.js';
import TemperatureTable from './src/components/TemperatureTable.js';
import Chart from './src/components/Chart/Chart.js';
import { addReadingAction } from './src/store/actions.js';
import { getCurrentTemperature } from './src/services/temperature.service.js';
import { getCurrentLocation } from './src/services/location.service.js';
import { poll } from './src/services/utils.js';

const location = await getCurrentLocation();

const setupComponent = (component) => {
  if (typeof component.mount === 'function') {
    // attach the static part of the component's markup to the DOM
    component.mount();
  }
  subscribe(component);
};

const addReading = (reading) => dispatch(addReadingAction(reading));

setupComponent(TemperatureCard);
setupComponent(TemperatureTable);
setupComponent(Chart);

void poll(location, getCurrentTemperature, addReading);
