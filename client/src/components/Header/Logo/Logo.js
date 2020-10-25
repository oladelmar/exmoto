import React from 'react';
import './Logo.scss';
import logo from '../../../assets/images/new-main-logo.png';
import { NavLink } from 'react-router-dom';

const Logo = () => (
   <NavLink to='/'>
      <div className="Logo-box">
         <img src={logo} alt="ExMoto logo" className="Logo-box__Image"/>
      </div>
   </NavLink>
);

export default Logo;