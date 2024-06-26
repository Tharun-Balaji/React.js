import React from 'react'
import {UilSearch, UilLocationPoint} from "@iconscout/react-unicons"

function input() {
  return (
    <div className='flex flex-row justify-center my-6' >

        <div className='flex flex-row w-3/4 items-center justify-end space-x-4' >

            <input type='text' className='text-xl font-light shadow-xl focus:outline-none capitalize placeholder:lowercase'
            placeholder='Search for city...' />

            <UilSearch size={25} className = "text-white cursor-pointer transition ease-out hover:scale-125" />
            <UilLocationPoint size={25} className = "text-white cursor-pointer transition ease-out hover:scale-125" />


            <div className='flex flex-row w-1/4 items-center justify-center' >
                <button name = "metric" className='text-xl text-white font-light'  > ℃ </button>
                 <p className='text-xl text-white mx-1' >|</p>
                <button name = "imperial"  className='text-xl text-white font-light' >℉</button>

            </div> 

        </div>
       
    </div>
  )
}

export default input
