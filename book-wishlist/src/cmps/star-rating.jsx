import fullstar from '../assets/img/fullstar.png'
import partialstar from '../assets/img/partialstar.png'
import emptystar from '../assets/img/emptystar.png'

export function StarRating({rating}){
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

