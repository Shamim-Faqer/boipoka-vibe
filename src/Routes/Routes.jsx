import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../pages/Home";
import ListedBooks from "../pages/ListedBooks";
import PagesToRead from "../pages/PagesToRead";
import BookDetails from "../pages/BookDetails";
import Login from "../pages/Login";
import Signup from "../pages/Signup";



export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/listed-books",
        element: <ListedBooks />,
      },
      {
        path: "/pages-to-read",
        element: <PagesToRead />,
      },
      {
        path: "/book/:bookId",
        element: <BookDetails />,
      },
      {
        path:"/PagesToRead",
        element: <PagesToRead />,
      },
      {
        path: "/ListedBooks",
        element: <ListedBooks />,
      },
      {
        path: "/Login",
        element: <Login />,
      },
      {
      
        path: "/Signup",
        element: <Signup />
      
      },
    ],
  },
]);
