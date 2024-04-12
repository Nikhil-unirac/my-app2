import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, registerables } from 'chart.js';
import './orderTAT.css'; // Import the CSS file

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
      <div className='tat-box'>
        <h2 className="headingTAT">Turn Around Time</h2>
        <div className="chart-container">
          <div className="chart-title"></div>
          <div className="chart-legend">
            <Bar
              data={state}
              options={{
                maintainAspectRatio: false,
                responsive: true,
                legend: {
                  display: false,
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
                    ticks: {
                      display: false, // Set display to false to hide the y-axis ticks
                    },
                  },
                },
              }}
              className="chart"
            />
          </div>
        </div>
      </div>
    );
  }
}
