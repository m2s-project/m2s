import React, { useState } from 'react';
import Chart from 'react-apexcharts';

const PieChart = () => {
  const [chartData, setChartData] = useState({
    series: [44, 55, 13, 43, 22],
    options: {
      chart: {
        type: 'pie',
      },
      labels: ['Produit A', 'Produit B', 'Produit C', 'Produit D', 'Produit E'],
      title: {
        text: 'Répartition des Ventes par Produit',
        align: 'center'
      }
    }
  });

  return (
    <div>
      <Chart
        options={chartData.options}
        series={chartData.series}
        type="pie"
        height={350}
      />
    </div>
  );
};

export default PieChart;
