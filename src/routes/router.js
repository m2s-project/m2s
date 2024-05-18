import { createHashRouter } from "react-router-dom";
import Root from "../pages/root/Root";
import ErrorPage from "../pages/root/ErrorPage";


export const router = createHashRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    // loader: rootLoader,
    // action: rootAction,
    children: [
      // Index DashBoard
      // { index: true, element: <Dashbord /> },
      // login
   
      
   
    ],
  },
]);
