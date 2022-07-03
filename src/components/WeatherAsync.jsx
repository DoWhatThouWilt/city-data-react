import WeatherAsyncCard from "./WeatherAsyncCard"
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function Weather({ lat, lng }) {
  const [current, setCurrent] = useState([])
  const [daily, setDaily] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const { temp: currentTemp, weather: [{
  //   description: currentDesc,
  //   icon: currentIcon
  // }] } = current

  useEffect(() => {
    const fetchData = async () => {
      const { data: {
        current: currentData, daily: dailyData
      } } = await axios.get(`https://citydata.fly.dev/api/cities/weather?lat=${lat}&lon=${lng}`)

      setCurrent(currentData)
      setDaily(dailyData)
      setIsLoading(false)
    }
    fetchData()
  }, [])

  return (
    <>
      {isLoading ?
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          {[...Array(6)].map((_, i) =>
            <LoadingCard key={i} />
          )}
        </div>
        :
        <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">
          <WeatherAsyncCard weather={current} />
          {daily.map((day) =>
            <WeatherAsyncCard weather={day} key={day.sunrise} />
          ).slice(1, 6)}
        </div>
      }
    </>
  )
}

function LoadingCard() {
  return (

    <div className="bg-white p-4 rounded-3xl flex items-center justify-between shadow-lg">
      <div className="animate-pulse w-16 h-16 rounded-full bg-gray-300" ></div>
      <div className="flex flex-col items-center space-y-2">
        <div className="text-gray-700 text-center text-xl xl:text-base">
          <div className="w-14 h-3 bg-gray-300 rounded-lg"></div>
        </div>
        <div className="text-center text-sm xl:text-xs text-gray-500">
          <div className="w-20 h-3 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
      <div className="flex items-center">
        <div className="text-4xl xl:text-xl font-bold text-right text-gray-900">
          <div className="w-10 h-3 bg-gray-300 rounded-lg"></div>
        </div>
      </div>
    </div>
  )
}
