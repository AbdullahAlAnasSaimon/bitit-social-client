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
  const { register, formState: { errors }, handleSubmit } = useForm();
  const [postText, setPostText] = useState(null);
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
    const time = new Date().toString();
    if (file === null) {
      const postData = {
        user_name: user?.displayName,
        user_email: user?.email,
        user_photo: user?.photoURL,
        post_text: data?.post,
        post_time: time,
      };
      console.log(postData);
      fetch('http://localhost:5000/posts', {
        method: 'POST',
        headers: {
          'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
      })
        .then(res => res.json())
        .then(data => {
          if(data.acknowledged){
            toast.success('Status Posted Successfully');
          }
        })
        event.target.reset();
    }
    else {
      let image = file;
      const formData = new FormData();
      formData.append('image', image);
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
              post_time: time,
            };
            console.log(postData);
            fetch('http://localhost:5000/posts', {
              method: 'POST',
              headers: {
                'content-type': 'application/json'
              },
              body: JSON.stringify(postData)
            })
              .then(res => res.json())
              .then(data => {
                if(data.acknowledged){
                  toast.success('Status & Image Posted Successfully');
                }
              })
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
            <button type="submit" className='bg-blue-500 hover:bg-blue-600 text-white mt-5 w-full font-semibold h-[40px] rounded-lg duration-300'>Post</button>
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