import React from 'react';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import {FaCommentAlt} from 'react-icons/fa';

const SinglePost = ({post}) => {
  const {post_photo, post_text, post_time, user_name, user_photo} = post;
  return (
    <div className='w-10/12 mx-auto border border-zinc-700 my-5 rounded-lg bg-zinc-900'>
      <div className='flex items-center m-3'>
        <div className='h-10 w-10'>
          <img src={user_photo} alt="" className='rounded-full'/>
        </div>
        <div className='ml-2'>
          <p className='text-sm font-semibold'>{user_name}</p>
          <p className='text-xs'>{post_time.slice(0, 21)}</p>
        </div>
      </div>
      <div>
        <p className='m-3'>{post_text}</p>
        {post_photo && <img src={post_photo} alt="" className='w-full'/>}
      </div>
      <div className='flex justify-around border-t border-zinc-700'>
        <button className='bg-gray-300/30 hover:bg-gray-300/40 w-full mx-5 my-5 py-1 rounded-lg'><AiOutlineLike className='text-center w-full text-2xl'/></button>
        {/* <AiFillLike/> */}
        <button className='bg-gray-300/30 hover:bg-gray-300/40 w-full mx-5 my-5 py-1 rounded-lg'><FaCommentAlt className='text-center w-full'/></button>
      </div>
    </div>
  );
};

export default SinglePost;