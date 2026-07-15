type RandomColorSquareProps = {
    backgroundColor: string
    onClick: () => void
}

function RandomColorSquare({backgroundColor, onClick}: RandomColorSquareProps) {
    return (
        <div className={"random-container"}>
            <button type={"button"}
                    id={"random-color"}
                    style={{
                        backgroundColor: backgroundColor,
                        border: "5px solid white",
                        color: backgroundColor === "black"? "white" : "black"
                    }}
                    title={backgroundColor}
                    onClick={onClick}>Get random color
            </button>
        </div>
    )
}

export default RandomColorSquare