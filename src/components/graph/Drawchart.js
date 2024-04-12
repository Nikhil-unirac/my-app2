import React from "react";
import './graph.css';  // Importing the external CSS file
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";

const DrawChart = () => {
  const datasets = [
    [
      { name: "meta", students: 400 },
      { name: "google", students: 700 },
    ],
    [
      { name: "amazon", students: 200 },
      { name: "nvidia", students: 1000 },
    ],
    [
      { name: "amazon", students: 300 },
      { name: "microsoft", students: 800 },
    ],
    [
      { name: "amazon", students: 300 },
      { name: "microsoft", students: 800 },
    ],
    [
      { name: "amazon", students: 300 },
      { name: "microsoft", students: 800 },
    ],
    [
      { name: "amazon", students: 300 },
      { name: "microsoft", students: 800 },
      [
        { name: "amazon", students: 200 },
        { name: "nvidia", students: 1000 },
      ],
    ],
    [
      { name: "amazon", students: 300 },
      { name: "microsoft", students: 800 },
    ],
    [
      { name: "amazon", students: 300 },
      { name: "microsoft", students: 800 },
    ],
    [
      { name: "amazon", students: 300 },
      { name: "microsoft", students: 800 },
    ],
    [
      { name: "amazon", students: 300 },
      { name: "microsoft", students: 800 },
    ],
  ];

  
  const labels = [
    "Kilowatt Configured",
    "Tress Planted",
    "Miles Drven",
    "Projects in queued",
    "Projects on-hold",
    "Projects in-Progress",
    "PE Review",
    "Revision Request",
    "Design Request",
    "Payment Done",
   
  ];

  const getColor = (name) => {
    switch (name) {
      case "meta":
      case "amazon":
        return "#A6CEE3";
      case "google":
      case "nvidia":
        return "#1784C3";
      default:
        return "#1784C3";
    }
  };
  return (
    <div className="container">
      <div className="chart-label">Analytics Per Month</div>

      {datasets.map((data, index) => (
        <div key={index} className="chart-container">
          <PieChart className="pie-chart" width={300} height={200}>
            <Tooltip className="tooltip" />
            <Pie
              data={data}
              dataKey="students"
              cx={110}
              cy={100}
              outerRadius={70}
              innerRadius={55}
              fill="black"
            >
              {data.map((entry, idx) => (
                <Cell key={`cell-${idx}`} fill={getColor(entry.name)} className="cell" />
              ))}
              {/* Custom label to show student count in the center */}
              <Label value={data.reduce((acc, cur) => acc + cur.students, 0)} position="center" />
              {/* Custom label rendering logic to display only for large segments */}
              {
                data.map((entry, idx) => {
                  const percent = (entry.students / data.reduce((acc, cur) => acc + cur.students, 0)) * 100;
                  // Set a threshold percentage (e.g., 5%) to decide when to show the label
                  if (percent >= 5) {
                    return <Label key={`label-${idx}`} position="outside" content={({ percent }) => `${(percent * 100).toFixed(0)}%`} />;
                  }
                  return null; // Return null for segments with small percentages
                })
              }
            </Pie>
          </PieChart>
          {/* Dynamic custom label based on index */}
          <div className="custom-label">
            {labels[index]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DrawChart;