{
  /* ManagerMessaging */
}
import React, { Component } from "react";

function ManagerMessaging() {
  return (
<div classname="container-fluid">
  <div className="row">
    <div className="large-12">
      <h1>Messaging</h1>
      <p>
        To send a message to your students, Make sure to keep your content here
        <br />
      </p>
    </div>
    <form>
      <div className="grid-container">
        <div className="grid-x grid-padding-x"></div>
      </div>
      <div className="grid-container">
        <div className="grid-x grid-padding-x"></div>
      </div>
      <div className="grid-container">
        <div className="grid-x grid-padding-x">
          <div className="large-12 cell">
            <label>
              Recipients
              <select>
                <option value>Select</option>
                <option value="all">Whole School</option>
                <option value="starbuck">Essentals</option>
                <option value="hotdog">Advanced Essentials</option>
                <option value="apollo">Competition</option>
              </select>
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
            <label>
              Message
              <textarea placeholder defaultValue={""} />
            </label>
          </div>
          <div className="grid-container">
            <div className="grid-x grid-padding-x">
              <div className="large-12 cell">
                <a href="#" className="button">
                  Send
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  </div>
</div>
    );
}
export default ManagerMessaging;
