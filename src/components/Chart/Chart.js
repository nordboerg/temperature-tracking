import Highcharts from 'highcharts';
import { chartConfig } from './Chart.config.js';
import { initChartTheme } from './Chart.theme.js';

initChartTheme(Highcharts);

const chart = Highcharts.chart('chart-container', chartConfig);

const Chart = {
  selector: function (state) {
    return state[state.length - 1];
  },
  render: function (reading) {
    if (!reading) {
      return;
    }

    const { temp_c, reading_date } = reading;

    chart.series[0].addPoint([reading_date.getTime(), temp_c], true);
  },
};

export default Chart;
