import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useGetPostByIdQuery, useGetAllPostsQuery } from 'redux/posts/post';
import PostItemDel from 'components/PostItemDel';

import { ThreeDots } from 'react-loader-spinner';

const PostDel = () => {
  const [postId, setPostId] = useState('');

  const { data, error, isFetching, isError } = useGetPostByIdQuery(postId, {
    skip: postId === '',
  });

  let isDataForRender = !isFetching && !isError && data;

  const { data: allPostsData, isFetching: isLoading } = useGetAllPostsQuery();

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.postId.value.trim() === '') {
      return alert('Enter the correct id!');
    }
    setPostId(e.target.elements.postId.value);
    e.currentTarget.reset();
  };

  return (
    <>
      <h2>This is Posts Page</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="postId" />
        <button type="submit">Search POST by Id</button>
      </form>

      <div>
        <Link to="/posts/create">Create Post</Link>
      </div>
      {isFetching && (
        <ThreeDots height="60" width="60" color="#00BFFF" ariaLabel="loading" />
      )}
      {isDataForRender && (
        <>
          <h2>Title: {data.title}</h2>
          <p>Article id: {data.id}</p>
          <article>{data.body}</article>
        </>
      )}
      {isError && <h2>{error.data}, please enter a correct id</h2>}

      <h2>List of all posts!</h2>
      {isLoading && (
        <ThreeDots height="60" width="60" color="#00BFFF" ariaLabel="loading" />
      )}
      <ul>
        {allPostsData &&
          allPostsData.map(item => {
            return <PostItemDel key={item.id} {...item} />;
          })}
      </ul>
    </>
  );
};

export default PostDel;
