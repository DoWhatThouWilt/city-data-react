export default function WeatherCardAlt({ time, temp, description, icon }) {
  return (
    <>
      <div className="bg-white p-4 xl:pl-0 rounded-3xl flex items-center justify-between shadow-lg">
        <div className="flex-shrink-0">
          <img className="w-16 h-16" src={`http://openweathermap.org/img/wn/${icon}@2x.png`} />
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="text-gray-700 text-center text-xl xl:text-base">{time}</p>
          <p className="text-center text-sm xl:text-xs text-gray-500">{description}</p>
        </div>
        <div className="flex items-center">
          <p className="text-4xl xl:text-xl font-bold text-right text-gray-900">{Math.round(temp)}°</p>
        </div>
      </div>
    </>
  )
}
