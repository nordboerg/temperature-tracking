import './style.css';
import TemperatureCard from './components/TemperatureCard.js';
import TemperatureTable from './components/TemperatureTable.js';
import { getCurrentTemperature } from './services/temperature.service.js';
import { poll } from './services/utils.js';
import { createStore } from './store/store.js';
import { reducer } from './store/reducer.js';
import { addReadingAction } from './store/actions.js';

const POLL_INTERVAL = 1000;

const { subscribe, dispatch, getState } = createStore(reducer, []);
const addReading = (reading) => dispatch(addReadingAction(reading));

function setupComponent(component) {
  subscribe(component);
}

setupComponent(TemperatureCard);
setupComponent(TemperatureTable);

void poll(getCurrentTemperature, addReading, POLL_INTERVAL);
