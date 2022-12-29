import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaCommentAlt } from 'react-icons/fa';

const SinglePost = ({ post }) => {
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [liked, setLiked] = useState(false);
  const [toggle,setToggle] = useState(false);

  const handleLikeReact = () => {
    if (!liked) {
      setLiked(true);
    }
    else {
      const confirmRemoveLike = window.confirm('Are you sure to remove the like');
      if (confirmRemoveLike) {
        setLiked(false);
      }
    }
  }

  const handleToggleComment = () =>{
    if(!toggle){
      setToggle(true);
    }
    else{
      setToggle(false);
    }
  }

  const { post_photo, post_text, post_time, user_name, user_photo } = post;
  return (
    <div className='w-10/12 mx-auto border border-zinc-800 my-5 rounded-lg bg-zinc-900'>
      <div className='flex items-center m-3'>
        <div className='h-10 w-10'>
          <img src={user_photo} alt="" className='rounded-full' />
        </div>
        <div className='ml-2'>
          <p className='text-sm font-semibold'>{user_name}</p>
          <p className='text-xs'>{post_time.slice(0, 21)}</p>
        </div>
      </div>
      <div>
        <p className='m-3'>{post_text}</p>
        {post_photo && <img src={post_photo} alt="" className='w-full' />}
      </div>
      <div className='flex justify-around border-t border-zinc-800'>
        <button onClick={handleLikeReact} className={`bg-gray-300/30 ${liked && 'bg-blue-300/30 hover:bg-blue-300/40'} hover:bg-gray-300/40 w-full mx-5 my-5 py-1 rounded-lg duration-300`}>{liked ? <AiFillLike className='text-center w-full text-2xl text-blue-500' /> : <AiOutlineLike className='text-center w-full text-2xl' />}</button>
        {/* <AiFillLike/> */}
        <button onClick={handleToggleComment} className='bg-gray-300/30 hover:bg-gray-300/40 w-full mx-5 my-5 py-1 rounded-lg duration-300'><FaCommentAlt className='text-center w-full' /></button>
      </div>
      <div className={`${toggle ? 'visible' : 'hidden'}`}>
        <form onSubmit={handleSubmit()} className="flex items-center m-2">
            <img src={user_photo} alt="" className='rounded-full w-8 h-8 mr-2'/>
          <input {...register("post", { minLength: { value: 1}, required: 'Write Minimum 10 Character in Input field' })} name="post" type="text" placeholder="Write your opinion" className="input input-bordered border border-zinc-700 focus:outline-none focus:border focus:border-blue-500 bg-zinc-900 w-full rounded-full h-[35px] text-[13px]" />
          <button type="submit" className='bg-blue-500 h-[35px] w-[41px] rounded-full ml-2'><RiSendPlaneFill className='mx-auto'/></button>
        </form>
      </div>
    </div>
  );
};

export default SinglePost;