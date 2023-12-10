const parseTemperatureData = (data) => {
  const {
    current: {
      last_updated,
      temp_c,
      condition: { text, icon },
    },
  } = data;

  return {
    last_updated,
    temp_c,
    text,
    icon,
    reading_date: new Date(),
  };
};

async function poll(apiCall, callback, ms) {
  const result = await apiCall();
  callback(result);

  await new Promise((resolve) => setTimeout(resolve, ms));
  await poll(apiCall, callback, ms);
}

export { parseTemperatureData, poll };
