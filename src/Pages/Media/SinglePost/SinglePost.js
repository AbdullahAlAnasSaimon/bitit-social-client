import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiFillLike, AiOutlineLike } from 'react-icons/ai';
import { RiSendPlaneFill } from 'react-icons/ri';
import { FaCommentAlt } from 'react-icons/fa';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../../Context/AuthProvider/AuthProvider';
import { Link } from 'react-router-dom';

const SinglePost = ({ post }) => {
  const { user } = useContext(AuthContext);
  const { register, handleSubmit } = useForm();
  const [liked, setLiked] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [hitLike, setHitLike] = useState(0);

  const { post_photo, post_text, post_time, user_name, user_photo } = post;


  const handleLikeReact = () => {
    setLiked(true);
    console.log(hitLike);
    setHitLike((prevCount) => prevCount + 1);
    // setHitLike(hitLike + 1);
    console.log(hitLike);

  }
  const hanldeRemoveLikeReact = () => {
    const confirmRemoveLike = window.confirm('Are you sure to remove the like');
    if (confirmRemoveLike) {
      setLiked(false);
      console.log(hitLike);
      setHitLike((prevCount) => prevCount - 1);
      // setHitLike(hitLike - 1);
      console.log(hitLike);
    }
  }

  const handleToggleComment = () => {
    if (!toggle) {
      setToggle(true);
    }
    else {
      setToggle(false);
    }
  }

  const handlePostComment = (data) => {
    setProcessing(true);
    const time = new Date().toString();
    const commentData = {
      post_id: post?._id,
      comment_text: data?.comment,
      user_photo: user?.photoURL,
      user_name: user?.displayName,
      post_time: time
    }
    fetch('https://bitit-server.vercel.app/comment', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(commentData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged) {
          setProcessing(false);
          toast.success('Commented successfully');
        }
      })
      .catch(err => { toast.error(err.message); setProcessing(false) })
  }



  return (
    <div className='w-10/12 mx-auto border border-zinc-800 my-5 rounded-lg bg-zinc-900'>
      <div className='flex items-center justify-between'>
        <div className='flex items-center m-3'>
          <div className='h-10 w-10'>
            <img src={user_photo} alt="" className='rounded-full' />
          </div>
          <div className='ml-2'>
            <p className='text-sm font-semibold'>{user_name}</p>
            <p className='text-xs'>{post_time.slice(0, 21)}</p>
          </div>
        </div>
        <div className='mr-4'>
          <Link to={`/post/${post?._id}`} className='text-sm bg-zinc-800 hover:bg-zinc-900 duration-300 border border-blue-400 hover:border-blue-500 px-3 py-1 rounded-full'>Details</Link>
        </div>
      </div>
      <div>
        <p className='m-3'>{post_text}</p>
        {post_photo && <img src={post_photo} alt="" className='w-full' />}
      </div>
      <div className='flex justify-around border-t border-zinc-800'>
        <button onClick={!liked ? handleLikeReact : hanldeRemoveLikeReact} className={`bg-gray-300/30 ${liked && 'bg-blue-300/30 hover:bg-blue-300/40'} hover:bg-gray-300/40 w-full mx-5 my-5 py-1 rounded-lg duration-300`}>{liked ? <AiFillLike className='text-center w-full text-2xl text-blue-500' /> : <AiOutlineLike className='text-center w-full text-2xl' />}</button>
        {/* <AiFillLike/> */}
        <button onClick={handleToggleComment} className='bg-gray-300/30 hover:bg-gray-300/40 w-full mx-5 my-5 py-1 rounded-lg duration-300'><FaCommentAlt className='text-center w-full' /></button>
      </div>

      <div className={`${toggle ? 'visible' : 'hidden'}`}>
        <form onSubmit={handleSubmit(handlePostComment)} className="flex items-center m-2">
          <img src={user?.photoURL} alt="" className='rounded-full w-8 h-8 mr-2' />
          <input {...register("comment", { minLength: { value: 1 }, required: true })} name="comment" type="text" placeholder="Write your opinion" className="input input-bordered border border-zinc-700 focus:outline-none focus:border focus:border-blue-500 bg-zinc-900 w-full rounded-full h-[35px] text-[13px]" />
          {/* <button type="submit" className='bg-blue-500 h-[35px] w-[41px] rounded-full ml-2'></button> */}
          <button className='bg-blue-500 h-[35px] w-[41px] rounded-full ml-2 duration-300' type="submit" disabled={processing}>{processing ? <>
            <div className="text-center">
              <div role="status">
                <svg className="inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-900 fill-blue-300" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                  <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                </svg>
                <span className="sr-only">Loading...</span>
              </div>
            </div>
          </> : <RiSendPlaneFill className='mx-auto' />} </button>
        </form>
      </div>
    </div>
  );
};

export default SinglePost;