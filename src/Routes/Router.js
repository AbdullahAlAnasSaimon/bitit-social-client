import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import AboutMe from "../Pages/AboutMe/AboutMe";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Media from "../Pages/Media/Media";
import Message from "../Pages/Message/Message";
import SignUp from "../Pages/SignUp/SignUp";

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
        path: '/media',
        element: <Media></Media>
      },
      {
        path: '/message',
        element: <Message></Message>
      },
      {
        path: '/aboutme',
        element: <AboutMe></AboutMe>
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