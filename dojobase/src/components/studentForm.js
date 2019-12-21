import React from "react";
import { Link } from "react-router-dom";

class StudentForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstName: '',
            lastName: '',

        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ firstName: event.target.firstName });
    }

    handleSubmit(event) {
        alert('New Students first Name: ' + this.state.firstName);
        event.preventDefault();
    }

    submitStudent(event) {
        event.preventDefault();
        console.log("new student: ");
        // var newStudent = {
        //   name: getElementById("#name").val().trim(),
        //   address: getElementById("#address").val().trim(),
        //   phone: getElementById("#phone").val().trim(),
        //   email: getElementById("#email").val().trim(),
        //   belt: getElementById("#belt").val().trim(),
        //   stripes: getElementById("#stripes").val().trim(),
        //   age: getElementById("#age").val().trim(),
        //   gender: getElementById("#gender").val().trim(),
        //   health_concerns: getElementById("#health_concerns").val().trim(),
        //   created_at: moment().format("YYYY-MM-DD HH:mm:ss")
        // };
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
                      <input name="lastName" type="text" placeholder />
                            </label>
                        </div>
                        <div className="large-4 cell">
                            <div className="collapse">
                                <label>Email </label>
                                <div className="input-group">
                                    <input className="input-group-field" type="url" />
                                    <span className="input-group-label">.com</span>
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
                      <select>
                                    <option value>Choose</option>
                                    <option value="Fundamentals">Fundamentals</option>
                                    <option value="Advanced Fundamentals">
                                        Advanced Fundamentals
                        </option>
                                    <option value="Competition">Competition</option>
                                </select>
                            </label>
                        </div>
                        <div className="large-4 cell">
                            <label>
                                Belt
                      <select id="belt">
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
                            <label>
                                Stripe
                      <select>
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
                <div className="grid-container">
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
                </div>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x"></div>
                </div>
                <div className="grid-container">
                    <div className="grid-x grid-padding-x">
                        <div className="large-12 cell">
                            <a href="#" className="button" onClick={this.submitStudent}>
                                Add Student
                    </a>
                        </div>
                    </div>
                </div>
            </form>
        );
    }
}

export default StudentForm;