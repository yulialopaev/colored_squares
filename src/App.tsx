import {Component} from 'react'
import BigSquare from './components/BigSquare'
import SmallSquares from "./components/SmallSquares.tsx";
import {generateRandomColor} from "./use_cases/generateRandomColor.ts";
import RandomColorSquare from "./components/RandomColorSquare.tsx";

type AppState = {
    color: string
}

class App extends Component<{}, AppState> {

    state: AppState = {
        color: "white",
    }

    handleChangeColor = (color: string) => {
        this.setState({color: color})
    }

    handleRandomColor = () =>{
        this.setState({color: generateRandomColor()})
    }
 render() {
     return (
         <>
            <BigSquare color={this.state.color}/>
            <SmallSquares backgroundColor={this.state.color} onClick={this.handleChangeColor}/>
            <RandomColorSquare backgroundColor={this.state.color} onClick={this.handleRandomColor}/>
        </>
     )
 }
}

export default App
