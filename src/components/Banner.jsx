import React from "react";
import bannerImg from "../assets/books.jpg";

function Banner() {
  return (
    <div className="max-w-[1170px] mx-auto my-12">
      <div className="hero bg-base-300 p-10 md:p-20 rounded-2xl">
        <div className="hero-content flex-col lg:flex-row-reverse w-full">
          {/* ডান পাশ - ইমেজ কন্টেইনার */}
          <div className="flex-1 flex justify-center lg:justify-end">
            <img
              src={bannerImg}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Books"
            />
          </div>

          {/* বাম পাশ - টেক্সট কন্টেইনার */}
          <div className="flex-1 flex flex-col gap-6">
            <h1 className="text-5xl font-bold leading-tight">
              Books to freshen up your bookshelf
            </h1>
            <div>
              <button className="btn btn-success text-white">
                View The List
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
