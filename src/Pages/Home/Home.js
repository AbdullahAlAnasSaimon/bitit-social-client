import React from "react";
import Post from "./Post/Post";

const Home = () => {
  return (
    <div className='grid grid-cols-4 mt-5'>
      <div>
        <h2>section</h2>
      </div>
      <Post></Post>
      <div>
        <h2>section</h2>
      </div>
    </div>
  );
};



export default Home;