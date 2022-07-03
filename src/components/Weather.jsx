import WeatherCard from "./WeatherCard"
import { DateTime as dt } from 'luxon'

function dayOfWeek(utc) {
  return dt.fromSeconds(utc)
    .toFormat('cccc')
}

export default function Weather({ current, daily }) {
  const { temp: currentTemp, weather: [{
    description: currentDesc,
    icon: currentIcon
  }] } = current

  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">

      <WeatherCard
        description={currentDesc}
        icon={currentIcon}
        temp={currentTemp}
        time="Today"
      />

      {daily.map((
        { sunrise: time,
          temp: { day: temp },
          weather: [{ description, icon }]
        }
      ) =>
        <WeatherCard
          key={time}
          description={description}
          icon={icon}
          temp={temp}
          time={dayOfWeek(time)}
        />
      ).slice(1, 6)}

    </div>
  )
}
