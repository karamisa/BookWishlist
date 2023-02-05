import { useState } from "react"
import fullstar from '../assets/img/fullstar.png'
import partialstar from '../assets/img/partialstar.png'
import emptystar from '../assets/img/emptystar.png'


export function BookDetails({ books, onToggleWishlist }) {
    const [index, setIndex] = useState(0)
    
    function onRightArrow() {
        setIndex(index + 1)
    }
    function onLeftArrow() {
        setIndex(index - 1)
    }
    
    function getStarRating(rating) {
        const starCount = 5
        const fullStarCount = Math.floor(rating)
        const emptyStarCount = starCount - fullStarCount - 1
        const partialStarPercentage = (rating - fullStarCount) * 100

        return(
            <div className="rating">
            {[...Array(fullStarCount)].map((_, i) => (
                 <img src={fullstar} key={i} className="star" alt="Full star"/>
            ))}
            {partialStarPercentage > 0 && (
                <img src={partialstar} className="star" alt="Partial star"/>
            )}
            {[...Array(emptyStarCount)].map((_, i) => (
                <img src={emptystar} key={i + fullStarCount + 1} className="star empty" alt="Empty star"/>
            ))}
          </div>
        )
    }

    if (!books.length) return <div>Loading...</div>
    return (
        <section className="book-details">
            <h1>Book Details</h1>

            <div className="book-details-container flex">

                {index > 0 && <button onClick={onLeftArrow}>◀</button>}
                <article className="book-show-details">
                    <div className="details-title flex justify-between">
                        <h2>Title {books[index].title}</h2>
                        <input type="checkbox" checked={books[index].isInWishlist} />
                    </div>
                    <h3 className="details-author">Author: {books[index].author}</h3>
                    <div className="details-description">Description: {books[index].description}</div>
                    <div className="details-rating">
                        <p><span>Rating:</span>
                        <span>{getStarRating(books[index].rating)}</span>
                        </p>
                    </div>
                    <div className="details-price">
                        <span>Price:</span>
                        <span>${books[index].price}</span>
                    </div>
                </article>
                {index < books.length - 1 && <button onClick={onRightArrow}>▶</button>}


            </div>

        </section>
    )
}