
import { PostList } from "../store/post-list-store";
import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { addPost } = useContext(PostList);



  return (
    <Form method="POST" className="create-post">
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter Your user Id here...
        </label>
        <input
          type="text "
          name="userId"
          className="form-control"
          id="userId"
          placeholder="Enter Your User ID......!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          type="text "
          name="title"
          className="form-control"
          id="title"
          placeholder="How are you feeling today....!"
        />
      </div>

      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          type="text "
          rows="4"
          name="body"
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
          name="reactions"
          className="form-control"
          id="reaction"
          placeholder="Please Enter Rections(likes& Dislikes )using comma. (ex. 80,50).......... "
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter Your Hashtag Here...
        </label>
        <input
          type="tags "
          name="tags"
          className="form-control"
          id="tags"
          placeholder="Please Enter your Tag Using Space....!"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Enter Your Views Here...
        </label>
        <input
          type="views "
          name="views"
          className="form-control"
          id="views"
          placeholder="Please Enter your Tag Using Space.....!"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post
      </button>
    </Form>
  );
};

export async function CreatePostAction(data) {
  const formData = await data.request.formData();
  const postData = Object.fromEntries(formData);
  postData.tags = postData.tags.split(" ");
  console.log(postData);
  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(postData),
  })
    .then((res) => res.json())
    .then((post) => console.log(post));

  redirect("/");
}

export default CreatePost;
