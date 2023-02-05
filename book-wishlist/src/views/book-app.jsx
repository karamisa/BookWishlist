import { useEffect, useState } from "react";
import { BookDetails } from "../cmps/book-details";
import { BookWishlist } from "../cmps/book-wishlist";
import { bookService } from "../services/book.service";

export function BookApp(){
    const [books, setBooks] = useState([])

    useEffect(() => {
       loadBooks()
    }, [])

    async function loadBooks(){
        const books = await bookService.query()
        setBooks(books)
    }

    return (
        <div className="flex">
        <BookDetails books={books}/>
        <BookWishlist books={books} />
        </div>
    )
}