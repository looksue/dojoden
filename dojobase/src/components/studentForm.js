import React from "react";
import { Link } from "react-router-dom";

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',
            email: '',
            class: '',
            belt: '',
            stripe: ''
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
          });
    }

    handleSubmit(event) {
        console.log("new student: " + this.state.firstName + " " + this.state.lastName);
        let newStudent = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            email: this.state.email,
            class: this.state.class,
            belt: this.state.belt,
            stripe: this.state.stripe
        };
        console.log(newStudent);
        this.setState({
            firstName: '',
            lastName: '',
            email: '',
            class: '',
            belt: '',
            stripe: ''
        });
        event.preventDefault();
    };

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-4 cell">
                            <label>
                                First Name:
            <input name="firstName" type="text" value={this.state.firstName} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="large-4 cell">
                            <label>
                                Last Name
                      <input name="lastName" type="text" value={this.state.lastName} onChange={this.handleChange} />
                            </label>
                        </div>
                        <div className="large-4 cell">
                            <div className="collapse">
                                <label>Email </label>
                                <div className="input-group">
                                    <input className="input-group-field" name="email" type="text" value={this.state.email} onChange={this.handleChange} />
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
                      <select value={this.state.class} onChange={this.handleChange}>
                      <option value="selectMessage">Please Select One</option>
                                    <option value="Fundamentals">Fundamentals</option>
                                    <option value="Advanced">
                                        Advanced
                        </option>
                                    <option value="Competition">Competition</option>
                                </select>
                            </label>
                        </div>
                        <div className="large-4 cell">
                            <label>
                                Belt
                      <select value={this.state.belt} onChange={this.handleChange}>
                                    <option value>Please Select One</option>
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
                      <select value={this.state.stripe} onChange={this.handleChange}>
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
                {/* <div className="grid-container">
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
                </div> */}
                <div className="grid-container">
                    <div className="grid-x grid-padding-x"></div>
                </div>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <input type="submit" value="Add Student" className="button" />
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default StudentForm;