import GoogleRatings from './GoogleRatings'

export default function ActivityCard({ name, photo_url, link, address, rating }) {
  return (
    <>
      <a href={link} className="rounded-xl shadow-lg mx-auto w-full transform hover:-translate-y-1 duration-300 hover:shadow-xl cursor-pointer">
        <div className="overflow-hidden">
          <img className="h-[250px] xl:h-[250px] w-full rounded-t-xl object-cover" src={photo_url}
            alt="" />
        </div>
        <div className="flex flex-col p-4 my-auto pb-6 ">
          <h1 className="text-lg xl:text-base font-semibold text-gray-800 h-16">{name}</h1>
          <p className="text-base xl:text-sm text-gray-400 mt-5 h-16">{address}</p>
          <div className="mt-5">
            <GoogleRatings rating={rating} />
          </div>
        </div>
      </a>
    </>
  )
}
