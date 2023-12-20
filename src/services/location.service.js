const geoFindMe = () => {
  if ('geolocation' in navigator) {
    return new Promise((success, error) =>
      navigator.geolocation.getCurrentPosition(success, error),
    );
  } else {
    console.error('geolocation is not sup[ported by this browser');
  }
};

const getCurrentLocation = async () => {
  try {
    const {
      coords: { latitude, longitude },
    } = await geoFindMe();

    return `${latitude},${longitude}`;
  } catch (error) {
    console.error(`ERROR (${error.code}): ${error.message}`);
  }
};

export { getCurrentLocation };
