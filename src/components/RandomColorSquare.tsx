import {Component} from "react";

type RandomColorSquareProps = {
    backgroundColor: string
    onClick: () => void
}

class RandomColorSquare extends Component<RandomColorSquareProps> {
    render() {
        return (
            <div className={"random-container"}>
            <button type={"button"}
                    id={"random-color"}
                    style={{
                        backgroundColor: this.props.backgroundColor,

                        color: this.props.backgroundColor === "black" ? "white" : "black"
                    }}
                    title={this.props.backgroundColor}
                    onClick={this.props.onClick}>Get random color
            </button>
        </div>
        )
    }
}

export default RandomColorSquare