import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import SinglePost from './SinglePost/SinglePost';

const Media = () => {
  const {data: posts, isLoading} = useQuery({
    queryKey: ['userPost'],
    queryFn: async() =>{
      const res = await fetch('https://bitit-server.vercel.app/posts');
      const data = await res.json();
      return data;
    }
  })



  if(isLoading){
    return <Loading/>
  }

  return (
    <div className='grid grid-cols-4 mt-5'>
      <div></div>
      <div className='col-span-2'>
        {
          posts?.map(post => <SinglePost
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