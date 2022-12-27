import React from 'react';
import { Link } from 'react-router-dom';
import {AiFillHome, AiFillMessage, AiFillPicture} from 'react-icons/ai';
import {HiUser} from 'react-icons/hi';


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
              <li><Link>Home</Link></li>
              <li tabIndex={0}><Link>Media</Link></li>
              <li><Link>Message</Link></li>
            </ul>
          </div>
          <Link className="btn btn-ghost normal-case text-xl">Bitit</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 rounded-none">
            <li><Link className='h-[35px] rounded-full mx-1'><AiFillHome/>Home</Link></li>
            <li><Link className='h-[35px] rounded-full mx-1'><AiFillPicture/>Media</Link></li>
            <li><Link className='h-[35px] rounded-full mx-1'><AiFillMessage/>Message</Link></li>
            <li><Link className='h-[35px] rounded-full mx-1'><HiUser/>About</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <Link className="btn">Get started</Link>
        </div>
      </div>
    </div>
  );
};

export default Header;