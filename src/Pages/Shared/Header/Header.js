import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AiFillHome, AiFillMessage, AiFillPicture } from 'react-icons/ai';
import { FaUsers } from 'react-icons/fa';
import { HiUserCircle } from 'react-icons/hi';
import { FiSearch } from 'react-icons/fi';
import './Header.css';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import Logo from '../../../image/logo.png';
import { BsArrowLeftShort } from 'react-icons/bs';


const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showSearch, setShowSearch] = useState(false);

  const handleShowSearch = () => {
    setShowSearch(true);
  }
  const handleHideSearch = () => {
    setShowSearch(false);
  }

  const handleSearch = () => {
    console.log()
  }

  return (
    <div className='sticky top-0 z-[9999]'>
      <div className="navbar bg-base-100 p-0 min-h-[50px] w-full border-b border-zinc-800">
        <div className="navbar-start">
          <div className="dropdown">
            <button tabIndex={0} className="btn btn-ghost btn-circle lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </button>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
              <li><NavLink to='/' className='h-[35px] rounded-full mx-1'><AiFillHome />Home</NavLink></li>
              <li><NavLink to='/friends' className='h-[35px] rounded-full mx-1'><FaUsers />Friends</NavLink></li>
              <li><NavLink to='/media' className='h-[35px] rounded-full mx-1'><AiFillPicture />Media</NavLink></li>
              <li><NavLink to='/message' className='h-[35px] rounded-full mx-1'><AiFillMessage />Message</NavLink></li>
            </ul>
          </div>
          {!showSearch && <Link to='/' className="btn btn-ghost normal-case text-xl ml-0 lg:ml-3"><img src={Logo} alt="" className='w-8' /></Link>}
          <div className='relative w-auto'>
            {showSearch && <>
              <div className="flex">
                <button onClick={handleHideSearch} className={`bg-white/30 hover:bg-white/40 duration-300 w-[36px] h-[36px] rounded-full mx-3`}><BsArrowLeftShort className='inline-block text-2xl' /></button>
                <input type="text" placeholder='Search' className='py-2 pl-4 pr-11 rounded-full w-[180px] md:w-auto text-sm focus:outline-none' />
              <button onClick={handleSearch} className='absolute -right-0 text-lg bg-transparent hover:bg-white/10 rounded-full w-[36px] h-[36px] duration-300'><FiSearch className='inline-block -mt-[2px]' /></button>
              </div>
            </>}
            <button onClick={handleShowSearch} className={`bg-white/30 hover:bg-white/40 duration-300 w-[36px] h-[36px] rounded-full ${showSearch ? 'hidden' : 'block'}`}><FiSearch className='inline-block text-xl' /></button>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">
            <div className="tooltip tooltip-bottom h-[40px] my-auto" data-tip="Home"><li><NavLink to='/' className={({ isActive }) => isActive ? 'active rounded-full mx-3 px-10 h-[40px] my-auto active:bg-[#0066ff] text-2xl' : 'undefined rounded-full mx-3 px-10 h-[40px] my-auto active:bg-[#0066ff] text-2xl'}><AiFillHome /></NavLink></li></div>
            <div className="tooltip tooltip-bottom h-[40px] my-auto" data-tip="Friends"><li><NavLink to='/friends' className='undefined rounded-full mx-5 px-10 h-[40px] my-auto active:bg-[#0066ff] text-2xl'><FaUsers /></NavLink></li></div>
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
                    {user?.photoURL ? <img src={user?.photoURL} alt='User' /> : <HiUserCircle className='text-[40px]' />}
                  </div>
                </button>
                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 z-[999]">
                  <li><NavLink to='/aboutme'>About</NavLink></li>
                  <li><button onClick={() => logOut()}>Log Out</button></li>
                </ul>
              </div>
              : <Link to='/login' className='bg-blue-500 hover:bg-blue-600 duration-300 px-3 py-1 text-zinc-800 rounded-full mr-0 lg:mr-3'>Log In</Link>
          }
        </div>
      </div>
    </div>
  );
};

export default Header;