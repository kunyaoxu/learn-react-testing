import React, { useEffect, useState } from 'react';
// import { fetchAllPosts, fetchFirstPost } from 'apis/posts';
import postsApi from 'apis/posts';
import { Wrapper } from './Styled';

const Posts = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [firstPost, setFirstPost] = useState<any>();

  useEffect(() => {
    postsApi
      .fetchFirstPost()
      .then(function (response) {
        // handle success
        setFirstPost(response.data);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      });

    postsApi
      .fetchAllPosts()
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
      {firstPost && <div>first post: {firstPost?.title}</div>}
      {posts?.map((post, index) => {
        return <div key={index}>{post?.title}</div>;
      })}
    </Wrapper>
  );
};

export default Posts;
