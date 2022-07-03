import SchoolCard from "./SchoolCard.jsx"

export default function Schools({ schools }) {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
      {
        schools.map((school) =>
          <SchoolCard key={school.name} {...school} />
        )
      }
    </div>
  )
}
