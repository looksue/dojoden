import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import StudentForm from "../components/studentForm"
import StudentList from "../components/studentList"

function StudentDir() {

  return (
    <div className="container-fluid">
  <div className="row">
    <div className="large-12">
      <h1>Students</h1>
      <p className="lead">Your Current Students.</p>
      <ul className="accordion" data-accordion>
        <li className="accordion-item is-active" data-accordion-item>
          {/* Accordion tab title */}
          <Link to="#" className="accordion-title" id="liStudents">
            Students
          </Link>
          {/* Accordion tab content: it would start in the open state due to using the `is-active` state class. */}
          <div className="accordion-content" data-tab-content>
            <StudentList />
            
          </div>
        </li>
        <li className="accordion-item" data-accordion-item>
          {/* Accordion tab title */}
          <Link to="#" className="accordion-title">
            Add A Student
          </Link>
          {/* Accordion tab content: it would start in the open state due to using the `is-active` state class. */}
          <div className="accordion-content" data-tab-content>
            <p className="lead">Add A Student</p>
            <StudentForm />
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default StudentDir;
