import {Component} from "react";

type BigSquareProps = {
    color: string
}

class BigSquare extends Component<BigSquareProps> {

    render () {
        return (
            <div className={"big-container"}>
            <div className={"big-square"} style={{backgroundColor: this.props.color}}></div>
        </div>
        )
    }
}

export default BigSquare
