import { useState } from 'react'
import BigSquare from './components/BigSquare'
import SmallSquares from './components/SmallSquares'

function App() {
  const [color, setColor] = useState("white")

  return (
    <>
      <BigSquare color = {color}/>
      <SmallSquares onColorClick={setColor}/>
      </>
  )
}

export default App
