import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Friends from "../Pages/Friends/Friends";
import Home from "../Pages/Home/Home";
import PostDetails from "../Pages/Home/Post/PostDetails/PostDetails";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/friends',
        element: <PrivateRoute><Friends></Friends></PrivateRoute>
      },
      {
        path: '/media',
        element: <Media></Media>
      },
      {
        path: '/message',
        element: <Message></Message>
      },
      {
        path: '/aboutme',
        element: <PrivateRoute><AboutMe></AboutMe></PrivateRoute>
      },
      {
        path: "/post/:id",
        element: <PostDetails></PostDetails>,
        loader: ({params}) => fetch(`https://bitit-server.vercel.app/post/${params.id}`)
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/signup',
        element: <SignUp></SignUp>
      }
    ]
  }
])