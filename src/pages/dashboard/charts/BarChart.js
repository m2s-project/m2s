import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const BarChart = () => {
  const [chartData, setChartData] = useState({
    series: [{
      name: 'Ventes',
      data: [30, 40, 45, 50, 49, 60, 70, 91]
    }],
    options: {
      chart: {
        type: 'bar',
        height: 350
      },
      title: {
        text: 'Statistiques des Ventes',
        align: 'center'
      },
      xaxis: {
        categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug']
      },
      yaxis: {
        title: {
          text: 'Montant (K€)'
        }
      }
    }
  });

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default BarChart;
