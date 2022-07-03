import HalfStar from "./HalfStar"
import "./ratings.css"

export default function GoogleRatings({ rating }) {
  return (
    <div className="flex google-ratings">
      {[...Array(Math.round(2 * rating))].map((_, i) =>
        <HalfStar key={i} />
      )}
    </div>
  )
}
