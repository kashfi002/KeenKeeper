import React from 'react';
import logoImg from '../../assets/logo.png'
import { RiHome2Fill } from "react-icons/ri";
import { CiClock2 } from "react-icons/ci";
import { TfiStatsUp } from "react-icons/tfi";
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
    const navLinks = (
    <>
      <li>
        <NavLink className={({isActive})=> `font-semibold space-x-1 ${isActive ? "text-white bg-green-900 border border-green-950" : ""}`} to="/"><RiHome2Fill />Home</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=> `font-semibold space-x-1 ${isActive ? "text-white bg-green-900 border border-green-950" : ""}`} to="/timeline"><CiClock2/>TimeLine</NavLink>
      </li>
      <li>
        <NavLink className={({isActive})=> `font-semibold space-x-1 ${isActive ? "text-white bg-green-900 border border-green-950" : ""}`} to="/stats"><TfiStatsUp/>Stats</NavLink>
      </li>
    </>
  );

    return (
       <div className=' bg-base-100 shadow-sm'>
     <div className="navbar container mx-auto">
  <div className="flex-1">
    <a className="btn btn-ghost text-xl"><img src={logoImg} alt="" /></a>
  </div>
  <div className="flex-none">
    <ul className="menu menu-horizontal px-1">
     {navLinks}
    </ul>
  </div>
</div>
</div>

    );
};

export default Navbar;