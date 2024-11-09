import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadList } from "../../Utility/addTodataBase";
import Book from "../Book/Book";
import { getWishListStr } from "../../Utility/addToWishList";

const ListedBook = () => {
  const [item, setItem] = useState([]);
  const [item2, setItem2] = useState([]);
  const allBooks = useLoaderData();
  const allBooks2 = useLoaderData();

  useEffect(() => {
    const data = getStoredReadList();
    const listedbook = allBooks.filter((book) => data.includes(book.bookId));

    setItem(listedbook);
    const data2 = getWishListStr();
    const listedbook2 = allBooks2.filter((book) => data2.includes(book.bookId));

    setItem2(listedbook2);
  }, [setItem, setItem2]);

  const handlesort = (message) => {
    console.log(message);
    if (message === "rating") {
      const sortedBooks = [...item].sort((a, b) => a.rating - b.rating);
      const sortedBooks2 = [...item2].sort((a, b) => b.rating - a.rating);
      console.log(sortedBooks2);
      setItem(sortedBooks);
      setItem2(sortedBooks2);
    }

    if (message === "publisher") {
      const sortedBooks = [...item].sort((a, b) => a.publisher - b.publisher);
      const sortedBooks2 = [...item2].sort((a, b) => b.publisher - a.publisher);
      setItem(sortedBooks);
      setItem2(sortedBooks2);
    }
    if (message === "pages") {
      const sortedBooks = [...item].sort((a, b) => a.totalPages - b.totalPages);
      const sortedBooks2 = [...item2].sort(
        (a, b) => b.totalPages - a.totalPages
      );
      setItem(sortedBooks);
      setItem2(sortedBooks2);
    }
  };

  return (
    <div>
      <h2 className="mb-6 bg-gray-100 py-5 text-center font-bold text-2xl rounded-xl">
        Books
      </h2>
      <div className="text-center mb-32">
        <div className="dropdown ">
          <div tabIndex={0} role="button" className="btn m-1">
            Sort By
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
            <li onClick={() => handlesort("rating")}>
              <a>Rating</a>
            </li>
            <li onClick={() => handlesort("pages")}>
              <a>Number of pages</a>
            </li>
            <li onClick={() => handlesort("publisher")}>
              <a>Publisher Year</a>
            </li>
          </ul>
        </div>
      </div>

      {/* tab from Daisy ui */}
      <Tabs>
        <TabList>
          <Tab>Mark as Read</Tab>
          <Tab>Page to Read</Tab>
        </TabList>

        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {item.map((book, ind) => (
              <Book book={book} key={ind}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-10">
            {item2.map((book, ind) => (
              <Book book={book} key={ind}></Book>
            ))}
          </div>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ListedBook;
