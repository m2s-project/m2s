import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const LineChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Revenus',
      data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    }],
    options: {
      chart: {
        type: 'line',
        height: 350
      },
      stroke: {
        curve: 'smooth'
      },
      title: {
        text: 'Revenus mensuels',
        align: 'center'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep']
      },
      yaxis: {
        title: {
          text: 'Revenus (K€)'
        }
      }
    }
  });

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="line"
        height={350}
      />
    </div>
  );
};

export default LineChart;
