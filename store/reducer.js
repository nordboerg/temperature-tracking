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

export { reducer };
