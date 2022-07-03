import { useState, useEffect } from 'react';
import axios from 'axios'
import LoadingWave from './components/LoadingWave'
import Demographics from './components/Demographics';
import WeatherAsync from './components/WeatherAsync'
import Yelp from './components/Yelp';
import Activities from './components/Activities';
import Schools from './components/Schools';


const p = (x) => console.log(x)

function App() {
  const [data, setData] = useState([]);
  const [eateries, setEateries] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  // const [isError, setIsError] = useState(false)

  useEffect(() => {
    const getData = async (city) => {
      const { data: cityData } = await axios.get(`https://citydata.fly.dev/api/cities/query/${city}`)
      const { lat, lng } = cityData
      const { data: yelpData } = await axios.get(`https://citydata.fly.dev/api/cities/yelp?lat=${lat}&lon=${lng}`)

      setData(cityData)
      setEateries(yelpData)
      setIsLoading(false)
    }
    getData("manassas, va")
  }, [])

  return (
    <div className="p-4 flex flex-col">
      {isLoading ? <LoadingWave /> :
        <div className="mx-auto space-y-10 max-w-7xl">
          <div className="text-center text-3xl">Demographics</div>
          <Demographics {...data} />

          <div className="text-center text-3xl">Weather</div>
          {data.lng && <WeatherAsync lng={data.lng} lat={data.lat} />}

          <div className="text-center text-3xl">Places to Eat</div>

          <Yelp eateries={eateries} />

          <div className="text-center text-3xl">Things to Do</div>
          <Activities activities={data.activities} />

          <div className="text-center text-3xl">Schools</div>
          <Schools schools={data.schools} />
        </div>
      }
    </div>
  );
}

export default App;

