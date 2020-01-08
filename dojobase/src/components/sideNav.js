import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SideNav() {
    return (
            <div id="sidebar-wrapper">
                <div className="row">
                <Link to="/">
                    <img src="assets/img/MataLeauLOGO_noBG.png" alt="Company Logo" /></Link>
                </div>
                <div className="row menu selections">
                    <ul className="sidebar-nav">
                        <li>
                            <Link to="/allstudents">Students</Link>
                        </li>
                        <li>
                            <Link to="/classes">Classes</Link>
                        </li>
                        <li>
                            <Link to="/messaging">Messaging</Link>
                        </li>
                        <li>
                            <Link to="/calendar">Calendar</Link>
                        </li>
                        <li>
                            <Link to="#">Company</Link>
                        </li>
                        <li>
                            <Link to="/billing">Billing</Link>
                        </li>
                        <li>
                            <Link to="/attendance">Attendance</Link>
                        </li>
                    </ul>
                </div>
            </div>
    )
};

export default SideNav;
