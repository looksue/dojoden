import React from "react";
import MessagingForm from "../components/messagingForm"

function ManagerMessaging() {
  return (
<div className="container-fluid">
  <div className="row">
    <div className="large-12">
      <h1>Messaging</h1>
      <p className="lead">
        To send a message to your students, fill in this form.
        <br />
      </p>
    </div>
    <MessagingForm />
  </div>
</div>
    );
}
export default ManagerMessaging;
