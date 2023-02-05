import { useEffect, useState } from "react";
import { BookDetails } from "../cmps/book-details";
import { BookWishlist } from "../cmps/book-wishlist";
import { bookService } from "../services/book.service";

export function BookApp(){
    const [books, setBooks] = useState([])

    useEffect(() => {
        if (books.length) return
       loadBooks()
    }, [])

    async function loadBooks(){
        const books = await bookService.query()
        setBooks(books)
    }


    async function onToggleWishlist(bookId){
        const updatedBooks = books.map(book => {
            if (book._id === bookId) book.isInWishlist = !book.isInWishlist
            return book
        })
        setBooks(updatedBooks)
        
    }

    if (!books || !books.length) return <div>Loading...</div>
    return (
        <div className="book-app flex">
        <BookDetails books={books} onToggleWishlist={onToggleWishlist}/>
        <BookWishlist books={books} onToggleWishlist={onToggleWishlist}/>
        </div>
    )
}