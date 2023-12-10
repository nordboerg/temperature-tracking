import './style.css';
import TemperatureCard from './components/TemperatureCard.js';
import TemperatureTable from './components/TemperatureTable.js';
import { getCurrentTemperature } from './services/temperature.service.js';
import { poll } from './services/utils.js';

const POLL_INTERVAL = 1000;

const reducer = (action, state) => {
  switch (action.type) {
    case 'add': {
      return [...state, action.payload];
    }
    default: {
      return state;
    }
  }
};

function createStore(reducer, initialState) {
  let state = initialState;
  const subscribers = new Set();

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(action, state);

    subscribers.forEach((component) => {
      component.selector(state);
      component.render();
    });
  }

  function subscribe(component) {
    subscribers.add(component);

    return function () {
      if (subscribers.has(component)) {
        subscribers.delete(component);
      }
    };
  }

  return {
    subscribe,
    dispatch,
    getState,
  };
}

const { subscribe, dispatch, getState } = createStore(reducer, []);

const addReadingAction = (payload) => ({
  type: 'add',
  payload,
});
const addReading = (reading) => dispatch(addReadingAction(reading));

subscribe(TemperatureCard);
subscribe(TemperatureTable);

void poll(getCurrentTemperature, addReading, POLL_INTERVAL);
