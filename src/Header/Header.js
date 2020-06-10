import React from 'react';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-sm navbar-dark bg-danger mb-3 py-0">
            <div className="container">
                <a href="/" className="navbar-brand">
                    <img src="../../event.PNG" width="50px" height="50  px" alt="banner" />    Event Manager</a>
                <div>
                    <ul className="navbar-nav mr-auto">
                        <li className="nav-item">
                            <a href="/" className="nav-link">
                                Home
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}
export default Header;
