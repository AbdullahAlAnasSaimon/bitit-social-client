import { useQuery } from '@tanstack/react-query';
import React, { useState } from 'react';
import Loading from '../Shared/Loading/Loading';
import SinglePost from './SinglePost/SinglePost';

const Media = () => {
  const [toggle, setToggle] = useState(false);
  const { data: posts, isLoading } = useQuery({
    queryKey: ['userPost'],
    queryFn: async () => {
      const res = await fetch('https://bitit-server.vercel.app/posts');
      const data = await res.json();
      return data;
    }
  })

  const handleToggleComment = (event) => {
    event.preventDefault();
    if (!toggle) {
      setToggle(true);
      return;
    }
    else {
      setToggle(false);
    }
  }


  if (isLoading) {
    return <Loading />
  }



  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'>
      <div className='hidden lg:block'></div>
      <div className='col-span-2'>
        {
          posts?.map(post => <SinglePost
            key={post?._id}
            post={post}
            handleToggleComment={handleToggleComment}
            toggle={toggle}
            setToggle={setToggle}
          ></SinglePost>)
        }
        
      </div>
      <div className='hidden lg:block'></div>
    </div>
  );
};

export default Media;