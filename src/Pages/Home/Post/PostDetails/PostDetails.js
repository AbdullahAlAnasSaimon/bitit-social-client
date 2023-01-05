import React from 'react';
import { AiFillLike } from 'react-icons/ai';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const postDetails = useLoaderData();
  const {post_photo, post_text, post_time, user_name, user_photo, post_like, post_comment} = postDetails;
  return (
    <div className='relative'>
      <button className='absolute top-2 left-2 bg-gray-100 hover:bg-gray-200 duration-300 font-semibold backdrop-blur text-zinc-600 text-[20px] px-[11px] py-1 rounded-full' onClick={() => window.history.back()}>✕</button>
      <div className='grid grid-cols-1 lg:grid-cols-3'>
      <div className='mx-auto col-span-2'>
        <img src={post_photo} alt="" className='lg:max-h-[calc(100vh-52px)] lg:min-h-[calc(100vh-52px)] lg:object-cover'/>
      </div>
      <div className='bg-zinc-900 p-4'>
        <div className='flex'>
          <div>
            <img src={user_photo} alt="" className='w-12 h-12 rounded-full'/>
          </div>
          <div className='ml-2'>
            <p>{user_name}</p>
            <p className='text-sm'>{post_time.slice(0, 21)}</p>
          </div>
        </div>
        <div className='mb-5'>
          <p className='text-sm mt-3'>{post_text}</p>
        </div>
        <div className='flex justify-between text-sm'>
          {post_like > 0 && <p><AiFillLike className='inline-block text-sm bg-blue-600 rounded-full p-[2px] mr-[2px]' />{post_like}</p>}
          {post_comment > 0 && <p>{post_comment} comments</p>}
        </div>
      </div>
    </div>
    </div>
  );
};

export default PostDetails;