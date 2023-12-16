import Highcharts from 'highcharts';
import { chartConfig } from './Chart.config.js';
import { initChartTheme } from './Chart.theme.js';
import { STORED_READING_LIMIT } from '../../constants.js';

const Chart = {
  chart: null,
  render(readings) {
    if (!readings.length) {
      return;
    }

    const { temp_c, reading_date } = readings[readings.length - 1];
    const shiftPoints = this.chart.series[0].data.length >= STORED_READING_LIMIT;

    this.chart.series[0].addPoint([reading_date.getTime(), temp_c], true, shiftPoints);
  },
  mount() {
    initChartTheme(Highcharts);
    this.chart = Highcharts.chart('chart-container', chartConfig);
  },
};

export default Chart;
