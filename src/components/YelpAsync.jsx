import YelpCard from "./YelpCard.jsx"
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Yelp({ lat, lng }) {
  const [eateries, setEateries] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      const { data: yelpData } = await axios.get(`https://citydata.fly.dev/api/cities/yelp?lat=${lat}&lon=${lng}`)

      setEateries(yelpData)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      {
        isLoading ?
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {[...Array(6)].map((_, i) =>
              <PictureLoadingCard key={i} />
            )}
          </div>
          :
          <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
            {
              eateries.map((eatery) =>
                <YelpCard key={eatery.id} {...eatery} />
              )
            }
          </div>
      }
    </>
  )
}

function PictureLoadingCard() {

  return (
    <>
      <div className="rounded-xl shadow-lg mx-auto w-full">
        <div className="overflow-hidden">
          <div className="h-[250px] xl:h-[250px] w-full xl:w-auto rounded-t-xl bg-gray-400 animate-pulse">
          </div>
        </div>
        <div className="flex flex-col p-4 my-auto pb-6 ">
          <div className="space-y-2 text-lg xl:text-base font-semibold text-gray-800 h-16">
            <div className="bg-gray-400 w-40 h-4 rounded-lg"></div>
            <div className="bg-gray-400 w-36 h-4 rounded-lg"></div>
          </div>
          <div className="space-y-2 text-base xl:text-sm text-gray-400 mt-5 h-16">
            <div className="bg-gray-300 w-40 h-3 rounded-lg"></div>
            <div className="bg-gray-300 w-28 h-3 rounded-lg"></div>
          </div>
          <div className="mt-5">
            <div className="bg-gray-300 w-40 h-6 rounded-lg"></div>
          </div>
        </div>
      </div>
    </>
  )
}
