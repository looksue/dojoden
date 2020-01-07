import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import withFirebaseAuth from 'react-with-firebase-auth'
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebaseConfig';
import './App.css';
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

const firebaseApp = firebase.initializeApp(firebaseConfig);

class App extends Component {
  render() {  
  const {
      user,
      signOut,
      signInWithGoogle,
    } = this.props;
  return (
    <Router>
      <div id="wrapper" className="wrapper-content">
        <Sidenav />
        <div id="page-content-wrapper">
        
          <Navbar />
          {
            user
              ? <p>Hello, {user.displayName}</p>
              : <p>Please sign in.</p>
          }

          {
            user
              ? <button onClick={signOut}>Sign out</button>
              : <button onClick={signInWithGoogle}>Sign in with Google</button>
          }  
          <Route exact path="/allstudents" component={StudentDir} />
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
}


const firebaseAppAuth = firebaseApp.auth();

const providers = {
  googleProvider: new firebase.auth.GoogleAuthProvider(),
};

export default withFirebaseAuth({
  providers,
  firebaseAppAuth,
}) (App);
