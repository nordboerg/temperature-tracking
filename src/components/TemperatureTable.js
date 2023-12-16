const selectOptions = [10, 25, 50, 100];
const isSelected = (option, n) => (option === n ? 'selected' : null);

const TemperatureTable = {
  numberOfRecords: 10,
  render(state) {
    const readings = state
      .slice(-this.numberOfRecords)
      .map(({ temp_c, reading_date }) => ({
        temp_c,
        reading_date,
      }))
      .reverse();

    document.getElementById('temperature-table-container').innerHTML = `
      <select name="records" id="record-select">
        ${selectOptions.reduce((options, option) => {
          options += `
            <option value="${option}" ${isSelected(option, this.numberOfRecords)}>
              ${option}
            </option>
          `;
          return options;
        }, '')}
      </select>
      <table id="temperature-table">
        <thead>
          <tr>
            <th>Reading</th><th>Date/Time</th>
          </tr>
        </thead>
        <tbody>
        ${readings.reduce((rows, { temp_c, reading_date }) => {
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

    document.getElementById('record-select').addEventListener('change', (event) => {
      this.numberOfRecords = Number(event.target.value);
      this.render(state);
    });
  },
};

export default TemperatureTable;
