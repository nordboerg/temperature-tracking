import { reducer } from './reducer.js';

function createStore(reducer, initialState) {
  let state = initialState;
  const subscribers = new Set();

  function getState() {
    return state;
  }

  function dispatch(action) {
    state = reducer(action, state);

    subscribers.forEach((component) => {
      component.render(state);
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

export { subscribe, dispatch, getState };
