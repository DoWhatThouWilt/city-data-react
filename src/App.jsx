import { useState, useEffect } from 'react';
import axios from 'axios'
import LoadingWave from './components/LoadingWave'
import Demographics from './components/Demographics';
import WeatherAsync from './components/WeatherAsync'
import YelpAsync from './components/YelpAsync'
import Activities from './components/Activities';
import Schools from './components/Schools';


const p = (x) => console.log(x)

function App({ city }) {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true)
  const [isError, setIsError] = useState(false)
  const [errorMsg, setErrorMsg] = useState("")


  useEffect(() => {
    let ignore = false

    const getData = async (city) => {

      try {
        const { data: cityData } = await axios.get(`https://citydata.fly.dev/api/cities/query/${city}`)
        p(cityData)
        setData(cityData)
        setIsLoading(false)
      } catch (error) {
        setIsLoading(false)
        setIsError(true)
        p(error.response.data.errors.detail)
        setErrorMsg(error.response.data.errors.detail)
      }

    }
    if (!ignore) {
      getData(city)
    }

    return () => {
      ignore = true
      setIsError(false)
      setIsLoading(true)
    }
  }, [city])

  if (isLoading) {
    return (
      <>
        <LoadingWave />
      </>
    )
  }

  return (
    <div className="p-4 flex flex-col">
      {isError && <div className="text-center text-red-500 text-xl">{errorMsg}</div>}
      {data.lng && !isError &&
        <div className="mx-auto space-y-10 max-w-7xl">
          <div className="text-center text-3xl">Demographics</div>
          <Demographics {...data} />

          <div className="text-center text-3xl">Weather</div>
          {data.lng && <WeatherAsync lng={data.lng} lat={data.lat} />}

          <div className="text-center text-3xl">Places to Eat</div>

          {/* <Yelp eateries={eateries} /> */}
          {data.lng && <YelpAsync lng={data.lng} lat={data.lat} />}

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

