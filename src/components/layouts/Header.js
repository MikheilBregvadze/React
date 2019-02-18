import React from 'react';
import { Link } from 'react-router-dom';

function Header () {
    return(
        <header style={headerStyle}>
            <h1 className="header">TodoList</h1>
            <Link className="nav-item" to='/'>Home</Link> | <Link className="nav-item" to='/About'>About</Link>
        </header>
    )
}

const headerStyle = {
    background: '#333',
    color: '#fff',
    textAlign: 'center',
    padding: '10px'
}

export default Header; 