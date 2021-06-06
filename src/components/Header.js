import React from 'react';
//NavLink is a special version of the link component
//it recognises when a URL is active so that you can style it
import { NavLink } from 'react-router-dom';

const Header = () => {

    return(
        <header>
            <span className="icn-logo">
                <i className='material-icons'>
                    code
                </i>
            </span>
            <ul className="main-nav">
                <li>
                    {/* Exact match / so that it isn't confused */}
                    {/* You can set this the active class name accordingly */}
                    <NavLink exact to='/' activeStyle={{ background: 'tomato' }}>Home</NavLink>
                </li>
                <li>
                    <NavLink to='/about' activeStyle={{ background: 'tomato' }}>About</NavLink>
                </li>
                <li>
                    <NavLink to='/teachers' activeStyle={{ background: 'tomato' }}>Teachers</NavLink>
                </li>
                <li>
                    <NavLink to='/courses' activeStyle={{ background: 'tomato' }}>Courses</NavLink>
                </li>
            </ul>            
        </header>
    );
};

export default Header;