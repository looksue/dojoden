import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import StudentForm from "./components/studentForm"
import StudentList from "./components/studentList"

// ==== Begin scripts required for Okta login/logout buttons

import { Component } from 'react';
import { Link } from 'react-router-dom';
import { withAuth } from '@okta/okta-react';

export default withAuth(class Index extends Component {
  constructor(props) {
    super(props);
    this.state = { authenticated: null };
    this.checkAuthentication = this.checkAuthentication.bind(this);
    this.checkAuthentication();
  }

  async checkAuthentication() {
    const authenticated = await this.props.auth.isAuthenticated();
    if (authenticated !== this.state.authenticated) {
      this.setState({ authenticated });
    }
  }

  componentDidUpdate() {
    this.checkAuthentication();
  }

  render() {
    if (this.state.authenticated === null) return null;

    const button = this.state.authenticated ?
      <button onClick={() => { this.props.auth.logout() }}>Logout</button> :
      <button onClick={() => { this.props.auth.login() }}>Login</button>;

    return (
      <div>
        <div className="loginButton">{button}</div>
        <div className="container-fluid">
      <div className="row">
        <div className="large-12">
          <h1>Welcome to Mata Leau</h1>
          <h3>Dojo Management System</h3>
          <p className="lead text-center">Mata Leau is a dojo management application that is designed to make your classes run smoothly.</p> <p className="text-center">Use Mata Leau with all your classes and student's information is at your fingertips.</p>
         
        </div>
      </div>
    </div>
      </div>
  
      
    );
  }
});
// ==== End scripts required for Okta login/logout buttons

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
