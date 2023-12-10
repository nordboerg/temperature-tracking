const reducer = (action, state) => {
  switch (action.type) {
    case 'addReading': {
      return [...state, action.payload].slice(-100);
    }
    default: {
      return state;
    }
  }
};

export { reducer };
