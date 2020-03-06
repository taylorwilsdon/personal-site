import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navigation = (props) => (
    <Router>
        <header>
            <h2><Link to="/">Home</Link> | <Link to="/blog">Blog</Link></h2>
        </header>
    </Router>
)

export default Navigation;
