import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'


function App() {
  const [color, setColor] = useState("olive")

  return (
    
      <div className='w-full h-screen duration-200'
      style={{backgroundColor:color}}>
        <h1 className='text-center items-center text-6xl justify-center px-60 py-72'>REACT PROJECT OF BG CHANGER</h1>
        <div className="fixed flex flex-wrap
      justify-center bottom-12 inset-x-0 px-2">

        <div className="flex flex-wrap justify-center
        gap-3 shadow-lg bg-white px-3 py-2
        rounded-3xl">
          <button
          onClick={()=>setColor("red")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"red"}}>red</button>
          <button 
          onClick={()=>setColor("orange")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"orange"}}>Orange</button>
          <button 
          onClick={()=>setColor("pink")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"pink"}}>Pink</button>
          <button 
          onClick={()=>setColor("violet")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"violet"}}>Violet</button>
          <button 
          onClick={()=>setColor("blue")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"blue"}}>blue</button>
          <button
          onClick={()=>setColor("green")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"green"}}>Green</button>
          <button
          onClick={()=>setColor("yellow")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"yellow"}}>yellow</button>
          <button
          onClick={()=>setColor("olive")}
          className='outline-none px-4 py-1 rounded-full text-white shadow-lg'
          style={{backgroundColor:"olive"}}>olive</button>
      
          
        </div>
      </div>
    </div>
      
    
  )
}

export default App
