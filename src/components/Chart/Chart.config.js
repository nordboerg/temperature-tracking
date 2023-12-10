const chartConfig = {
  chart: {
    type: 'spline',
    height: 300,
  },
  title: {
    text: 'Temperature',
  },
  xAxis: {
    type: 'datetime',
  },
  yAxis: {
    minTickInterval: 1,
    title: {
      text: 'Celsius',
    },
    plotLines: [
      {
        value: 0,
        width: 1,
        color: '#808080',
      },
    ],
  },
  tooltip: {
    headerFormat: '<b>{series.name}</b><br/>',
    pointFormat: '{point.y} °C<br/>{point.x: %H:%M:%S}',
  },
  legend: {
    enabled: false,
  },
  credits: {
    enabled: false,
  },
  accessibility: {
    enabled: false,
  },
  series: [
    {
      name: 'Temperature',
      lineWidth: 2,
      data: [],
    },
  ],
};

export { chartConfig };
