import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import SinglePost from './SinglePost/SinglePost';

const Media = () => {
  
  const { data: posts, isLoading, refetch } = useQuery({
    queryKey: ['userPost'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/posts');
      const data = await res.json();
      return data;
    }
  })



  if (isLoading) {
    return <Loading />
  }

  refetch();

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'>
      <div className='hidden lg:block'></div>
      <div className='col-span-2'>
        {
          posts?.map(post => <SinglePost
            key={post?._id}
            post={post}
            refetch={refetch}
          ></SinglePost>)
        }
        
      </div>
      <div className='hidden lg:block'></div>
    </div>
  );
};

export default Media;