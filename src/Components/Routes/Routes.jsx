import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../../Layout/MainLayout";
import Homepage from "../../Pages/HomePage/Homepage";
import Timeline from "../../Pages/Timeline/Timeline";
import Stats from "../../Pages/Stats/Stats";
import ErrorPage from "../ErrorPage/ErrorPage";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
      {
        index: true,
        element:<Homepage></Homepage>
      },
      {
        path:"/timeline",
        element:<Timeline></Timeline>
      },
      {
        path:"/stats",
        element:<Stats></Stats>
      }
    ],
    errorElement:<ErrorPage/>
  },
]);
export default router;