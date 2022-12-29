import React, { useContext, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { BsImages } from 'react-icons/bs';
import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import './Post.module.css';

const Post = () => {
  const { user } = useContext(AuthContext);
  const [file, setFile] = useState(null);
  const [showArea, setShowArea] = useState(false);
  const [processing, setProcessing] = useState(false);
  const { register, formState: { errors }, handleSubmit } = useForm();
  const imgHostKey = process.env.REACT_APP_IMGBB_KEY;

  const handleDragAndDropArea = (e) => {
    e.preventDefault();
    setShowArea(true);
  }
  const handleCloseArea = (e) => {
    e.preventDefault();
    setShowArea(false);
  }

  const handlePostSubmit = (data, event) => {
    setProcessing(true)
    const time = new Date().toString();
    if (file === null) {
      const postData = {
        user_name: user?.displayName,
        user_email: user?.email,
        user_photo: user?.photoURL,
        post_text: data?.post,
        post_like: 0,
        post_time: time,
      };
      console.log(postData);
      fetch('https://bitit-server.vercel.app/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(res => res.json())
        .then(data => {
          if (data.acknowledged) {
            toast.success('Status Posted Successfully');
            setProcessing(false);
          }
        })
        .catch(err => { toast.error(err.message); setProcessing(false) });
      event.target.reset();
    }
    else {
      let image = file;
      const formData = new FormData();
      formData.append('image', image);
      setProcessing(true);
      fetch(`https://api.imgbb.com/1/upload?key=${imgHostKey}`, {
        method: 'POST',
        body: formData
      })
        .then(res => res.json())
        .then(imageData => {
          if (imageData.success) {
            const postData = {
              user_name: user?.displayName,
              user_email: user?.email,
              user_photo: user?.photoURL,
              post_text: data?.post,
              post_photo: imageData.data.url ? imageData.data.url : null,
              post_like: 0,
              post_time: time,
            };
            console.log(postData);
            fetch('https://bitit-server.vercel.app/posts', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(postData)
            })
              .then(res => res.json())
              .then(data => {
                if (data.acknowledged) {
                  toast.success('Status & Image Posted Successfully');
                  setProcessing(false);
                }
              })
              .catch(err => { toast.error(err.message); setProcessing(false) })
          }
        })
      event.target.reset();
    }
  }

  return (
    <div className='p-5 col-span-2 bg-[#2b2b2b] rounded-lg w-10/12 mx-auto'>
      {
        user ? <>
          <form onSubmit={handleSubmit(handlePostSubmit)}>
            <div className='flex'>
              <Link><span className='avatar w-12 rounded-full mr-2'>{user?.photoURL ? <img src={user?.photoURL} alt="" className='rounded-full w-10' /> : <HiUserCircle className="text-[41px]" />}</span></Link>
              <input {...register("post", { minLength: { value: 10, message: 'Write Minimum 10 Character in Input field' }, required: 'Write Minimum 10 Character in Input field' })} name="post" type="text" placeholder="What's on your mind? " className="input input-bordered border-2 border-transparent focus:outline-none focus:border-2 focus:border-blue-500 bg-zinc-900 w-full rounded-full" />
              <div className="tooltip tooltip-bottom z-10" data-tip="Upload Image"><button onClick={handleDragAndDropArea} className='btn rounded-full ml-2'><BsImages className='text-red-500' /></button></div>
            </div>
            {errors.post && <p className="text-red-500 text-center"><small>*{errors?.post?.message}</small></p>}
            <div className={`${showArea ? 'visible' : 'hidden'} mt-12 relative`} >
              <button onClick={handleCloseArea} className="btn btn-sm btn-circle absolute right-0 -top-10">✕</button>
              <DragDrop file={file} setFile={setFile} />
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 text-white mt-5 w-full font-semibold h-[40px] rounded-lg duration-300' type="submit" disabled={processing}>{processing ? <>
              <div className="text-center">
                <div role="status">
                  <svg className="inline mr-2 w-6 h-6 text-gray-200 animate-spin dark:text-gray-900 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span className="sr-only">Loading...</span>
                </div>
              </div>
            </> : 'Post'}</button>
          </form>
        </> : <p className="text-center">Please <Link to='/login' className="text-blue-500 underline">Log In</Link> to share your thoughts</p>
      }
    </div>
  );
};

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop({ file, setFile }) {

  const handleChange = (file) => {
    setFile(file);
  };
  return (
    <div>
      <FileUploader handleChange={handleChange} name="file" types={fileTypes} />
      <p className="text-center text-[12px]">{file ? `File name: ${file?.name}` : "no files uploaded yet"}</p>
    </div>
  );
}

export default Post;