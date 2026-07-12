type  SmallSquareProps = {
    onColorClick: (c: string) => void
}

function SmallSquares({onColorClick}: SmallSquareProps) {
    return (
        <div className={"small-container"}>
            <button type={"button"}
                    id={"red-button"}
                    onClick={() => onColorClick("red")}></button>
            <button type={"button"}
                    id={"blue-button"}
                    onClick={() => onColorClick("blue")}></button>
            <button type={"button"}
                    id={"green-button"}
                    onClick={() => onColorClick("green")}></button>
            <button type={"button"}
                    id={"yellow-button"}
                    onClick={() => onColorClick("yellow")}></button>
        </div>
    )
}

export default SmallSquares
