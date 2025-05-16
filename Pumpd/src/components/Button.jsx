import React from 'react'

export default function Button(props) {
  const { func, text } = props
  
  return (
    <button  
      onClick={func} 
      className='px-8 py-4 rounded-md border-[2px] bg-slate-950 border-blue-400 border-solid blueShadow duration-150 w-full max-w-[300px] mx-auto'
    >
      <p>{text}</p>
    </button>
  )
}