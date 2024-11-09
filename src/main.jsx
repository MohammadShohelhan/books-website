import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./components/Root";
import ErrorPage from "./components/Errorpage/ErrorPage";
import Home from "./components/Home/Home";
import DashBoard from "./components/Dashboard/DashBoard";
import BookDetails from "./components/BookDetails/BookDetails";
import ListedBook from "./components/LisestedBook/ListedBook";
import ReadedBooked from "./components/ReadedBook/ReadedBooked";
import WishedBooked from "./WishedBooked/WishedBooked";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "books/:bookId",
        element: <BookDetails></BookDetails>,
        loader: () => fetch("/booksData.json"),
      },
      {
        path: "dashboard",
        element: <DashBoard></DashBoard>,
      },
      {
        path:'/listedBook',
        element:<ListedBook></ListedBook>,
        loader: () => fetch("/booksData.json"),
        children:[
           {
            path:'/listedBook/items',
            element:<ReadedBooked></ReadedBooked>,
           },
           {
            path:'/listedBook/items2',
            element:<WishedBooked></WishedBooked>
           }
        ]
      },
      {
        path:'/readedpages',
        element:<ReadedBooked></ReadedBooked>,
      }
    ],
  }
 
  
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
