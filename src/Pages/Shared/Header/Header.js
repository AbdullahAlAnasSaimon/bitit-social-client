import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome, AiFillMessage, AiFillPicture } from 'react-icons/ai';
import './Header.css';


const Header = () => {
  return (
    <div className=''>
      <div className="navbar bg-base-100 p-0 min-h-[50px] border-b border-gray-300">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink className='h-[35px] rounded-full mx-1'><AiFillHome />Home</NavLink></li>
              <li><NavLink className='h-[35px] rounded-full mx-1'><AiFillPicture />Media</NavLink></li>
              <li><NavLink className='h-[35px] rounded-full mx-1'><AiFillMessage />Message</NavLink></li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Bitit</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <div className="tooltip tooltip-bottom h-[35px] my-auto" data-tip="Home"><li><NavLink to='/' className={({ isActive }) => isActive ? 'active rounded-full mx-3 px-10 h-[35px] my-auto active:bg-[#0066ff] text-xl' : 'undefined rounded-full mx-3 px-10 h-[35px] my-auto active:bg-[#0066ff] text-xl'}><AiFillHome /></NavLink></li></div>
            <div className="tooltip tooltip-bottom h-[35px] my-auto" data-tip="Media"><li><NavLink to='/media' className='undefined rounded-full mx-5 px-10 h-[35px] my-auto active:bg-[#0066ff] text-xl'><AiFillPicture /></NavLink></li></div>
            <div className="tooltip tooltip-bottom h-[35px] my-auto" data-tip="Message"><li><NavLink to='/message' className='undefined rounded-full mx-5 px-10 h-[35px] my-auto active:bg-[#0066ff] text-xl'><AiFillMessage /></NavLink></li></div>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" alt='' />
              </div>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink>About</NavLink></li>
              <li><a>Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;