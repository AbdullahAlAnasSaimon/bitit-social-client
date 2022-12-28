import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import SinglePost from './SinglePost/SinglePost';

const Media = () => {
  const {data: posts, isLoading} = useQuery({
    queryKey: ['userPost'],
    queryFn: async() =>{
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      return data;
    }
  })
  
  if(isLoading){
    return <Loading/>
  }

  return (
    <div className='grid grid-cols-3'>
      <div></div>
      <div>
        {
          posts.map(post => <SinglePost
          key={post?._id}
          post={post}
          ></SinglePost>)
        }
      </div>
      <div></div>
    </div>
  );
};

export default Media;