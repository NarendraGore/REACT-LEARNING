import { useContext, useRef } from "react";
import { PostList } from "../store/post-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);
  const userIdElement = useRef();
  const PostTitleElement = useRef();
  const PostBodyElement = useRef();
  const ReactionsElement = useRef();
  const TagElement = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = PostTitleElement.current.value;
    const postBody = PostBodyElement.current.value;
    const reactions = ReactionsElement.current.value;
    const tags = TagElement.current.value.split(" ");

    userIdElement.current.value = "";
    PostTitleElement.current.value = "";
    PostBodyElement.current.value = "";
    ReactionsElement.current.value = "";
    TagElement.current.value = "";
    return addPost(userId, postTitle, postBody, reactions, tags);
  };

  return (
    <form className="create-post" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your user Id here...
        </label>
        <input
          type="text "
          ref={userIdElement}
          className="form-control"
          id="userId"
          placeholder="Your User ID........."
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text "
          ref={PostTitleElement}
          className="form-control"
          id="title"
          placeholder="How are you feeling today?"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text "
          rows="4"
          ref={PostBodyElement}
          className="form-control"
          id="body"
          placeholder="Tell us more about it........."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Number of Reactions
        </label>
        <input
          type="reactions "
          ref={ReactionsElement}
          className="form-control"
          id="reaction"
          placeholder="Number of people reacted to this post  "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter Your Hashtag Here...
        </label>
        <input
          type="tags "
          ref={TagElement}
          className="form-control"
          id="tags"
          placeholder="Please Enter your Tag Using Space?"
        />
      </div>
      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </form>
  );
};
export default CreatePost;
