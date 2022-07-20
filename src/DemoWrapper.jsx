import { useState } from "react"
import App from './App'

export default function() {
  const [city, setCity] = useState("leesburg, va")

  return (
    <div>
      <div className="my-8 space-y-4 flex flex-col items-center">
        <div className="text-gray-300 text-sm">Format is "[city], [2 letter state code]", ex "charleston, sc"</div>
        <input
          type="text"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          placeholder="City"
          className="block mx-auto px-3 py-4 placeholder-slate-300 text-slate-600 relative bg-white rounded-xl text-base border-0 shadow outline-none focus:outline-none focus:ring w-full sm:w-auto" />
      </div>
      <App city={city} />
    </div>
  )
}
