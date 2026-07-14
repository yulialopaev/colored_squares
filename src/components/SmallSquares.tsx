type SmallSquareProps = {
    onClick: (backgroundColor: string) => void
}

function SmallSquares({onClick}: SmallSquareProps) {
    const colors = ["red", "blue", "green", "yellow", "black", "brown"]

    const SmallButtons = colors.map(color =>
        <button type={"button"}
                key={color}
                style={{backgroundColor: color}}
                onClick={() => onClick(color)}></button>)
    return (
        <div className={"small-container"}>
            {SmallButtons}
        </div>

    )
}
export default SmallSquares