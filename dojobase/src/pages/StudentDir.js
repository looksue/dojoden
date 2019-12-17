import React, { Component } from "react";

function StudentDir() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="large-12">
          <h1>Students</h1>
          <p className="lead">Your Current Students.</p>
          <ul className="accordion" data-accordion>
            <li className="accordion-item is-active" data-accordion-item>
              <a href="#" className="accordion-title">Students</a>
              {/* <!-- Accordion tab content: it would start in the open state due to using the `is-active` state className. --> */}
              <div className="accordion-content" data-tab-content>
                <table>
                  <thead>
                    <tr>
                      <th width="200">Student Name</th>
                      <th>Belt</th>
                      <th width="75">Edit</th>
                      <th width="75">Delete</th>
                      <th width="75">Active Student</th>
                      <th width="75">Send Invoice</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>Brian Helms</td>
                      <td>White</td>
                      <td> <a href="#" className="button">Edit</a></td>
                      <td> <a href="#" className="button alert">Delete</a> </td>
                      <td>
                        <div className="switch">
                          <input className="switch-input" id="activeStudent" type="checkbox"
                            name="activeStudent"/>
                            <label className="switch-paddle" for="activeStudent"></label>
                            <span className="show-for-sr">Active Student</span>
                          
                        </div>
                      </td>
                      <td> <a href="#" className="button success">Invoice</a> </td>
                    </tr>
                    <tr>
                      <td>Jeffery Huddleston</td>
                      <td>Blue</td>
                      <td> <a href="#" className="button">Edit</a></td>
                      <td> <a href="#" className="button alert">Delete</a> </td>
                      <td>
                        <div className="switch">
                          <input className="switch-input" id="activeStudent1" type="checkbox"
                            name="activeStudent1"/>
                            <label className="switch-paddle" for="activeStudent1"></label>
                            <span className="show-for-sr">Active Student</span>
                        </div>
                      </td>
                      <td> <a href="#" className="button success">Invoice</a> </td>
                    </tr>
                    <tr>
                      <td>Sue Look</td>
                      <td>Black</td>
                      <td> <a href="#" className="button">Edit</a></td>
                      <td> <a href="#" className="button alert">Delete</a> </td>
                      <td>
                        <div className="switch">
                          <input className="switch-input" id="activeStudent2" type="checkbox"
                            name="activeStudent2"/>
                            <label className="switch-paddle" for="activeStudent2"></label>
                            <span className="show-for-sr">Active Student</span>
                        </div>
                      </td>
                      <td> <a href="#" className="button success">Invoice</a> </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </li>
          </ul>
        </div>
        {/* </li> */}
        <li className="accordion-item" data-accordion-item>
          {/* <!-- Accordion tab title --> */}
          <a href="#" className="accordion-title">Add A Student</a>
          {/* <!-- Accordion tab content: it would start in the open state due to using the `is-active` state className. --> */}
          <div className="accordion-content" data-tab-content>
            <p className="lead">Add A Student</p>
            <form>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-4 cell">
                    <label>First Name
                                                        <input type="text" placeholder="" />
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <label>Last Name
                                                        <input type="text" placeholder="" />
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <div className="collapse">
                      <label>Email </label>
                      <div className="input-group">
                        <input className="input-group-field" type="url"/>
                          <span className="input-group-label">.com</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-4 cell">
                    <label> ClassName
                                                        <select>
                        <option value="">Choose</option>
                        <option value="Fundamentals">Fundamentals</option>
                        <option value="Advanced Fundamentals">Advanced Fundamentals
                                                            </option>
                        <option value="Competition">Competition</option>
                      </select>
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <label>Belt
                                                        <select>
                        <option value="">Choose</option>
                        <option value="White">White</option>
                        <option value="Blue">Blue</option>
                        <option value="Purple">Purple</option>
                        <option value="Brown">Brown</option>
                        <option value="Black">Black</option>
                      </select>
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <label>Stripe
                                                        <select>
                        <option value="">Choose</option>
                        <option value="1">One</option>
                        <option value="2">Two</option>
                        <option value="3">Three</option>
                        <option value="4">Four</option>
                      </select>
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-12 cell">
                    <label>Student Notes
                                                        <textarea placeholder="Add notes here"></textarea>
                    </label>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-12 cell">
                    <a href="#" className="button">Add Student</a>
                  </div>
                </div>
              </div>

            </form>
          </div>
        </li>

      </div>
    </div>

  );
};

export default StudentDir;