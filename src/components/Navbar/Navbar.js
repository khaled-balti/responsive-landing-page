import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation();
  const [position, setPosition] = useState('fixed');
  const [color, setColor] = useState('transparent');

  useEffect(() => {
    if (location.pathname === '/') {
      setPosition('fixed');
      setColor('transparent');
    } else {
      setPosition('sticky');
      setColor('#1572D3')
    }
  }, [location.pathname]);

  return (
    <nav className='navbar navbar-expand-lg navbar-dark px-5' style={{ backgroundColor: color, position: position, width: '100%', zIndex: 1 }}>
      <a className='navbar-brand' href='#'>
        <p className='fw-bold text-white fs-4 fs-md-2'>Web Development</p>
      </a>
      <button className='navbar-toggler' type='button' data-bs-toggle='collapse' data-bs-target='#navbarNav' aria-controls='navbarNav' aria-expanded='false' aria-label='Toggle navigation'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div className='collapse navbar-collapse pe-5' id='navbarNav'>
        <ul className='navbar-nav ms-auto d-flex justify-content-between w-50 py-2'>
          <li className='nav-item d-flex align-items-center fs-5 fw-semibold'>
            <NavLink className={({isActive}) => isActive ? 'clicked' : 'items'} to="/" end>Home</NavLink>
          </li>
          <li className='nav-item d-flex align-items-center fs-5 fw-semibold'>
            <NavLink className={({isActive}) => isActive ? 'clicked' : 'items'} to="/services" end>Services</NavLink>
          </li>
          <li className='nav-item d-flex align-items-center fs-5 fw-semibold'>
            <NavLink className={({isActive}) => isActive ? 'clicked' : 'items'} to="/contact" end>Contact</NavLink>
          </li>
          <li className='nav-item d-flex align-items-center fs-5 fw-semibold'>
            <NavLink className={({isActive}) => isActive ? 'clicked' : 'items'} to="/auth" end>Login</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
