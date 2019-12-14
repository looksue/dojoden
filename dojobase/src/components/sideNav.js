import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function SideNav() {
    return (
        <div id="sidebar-wrapper">
            <div class="row">
                <div class="columns medium-12">
                </div>
            </div>
            <ul class="sidebar-nav">
                <li class="sidebar-brand">
                    <a href="#">
                        Dojo Manager </a>
                </li>
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
                <li class="active">
                    <a href="#">Billing</a>
                </li>
            </ul>
        </div>
    )
}

export default SideNav;
