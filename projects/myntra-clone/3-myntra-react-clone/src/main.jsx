import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import App from './route/App.jsx'
import {createBrowserRouter} from "react-router-dom"
import { RouterProvider } from 'react-router-dom'
import Bag from './route/Bag.jsx'
import Home from './route/Home.jsx'
import {Provider} from 'react-redux'
import myntraStore from './Store/index.js'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      { path: "/", element: <Home/>, /*loader:PostLoader*/},
      { path: "/bag", element: <Bag/>, /*action: CreatePostAction */},
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={myntraStore}>
    <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
