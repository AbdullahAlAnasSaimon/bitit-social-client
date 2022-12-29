import React, { useContext } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import InformationModal from '../Shared/InformationModal/InformationModal';

const AboutMe = () => {
  const { user } = useContext(AuthContext);
  return (
    <div className='w-10/12 mx-auto grid grid-cols-3'>
      <div className="rounded-full">
        {user?.photoURL ? <img src={user?.photoURL} alt='User' className='w-[200px] rounded-full' /> : <HiUserCircle className='text-[200px]' />}
      </div>
      <div className='col-span-2'>
        <div className='my-5'>
          <input value={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full" readOnly/>
        </div>
        <div className='my-5'>
          <input value={user?.email} type="text" placeholder="Type here" className="input input-bordered w-full" readOnly/>
        </div>
        <label htmlFor="information-modal" className='bg-blue-600 hover:bg-blue-700 duration-300 px-4 py-1 rounded-full cursor-pointer'>Edit Info</label>
      </div>
      <InformationModal></InformationModal>
    </div>
  );
};

export default AboutMe;