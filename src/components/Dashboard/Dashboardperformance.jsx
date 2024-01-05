import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from 'primereact/calendar';
import "./Dashboard.css";

export default function Dashboard() {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const handleFilterButtonClick = () => {
    // Add logic here to filter data based on startDate and endDate
    // For now, let's just log the selected dates
    console.log("Selected Start Date:", startDate);
    console.log("Selected End Date:", endDate);
  };

  return (
    <div className="Dashboard">
      <div className="dashboarditems">
        <div className="card flex justify-content-center">
          <Calendar
            label="From Date"
            value={startDate}
            onChange={(e) => setStartDate(e.value)}
            showIcon
          />
        </div>
        <div className="card flex justify-content-center">
          <Calendar
            label="To Date"
            value={endDate}
            onChange={(e) => setEndDate(e.value)}
            showIcon
          />
        </div>
        <button className="dashboardbutton" onClick={handleFilterButtonClick}>
          Filter
        </button>
      </div>
      <div className="dashboard_circle">
        {/* The rest of your existing code for circles */}
      </div>
      <div className="dashboard_circle">
        {/* The rest of your existing code for circles */}
      </div>
      <div className="dashboarditems">
        <div className="card flex justify-content-center">
          <input type="text" className="p-invalid" />
        </div>
        <button className="dashboardbutton">Submit</button>
      </div>
      <div className="dashboard_graph">
        <h3>Performances</h3>
        <img src="./performance-graph.png" alt="" />
        <div className="dashboard_graph_square">
          <div className="square"></div>
          <p>Performances</p>
        </div>
      </div>
    </div>
  );
}
