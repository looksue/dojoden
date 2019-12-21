import React, { Component } from "react"; 
import StudentForm from "../components/studentForm"

function StudentDir() {
  function handleChange(state,e) {
    this.setState({[state]: e.target.value});
  }
  
  function handleLogin() {
    console.log("First Name: ", this.state.firstName);
  }
  
  function submitStudent(e) {
      e.preventDefault();
      console.log("new student");
      // var newStudent = {
      //   name: getElementById("#name").val().trim(),
      //   address: getElementById("#address").val().trim(),
      //   phone: getElementById("#phone").val().trim(),
      //   email: getElementById("#email").val().trim(),
      //   belt: getElementById("#belt").val().trim(),
      //   stripes: getElementById("#stripes").val().trim(),
      //   age: getElementById("#age").val().trim(),
      //   gender: getElementById("#gender").val().trim(),
      //   health_concerns: getElementById("#health_concerns").val().trim(),
      //   created_at: moment().format("YYYY-MM-DD HH:mm:ss")
      // };
  };

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
            {/* <form>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-4 cell">
                    <label>
                      First Name
                      <input type="text" id="firstName" placeholder />
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <label>
                      Last Name
                      <input type="text" id="lastName" placeholder />
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <div className="collapse">
                      <label>Email </label>
                      <div className="input-group">
                        <input className="input-group-field" type="url" />
                        <span className="input-group-label">.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-4 cell">
                    <label>
                      {" "}
                      Class
                      <select>
                        <option value>Choose</option>
                        <option value="Fundamentals">Fundamentals</option>
                        <option value="Advanced Fundamentals">
                          Advanced Fundamentals
                        </option>
                        <option value="Competition">Competition</option>
                      </select>
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <label>
                      Belt
                      <select id="belt">
                        <option value>Choose</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Brown">Brown</option>
                        <option value="Black">Black</option>
                      </select>
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <label>
                      Stripe
                      <select>
                        <option value>Choose</option>
                        <option value={1}>One</option>
                        <option value={2}>Two</option>
                        <option value={3}>Three</option>
                        <option value={4}>Four</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-12 cell">
                    <label>
                      Student Notes
                      <textarea
                        placeholder="Add notes here"
                        defaultValue={""}
                      />
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x"></div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-12 cell">
                    <a href="#" className="button" onClick={submitStudent}>
                      Add Student
                    </a>
                  </div>
                </div>
              </div>
            </form> */}
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
  );
};

export default StudentDir;
