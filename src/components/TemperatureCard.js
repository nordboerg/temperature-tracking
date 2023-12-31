const TemperatureCard = {
  render(readings) {
    if (!readings.length) {
      return;
    }

    const { last_updated, temp_c, text, icon, location } = readings[readings.length - 1];
    const day = new Date(last_updated).toLocaleDateString(undefined, { weekday: 'long' });
    const time = new Date(last_updated).toLocaleTimeString();

    document.getElementById('temperature-card-container').innerHTML = `
      <div class="temperature-card">
        <div class='left'>
          <img class="condition-icon" src="${icon}" alt="${text}" />
          <span class="current-temperature">${temp_c}</span>
          <span class="unit">°C</span>
        </div>
        <div class='right'>
          <span class="city">${location}</span>
          <span class="last-read-time">${day} ${time}</span>
          <span class="condition-text">${text}</span>
        </div>
      </div>
    `;
  },
};

export default TemperatureCard;
