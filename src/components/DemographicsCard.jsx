import { Icon } from '@iconify/react';

export default function DemographicsCard({ title, metric, icon }) {
  return (
    <div className="bg-white shadow-lg shadow-gray-200 rounded-2xl p-4">
      <div className="flex items-center">
        <div className="inline-flex flex-shrink-0 justify-center items-center w-12 h-12 text-white bg-gradient-to-br from-pink-500 to-violet-500 rounded-lg">
          <Icon icon={icon} className="h-8 w-8" />
        </div>
        <div className="flex-shrink-0 ml-3">
          <span className="text-3xl md:text-2xl lg:text-xl xl:text-lg font-bold leading-none text-gray-900">
            {metric}
          </span>
          <h3 className="text-base lg:text-sm xl:text-xs font-normal text-gray-500">{title}</h3>
        </div>
      </div>
    </div>
  )
}
