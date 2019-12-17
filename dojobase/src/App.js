import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import StudentDir from "./pages/StudentDir";
import ManagerMessaging from "./pages/ManagerMessaging";
import ManagerBilling from "./pages/ManagerBilling";
import ManagerClasses from "./pages/ManagerClasses";
import ManagerAttendance from "./pages/ManagerAttendance";
import ManagerCalendar from "./pages/ManagerCalendar";
import Sidenav from "./components/sideNav"
import Navbar from "./components/navbar"

function App() {
  return (
    <Router>
      <div id="wrapper" className="wrapper-content">
        <Sidenav />
        <div id="page-content-wrapper">
          <Navbar />  
          <Route exact path="/allStudents" component={StudentDir} />
          <Route exact path="/messaging" component={ManagerMessaging} />
          <Route exact path="/attendance" component={ManagerAttendance} />
          <Route exact path="/billing" component={ManagerBilling} />
          <Route exact path="/classes" component={ManagerClasses} />
          <Route exact path="/calendar" component={ManagerCalendar} />    
        </div>
      </div>
     
    </Router>
  );
}

export default App;
