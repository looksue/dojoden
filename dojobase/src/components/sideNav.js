import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SideNav() {
    return (
            <div id="sidebar-wrapper">
                <div className="row">
                    <img src="assets/img/MataLeauLOGO_noBG.png" />
                </div>
                <div className="row menu selections">
                    <ul className="sidebar-nav">
                        <li>
                            <a href="/allstudents">Students</a>
                        </li>
                        <li>
                            <a href="/classes">Classes</a>
                        </li>
                        <li>
                            <a href="/messaging">Messaging</a>
                        </li>
                        <li>
                            <a href="/calendar">Calendar</a>
                        </li>
                        <li>
                            <a href="#">Company</a>
                        </li>
                        <li>
                            <a href="/billing">Billing</a>
                        </li>
                    </ul>
                </div>
            </div>
    )
};

export default SideNav;
