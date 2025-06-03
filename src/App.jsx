import { useState } from 'react'
import TrafficLightSimulator from './TrafficLightSimulator'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='bg-black h-[100vh]'>
        <TrafficLightSimulator />
      </div>
    </>
  )
}

export default App
