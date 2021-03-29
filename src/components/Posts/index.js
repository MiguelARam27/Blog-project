import React from 'react';
import Post from './Post';
import Banner from '../Banner';
const Posts = ({ title, posts }) => {
  return (
    <section className="posts">
      <h3 className="posts-title">{title}</h3>
      <div className="posts-center">
        <article>
          {posts.map(post => {
            console.log(post);
            return <Post key={post.id} {...post}></Post>;
          })}
        </article>
        <article>
          <Banner />
        </article>
      </div>
    </section>
  );
};

export default Posts;
