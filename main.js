import './style.css';
import TemperatureCard from './src/components/TemperatureCard.js';
import TemperatureTable from './src/components/TemperatureTable.js';
import { getCurrentTemperature } from './src/services/temperature.service.js';
import { poll } from './src/services/utils.js';
import { createStore } from './src/store/store.js';
import { reducer } from './src/store/reducer.js';
import { addReadingAction } from './src/store/actions.js';

const POLL_INTERVAL = 1000;

const { subscribe, dispatch, getState } = createStore(reducer, []);
const addReading = (reading) => dispatch(addReadingAction(reading));

function setupComponent(component) {
  subscribe(component);
}

setupComponent(TemperatureCard);
setupComponent(TemperatureTable);

void poll(getCurrentTemperature, addReading, POLL_INTERVAL);
