import { useEffect } from "react"
import { bookService } from "../services/book.service"

export function BookWishlist(){
    useEffect(() => {
        loadBooks()
    }, [])

    function loadBooks(){
        bookService.query()
        .then(books => {
            console.log(books)
        })
    }
    return (
        <div>
            <h1>Book Wishlist</h1>

        </div>
    )
}