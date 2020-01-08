import React, { Component } from "react";

function ManagerCalendar() {
  return (
<div className="container-fluid">
  <div className="row">
    <div className="large-12 divCalendarIntro">
      <h1>Event Calendar</h1>
      <table className="table-expand">
        <thead className="theadCalendar">
          <tr className="table-expand-row">
            <th width={200}>Date</th>
            <th>Title</th>
            <th className="text-right" width={150}>
              Start Time
            </th>
            <th width={150} />
          </tr>
        </thead>
        <tbody>
          <tr className="table-expand-row-content">
            <td colSpan={8} className="table-expand-row-nested">
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                unde quaerat reprehenderit ipsa ipsam, adipisci facere
                repellendus impedit at, quisquam dicta optio veniam quia
                nesciunt, inventore quod in neque magni?
              </p>
            </td>
          </tr>
          <tr className="table-expand-row" data-open-details>
            <td>July 15</td>
            <td>Belt Testing Ceremony</td>
            <td className="text-right">5:30 PM</td>
            <td>
              More Info <span className="expand-icon" />
            </td>
          </tr>
          <tr className="table-expand-row-content">
            <td colSpan={8} className="table-expand-row-nested">
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                unde quaerat reprehenderit ipsa ipsam, adipisci facere
                repellendus impedit at, quisquam dicta optio veniam quia
                nesciunt, inventore quod in neque magni?
              </p>
            </td>
          </tr>
          <tr className="table-expand-row" data-open-details>
            <td>June 15</td>
            <td>Competition</td>
            <td className="text-right">12 Noon</td>
            <td>
              More Info <span className="expand-icon" />
            </td>
          </tr>
          <tr className="table-expand-row-content">
            <td colSpan={8} className="table-expand-row-nested">
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                unde quaerat reprehenderit ipsa ipsam, adipisci facere
                repellendus impedit at, quisquam dicta optio veniam quia
                nesciunt, inventore quod in neque magni?
              </p>
            </td>
          </tr>
          <tr className="table-expand-row" data-open-details>
            <td>May 15</td>
            <td>Seminar</td>
            <td className="text-right">6:00 PM</td>
            <td>
              More Info <span className="expand-icon" />
            </td>
          </tr>
          <tr className="table-expand-row-content">
            <td colSpan={8} className="table-expand-row-nested">
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                unde quaerat reprehenderit ipsa ipsam, adipisci facere
                repellendus impedit at, quisquam dicta optio veniam quia
                nesciunt, inventore quod in neque magni?
              </p>
            </td>
          </tr>
          <tr className="table-expand-row" data-open-details>
            <td>April 15</td>
            <td>Belt Testing Ceremony</td>
            <td className="text-right">9:00 AM</td>
            <td>
              More Info <span className="expand-icon" />
            </td>
          </tr>
          <tr className="table-expand-row-content">
            <td colSpan={8} className="table-expand-row-nested">
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                unde quaerat reprehenderit ipsa ipsam, adipisci facere
                repellendus impedit at, quisquam dicta optio veniam quia
                nesciunt, inventore quod in neque magni?
              </p>
            </td>
          </tr>
          <tr className="table-expand-row" data-open-details>
            <td>March 15</td>
            <td>In-House Competition</td>
            <td className="text-right">3:00 PM</td>
            <td>
              More Info <span className="expand-icon" />
            </td>
          </tr>
          <tr className="table-expand-row-content">
          <td colSpan={8} className="table-expand-row-nested">
              
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque
                unde quaerat reprehenderit ipsa ipsam, adipisci facere
                repellendus impedit at, quisquam dicta optio veniam quia
                nesciunt, inventore quod in neque magni?
              </p>
            </td>
            </tr>
        </tbody>
      </table>
      <div className="row">
        <h3 className="calAddEvent">Add Event</h3>
        <form>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="large-12 cell">
                <label className="labCalendar">
                  Event Title
                  <input
                    type="text"
                    className="inpCalendar"
                    id="inpEventTitle"
                    placeholder="Event Title Here"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="cell large-12">
                <label className="labCalendar">
                  Start Date and Time
                  <input
                    type="text"
                    className="span2"
                    defaultValue="12-12-2019 12:05"
                    id="dpt"
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="large-12 cell">
                <label className="labCalendar">
                  More Information
                  <textarea
                    className="inpCalendar"
                    id="txtCalendarMoreInfo"
                    placeholder="small-12.cell"
                    defaultValue={""}
                  />
                </label>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="large-12 cell">
                <a href="#" className="button btnCalendar" id="btnCalendar">
                  Button
                </a>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</div>
    );
}
export default ManagerCalendar;
