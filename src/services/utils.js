import { POLL_INTERVAL } from '../constants.js';

const parseTemperatureData = (data) => {
  const {
    current: {
      last_updated,
      temp_c,
      condition: { text, icon },
    },
    location: { name: location },
  } = data;

  return {
    last_updated,
    temp_c,
    text,
    icon,
    reading_date: new Date(),
    location,
  };
};

async function poll(city, apiCall, callback, ms = POLL_INTERVAL) {
  const result = await apiCall(city);

  if (result) {
    callback(result);

    await new Promise((resolve) => setTimeout(resolve, ms));
    await poll(city, apiCall, callback, ms);
  }
}

export { parseTemperatureData, poll };
