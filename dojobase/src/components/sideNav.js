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
                        <a href="#">Students</a>
                    </li>
                    <li>
                        <a href="#">Classes</a>
                    </li>
                    <li>
                        <a href="#">Messaging</a>
                    </li>
                    <li>
                        <a href="#">Calendar</a>
                    </li>
                    <li>
                        <a href="#">Company</a>
                    </li>
                    <li>
                        <a href="#">Billing</a>
                    </li>
                </ul>
            </div>
        </div>
    )
};

export default SideNav;
