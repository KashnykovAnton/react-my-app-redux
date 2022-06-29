import { Link } from 'react-router-dom';
import { useState } from 'react';
import {
  useGetPostByIdQuery,
  useGetAllPostsQuery,
  useDeletePostMutation,
} from 'redux/posts/post';

import { ThreeDots } from 'react-loader-spinner';

const Post = () => {
  const [postId, setPostId] = useState('');
  const [showAllPosts, setShowAllPosts] = useState(false);

  const { data, error, isFetching, isError } = useGetPostByIdQuery(postId, {
    skip: postId === '',
  });

  const isDataForRender = !isFetching && !isError && data;

  const { data: allPostsData } = useGetAllPostsQuery();
  const [deletePost, { isLoading: isDeleting }] = useDeletePostMutation();

  const handleSubmit = e => {
    e.preventDefault();
    if (e.target.elements.postId.value.trim() === '') {
      return alert('Enter the correct id!');
    }
    setPostId(e.target.elements.postId.value);
    e.currentTarget.reset();
  };

  const onGetAllPosts = () => {
    setShowAllPosts(true);
  };

  const onHideAllPosts = () => {
    setShowAllPosts(false);
  };

  return (
    <>
      <h2>This is Posts Page</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <input type="text" name="postId" />
        <button type="submit">Search POST by Id</button>
      </form>
      <button type="button" onClick={onGetAllPosts}>
        Get All Posts
      </button>
      <button type="button" onClick={onHideAllPosts}>
        Hide All Posts
      </button>
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
      {showAllPosts && (
        <>
          <h2>List of all posts!</h2>
          {isDeleting && <h3>One moment! Deleting the post...</h3>}
          <ul>
            {allPostsData &&
              allPostsData.map(item => {
                return (
                  <li key={item.id}>
                    <h2>Title: {item.title}</h2>
                    <p>Article id: {item.id}</p>
                    <article>{item.body}</article>
                    <button type="button" onClick={() => deletePost(item.id)}>
                      Delete Post
                    </button>
                  </li>
                );
              })}
          </ul>
        </>
      )}
    </>
  );
};

export default Post;
