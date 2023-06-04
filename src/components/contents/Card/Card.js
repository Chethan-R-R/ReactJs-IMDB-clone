import React from "react";
import "./Card.css"
import { Link } from "react-router-dom";
import { windowWidth } from "../../..";
const Card=(props)=>{
    
    const pc=React.useContext(windowWidth)
    if(props.movies.poster_path){
    return(
        <Link  to={`/showDetails/${props.isMovie ? "movie":"tv"}/${props.movies.id}`} style={{textDecoration:"none",color:"white"}} >
        <div className="card"  style={pc ? { width: 180,height:280,margin:"15 10 10 15"}: {width: "150",height:"220",margin:"5 5 5 5"}}>
            <div className="cardimg">
                <img src={`https://image.tmdb.org/t/p/original/${props.movies.poster_path}`}></img>
            </div>
            <div className="carddetail" >
                <h2 style={pc ? {fontWeight:"900",fontSize:"large",marginTop:"30"}:{fontWeight:"700",fontSize:"medium",marginTop:25}}>{props.movies.title ? props.movies.title:props.movies.name }</h2>
                <h3 style={pc ? {fontWeight:"300",fontSize:"medium"}:{fontWeight:"100",fontSize:"smaller"}}>{props.movies.release_date?props.movies.release_date:props.movies.first_air_date}</h3>
                <h3 style={pc ? {fontWeight:"300",fontSize:"medium"}:{fontWeight:"100",fontSize:"smaller"}}><span className='fa fa-star'></span> {props.movies.vote_average}</h3>
                <p className="more" style={pc ? {fontWeight:"300",fontSize:"small"}:{fontWeight:"50",fontSize:"smaller"}}>More Details<span className='fa fa-angle-double-right'></span></p>
            </div>
        </div>
        </Link>
    )
    }
}

export default Card