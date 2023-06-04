import Movielist from "../movielist/Movielist"
import "./Display.css"
import { useParams } from "react-router-dom"
import { useContext } from "react"
import {popular_movie_context} from "../../../index"
import {popular_tv_context} from "../../../index"
import { upcoming_movie_context } from "../../../index";
import { top_rated_movies_context } from "../../../index";
import { top_rated_tv_context } from "../../../index"
import { upcoming_tv_context } from "../../../index"
import { windowWidth } from "../../../index"
const Display=()=>{
    const pc=useContext(windowWidth)
    const {show,type}=useParams()
    const popular_movies=useContext(popular_movie_context)
    const popular_tv=useContext(popular_tv_context)
    const upcoming_movies=useContext(upcoming_movie_context)
    const upcoming_tv=useContext(upcoming_tv_context)
    const top_rated_movies=useContext(top_rated_movies_context)
    const top_rated_tv=useContext(top_rated_tv_context)


    if(show==="movies" && type==="trending"){
        return(
            
            <div className="movielistwrapper">
                <h1 style={pc?{color:"whitesmoke",margin:"50 0 0 90",}:{display:'flex',justifyContent:'center',fontSize:"medium",color:"whitesmoke",margin:"50 0 0 0"}}>Trending Movies</h1>
                <Movielist isMovie={true} home={false} data={upcoming_movies} />
            </div>
        )
    }else if(show==="movies" && type==="popular"){
        return(
            <div className="movielistwrapper">
                <h1 style={pc?{color:"whitesmoke",margin:"50 0 0 90",}:{display:'flex',justifyContent:'center',fontSize:"medium",color:"whitesmoke",margin:"50 0 0 0"}}>Popular Movies</h1>
                <Movielist isMovie={true} home={false} data={popular_movies} />
            </div>
        )
    }else if(show==="movies" && type==="top_rated"){
        return(
            <div className="movielistwrapper">
                <h1 style={pc?{color:"whitesmoke",margin:"50 0 0 90",}:{display:'flex',justifyContent:'center',fontSize:"medium",color:"whitesmoke",margin:"50 0 0 0"}}>Top Rated Movies</h1>
                <Movielist isMovie={true} home={false} data={top_rated_movies} />
            </div>
        )
    }else if(show==="tv" && type==="trending"){
        return(
            <div className="movielistwrapper">
                <h1 style={pc?{color:"whitesmoke",margin:"50 0 0 90",}:{display:'flex',justifyContent:'center',fontSize:"medium",color:"whitesmoke",margin:"50 0 0 0"}}>Trending Tv Shows</h1>
                <Movielist isMovie={false} home={false} data={upcoming_tv} />
            </div>
        )
    }else if(show==="tv" && type==="popular"){
        return(
            
            <div className="movielistwrapper">
                <h1 style={pc?{color:"whitesmoke",margin:"50 0 0 90",}:{display:'flex',justifyContent:'center',fontSize:"medium",color:"whitesmoke",margin:"50 0 0 0"}}>Popular Tv Shows</h1>
                <Movielist isMovie={false} home={false} data={popular_tv} />
            </div>
        )
    }else if(show==="tv" && type==="top_rated"){
        return(
            <div className="movielistwrapper">
                <h1 style={pc?{color:"whitesmoke",margin:"50 0 0 90",}:{display:'flex',justifyContent:'center',fontSize:"medium",color:"whitesmoke",margin:"50 0 0 0"}}>Top Rated Tv Shows</h1>
                <Movielist isMovie={false} home={false} data={top_rated_tv} />
            </div>
        )
    }
}

export default Display