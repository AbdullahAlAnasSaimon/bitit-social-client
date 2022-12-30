import React from 'react';

const Comment = ({ comment, refetch }) => {

  const { comment_text, user_name, user_photo, post_time } = comment;

  return (
    <div className='mx-5 my-2 bg-zinc-800 p-2 rounded-xl'>
      <div className='flex'>
        <div>
          <img src={user_photo} alt="" className='w-8 h-8 rounded-full' />
        </div>
        <div className='text-[12px] inline-block ml-2'>
          <p>{user_name} </p>
          <p className='text-[10px]'>{post_time.slice(0, 21)}</p>
        </div>
      </div>
      <p className='m-2 text-sm'>{comment_text}</p>
    </div>
  );
};

export default Comment;