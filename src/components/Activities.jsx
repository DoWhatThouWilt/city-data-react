import ActivityCard from "./ActivityCard.jsx"

export default function Activities({ activities }) {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {
        activities.map((activity) =>
          <ActivityCard key={activity.name} {...activity} />
        )
      }
    </div>
  )
}
