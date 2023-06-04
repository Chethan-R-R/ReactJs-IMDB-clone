import "./Keyword.css"

const Keyword=(props)=>{
    return(

        <div name={props.data.name} className="single_keyword" onClick={props.handleclick}>
            <p name={props.data.name}>{props.data.name}</p>
        </div>
    )
}

export default Keyword