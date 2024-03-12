import React from 'react'

function TopButtons() {
    const cities = [
        {
            id:1,
            name:"london"
        },
        {
            id:2,
            name:"sydney"
        },
        {
            id:3,
            name:"Tokyo"
        },
        {
            id:4,
            name:"Toronto"
        },
        {
            id:5,
            name:"Paris"
        }
    ];
  return (
    <div className='flex items-center, justify-around my-6' >
      {
        cities.map((city) => {
            return (
               <button key={city.id} className='text-white text-lg font-medium' >{city.name}</button>
            );
        })
      }
    </div>
  )
}

export default TopButtons
