import { useState } from 'react'
import LocationBasedResults from './pages/LocationBasedResults'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <LocationBasedResults/>
    </>
  )
}

export default App
