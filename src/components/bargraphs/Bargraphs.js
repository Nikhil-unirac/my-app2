import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';

Chart.register(...registerables);

const state = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Class strength',
      backgroundColor: '#1784C3',
      borderColor: '#1784C3',
      borderWidth: 1,
      data: [38, 47, 19, 20, 40, 50, 39],
      barThickness: 30,
    },
  ],
};

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Bar
          data={state}
          options={{
            maintainAspectRatio: false,
            responsive: true,
            title: {
              display: true,
              text: 'Class strength',
              fontSize: 20,
            },
            legend: {
              display: true,
              position: 'right',
            },
            layout: {
              padding: {
                left: 150,
                right: 150,
                top: 0,
                bottom: 0,
              },
            },
            scales: {
              x: {
                grid: {
                  display: false, 
                },
                ticks: {
                  maxRotation: 0,
                },
              },
              y: {
                grid: {
                  display: false,  
                },
              },
            },
          }}
          style={{ width: '100%', height: '500px' }}
        />
      </div>
    );
  }
}
