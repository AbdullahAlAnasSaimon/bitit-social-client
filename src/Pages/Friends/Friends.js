import { useQuery } from '@tanstack/react-query';
import React, { useContext } from 'react';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import Loading from '../Shared/Loading/Loading';
import SingleFriend from './SingleFriend/SingleFriend';

const Friends = () => {
  const {user} = useContext(AuthContext);

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

  if(!user){
    return;
  }

  const filterdFriends = friends.filter(friend => user?.email !== friend?.email);

  return (
    <div className='grid grid-cols-1 lg:grid-cols-4'>
      <div></div>
      <div className='col-span-2'>
        <h2 className='w-full md:w-10/12 md:mx-auto text-center md:text-left my-5 font-semibold'>People You May Know</h2>
        <div>
          {
            filterdFriends?.map(friend => <SingleFriend
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