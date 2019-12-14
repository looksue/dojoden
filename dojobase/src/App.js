import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import StudentDir from "./pages/StudentDir";
import Sidenav from "./components/sideNav"

function App() {
  return (
    <Router>
      <div>
        <Sidenav />  
     <Route exact path="/allStudents" component={StudentDir} />    
      </div>
     
    </Router>
  );
}

export default App;
