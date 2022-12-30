import React from "react";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import Post from "./Post/Post";
import RightSideNav from "./RightSideNav/RightSideNav";

const Home = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 mt-5'>
      <LeftSideNav></LeftSideNav>
      <Post></Post>
      <RightSideNav></RightSideNav>
    </div>
  );
};



export default Home;