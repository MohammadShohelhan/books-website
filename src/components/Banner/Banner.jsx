import React from "react";
import bannnerImage from "../../assets/books.jpg"
const Banner = () => {
  return (
    <div>
      <div className="hero bg-gray-100 rounded-xl min-h-[60vh] my-24">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={bannnerImage}
            className="max-w-lg rounded-lg shadow-2xl"
          />
          <div className="basis-1/2">
            <h1 className="text-5xl font-bold py-24">Books to freshen up your bookshelf</h1>
            
            <button className="btn bg-green-400 text-white font-bold">Get Started</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
