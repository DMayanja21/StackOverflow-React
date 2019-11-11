// Import dependencies
import React from 'react';
import '../../../App.css';
import {Link} from 'react-router-dom';

// Define features here
function Nav(){
    return(
        <nav>
            <h1 className="brand">StackOverflow-EDU</h1>
            <ul className="nav-links">
                <Link className='link' to='/'>
                    <li> Home </li>
                </Link>|
                <Link className='link' to='/About'>
                    <li> About </li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;