import Highcharts from 'highcharts';
import { chartConfig } from './Chart.config.js';
import { initChartTheme } from './Chart.theme.js';
import { STORED_READING_LIMIT } from '../../constants.js';

initChartTheme(Highcharts);

const chart = Highcharts.chart('chart-container', chartConfig);

const Chart = {
  render(readings) {
    if (!readings) {
      return;
    }

    const { temp_c, reading_date } = readings[readings.length - 1];
    const shiftPoints = chart.series[0].data.length >= STORED_READING_LIMIT;

    chart.series[0].addPoint([reading_date.getTime(), temp_c], true, shiftPoints);
  },
};

export default Chart;
