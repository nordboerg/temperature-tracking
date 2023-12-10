function initChartTheme(Highcharts) {
  Highcharts.theme = {
    colors: ['#55BF3B'],
    chart: {
      backgroundColor: {
        stops: [[0, '#2a2a2b']],
      },
    },
    title: {
      style: {
        color: '#E0E0E3',
      },
    },
    xAxis: {
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#E0E0E3',
        },
      },
      lineColor: '#707073',
      tickColor: '#707073',
      title: {
        style: {
          color: '#A0A0A3',
        },
      },
    },
    yAxis: {
      gridLineColor: '#707073',
      labels: {
        style: {
          color: '#E0E0E3',
        },
      },
      lineColor: '#707073',
      tickColor: '#707073',
      title: {
        style: {
          color: '#A0A0A3',
        },
      },
    },
    tooltip: {
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      style: {
        color: '#F0F0F0',
      },
    },
  };

  Highcharts.setOptions(Highcharts.theme);

  Highcharts.addEvent(Highcharts.Series, 'addPoint', (e) => {
    const point = e.point,
      series = e.target;

    if (!series.pulse) {
      series.pulse = series.chart.renderer.circle().add(series.markerGroup);
    }

    setTimeout(() => {
      series.pulse
        .attr({
          x: series.xAxis.toPixels(point.x, true),
          y: series.yAxis.toPixels(point.y, true),
          r: series.options.marker.radius,
          opacity: 1,
          fill: series.color,
        })
        .animate(
          {
            r: 20,
            opacity: 0,
          },
          {
            duration: 1000,
          },
        );
    }, 1);
  });
}

export { initChartTheme };
