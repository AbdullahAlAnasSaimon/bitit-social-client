import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {BsImages} from 'react-icons/bs';
import './Post.module.css';

const Post = () => {
  return (
    <div className='p-5 col-span-2 bg-[#2b2b2b] rounded-lg'>
      <div className='flex'>
        <input type="text" placeholder="What's on your mind? " className="input input-bordered border-2 border-transparent focus:outline-none focus:border-2 focus:border-blue-500 bg-zinc-900 w-full rounded-full" />
        <div className="tooltip tooltip-bottom" data-tip="Upload Image"><button className='btn rounded-full ml-2'><BsImages className='text-red-500' /></button></div>
      </div>
      <div className="mt-5">
        <DragDrop className="border !border-blue-500 mt-5" />
      </div>
      <button className='bg-blue-500 hover:bg-blue-600 text-white mt-5 w-full font-semibold h-[40px] rounded-lg duration-300'>Post</button>
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