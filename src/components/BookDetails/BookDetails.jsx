import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredReadList } from "../../Utility/addTodataBase";
import { saveWishListToLocal } from "../../Utility/addToWishList";

const BookDetails = () => {
  const { bookId } = useParams();
  // console.log(bookId)
  const Id = parseInt(bookId);
  const data = useLoaderData();

  const book = data.find((book) => book.bookId === Id);
  const {
    bookId: idName,
    bookName,
    author,
    image,
    review,
    totalPages,
    rating,
    category,
    tags,
    publisher,
    yearOfPublishing,
  } = book;
  // console.log(book);

  const handleReadlist = (id) => {
   
    addToStoredReadList(id);
  
  };

  const handleWishlist = (id) => {
  
    saveWishListToLocal(id);
    
  };

  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden flex flex-col lg:flex-row p-6">
      <div className="flex-shrink-0 w-1/2 flex bg-gray-200 p-10  rounded-xl justify-center items-center">
        <img src={image} alt="Book Cover" className="max-h-[400px] " />
      </div>

      <div className="flex-1 pl-6 space-y-6">
        <h2 className="text-2xl font-bold mb-2">Book Title</h2>
        <p className="text-gray-600 mb-2">
          <strong>Author:</strong> Author Name
        </p>
        <div className="border-b border-gray-300 mb-4"></div>

        <h4 className="text-lg font-semibold text-teal-500 mb-2">Category</h4>
        <p className="text-gray-800 mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        <div className="flex flex-wrap gap-2 mb-4">
          {tags?.map((tag, index) => (
            <div
              className="border text-sm py-2 px-5 rounded-full bg-green-200"
              key={index}>
              {tag}
            </div>
          ))}
        </div>

        <table className="text-sm text-gray-700 mb-4">
          <tbody>
            <tr>
              <td className="pr-4 font-semibold">Pages:</td>
              <td>350</td>
            </tr>
            <tr>
              <td className="pr-4 font-semibold">Publisher:</td>
              <td>Publisher Name</td>
            </tr>
            <tr>
              <td className="pr-4 font-semibold">Year:</td>
              <td>2023</td>
            </tr>
            <tr>
              <td className="pr-4 font-semibold">Rating:</td>
              <td>4.5</td>
            </tr>
          </tbody>
        </table>

        <div className="flex space-x-4">
          <button
            onClick={()=>handleReadlist(idName)}
            className="bg-teal-500 text-white py-2 px-4 rounded hover:bg-teal-600 font-semibold">
            Read List
          </button>
          <button
            onClick={()=>handleWishlist(idName)}
            className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 font-semibold">
            Wishlist
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookDetails;
