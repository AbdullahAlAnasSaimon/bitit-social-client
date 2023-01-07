import React from 'react';

const SingleFriend = ({friend}) => {
  const {name, photo} = friend;
  return (
    <div>
      <div>
        <img src={photo} alt="" />
        <p>{name}</p>
      </div>
    </div>
  );
};

export default SingleFriend;