import {NavLink} from 'react-router-dom';
//import React from 'react';
import './style/NavBar.css';

function NavBar(){
    return(
        <nav className='navegation'>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/about'>About</NavLink>
        </nav>
    );
}
export default NavBar;