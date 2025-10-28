import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import CreatePost ,{CreatePostAction} from "./components/CreatePost.jsx";
import PostList ,{PostLoader}from "./components/PostList.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      { path: "/", element: <PostList/>, loader:PostLoader},
      { path: "/create-post", element: <CreatePost/>, action: CreatePostAction },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
);
