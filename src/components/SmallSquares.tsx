import {colors} from "../data/colors"
import {Component} from "react";

type SmallSquareProps = {
    backgroundColor: string
    onClick: (backgroundColor: string) => void
}


class SmallSquares extends Component<SmallSquareProps> {

    render() {
        return (
            <div className={"small-container"}>
            {colors.map(color =>
                <button type={"button"}
                        key={color}
                        style={{
                            backgroundColor: color,
                            border: color === this.props.backgroundColor ? "5px solid rgba(55, 65, 81, 0.3)" : "5px solid white"
                        }}
                        title={color}
                        onClick={() => this.props.onClick(color)}></button>)}
        </div>

        )
    }
}

export default SmallSquares