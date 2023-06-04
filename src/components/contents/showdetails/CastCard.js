import "./CastCard.css"
import { windowWidth } from "../../.."
import { useContext } from "react"
const CastCard=(props)=>{
    const pc=useContext(windowWidth)
    return(
        <div className="castcard" style={pc? {width:150,height: 300}:{width: 150,height: 260,margin:"0 6 0 6"}}>
            {props.cast_detail.profile_path && <img className="castimg" style={pc ? {width: 150,height: 225}:{width: 100,height: 150}} src={`https://image.tmdb.org/t/p/original/${props.cast_detail.profile_path}`} />}
            <div className="castname" >
                <h3 style={pc ? {fontSize: "large",fontWeight: 500}:{fontSize: "small",fontWeight: 500}}>{props.cast_detail.name}</h3>
                <h5 style={pc ? {fontSize: "medium",fontWeight: 100}:{fontSize: 10,fontWeight: 400}}>{props.cast_detail.character}</h5>
            </div>
        </div>
    )

}
export default CastCard