import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

function Navbar() {
    return (
    <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <button className="btn-menu btn btn-success btn-toggle-menu" type="button">
                        <i className="fa fa-bars"></i>
                    </button>
                </div>
            </nav>
    )
};

export default Navbar;

