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

// uncomment this to see some movement in the chart
// for (let i = 0; i < 20; i++) {
//   addReading({
//     last_updated: new Date().toLocaleString(),
//     temp_c: Math.ceil(Math.random() * 5),
//     text: 'Clear',
//     icon: 'http://cdn.weatherapi.com/weather/64x64/night/113.png',
//     reading_date: new Date(),
//   });
// }

void poll(getCurrentTemperature, addReading, POLL_INTERVAL);
