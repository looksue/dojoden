import React, { Component } from "react"; 
import { Link } from "react-router-dom";
import StudentForm from "../components/studentForm"
import StudentList from "../components/studentList"

function StudentDir() {

  return (
    <div className="container-fluid">
  <div className="row">
    <div className="large-12">
      <h3>Students</h3>
      <StudentList />
      <hr />
      <h3>Add Student</h3>
      <StudentForm />

    </div>
  </div>
</div>
  );
};

export default StudentDir;
