{
  /* ManagerStudents */
}
import React, { Component } from "react";

function ManagerStudents() {
  return (
<div className="container-fluid">
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
                    <a href="#" className="button btnStudEdit" id="btnStudEdit">
                      Edit
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="button alert btnStudDelete"
                      id="btnStudDelete"
                    >
                      Delete
                    </a>
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
                    <a
                      href="#"
                      className="button success btnStudInvoice"
                      id="btnStudInvoice"
                    >
                      Invoice
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Jeffery Huddleston</td>
                  <td>Blue</td>
                  <td>
                    <a href="#" className="button btnStudEdit" id="btnStudEdit">
                      Edit
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="button alert btnStudDelete"
                      id="btnStudDelete"
                    >
                      Delete
                    </a>
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
                    <a
                      href="#"
                      className="button success btnStudInvoice"
                      id="btnStudInvoice"
                    >
                      Invoice
                    </a>
                  </td>
                </tr>
                <tr>
                  <td>Sue Look</td>
                  <td>Black</td>
                  <td>
                    <a href="#" className="button" id="btnStudEdit">
                      Edit
                    </a>
                  </td>
                  <td>
                    <a
                      href="#"
                      className="button alert btnStudDelete"
                      id="btnStudDelete"
                    >
                      Delete
                    </a>
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
                    <a
                      href="#"
                      className="button success btnStudInvoice"
                      id="btnStudInvoice"
                    >
                      Invoice
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </li>
        <li className="accordion-item" data-accordion-item>
          {/* Accordion tab title */}
          <a href="#" className="accordion-title tabStudAdd">
            Add A Student
          </a>
          {/* Accordion tab content: it would start in the open state due to using the `is-active` state class. */}
          <div className="accordion-content" data-tab-content>
            <p className="lead">Add A Student</p>
            <form>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-4 cell">
                    <label>
                      First Name
                      <input type="text" id="inpStudFirstName" placeholder />
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <label>
                      Last Name
                      <input type="text" id="inpStudLastName" placeholder />
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <div className="collapse">
                      <label>Email </label>
                      <div className="input-group">
                        <input
                          className="input-group-field"
                          type="url"
                          id="inpStudEmail"
                        />
                        <span className="input-group-label" id="spaStudCom">
                          .com
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-4 cell">
                    <label id="labStudAge">
                      Age
                      <input type="text" id="inpStudAge" placeholder />
                    </label>
                  </div>
                  <div className="large-4 cell">
                    <label id="labStudBelt">
                      Belt
                      <select>
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
                    <label id="labStudStripe">
                      Stripe
                      <select id="inpStudStripe">
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
              <div className="grid-x grid-padding-x">
                <div className="large-9 cell">
                  <label>
                    Street Address
                    <input type="text" id="inpStudStreetAddress" placeholder />
                  </label>
                </div>
                <div className="large-3 cell">
                  <label>
                    Unit
                    <input type="text" id="inpStudUnit" placeholder />
                  </label>
                </div>
              </div>
              <div className="grid-x grid-padding-x">
                <div className="large-4 cell">
                  <label>
                    City
                    <input type="text" id="inpStudCity" placeholder />
                  </label>
                </div>
                <div className="large-4 cell">
                  <label>
                    State
                    <select id="inpStudState">
                      <option value="AL">Alabama</option>
                      <option value="AK">Alaska</option>
                      <option value="AZ">Arizona</option>
                      <option value="AR">Arkansas</option>
                      <option value="CA">California</option>
                      <option value="CO">Colorado</option>
                      <option value="CT">Connecticut</option>
                      <option value="DE">Delaware</option>
                      <option value="DC">District Of Columbia</option>
                      <option value="FL">Florida</option>
                      <option value="GA">Georgia</option>
                      <option value="HI">Hawaii</option>
                      <option value="ID">Idaho</option>
                      <option value="IL">Illinois</option>
                      <option value="IN">Indiana</option>
                      <option value="IA">Iowa</option>
                      <option value="KS">Kansas</option>
                      <option value="KY">Kentucky</option>
                      <option value="LA">Louisiana</option>
                      <option value="ME">Maine</option>
                      <option value="MD">Maryland</option>
                      <option value="MA">Massachusetts</option>
                      <option value="MI">Michigan</option>
                      <option value="MN">Minnesota</option>
                      <option value="MS">Mississippi</option>
                      <option value="MO">Missouri</option>
                      <option value="MT">Montana</option>
                      <option value="NE">Nebraska</option>
                      <option value="NV">Nevada</option>
                      <option value="NH">New Hampshire</option>
                      <option value="NJ">New Jersey</option>
                      <option value="NM">New Mexico</option>
                      <option value="NY">New York</option>
                      <option value="NC">North Carolina</option>
                      <option value="ND">North Dakota</option>
                      <option value="OH">Ohio</option>
                      <option value="OK">Oklahoma</option>
                      <option value="OR">Oregon</option>
                      <option value="PA">Pennsylvania</option>
                      <option value="RI">Rhode Island</option>
                      <option value="SC">South Carolina</option>
                      <option value="SD">South Dakota</option>
                      <option value="TN">Tennessee</option>
                      <option value="TX">Texas</option>
                      <option value="UT">Utah</option>
                      <option value="VT">Vermont</option>
                      <option value="VA">Virginia</option>
                      <option value="WA">Washington</option>
                      <option value="WV">West Virginia</option>
                      <option value="WI">Wisconsin</option>
                      <option value="WY">Wyoming</option>
                    </select>
                  </label>
                </div>
                <div className="large-4 cell">
                  <label>
                    Zip Code
                    <input type="text" id="inpStudZip" placeholder />
                  </label>
                </div>
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-12 cell">
                    <label id="labStudNotes">
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
                <div className="grid-x grid-padding-x" />
              </div>
              <div className="grid-container">
                <div className="grid-x grid-padding-x">
                  <div className="large-12 cell">
                    <a href="#" className="button" id="btnStudAdd">
                      Add Student
                    </a>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>;

</div>
    );
}
export default ManagerStudents;
