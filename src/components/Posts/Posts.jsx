import React from 'react';
import './Posts.css';
import { useSelector } from 'react-redux';
import Post from '../Post/Post'

const Posts = () => {
  const posts = useSelector((state) => state.posts); 

  return (
    <div className="Posts">
        {posts.map((post, id) => {
            return <Post data={post} id={id} key={id} />;
        })}
    </div>
  );
}

export default Posts
