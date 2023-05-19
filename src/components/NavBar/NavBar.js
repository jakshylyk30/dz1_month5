import React from 'react';
import { NavLink } from "react-router-dom";

const NavBar = () => {
    return (
        <div>
            <ul style={{display: 'flex', columnGap: '50px', listStyle: 'none'}}>
                <li>
                    <NavLink className='link' to="/">main</NavLink>
                </li>
                <li>
                    <NavLink className='link' to="/about"> About</NavLink>
                </li>
                <li>
                    <NavLink className='link' to="/posts">Posts</NavLink>
                </li>
                <li>
                    <NavLink className='link' to="/sendPosts">SendPosts</NavLink>
                </li>
            </ul>
        </div>
    );
};

export default NavBar;