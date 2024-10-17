import React from 'react';
import { useSelector } from 'react-redux';
import Chart from 'react-apexcharts';

const ReduxBarChart = () => {
  const chartData = useSelector((state) => state.charts.data);

  const options = {
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
    }
  };

  return (
    <div>
      <Chart
        options={options}
        series={[{ name: 'Ventes', data: chartData }]}
        type="bar"
        height={350}
      />
    </div>
  );
};

export default ReduxBarChart;
