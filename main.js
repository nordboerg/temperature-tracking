import './style.css';
import TemperatureCard from './components/TemperatureCard.js';

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

subscribe(TemperatureCard);

dispatch({
  type: 'add',
  payload: {
    last_updated: new Date().toLocaleString(),
    temp_c: 10,
    text: 'Clear',
    icon: 'http://cdn.weatherapi.com/weather/64x64/night/113.png',
  },
});
