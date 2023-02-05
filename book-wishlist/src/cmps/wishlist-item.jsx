export function WishlistItem({ book, onToggleWishlist }) {
  return (
    <div className="wishlist-item">
      <div className="wishlist-item-content">
        <h3>{book.title}</h3>
        <button onClick={() => onToggleWishlist(book._id)}>X</button>
      </div>
    </div>
  );
}
