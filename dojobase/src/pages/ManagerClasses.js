import React, { Component } from "react";

function ManagerClasses() {
  return (
<div className="grid-container">
  <div className="grid-x">
    <div className="card small-12 medium-4 large-4">
      <img src="https://images.unsplash.com/photo-1525198104776-f6e8a873f9b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ" />
      <div className="card-divider"><h4>Fundamentals</h4></div>
      <div className="card-section">
        <p>
          Open to everybody and covers the basics of self defence ond the sport
          of Jiu Jitsu.
        </p>
        <a href="#" className="button primary expanded">
          Attendance
        </a>
        <a href="#" className="button alert expanded">
          Delete
        </a>
      </div>
    </div>
    <div className="card small-12 medium-4 large-4">
      <img src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ" />
      <div className="card-divider"><h4>Advanced</h4></div>
      <div className="card-section">
        <p>
          Students learn a broader range of advanced techniques and live sparring.
        </p>
        <a href="#" className="button primary expanded">
          Attendance
        </a>
        <a href="#" className="button alert expanded">
          Delete
        </a>
      </div>
    </div>
    <div className="card small-12 medium-4 large-4">
      <img src="https://images.unsplash.com/photo-1560631820-9e677e8ba3af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ" />
      <div className="card-divider"><h4>Competitiion</h4></div>
      <div className="card-section">
        <p>Live training, by invitation only. This course involves competition and live sparring.</p>
        <a href="#" className="button primary expanded">
          Attendance
        </a>
        <a href="#" className="button alert expanded">
          Delete
        </a>
      </div>
    </div>
  </div>
</div>


    );
}
export default ManagerClasses;
