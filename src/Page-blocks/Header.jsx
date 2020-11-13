import React from "react";
import { Link } from "react-router-dom";


class Header extends React.Component {
    render() {
      return (
        <header className="page-header">
            <div className="header-container">
                <figure className="logo">IDstore</figure>
                <nav className="header-nav">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/">Store</Link></li>
                        <li><Link to="/">Collections</Link></li>
                        <li><Link to="/">Articles</Link></li>
                        <li><Link to="/">Contact</Link></li>
                    </ul>
                </nav>
            </div>
        </header>
      )
    }
}

export default Header