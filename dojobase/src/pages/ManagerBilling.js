import React from "react";
import { Link } from "react-router-dom";

function ManagerBilling() {
  return (
    <div class="container-fluid">
      <div className="row">
        <div className="large-12">
          <h1>Billing</h1>
        </div>
        <form>
          <div className="grid-container"></div>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="large-4 cell">
                <label className="labBill">
                  Bill To First Name
                  <input
                    type="text"
                    className="inpBill"
                    id="inpBillFirstName"
                    placeholder
                  />
                </label>
              </div>
              <div className="large-4 cell">
                <label className="labBill">
                  Bill To Last Name
                  <input
                    type="text"
                    className="inpBill"
                    id="inpBillLastName"
                    placeholder
                  />
                </label>
              </div>
              <div className="large-4 cell">
                <div className="collapse">
                  <label className="labBill">Bill To Email Address</label>
                  <div className="input-group">
                    <input
                      type="text"
                      className="inpBill"
                      id="inpBillEmail"
                      placeholder
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="large-12 cell">
                <label className="labBill">
                  Bill Amount
                  <div className="input-group">
                    <span className="input-group-label">
                      {" "}
                      <i className="fa fa-usd" />{" "}
                    </span>
                    <input
                      className="input-group-field"
                      type="text"
                      id="inpBillAmount"
                      placeholder="Full name"
                    />
                  </div>
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
                <label className="labBill">
                  Notes
                  <textarea
                    className="inpBill"
                    id="txtBillNotes"
                    placeholder
                    defaultValue={""}
                  />
                </label>
              </div>
              <div className="large-12 cell">
                <Link to="#" className="button btnBill" id="btnBill">
                  Button
                </Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
export default ManagerBilling;
