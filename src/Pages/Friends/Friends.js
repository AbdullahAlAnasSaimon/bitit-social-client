import { useQuery } from '@tanstack/react-query';
import React from 'react';
import SingleFriend from './SingleFriend/SingleFriend';

const Friends = () => {

  const { data: friends, isLoading, refetch } = useQuery({
    queryKey: ['allFriends'],
    queryFn: async () => {
      const res = await fetch('http://localhost:5000/friends');
      const data = await res.json();
      return data;
    }
  })

  console.log(friends);

  return (
    <div>
      <div>
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
    </div>
  );
};

export default Friends;