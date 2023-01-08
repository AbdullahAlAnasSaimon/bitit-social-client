import React from 'react';
import { HiUserCircle } from 'react-icons/hi';

const SingleFriend = ({ friend }) => {
  const { name, photo } = friend;
  return (
    <div className='w-full md:w-10/12 mx-auto border border-zinc-800 my-3 md:my-5 p-5 rounded-none md:rounded-lg bg-zinc-900'>
      <div className='flex items-center'>
        {photo ? <img className='w-16 h-16 rounded-full mr-3' src={photo} alt="user" /> : <HiUserCircle />}
        <div className='flex flex-col'>
          <p className='mb-2 text-lg font-semibold'>{name}</p>
          <div>
            <button className='bg-blue-600 hover:bg-blue-700 px-5 py-1 rounded-md duration-300 mr-2'>Add Friend</button>
            <button className='bg-zinc-600 hover:bg-zinc-700 px-5 py-1 rounded-md duration-300'>Remove</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleFriend;