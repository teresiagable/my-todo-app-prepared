import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg navbar-secondary bg-secodary'>
      <ul className='navbar-nav mr-auto '>
        <li className='nav-item'>
          <Link className='nav-link' to='/home'>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/todolist'>
            Todo list
          </Link>
        </li>
        <li className='nav-item'>
          <Link className='nav-link' to='/users'>
            Users
          </Link>
        </li>
      </ul>
    </nav>
  );
}