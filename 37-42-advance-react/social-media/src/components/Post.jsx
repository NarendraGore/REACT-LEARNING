import { useContext } from "react";
import { MdDelete } from "react-icons/md";
import { PostList } from "../store/post-list-store";

const Post = ({ post }) => {
  const contextObj = useContext(PostList);
  const deletePost = contextObj.deletePost;
  return (
    <div className="card post-card" style={{ width: "30rem" }}>
      <div className="card-body">
        <h5 className="card-title">
          {post.title}
          <span
            className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
            onClick={() => deletePost(post.id)}
          >
            <MdDelete />
          </span>
        </h5>
        <p className="card-text">{post.body}</p>
        {post.tags.map((tag) => (
          <span key={tag} className="badge text-bg-primary hashtag">
            {tag}
          </span>
        ))}

        <div>
          <p>Likes: {post.reactions.likes}</p>
          <p>Dislikes: {post.reactions.dislikes}</p>
        </div>

        <div className="alert alert-success reactions" role="alert">
          This post has been Seen by {post.views} people
        </div>
      </div>
    </div>
  );
};
export default Post;
