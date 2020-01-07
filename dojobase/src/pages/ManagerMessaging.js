import React, { Component } from "react";
import MessagingForm from "../components/messagingForm"

function ManagerMessaging() {
  return (
<div className="container-fluid">
  <div className="row">
    <div className="large-12">
      <h1>Messaging</h1>
      <p>
        To send a message to your students, Make sure to keep your content here
        <br />
      </p>
    </div>
    <MessagingForm />
  </div>
</div>
    );
}
export default ManagerMessaging;
