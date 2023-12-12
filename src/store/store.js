import { reducer } from './reducer.js';

function createStore(reducer, initialState) {
  let state = initialState;
  const subscribers = new Set();

  function dispatch(action) {
    state = reducer(action, state);

    subscribers.forEach((component) => {
      component.render(component.selector(state));
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
  };
}

const { subscribe, dispatch } = createStore(reducer, []);

export { subscribe, dispatch };
