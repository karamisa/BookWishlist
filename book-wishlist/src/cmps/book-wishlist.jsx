import { useState } from "react";
import { WishlistItem } from "./wishlist-item";

export function BookWishlist({ books, onToggleWishlist }) {
  const [sortBy, setSortBy] = useState("title");
  const likedBooks = books.filter((book) => book.isInWishlist);
  const sortedBooks = sortBooks(likedBooks, sortBy);

  function sortBooks(books, sortBy) {
    if (sortBy === "title") {
      return books.sort((a, b) => {
        if (a.title < b.title) return -1;
        if (a.title > b.title) return 1;
        return 0;
      });
    } else if (sortBy === "price") {
      return books.sort((a, b) => a.price - b.price);
    } else if (sortBy === "rating") {
      return books.sort((a, b) => b.rating - a.rating);
    }
    return books;
  }

  function onSortBy(sortBy) {
    setSortBy(sortBy);
  }

  if (!likedBooks.length) return <div>No books in wishlist</div>;
  return (
    <div className="wishlist-container">
      <div className="wishlist-sortBy">
        <button className={sortBy==='title' ? 'sortBy active': 'sortBy'} onClick={()=>onSortBy('title')}>Title</button>
        <button className={sortBy==='price' ? 'sortBy active': 'sortBy'}  onClick={()=>onSortBy('price')}>Price</button>
        <button className={sortBy==='rating' ? 'sortBy active': 'sortBy'}  onClick={()=>onSortBy('rating')}>Rating</button>
      </div>
      <div className="book-wishlist">
        {sortedBooks.map((book) => (
          <WishlistItem
            key={book._id}
            book={book}
            onToggleWishlist={onToggleWishlist}
          />
        ))}
      </div>
      <div className="wishlist-total">
        <h3>Total: ${likedBooks.reduce((acc, book) => acc + (+book.price), 0).toFixed(2)}</h3>
      </div>
    </div>
  );
}
