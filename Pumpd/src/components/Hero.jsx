import React from 'react'
import Button from './Button'
export default function Hero() {
  return (
    <div className='min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4 '>
      <div className='flex flex-col gap-4'>
      <p>IT'S TIME TO GET</p>
      <h1 className='uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>Grim<span className='text-blue-400'>forge</span>
      </h1>
      </div>
      <p className='text-sm md:text-base font-light'>Welcome to the grind zone — where excuses end and results begin. Whether you're lifting your first dumbbell or smashing PRs, our app is your ultimate training partner. Track workouts, stay motivated, and crush goals — one rep at a time
      </p>
      <Button  func = {() => {
        window.location.href = '#generate'
      }}   text = {'accept & begin'}></Button>
    </div>
  )
}
