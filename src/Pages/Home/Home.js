import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import Loading from "../Shared/Loading/Loading";
import Post from "./Post/Post";

const Home = () => {
  const {loading} = useContext(AuthContext);
  if(loading){
    return <Loading/>
  }
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