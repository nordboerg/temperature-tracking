const TemperatureCard = {
  selector: function (state) {
    return state[state.length - 1];
  },
  render: function (reading) {
    if (!reading) {
      return;
    }

    const { last_updated, temp_c, text, icon } = reading;

    document.getElementById('temperature-card-container').innerHTML = `
      <div class="temperature-card">
        <div class='left'>
          <img class="condition-icon" src="${icon}" alt="${text}" />
          <span class="current-temperature">${temp_c}</span>
          <span class="unit">°C</span>
        </div>
        <div class='right'>
          <span class="city">London</span>
          <span class="last-read-time">${last_updated}</span>
          <span class="condition-text">${text}</span>
        </div>
      </div>
    `;
  },
};

export default TemperatureCard;
