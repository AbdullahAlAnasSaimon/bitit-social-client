import React from 'react';
import { HiUserCircle } from 'react-icons/hi';

const SingleFriend = ({friend}) => {
  const {name, photo} = friend;
  return (
    <div className='w-full md:w-10/12 mx-auto border border-zinc-800 my-3 md:my-5 p-5 rounded-none md:rounded-lg bg-zinc-900'>
      <div className='flex items-center'>
        {photo ? <img className='w-12 h-12 md:w-20 md:h-20 rounded-full mr-2' src={photo} alt="user" /> : <HiUserCircle/>}
        <p>{name}</p>
      </div>
      <div className='flex justify-evenly'>
        <button className='bg-blue-600 hover:bg-blue-700 px-5 py-1 rounded-md'>Remove</button>
        <button className='bg-blue-600 hover:bg-blue-700 px-5 py-1 rounded-md'>Add Friend</button>
      </div>
    </div>
  );
};

export default SingleFriend;