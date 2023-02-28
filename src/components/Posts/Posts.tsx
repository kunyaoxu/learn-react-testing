import React, { useEffect, useState } from 'react';
import { fetchAllPosts } from 'apis/posts';
import { Wrapper } from './Styled';

const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  useEffect(() => {
    fetchAllPosts()
      .then(function (response) {
        // handle success
        setPosts(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });
  }, []);

  return (
    <Wrapper className="default">
      {posts?.map((post, index) => {
        return <div key={index}>{post?.title}</div>;
      })}
    </Wrapper>
  );
};

export default Posts;
