import React from 'react'
import { Outlet } from 'react-router-dom'
import Logo from '../Components/Logo'
import Navigation from '../Components/Navigation'

export default function Home() {
  return (
    <main className='  w-full h-full flex flex-col first-letter: content-center items-center relative text-white font-nunito' >
      <div className=' w-screen h-screen bg-gray-300 fixed -z-10' >

      </div>
      <Logo/>
      <Navigation/>
      <Outlet/>
    </main>
  )
}
