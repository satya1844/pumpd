import { useState } from 'react'
import Hero from './components/Hero'
import Workout from './components/Workout'
import Generator from './components/Generator'
import { generateWorkout } from '../src/utils/functions'

function App() {
  const [muscles, setMuscles] = useState([])
  const [poison, setPoison] = useState('individual')
  const [goal, setGoal] = useState('strength_power')
  const [workout, setWorkout] = useState(null)
  
  function updateWorkout () {
    if(muscles.length < 1){
      return
    }
    let newWorkout = generateWorkout({poison, muscles, goal});
    console.log(newWorkout) // log the workout object
    setWorkout(newWorkout)  
    window.location.href = '#workout'
  }

  return (
    <main className='min-h-screen flex flex-col bg-gradient-to-r
     from-slate-800 to-slate-900 text-white text-sm sm:text-base'>
      <Hero />
      <Generator 
        muscles={muscles}
        setMuscles={setMuscles}
        poison={poison}
        setPoison={setPoison}
        goal={goal}
        setGoal={setGoal}
        updateWorkout={updateWorkout}
      />
      <Workout workout={workout} />
    </main>
  )
}

export default App