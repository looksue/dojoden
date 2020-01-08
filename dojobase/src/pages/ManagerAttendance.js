import React from "react";
import { Link } from "react-router-dom";

function ManagerAttendance() {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="large-12">
          <h1>Attendance</h1>
          <p className="lead">Attendance Per Class.</p>
          <ul className="tabs" data-tabs id="panel-content293">
            <li className="tabs-title is-active">
              <Link to="#panel294" aria-selected="true" id="liFundamentals">
                Fundamentals
            </Link>
            </li>
            <li className="tabs-title">
              <Link to="#panel295" id="liAdvanced">
                Advanced
            </Link>
            </li>
            <li className="tabs-title">
              <Link to="#panel296" id="liCompTeam">
                Comp Team
            </Link>
            </li>
          </ul>
          <div className="tabs-content" data-tabs-content="panel-content293">
            <div className="tabs-panel is-active" id="panel294">
              <table>
                <thead className="theadAttendance">
                  <tr>
                    <th width="80%">Student Name</th>
                    <th width="20%">Mark Present</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brian Helms</td>
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
                  </tr>
                  <tr>
                    <td>Sue Look</td>
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
                  </tr>
                  <tr>
                    <td>Daniel Goldman</td>
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
                  </tr>
                </tbody>
              </table>
              <Link to="#" className="button btnAttendance" id="btnAttendance">
                Submit Attendance
            </Link>
            </div>
            <div className="tabs-panel" id="panel295">
              <table>
                <thead>
                  <tr>
                    <th width="80%">Student Name</th>
                    <th width="20%">Mark Present</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brian Helms</td>
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
                  </tr>
                  <tr>
                    <td>Sue Look</td>
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
                  </tr>
                  <tr>
                    <td>Daniel Goldman</td>
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
                  </tr>
                  <tr>
                    <td>Brian Helms</td>
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
                  </tr>
                  <tr>
                    <td>Sue Look</td>
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
                  </tr>
                  <tr>
                    <td>Daniel Goldman</td>
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
                  </tr>
                </tbody>
              </table>
              <Link to="#" className="button">
                Submit Attendence
            </Link>
            </div>
            <div className="tabs-panel" id="panel296">
              <table>
                <thead>
                  <tr>
                    <th width="80%">Student Name</th>
                    <th width="20%">Mark Present</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>Brian Helms</td>
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
                  </tr>
                  <tr>
                    <td>Sue Look</td>
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
                  </tr>
                  <tr>
                    <td>Daniel Goldman</td>
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
                  </tr>
                  <tr>
                    <td>Brian Helms</td>
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
                  </tr>
                  <tr>
                    <td>Sue Look</td>
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
                  </tr>
                  <tr>
                    <td>Daniel Goldman</td>
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
                  </tr>
                  <tr>
                    <td>Brian Helms</td>
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
                  </tr>
                  <tr>
                    <td>Sue Look</td>
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
                  </tr>
                  <tr>
                    <td>Daniel Goldman</td>
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
                  </tr>
                </tbody>
              </table>
              <Link to="#" className="button">
                Submit Attendence
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ManagerAttendance;
