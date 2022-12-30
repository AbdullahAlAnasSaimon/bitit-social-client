import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome, AiFillMessage, AiFillPicture } from 'react-icons/ai';
import {HiUserCircle} from 'react-icons/hi';
import './Header.css';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';


const Header = () => {
  const {user, logOut} = useContext(AuthContext);
  return (
    <div className='sticky top-0'>
      <div className="navbar bg-base-100 p-0 min-h-[50px] w-full border-b border-zinc-800">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </button>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to='/' className='h-[35px] rounded-full mx-1'><AiFillHome />Home</NavLink></li>
              <li><NavLink to='/media' className='h-[35px] rounded-full mx-1'><AiFillPicture />Media</NavLink></li>
              <li><NavLink to='/message' className='h-[35px] rounded-full mx-1'><AiFillMessage />Message</NavLink></li>
            </ul>
          </div>
          <Link to='/' className="btn btn-ghost normal-case text-xl">Bitit</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <div className="tooltip tooltip-bottom h-[40px] my-auto" data-tip="Home"><li><NavLink to='/' className={({ isActive }) => isActive ? 'active rounded-full mx-3 px-10 h-[40px] my-auto active:bg-[#0066ff] text-2xl' : 'undefined rounded-full mx-3 px-10 h-[40px] my-auto active:bg-[#0066ff] text-2xl'}><AiFillHome /></NavLink></li></div>
            <div className="tooltip tooltip-bottom h-[40px] my-auto" data-tip="Media"><li><NavLink to='/media' className='undefined rounded-full mx-5 px-10 h-[40px] my-auto active:bg-[#0066ff] text-2xl'><AiFillPicture /></NavLink></li></div>
            <div className="tooltip tooltip-bottom h-[40px] my-auto" data-tip="Message"><li><NavLink to='/message' className='undefined rounded-full mx-5 px-10 h-[40px] my-auto active:bg-[#0066ff] text-2xl'><AiFillMessage /></NavLink></li></div>
          </ul>
        </div>
        <div className="navbar-end">
          {
            user ? 
            <div className="dropdown dropdown-end">
              <button tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                  {user?.photoURL ? <img src={user?.photoURL} alt='User' /> : <HiUserCircle className='text-[40px]'/>}
                </div>
              </button>
              <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[999]">
                <li><NavLink to='/aboutme'>About</NavLink></li>
                <li><button onClick={() => logOut()}>Log Out</button></li>
              </ul>
            </div> 
            : <Link to='/login'>Log In</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;