import React, { Component } from "react"; 
import StudentForm from "../components/studentForm"

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
          <a href="#" className="accordion-title" id="liStudents">
            Students
          </a>
          {/* Accordion tab content: it would start in the open state due to using the `is-active` state class. */}
          <div className="accordion-content" data-tab-content>
            <table>
              <thead className="theadStudent">
                <tr>
                  <th width={200}>Student Name</th>
                  <th>Belt</th>
                  <th width={75}>Edit</th>
                  <th width={75}>Delete</th>
                  <th width={75}>Active Student</th>
                  <th width={75}>Send Invoice</th>
                </tr>
              </thead>
              <tbody className="tbodyStudents">
                <tr>
                  <td>Brian Helms</td>
                  <td>White</td>
                  <td>
                    {" "}
                    <a href="#" className="button" id="btnStudEdit">
                      Edit
                    </a>
                  </td>
                  <td>
                    {" "}
                    <a href="#" className="button alert" id="btnStudDelete">
                      Delete
                    </a>{" "}
                  </td>
                  <td>
                    <div className="switch">
                      <input
                        className="switch-input"
                        id="activeStudent"
                        type="checkbox"
                        name="activeStudent"
                      />
                      <label
                        className="switch-paddle"
                        htmlFor="activeStudent"
                      />
                      <span className="show-for-sr">Active Student</span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <a href="#" className="button success" id="btnStudInvoice">
                      Invoice
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <td>Jeffery Huddleston</td>
                  <td>Blue</td>
                  <td>
                    {" "}
                    <a href="#" className="button" id="btnStudEdit">
                      Edit
                    </a>
                  </td>
                  <td>
                    {" "}
                    <a href="#" className="button alert" id="btnStudDelete">
                      Delete
                    </a>{" "}
                  </td>
                  <td>
                    <div className="switch">
                      <input
                        className="switch-input"
                        id="activeStudent1"
                        type="checkbox"
                        name="activeStudent1"
                      />
                      <label
                        className="switch-paddle"
                        htmlFor="activeStudent1"
                      />
                      <span className="show-for-sr">Active Student</span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <a href="#" className="button success" id="btnStudInvoice">
                      Invoice
                    </a>{" "}
                  </td>
                </tr>
                <tr>
                  <td>Sue Look</td>
                  <td>Black</td>
                  <td>
                    {" "}
                    <a href="#" className="button" id="btnStudEdit">
                      Edit
                    </a>
                  </td>
                  <td>
                    {" "}
                    <a href="#" className="button alert" id="btnStudDelete">
                      Delete
                    </a>{" "}
                  </td>
                  <td>
                    <div className="switch">
                      <input
                        className="switch-input"
                        id="activeStudent2"
                        type="checkbox"
                        name="activeStudent2"
                      />
                      <label
                        className="switch-paddle"
                        htmlFor="activeStudent2"
                      />
                      <span className="show-for-sr">Active Student</span>
                    </div>
                  </td>
                  <td>
                    {" "}
                    <a href="#" className="button success" id="btnStudInvoice">
                      Invoice
                    </a>{" "}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li className="accordion-item" data-accordion-item>
          {/* Accordion tab title */}
          <a href="#" className="accordion-title">
            Add A Student
          </a>
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
