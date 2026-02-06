import React, { useEffect, useState } from "react";

function Books() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    fetch("/booksData.json")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((error) => console.error("Error fetching books:", error));
  }, []);

  return (
    <div className="max-w-1170px mx-auto p-4">
      <h2 className="text-4xl font-bold text-center my-10">Books</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {books.map((book) => (
          <div className="card bg-base-100 rounded w-96 shadow-xl">
            <figure className="px-10 pt-10">
              <img src={book.image} className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
              <div className="badge badge-outline badge-accent">
                {book.tags}
              </div>
              <h2 className="card-title">{book.bookName}</h2>
              <p>By : {book.author}</p>
              <hr className="border-dashed border-gray-300 w-full" />
              <div className="flex justify-between items-center w-full">
                <p>{book.category}</p>
                <p>{book.rating}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Books;
