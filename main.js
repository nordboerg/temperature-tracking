import './style.css'

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

    subscribers.forEach((callback) => {
      callback();
    });
  }

  function subscribe(callback) {
    subscribers.add(callback);

    return function () {
      if (subscribers.has(callback)) {
        subscribers.delete(callback);
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