import { useQuery } from '@tanstack/react-query';
import React, { useContext, useState } from 'react';
import { HiUserCircle } from 'react-icons/hi';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import InformationModal from '../Shared/InformationModal/InformationModal';

const AboutMe = () => {

  const { user } = useContext(AuthContext);
  const [modalStatus, setModalStatus] = useState(true);

  const {data: userInfo, isLoading, refetch } = useQuery({
    queryKey: ['moreUserInfo'],
    queryFn: async() =>{
      const res = await fetch(`https://bitit-server.vercel.app/users?email=${user?.email}`)
      const data = await res.json();
      return data;
    }
  })

  return (
    <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-3'>
      <div className="rounded-full w-[200px] mx-auto lg:mx-0 mt-10">
        {user?.photoURL ? <img src={user?.photoURL} alt='User' className='w-[200px] h-[200px] rounded-full' /> : <HiUserCircle className='text-[200px]' />}
      </div>
      <div className='col-span-2 my-5'>
        <div className='my-5'>
          <p className="text-sm mb-2">Name</p>
          <input value={user?.displayName} type="text" placeholder="Type here" className="input input-bordered w-full bg-zinc-900 rounded-lg" readOnly/>
        </div>
        <div className='my-5'>
          <p className="text-sm mb-2">Email</p>
          <input value={user?.email} type="text" placeholder="Type here" className="input input-bordered w-full bg-zinc-900 rounded-lg" readOnly/>
        </div>
        <div className='my-5'>
          <p className="text-sm mb-2">University</p>
          <input value={userInfo?.university} type="text" className="input input-bordered w-full bg-zinc-900 rounded-lg" readOnly/>
        </div>
        <div className='my-5'>
          <p className="text-sm mb-2">Address</p>
          <input value={userInfo?.address} type="text" className="input input-bordered w-full bg-zinc-900 rounded-lg" readOnly/>
        </div>
        <label htmlFor="information-modal" className='bg-blue-600 hover:bg-blue-700 duration-300 px-4 py-1 rounded-full cursor-pointer'>Edit Info</label>
      </div>
      {
        modalStatus && <InformationModal
        setModalStatus={setModalStatus}
        ></InformationModal>
      }
    </div>
  );
};

export default AboutMe;