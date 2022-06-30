import { useDeletePostMutation } from 'redux/posts/post';
import { ThreeDots } from 'react-loader-spinner';

const PostItemDel = ({ id, title, body }) => {
  const [deletePost, { isLoading }] = useDeletePostMutation();
  return (
    <li>
      <h2>Title: {title}</h2>
      <p>Article id: {id}</p>
      <article>{body}</article>
      <button type="button" onClick={() => deletePost(id)} disabled={isLoading}>
        Delete Post
      </button>
      {isLoading && (
        <ThreeDots height="60" width="60" color="#00BFFF" ariaLabel="loading" />
      )}
    </li>
  );
};

export default PostItemDel;
