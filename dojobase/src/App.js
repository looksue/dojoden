import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
// import './App.css';
import './App.scss';
import StudentDir from "./pages/StudentDir";
import ManagerMessaging from "./pages/ManagerMessaging";
import ManagerBilling from "./pages/ManagerBilling";
import ManagerClasses from "./pages/ManagerClasses";
import ManagerAttendance from "./pages/ManagerAttendance";
import ManagerCalendar from "./pages/ManagerCalendar";
import Sidenav from "./components/sideNav"
import Navbar from "./components/navbar"


/* Begin Okta setup for React */
import Index from "./index";
import { Security, ImplicitCallback } from '@okta/okta-react';
const config = {
  issuer: 'https://dev-434888.okta.com/oauth2/default',
  redirectUri: window.location.origin + '/implicit/callback',
  clientId: '0oa2d7k52a6MJ0hti357',
  pkce: true
}
/* End Okta setup for React */

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
          <Security {...config}>
            <Route path='/' exact={true} component={Index}/>
            <Route path='/implicit/callback' component={ImplicitCallback}/>
          </Security>    
        </div>
      </div>
    </Router>
  );
}

export default App;
