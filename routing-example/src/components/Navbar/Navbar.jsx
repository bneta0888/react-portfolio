import React from 'react';
import { Link } from 'react-router-dom';
import './navbar.css';
import logo from '../../assets/LOGO.png';

function Navbar() {
  return (
    <>
        <nav className="nav navbar-expand-lg py-4">
            <div className="container d-flex justify-content-between align-items-center ">
                <Link to={'/'} className='title text-decoration-none'><img src={logo} alt="logo" className='logo'/></Link>
                <ul className="navbar-items d-flex gap-4">
                    <li className='nav-item'>
                        <Link to={'/'} className='link active'>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to={'/about'} className='link'>About</Link>
                    </li>
                    <li className='nav-item'>
                    <Link to={'/contact'} className='link'>Contact</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </>
  )
}

export default Navbar
