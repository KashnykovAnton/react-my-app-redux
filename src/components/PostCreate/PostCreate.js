import { useNavigate } from 'react-router-dom';
import { useCreatePostMutation } from 'redux/posts/post';
import { ThreeDots } from 'react-loader-spinner';

const PostCreate = () => {
  const navigate = useNavigate();
  const [createPost, { isLoading, isSuccess }] = useCreatePostMutation();

  // ------ Another type of passing data! Here to post.js we pass an object
  // ------ In another case we pass a value? that transform to object in post.js
  //   const handleSubmit = e => {
  //     e.preventDefault();
  //     createPost({
  //       title: `${e.target.elements.title.value}`,
  //       body: `${e.target.elements.body.value}`,
  //     });
  //     e.target.reset();
  //   };

  const goToPostsPage = () => navigate('/posts', { replace: true });

  const handleSubmit = e => {
    e.preventDefault();
    createPost(e.target.elements);
    e.target.reset();
    // ----- This will be redirect you automaticaly!
    // setTimeout(() => {
    //   goToPostsPage();
    // }, 2000);
  };

  //   ----- This will be redirect you by click on button
  const onClickRedirect = e => {
    e.preventDefault();
    goToPostsPage();
  };

  return (
    <>
      <h2>Post Create Page</h2>
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="title">
          Title
          <input type="text" name="title" id="title" />
        </label>
        <label htmlFor="body">
          Body
          <input type="text" name="body" id="body" />
        </label>
        <button type="submit" disabled={isLoading}>
          Create
        </button>
      </form>

      {isLoading && (
        <ThreeDots height="60" width="60" color="#00BFFF" ariaLabel="loading" />
      )}

      {/* {isSuccess && (
        <h2>
          Post was added! <br /> Now you will be redirect to Post Page
        </h2>
      )} */}

      {isSuccess && (
        <>
          <h2>Post was added!</h2>
          <p>Do you want to redirect to Posts Page?</p>
          <button type="button" onClick={onClickRedirect}>
            Go to Posts Page
          </button>
        </>
      )}
    </>
  );
};

export default PostCreate;
