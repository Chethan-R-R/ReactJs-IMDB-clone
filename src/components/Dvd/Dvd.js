import "./Dvd.css"
const Dvd=(props)=>{
    return(
        <div className={props.class} style={{zIndex:`${props.z}`}}>
            <div className="cdimage">
                <img src={props.imgurl} alt=""></img>   
            </div>
            <div className="cdname" style={{backgroundImage: `linear-gradient(45deg,rgba(0,0,0, 0.68),rgba(0,0,0,10))`}}>
            <h3>{props.name}&nbsp;<p>&nbsp;{props.no}&nbsp;</p></h3> 
            </div>
        </div>
    )
}
export default Dvd