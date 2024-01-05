import React from "react";
import { Link } from "react-router-dom";
import { Calendar } from 'primereact/calendar';
import "./Dashboard.css";
export default function Dashboard() {
 
  return (
    <div className="Dashboard">
      <div className="dashboarditems">
      <div className="card flex justify-content-center">
            <Calendar label="Basic date picker"/>
        </div>
        <div className="card flex justify-content-center">
            <Calendar label="Basic date picker" />
        </div>
      <button class="dashboardbutton">Filter</button>
      </div>
      <div className="dashboard_circle">
        <div class="circle">
        <Link to="/Dashboard" className="Link">
            {" "}
            <p>Total Patrons</p>
            <p>12</p>
          </Link>
        </div>
        <div class="circle">
        <Link to="/DashboardArtist" className="Link">
            {" "}
            <p>Total Artists</p>
            <p>12</p>
          </Link>
        </div>
        <div class="circle">
        <Link to="/Dashboardpartner" className="Link">
            {" "}
            <p>Total Partners</p>
            <p>12</p>
          </Link>
        </div>
        <div class="circle">
        <Link to="/DashboardArtLover" className="Link">
            {" "}
            <p>Total Art-Lovers</p>
            <p>12</p>
          </Link>
        </div>
      </div>
      <div className="dashboard_circle">
        <div class="circle">
          <Link to="/DashboardOpportunity" className="Link">
            {" "}
            <p>Opportunities</p>
            <p>12</p>
          </Link>
        </div>
        <div class="circle applicationprogress">
          <div className="uppercircle">
            <div className="progressbar1">M</div>
            <Link to="/DashboardApplication" className="Link">
            {" "}
            <p>Applications</p>
            <p>12</p>
          </Link>
            <div className="progressbar2">M</div>
          </div>
        </div>
        <div class="circle">
        <Link to="/DashboardPerformance" className="Link">
            {" "}
            <p>Performances</p>
            <p>12</p>
          </Link>
        </div>
        <div class="circle" style={{ border: "3px solid #AD2F3B" }}>
        <Link to="/DashboardRevenue" className="Link">
            {" "}
            <p>Revenue</p>
            <p>12</p>
          </Link>
        </div>
      </div>
    <div className="dashboarditems">
    <div className="card flex justify-content-center">
            <input type="text" className="p-invalid" />
        </div>
    <button class="dashboardbutton">Submit</button>
    </div>
    <div className="dashboard_graph">
      <h3>Opportunities</h3>
      <img src="./opportunity-graph.png" alt="" />
      <div className="dashboard_graph_square">
       <div className="square"></div>
        <p>Opportunities</p>
      </div>
    </div>

    </div>
  );
}
