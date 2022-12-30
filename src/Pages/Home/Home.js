import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loading from "../Shared/Loading/Loading";
import LeftSideNav from "./LeftSideNav/LeftSideNav";
import Post from "./Post/Post";
import RightSideNav from "./RightSideNav/RightSideNav";

const Home = () => {
  const { loading } = useContext(AuthContext);
  if (loading) {
    return <Loading />
  }
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 mt-5'>
      <LeftSideNav></LeftSideNav>
      <Post></Post>
      <div className="sticky top-5">
        <RightSideNav></RightSideNav>
      </div>
    </div>
  );
};



export default Home;