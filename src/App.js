import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/footer/footer";
import UserArtist from "./components/ManageUser/UserArtist";
import UserPatron from "./components/ManageUser/UserPatron";
import UserArtLover from "./components/ManageUser/UserArt-lover";
import UserPartner from "./components/ManageUser/UserPartner";
import Opportunity from "./components/ManageOpportunities/Opportunity";
//  import Application from './components/Applications/application'
//  import Jobs from './components/ManageJobs/Managejobs'
//  import Profile from './components/ManageOpportunities/profile'
import Dashboard from "./components/Dashboard/Dashboard";

import Skills from "./components/Skills/Manageskills";
import Language from "./components/Languages/ManageLanguages";
import DashboardArtist from "./components/Dashboard/DashboardArtist";
import DashboardApplication from "./components/Dashboard/DashboardApplications";
import DashboardArtLover from "./components/Dashboard/DashboardArtlover";
import DashboardRevenue from "./components/Dashboard/Dashboardrevenue";
import DashboardOpportunity from "./components/Dashboard/Dashboardopportunity";
import Dashboardpartner from "./components/Dashboard/Dashboardpartner";
import DashboardPerformance from "./components/Dashboard/Dashboardperformance";
//  import ManageProfile from './components/ManageProfiles/profile'
//  import Artistprofile from './components/ArtistManagement/artistprofile'
import ArtsistManagement from "./components/ArtistManagement/artistmanagement";
function App() {
  return (
    <div className="App">
      <Navbar />
      <BrowserRouter>
        <Routes>
          <Route path="/DashboardArtist" element={<DashboardArtist />}></Route>
          <Route
            path="/DashboardApplication"
            element={<DashboardApplication />}
          />
          <Route path="/DashboardArtLover" element={<DashboardArtLover />} />
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route
            path="/DashboardOpportunity"
            element={<DashboardOpportunity />}
          />

          <Route
            path="/DashboardPerformance"
            element={<DashboardPerformance />}
          ></Route>
          <Route path="/Dashboardpartner" element={<Dashboardpartner />} />

          <Route
            path="/DashboardRevenue"
            element={<DashboardRevenue />}
          ></Route>
          <Route path="/UserPatron" element={<UserPatron />} />
          <Route path="/ArtsistManagement" element={<ArtsistManagement />} />
          <Route path="/Opportunity" element={<Opportunity />} />
          <Route path="/Opportunity" element={<Opportunity />} />
          <Route path="/artist" element={<UserArtist />} />
          <Route path="/Patron" element={<UserPatron />} />
          <Route path="/Partner" element={<UserPartner />} />
          <Route path="/artLover" element={<UserArtLover />} />
          <Route path="/Opportunity" element={<Opportunity />} />
          <Route path="/ManageLanguages" element={<Language />} />
          <Route path="/Manageskills" element={<Skills />} />
        </Routes>
      </BrowserRouter>
   
      {/* <Artistprofile/> */}
      <Footer />
    </div>
  );
}

export default App;
