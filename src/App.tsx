import {useState} from 'react'
import BigSquare from './components/BigSquare'
import SmallSquares from "./components/SmallSquares.tsx";


function App() {
    const [color, setColor] = useState("white")

    const handleChangeColor = (color: string) => {
        setColor(color)
    }

    // const colors = ["red", "blue", "green", "yellow", "black", "brown"]
    //
    // const smallButtons = colors.map(color =>
    //     <button type={"button"}
    //             id={color}
    //             style={{backgroundColor: color}}
    //             onClick={() => setColor(color)}></button>)

    return (
        <>
      <BigSquare color={color}/>
      <SmallSquares onClick={handleChangeColor}/>
      </>
    )
}

export default App
