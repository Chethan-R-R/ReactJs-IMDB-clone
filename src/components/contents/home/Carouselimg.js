import { Link } from "react-router-dom"
import "./Carouselimg.css"
const Carouselimg=(props)=>{
    return(
        <Link style={{textDecoration:"none"}}to={`/showDetails/${props.isMovie ? "movie":"tv"}/${props.show.id}`}>
        <div className="cslideimg" key={props.show.id}>
        <div className="carouselimg">
            <img src={`https://image.tmdb.org/t/p/original${props.show.backdrop_path}`}/>
        </div>
        <div className="carouseldetail" style={props.ww ? {marginTop:"-15%"}:{marginTop:"-35%"} }>
            <h1 className="title" style={!props.ww ? {fontSize:"medium",fontWeight:"700"}:{fontWeight:900} }>{props.show.title} </h1>
            <h4 style={!props.ww ? {fontSize:"smaller",fontWeight:"200"}:{fontWeight:"300"} }>{props.show.release_date}</h4>
            <h4 style={!props.ww ? {fontSize:"smaller",fontWeight:"200"}:{fontWeight:"300"} }><span className="fa fa-star checked"></span>  {props.show.vote_average}   </h4>
        </div>
        </div>
        </Link>

    )

}
export default Carouselimg