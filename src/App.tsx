import {useState} from 'react'
import BigSquare from './components/BigSquare'


function App() {
    const [color, setColor] = useState("white")

    const colors = ["red", "blue", "green", "yellow", "black", "brown"]

    const smallButtons = colors.map(color =>
    <button type={"button"}
            id={color}
            style={{backgroundColor: color}}
            onClick={() => setColor(color)}></button> )

    return (
        <>
      <BigSquare color={color}/>
           <div className={"small-container"}>
               {smallButtons}
           </div>
      </>
    )
}

export default App
