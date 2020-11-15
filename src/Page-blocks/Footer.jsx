import React from 'react';
import { Link } from "react-router-dom";

class Footer extends React.Component {
    render() {
        return (
            <footer className="page-footer">
                <div className="footer-container">
                    <p>© All Rights Reserved IDstore</p>
                    <nav className="footer-nav">
                        <ul>
                            <li><Link to="/">Home</Link></li>
                            <li><Link to="/">Store</Link></li>
                            <li><Link to="/">Collections</Link></li>
                            <li><Link to="/">Articles</Link></li>
                            <li><Link to="/">Contact</Link></li>
                        </ul>
                    </nav>
                </div>
            </footer>
        )
    }
}
export default Footer