import YelpCard from "./YelpCard.jsx"

export default function Yelp({ eateries }) {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {
        eateries.map((eatery) =>
          <YelpCard key={eatery.id} {...eatery} />
        )
      }
    </div>
  )
}
