import React, { useContext, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { BsImages } from 'react-icons/bs';
import { HiUserCircle } from "react-icons/hi";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../Context/AuthProvider/AuthProvider";
import './Post.module.css';

const Post = () => {
  const { user } = useContext(AuthContext);
  const [showArea, setShowArea] = useState(false);

  const handleDragAndDropArea = () => {
    setShowArea(true);
  }
  const handleCloseArea = () => {
    setShowArea(false);
  }
  return (
    <div className='p-5 col-span-2 bg-[#2b2b2b] rounded-lg w-10/12 mx-auto'>
      {
        user ? <>
          <form >
            <div className='flex'>
              <Link><span className='avatar w-12 rounded-full mr-2'>{user?.photoURL ? <img src={user?.photoURL} alt="" className='rounded-full w-10' /> : <HiUserCircle className="text-[41px]"/>}</span></Link>
              <input type="text" placeholder="What's on your mind? " className="input input-bordered border-2 border-transparent focus:outline-none focus:border-2 focus:border-blue-500 bg-zinc-900 w-full rounded-full" />
              <div className="tooltip tooltip-bottom z-10" data-tip="Upload Image"><button onClick={handleDragAndDropArea} className='btn rounded-full ml-2'><BsImages className='text-red-500' /></button></div>
            </div>
            <div className={`${showArea ? 'visible' : 'hidden'} mt-12 relative`} >
              <button onClick={handleCloseArea} className="btn btn-sm btn-circle absolute right-0 -top-10">✕</button>
              <DragDrop />
            </div>
            <button className='bg-blue-500 hover:bg-blue-600 text-white mt-5 w-full font-semibold h-[40px] rounded-lg duration-300'>Post</button>
          </form>
        </> : <p className="text-center">Please <Link to='/login' className="text-blue-500 underline">Log In</Link> to share your thoughts</p>
      }
    </div>
  );
};

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
  const [file, setFile] = useState(null);
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