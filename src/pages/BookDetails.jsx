import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { NavLink } from "react-router-dom";

function BookDetails() {
  const { bookId } = useParams(); // URL থেকে ডাইনামিক আইডি ধরবে
  const [book, setBook] = useState(null);

  useEffect(() => {
    // পাবলিক ফোল্ডারের JSON থেকে ডেটা ফেচ করা
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => {
        // ক্লিক করা বইয়ের আইডির সাথে মিল রেখে ডেটা খুঁজে বের করা
        const selectedBook = data.find((b) => b.bookId === parseInt(bookId));
        setBook(selectedBook);
      })
      .catch((error) => console.error("Error fetching book details:", error));
  }, [bookId]);

  // ডেটা লোড হওয়ার সময় একটি লোডার দেখানো
  if (!book) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <span className="loading loading-spinner loading-lg text-success"></span>
      </div>
    );
  }

  return (
    <div className="max-w-[1170px] mx-auto my-12 p-4 lg:p-0">
      <div className="flex flex-col lg:flex-row gap-12 items-center lg:items-start">
        {/* বাম পাশ: ইমেজ এবং ৩ডি ইফেক্ট সেকশন */}
        <div className="w-full lg:w-1/2 bg-[#F3F3F3] rounded-2xl flex justify-center items-center p-12 min-h-[500px]">
          <div className="hover-3d relative">
            <figure className="max-w-full rounded-lg shadow-2xl">
              <img
                src={book.image}
                alt={book.bookName}
                className="max-h-[560px] object-contain rounded-lg"
              />
            </figure>
            {/* আপনার ৩ডি ইফেক্টের জন্য প্রয়োজনীয় ডিভগুলো */}
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>

        {/* ডান পাশ: কন্টেন্ট সেকশন (সম্পূর্ণ রেসপনসিভ) */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <h1 className="text-4xl lg:text-5xl font-bold mb-4 font-playfair">
            {book.bookName}
          </h1>
          <p className="text-xl font-medium text-gray-700 mb-4">
            By : {book.author}
          </p>

          <div className="divider"></div>
          <p className="text-xl font-medium text-gray-600">{book.category}</p>
          <div className="divider"></div>

          <p className="mb-6 leading-relaxed">
            <span className="font-bold">Review : </span>
            <span className="text-gray-500">{book.review}</span>
          </p>

          <div className="flex items-center gap-4 mb-6">
            <span className="font-bold">Tag</span>
            <div className="flex flex-wrap gap-2">
              {book.tags?.map((tag, index) => (
                <span
                  key={index}
                  className="text-[#23BE0A] bg-[#23BE0A0D] px-4 py-2 rounded-full font-bold text-sm"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </div>

          <div className="divider"></div>

          {/* টেকনিক্যাল ইনফরমেশন গ্রিড */}
          <div className="space-y-3 mb-8">
            <div className="flex gap-10 lg:gap-20">
              <p className="text-gray-500 w-40">Number of Pages:</p>
              <p className="font-bold">{book.totalPages}</p>
            </div>
            <div className="flex gap-10 lg:gap-20">
              <p className="text-gray-500 w-40">Publisher:</p>
              <p className="font-bold">{book.publisher}</p>
            </div>
            <div className="flex gap-10 lg:gap-20">
              <p className="text-gray-500 w-40">Year of Publishing:</p>
              <p className="font-bold">{book.yearOfPublishing}</p>
            </div>
            <div className="flex gap-10 lg:gap-20">
              <p className="text-gray-500 w-40">Rating:</p>
              <p className="font-bold">{book.rating}</p>
            </div>
          </div>

          {/* অ্যাকশন বাটনসমূহ */}
          <div className="flex gap-4">
            <NavLink to="/PagesToRead">
              <button className="btn btn-outline hover:bg-[#23BE0A] hover:border-[#23BE0A] px-10 font-bold border-gray-300">
                Read
              </button>
            </NavLink>
            <NavLink to="/ListedBooks">
              <button className="btn bg-[#50B1C9] text-white px-10 hover:bg-[#3ea1b8] font-bold border-none">
                Wishlist
              </button>
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetails;
