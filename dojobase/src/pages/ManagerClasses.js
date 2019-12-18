import React, { Component } from "react";

function ManagerClasses() {
  return (
<div className="container-fluid">
<div className="row">
  <h3 className="classAddEvent">Add Class</h3>
  <div className="large-12">
    <h1>Classes</h1>
    <p className="lead">
      This screen displays your active classes. To manage the class attendence,
      click the attendence button.
    </p>
    <div className="row">
      <div className="small-12 medium-4 large-4 columns">
        <div className="card">
          <div className="card-divider">Fundamentals</div>
          <div className="card-section">
            <img src="https://images.unsplash.com/photo-1525198104776-f6e8a873f9b7?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ" />
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <div className="large-12 text-center columns">
              <a
                href="#"
                className="button btnClassDelete"
                id="btnFundamentalsDelete"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="small-12 medium-4 large-4 columns">
        <div className="card">
          <div className="card-divider">Advanced</div>
          <div className="card-section">
            <img src="https://images.unsplash.com/photo-1566577134770-3d85bb3a9cc4?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ" />
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <div className="large-12 text-center columns">
              <a
                href="#"
                className="button btnClassDelete"
                id="btnAdvancedDelete"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="small-12 medium-4 large-4 columns">
        <div className="card">
          <div className="card-divider">Competition</div>
          <div className="card-section">
            <img src="https://images.unsplash.com/photo-1560631820-9e677e8ba3af?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=1080&fit=max&ixid=eyJhcHBfaWQiOjIwOTIyfQ" />
            <p>
              It has an easy to override visual style, and is appropriately
              subdued.
            </p>
            <div className="large-12 text-center columns">
              <a
                href="#"
                className="button btnClassDelete"
                id="btnCompetitionDelete"
              >
                Delete
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
<<<<<<< HEAD
</div>

=======
  <form>
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <label className="labClass">
            Class Name
            <input
              type="text"
              className="inpClass"
              id="inpClassName"
              placeholder="Class Name"
            />
          </label>
        </div>
      </div>
    </div>
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <label className="labClass">
            Class Description
            <div id="sample">
              <textarea
                name="classDescription"
                className="inpClass"
                id="txtClassDescription"
                cols={40}
                rows={10}
                defaultValue={"\n"}
              />
            </div>
          </label>
        </div>
      </div>
    </div>
    <br />
    <div className="grid-container">
      <div className="grid-x grid-padding-x">
        <div className="large-12 cell">
          <a href="#" className="button btnClass" id="btnClass">
            Save Class
          </a>
        </div>
      </div>
    </div>
  </form>
</div>
>>>>>>> 2bb2ee9293d94b7f0224913db6df74971db6c435
</div>
    );
}
export default ManagerClasses;