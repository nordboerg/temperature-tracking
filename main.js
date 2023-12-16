import './style.css';
import { dispatch, subscribe } from './src/store/store.js';
import TemperatureCard from './src/components/TemperatureCard.js';
import TemperatureTable from './src/components/TemperatureTable.js';
import Chart from './src/components/Chart/Chart.js';
import { addReadingAction } from './src/store/actions.js';
import { getCurrentTemperature } from './src/services/temperature.service.js';
import { poll } from './src/services/utils.js';
import { POLL_INTERVAL } from './src/constants.js';

const addReading = (reading) => dispatch(addReadingAction(reading));

function setupComponent(component) {
  subscribe(component);
}

setupComponent(TemperatureCard);
setupComponent(TemperatureTable);
setupComponent(Chart);

void poll(getCurrentTemperature, addReading, POLL_INTERVAL);
