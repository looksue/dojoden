import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './App.css';
import StudentDir from "./pages/StudentDir";

function App() {
  return (
    <Router>
     <Route exact path="/allStudents" component={StudentDir} /> 
    </Router>
  );
}

export default App;
