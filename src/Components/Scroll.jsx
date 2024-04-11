const Scroll = (props) => {
    return (
        <div style={{overflowY: "scroll", border: "5px solid black", height: `${window.innerHeight-200}px`}}>
            {props.children}
        </div>
    )
}

export default Scroll