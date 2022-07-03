import YelpRatings from './YelpRatings'
// import logo from '../yelp.png'

export default function YelpCard({ name, url, image_url, location, rating }) {
  return (
    <>
      <a href={url} className="rounded-xl shadow-lg mx-auto w-full transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
        <div className="overflow-hidden">
          <img className="h-[250px] xl:h-[250px] w-full xl:w-auto rounded-t-xl object-cover" src={image_url}
            alt="" />
        </div>
        <div className="flex flex-col p-4 my-auto pb-6 ">
          <h1 className="text-lg xl:text-base font-semibold text-gray-800 h-16">{name}</h1>
          <p className="text-base xl:text-sm text-gray-400 mt-5 h-16">{location.display_address.join(" ")}</p>
          <div className="mt-5">
            <YelpRatings rating={rating} />
          </div>
          {/* <img src={logo} className="self-center h-12 mt-2" alt="" /> */}
        </div>
      </a>
    </>
  )
}
