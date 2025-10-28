import { useContext } from "react";
import Post from "./Post";
import { PostList as PostListContext } from "../store/post-list-store.jsx";

const PostList = () => {
  // Get values from context
  const { postList } = useContext(PostListContext);
  console.log(postList)

  return (
    <>
      {postList.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
};

export default PostList;
