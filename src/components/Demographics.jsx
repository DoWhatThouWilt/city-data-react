import { Icon } from '@iconify/react';
import DemographicsCard from './DemographicsCard'

export default function(props) {
  return (
    <div className="grid gap-3 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6">

      <DemographicsCard title="Population" icon="fa6-solid:people-group" metric={props.population} />
      <DemographicsCard title="Median Age" icon="fa6-solid:street-view" metric={props.median_age} />
      <DemographicsCard title="Median Income" icon="fa6-solid:money-bill" metric={`$${props.median_income}`} />
      <DemographicsCard title="Home Value" icon="fa6-solid:house" metric={`$${props.median_home_value}`} />
      <DemographicsCard title="Average Commute" icon="fa6-solid:car" metric={`${props.commute_time} mins`} />
      <DemographicsCard title="Own vs. Rent" icon="fa6-solid:building-circle-check" metric={`${props.own_vs_rent}%`} />

    </div>
  );
}
