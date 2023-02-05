import { useState } from "react";
import { StarRating } from "./star-rating";

export function BookDetails({ books, onToggleWishlist }) {
  const [index, setIndex] = useState(0);

  function onRightArrow() {
    setIndex(index + 1);
  }
  function onLeftArrow() {
    setIndex(index - 1);
  }

  const book = books[index];
  if (!books.length) return <div>No books to show</div>
  return (
      <div className="book-details-container flex">
        <div className="slider">
          {index > 0 && <button onClick={onLeftArrow}>◀</button>}
        </div>
        <article className="book-show-details">
          <div className="details-title flex justify-between">
            <h2>Title {book.title}</h2>
            <input
              type="checkbox"
              onChange={() => onToggleWishlist(book._id)}
              checked={book.isInWishlist}
            />
          </div>
          <h3 className="details-author">{book.author}</h3>
          <div className="details-description">
            Description: {book.description}
          </div>
          <div className="details-rating">
              <span>Rating:</span>
              <span>
                <StarRating rating={book.rating} />
              </span>
          </div>
          <div className="details-price">
            <span>Price:</span>
            <span>${book.price}</span>
          </div>
        </article>
        <div className="slider">
          {index < books.length - 1 && (
            <button onClick={onRightArrow}>▶</button>
          )}
        </div>
      </div>
  );
}
