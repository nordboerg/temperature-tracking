const TemperatureTable = {
  readings: [],
  selector: function (state) {
    this.readings = state.map(({ temp_c, reading_date }) => ({
      temp_c,
      reading_date,
    }));
  },
  render: function () {
    document.getElementById('temperature-table-container').innerHTML = `
      <table id="temperature-table">
        <thead>
          <tr>
            <th>Reading</th><th>Date/Time</th>
          </tr>
        </thead>
        <tbody>
        ${this.readings.reduce((rows, { temp_c, reading_date }) => {
          rows += `
            <tr>
              <td>${temp_c} °C</td>
              <td class="datetime">${reading_date.toLocaleString()}</td>
            </tr>
          `;
          return rows;
        }, '')}
        </tbody>
      </table>
    `;
  },
};

export default TemperatureTable;
