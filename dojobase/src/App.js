import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import StudentDir from "./pages/StudentDir";
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
        </div>
      </div>
     
    </Router>
  );
}

export default App;
