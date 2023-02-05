import { useState } from "react"



export function BookDetails({ books, onToggleWishlist }) {
    const [index, setIndex] = useState(0)


    function onRightArrow() {
        setIndex(index + 1)
    }

    function onLeftArrow() {
        setIndex(index - 1)
    }



    return (
        <section className="book-details">
            <h1>Book Details</h1>

            <div className="book-details-container flex">

                <button onClick={onLeftArrow}>◀</button>
                <article className="book-show-details">
                    <div className="details-title">
                        <h2>Title {books[index].title}</h2>
                        <p>checkbox: {books[index].isInWishlist}</p>
                    </div>
                    <h3 className="details-author">Author: {books[index].author}</h3>
                    <h6 className="details-description">Description: {books[index].description}</h6>
                    <div className="details-rating">
                        <h8>Rating:</h8>
                        <h8>{books[index].rating}</h8>
                    </div>
                    <div className="details-price">
                        <span>Price:</span>
                        <span>${books[index].price}</span>
                    </div>
                </article>
                <button onClick={onRightArrow}>▶</button>


            </div>

        </section>
    )
}