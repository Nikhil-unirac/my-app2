import React from "react";
import './orderAnalytics.css';  // Importing the external CSS file
import { PieChart, Pie, Tooltip, Cell, Label } from "recharts";

const OrderAnalytics = () => {
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
  ];

  const labels = [
    "Kilowatt Configured",
    "Tress Planted",
    "Miles Driven",
    "Projects in Queue",
    "Projects on Hold",
    "Projects in Progress",
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
      <div className="chart-label">Order Analytics</div>
      <div className="row">
        {datasets.slice(0, 3).map((data, index) => (
          <div key={index} className="pie-container">
            <PieChart className="pie-chart" width={300} height={200}>
              <Tooltip />
              <Pie
                data={data}
                dataKey="students"
                cx={70}
                cy={60}
                outerRadius={50}
                innerRadius={35}
                fill="black"
              >
                {data.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={getColor(entry.name)} />
                ))}
                <Label value={data.reduce((acc, cur) => acc + cur.students, 0)} position="center" />
                {data.map((entry, idx) => {
                  const percent = (entry.students / data.reduce((acc, cur) => acc + cur.students, 0)) * 100;
                  if (percent >= 5) {
                    return <Label key={`label-${idx}`} position="outside" content={({ percent }) => `${(percent * 100).toFixed(0)}%`} />;
                  }
                  return null;
                })}
              </Pie>
            </PieChart>
            <div className="custom-label">{labels[index]}</div>
          </div>
        ))}
      </div>
      <div className="row">
        {datasets.slice(3, 6).map((data, index) => (
          <div key={index} className="pie-container">
            <PieChart className="pie-chart" width={300} height={200}>
              <Tooltip />
              <Pie
                data={data}
                dataKey="students"
                cx={70}
                cy={60}
                outerRadius={50}
                innerRadius={35}
                fill="black"
              >
                {data.map((entry, idx) => (
                  <Cell key={`cell-${idx}`} fill={getColor(entry.name)} />
                ))}
                <Label value={data.reduce((acc, cur) => acc + cur.students, 0)} position="center" />
                {data.map((entry, idx) => {
                  const percent = (entry.students / data.reduce((acc, cur) => acc + cur.students, 0)) * 100;
                  if (percent >= 5) {
                    return <Label key={`label-${idx}`} position="outside" content={({ percent }) => `${(percent * 100).toFixed(0)}%`} />;
                  }
                  return null;
                })}
              </Pie>
            </PieChart>
            <div className="custom-label">{labels[index + 3]}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OrderAnalytics;
