import { STORED_READING_LIMIT } from '../constants.js';

const reducer = (action, state) => {
  switch (action.type) {
    case 'addReading': {
      return [...state, action.payload].slice(-STORED_READING_LIMIT);
    }
    default: {
      return state;
    }
  }
};

export { reducer };
