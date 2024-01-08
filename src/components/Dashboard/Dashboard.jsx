import React from "react";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";
import { Calendar } from 'primereact/calendar';
import "./Dashboard.css";
export default function Dashboard() {
  const [data, setData] = useState([]);
  const [totalArtists, setTotalArtists] = useState(0);
  const [totalPatrons, setTotalPatrons] = useState(0);
  const [totalOpportunities, setTotalOpportunities] = useState(0);

  useEffect(() => {
    const getUser = async (role) => {
      try {
        const response = await fetch(
          `https://api.ekalakaar.com/api/v1/admin/user?role=${role}`,
          {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQwODJjYzU1NzBkODY1NjA2NGVmNjciLCJpYXQiOjE3MDQ0NjAyNTQsImV4cCI6MTcwNDU0NjY1NH0.3bC-O4JIaVqgKmsQzpZadK0I5qBpSFSlW1vmNxb5wnM`,
              "Content-Type": "application/json",
            },
          }
        );

        const responseData = await response.json();
        setData(responseData.data);

        if (role === "Artist") {
          setTotalArtists(responseData.data.length);
        } else if (role === "Patron") {
          setTotalPatrons(responseData.data.length);
        }
      } catch (error) {
        console.error(`Error fetching ${role} data:`, error);
      }
    };

    const getOpportunity = async () => {
      try {
        const response = await fetch(
          "http://localhost:4000/api/v1/admin/opps",
          {
            method: "GET",
            headers: {
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTQwODJjYzU1NzBkODY1NjA2NGVmNjciLCJpYXQiOjE3MDQ0NjAyNTQsImV4cCI6MTcwNDU0NjY1NH0.3bC-O4JIaVqgKmsQzpZadK0I5qBpSFSlW1vmNxb5wnM`,
              "Content-Type": "application/json",
            },
          }
        );

        const responseData = await response.json();
        setData(responseData.data);
        setTotalOpportunities(responseData.data.length);
      } catch (error) {
        console.error("Error fetching opportunity data:", error);
      }
    };

    getUser("Artist");
    getUser("Patron");
    getOpportunity();
  }, []);

  return (
    <div className="Dashboard">
    <div className="dashboarditems">
      <div className="card flex justify-content-center">
        <Calendar label="Basic date picker" />
      </div>
      <div className="card flex justify-content-center">
        <Calendar label="Basic date picker" />
      </div>
      <button className="dashboardbutton">Filter</button>
    </div>
    <div className="dashboard_circle">
      <div className="circle">
        <Link to="/Dashboard" className="Link">
          <p>Total Patrons</p>
          <p>{totalPatrons}</p>
        </Link>
      </div>
      <div className="circle">
        <Link to="/DashboardArtist" className="Link">
          <p>Total Artists</p>
          <p>{totalArtists}</p>
        </Link>
      </div>
      <div className="circle">
        <Link to="/Dashboardpartner" className="Link">
          <p>Total Partners</p>
          <p>12</p>
        </Link>
      </div>
      <div className="circle">
        <Link to="/DashboardArtLover" className="Link">
          <p>Total Art-Lovers</p>
          <p>12</p>
        </Link>
      </div>
    </div>
    <div className="dashboard_circle">
      <div className="circle">
        <Link to="/DashboardOpportunity" className="Link">
          <p>Opportunities</p>
          <p>{totalOpportunities}</p>
        </Link>
      </div>
      <div className="circle applicationprogress">
        <div className="uppercircle">
          <div className="progressbar1">M</div>
          <Link to="/DashboardApplication" className="Link">
            <p>Applications</p>
            <p>12</p>
          </Link>
          <div className="progressbar2">M</div>
        </div>
      </div>
      <div className="circle">
        <Link to="/DashboardPerformance" className="Link">
          <p>Performances</p>
          <p>12</p>
        </Link>
      </div>
      <div className="circle" style={{ border: "3px solid #AD2F3B" }}>
        <Link to="/DashboardRevenue" className="Link">
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
      <h3>Patrons</h3>
      <img src="./graph.png" alt="" />
      <div className="dashboard_graph_square">
       <div className="square"></div>
        <p>Patrons</p>
      </div>
    </div>

    </div>
  );
}
