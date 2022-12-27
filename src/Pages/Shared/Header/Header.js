import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome, AiFillMessage, AiFillPicture } from 'react-icons/ai';
import './Header.css';


const Header = () => {
  return (
    <div>
      <div className="navbar bg-base-100">
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
          <ul className="menu menu-horizontal px-1 rounded-none">
            <div className="tooltip tooltip-bottom" data-tip="Home"><li><NavLink to='/' className={({isActive}) => isActive ? 'active text-xl rounded-full mx-4 px-8' : 'undefined text-xl rounded-full mx-4 px-8'}><AiFillHome /></NavLink></li></div>
            <div className="tooltip tooltip-bottom" data-tip="Media"><li><NavLink to='/media' className='text-xl rounded-full mx-4 px-8'><AiFillPicture /></NavLink></li></div>
            <div className="tooltip tooltip-bottom" data-tip="Message"><li><NavLink to='/message' className='text-xl rounded-full mx-4 px-8'><AiFillMessage /></NavLink></li></div>
          </ul>
        </div>
        <div className="navbar-end">
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img src="https://placeimg.com/80/80/people" />
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