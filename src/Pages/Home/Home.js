import React from 'react';
import {BsImages} from 'react-icons/bs';

const Home = () => {
  return (
    <div className='grid grid-cols-4 mt-5'>
      <div>
        <h2>section</h2>
      </div>
      <div className='p-5 col-span-2 bg-[#2b2b2b] rounded-lg'>
        <div className='flex'>
          <input type="text" placeholder="What's on your mind? " className="input input-bordered border-2 border-transparent focus:outline-none focus:border-2 focus:border-blue-500 bg-zinc-900 w-full rounded-full" />
          <div className="tooltip tooltip-bottom" data-tip="Upload Image"><button className='btn rounded-full ml-2'><BsImages className='text-red-500'/></button></div>
        </div>
      </div>
      <div>
        <h2>section</h2>
      </div>
    </div>
  );
};

export default Home;