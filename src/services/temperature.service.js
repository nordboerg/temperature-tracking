import { parseTemperatureData } from './utils.js';

const getCurrentTemperature = async (location) => {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=c8d34109c07e47d5a41121136230712&q=${location}`,
    );
    const data = await response.json();

    return parseTemperatureData(data);
  } catch (error) {
    console.error(error);
  }
};

export { getCurrentTemperature };
