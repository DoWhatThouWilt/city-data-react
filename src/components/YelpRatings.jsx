import HalfStar from "./HalfStar"
import "./ratings.css"

export default function YelpRatings({ rating }) {
  return (
    <div className="relative">
      <div className="relative flex rating-background">
        {[...Array(10)].map((_, i) =>
          <HalfStar key={i} />
        )}
      </div>
      <div className="flex rating-overlay">
        {[...Array(Math.round(rating * 2))].map((_, i) =>
          <HalfStar key={i} />
        )}
      </div>
    </div>
  )
}
