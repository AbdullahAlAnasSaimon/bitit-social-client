import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Comment = ({post_id}) => {

  const {data: comments, isLoading} = useQuery({
    queryKey: ['comment'],
    queryFn: async () =>{
      const res = await fetch(`http://localhost:5000/comment?post_id=${post_id}`);
      const data = await res.json();
      return data;
    }
  })

  console.log(comments);

  return (
    <div>
      
    </div>
  );
};

export default Comment;