import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <nav style={{ marginRight: -42 }} className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img src="../../event.PNG" width="50px" height="50  px" alt="banner" />    Event Manager</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/AddEvent" className="nav-link">
                                AddEvent
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/DeleteEvent" className="nav-link">
                                DeleteEvent
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/UpdateEvent" className="nav-link">
                                UpdateEvent
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/admin" className="nav-link">
                                Admin
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;
