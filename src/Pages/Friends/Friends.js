import { useQuery } from '@tanstack/react-query';
import React from 'react';
import Loading from '../Shared/Loading/Loading';
import SingleFriend from './SingleFriend/SingleFriend';

const Friends = () => {

  const { data: friends, isLoading } = useQuery({
    queryKey: ['allFriends'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/friends');
      const data = await res.json();
      return data;
    }
  })

  if(isLoading){
    return <Loading/>
  }

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'>
      <div></div>
      <div className='col-span-2'>
        <h2>People You May Know</h2>
        <div>
          {
            friends?.map(friend => <SingleFriend
              key={friend?._id}
            friend={friend}
            ></SingleFriend>)
          }
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Friends;