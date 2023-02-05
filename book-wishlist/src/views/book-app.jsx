import { BookDetails } from "../cmps/book-details";
import { BookWishlist } from "../cmps/book-wishlist";

export function BookApp(){

    return (
        <div className="flex">
        <BookDetails />
        <BookWishlist />
        </div>
    )
}