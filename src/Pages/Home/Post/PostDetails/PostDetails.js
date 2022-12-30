import React from 'react';
import { useLoaderData } from 'react-router-dom';

const PostDetails = () => {
  const postDetails = useLoaderData();
  console.log(postDetails);
  return (
    <div>
      
    </div>
  );
};

export default PostDetails;