import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import {HiUserCircle} from 'react-icons/hi';

const LeftSideNav = () => {
  const {user} = useContext(AuthContext);
  return (
    <div>
      {
        user && <ul className='menu'>
        <li><Link><span className='avatar w-10 rounded-full'>{user?.photoURL ? <img src={user?.photoURL} alt=""  className='rounded-full'/> : <HiUserCircle/>}</span> {user?.displayName}</Link></li>
      </ul>
      }
    </div>
  );
};

export default LeftSideNav;