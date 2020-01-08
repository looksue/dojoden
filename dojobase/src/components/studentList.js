import React from "react";
import { Link } from "react-router-dom";
import API from "../utils/API";

class StudentList extends React.Component {
    state = {
        students: []
    }

    handleClick(event) {
        API.delete("students/:id")
        .then(function() {
            console.log("student deleted");
        })
    }

    componentDidMount() {
        API.get(`students`)
            .then(res => {
                const students = res.data;
                this.setState({ students });
            })
    }

    render() {
        return (
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
            {this.state.students.map(student =>
                    <tr>
                        <td>{student.firstName + " " + student.lastName}</td>
                        <td>{student.belt}</td>
                        <td>
                        {" "}
                        <Link to="#" className="button btnStudEdit">
                            Edit
            </Link>
                    </td>
                        <td>
                        {" "}
                        <Link to="#" className="button alert btnStudDelete" onClick={this.handleClick}>
                            Delete
            </Link>{" "}
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
                        {" "}
                        <Link to="#" className="button success btnStudInvoice">
                            Invoice
            </Link>{" "}
                    </td>
                    </tr>
                )}
                </tbody> 
                </table>
        )
    }
}

export default StudentList;