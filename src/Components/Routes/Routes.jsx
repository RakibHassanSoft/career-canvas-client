import {createBrowserRouter} from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../Pages/Home/Home";
import SingIn from "../Authentication/SingIn";
import SignUp from "../Authentication/SignUp";

  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/signin',
          element:<SingIn></SingIn>,
      },
      {
          path:'/signup',
          element:<SignUp></SignUp>,
      },
      ]
    },
  ]);


export default router;