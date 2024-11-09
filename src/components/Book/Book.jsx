import React from "react";
import { Link } from "react-router-dom";

const Book = ({ book }) => {
  const {
    bookId,
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

  return (
    <Link to={`/books/${bookId}`}>
      <div className="card bg-base-100 max-w-[500px] h-[600px] shadow-xl flex flex-col justify-between mx-auto">
        {/* Image Section */}
        <figure className="bg-gray-200 rounded-lg m-6 mb-0 min-h-[240px] ">
          <img className="w-[100px] h-[150px] " src={image} alt="" />
        </figure>

        {/* Card Body */}
        <div className="card-body h-full flex flex-col justify-between">
          <h2 className="card-title">
            <div className="flex flex-wrap gap-2">
              {tags?.map((tag, index) => (
                <div
                  className="border text-sm py-2 px-5 rounded-full bg-green-200"
                  key={index}
                >
                  {tag}
                </div>
              ))}
            </div>
          </h2>
          
          <div>
            <h2 className="font-bold text-2xl py-4 line-clamp-2 overflow-hidden text-ellipsis">
              {bookName}
            </h2>
            <p className="text-gray-500 font-semibold">By: {author}</p>
            <div className="divider"></div>
          </div>

          <div className="card-actions justify-between mt-auto">
            <div className="badge border-gray-300 py-3 badge-outline">{category}</div>
            <div className="badge badge-outline">{rating}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Book;
