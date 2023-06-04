import { useContext, useEffect, useState } from "react"
import "./ShowDetails.css"
import { useParams } from "react-router-dom"
import Profile from "./Profile"
import Profilem from "./Profilem"

import Trailer from "./Trailer"
import { windowWidth } from "../../.."
const ShowDetails=()=>{
    const pc=useContext(windowWidth)
    const {show,id}=useParams()
    const [showdetails_data,setDetails]=useState()
    const [cast_data,setCastdata]=useState()
    const [profileTrailer,setProfile]=useState(true)
    const [similar,setSimilar]=useState([])
    function handleTrailerClick(){
        setProfile(!profileTrailer)
    }
    
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${show}/${id}?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then(data=>setDetails(data))

        fetch(`https://api.themoviedb.org/3/${show}/${id}/credits?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then(data=>setCastdata(data.cast))

        fetch(`https://api.themoviedb.org/3/${show}/${id}/recommendations?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1`)
        .then(res=>res.json())
        .then(data=>setSimilar(data.results))
        
    },[show,id])


    if(showdetails_data && cast_data){
        if(pc){
            return(
                <div  className="showDetails_background" style={{backgroundImage:`linear-gradient(180deg,rgba(0,0,0, 0.2),rgba(0,0,0,10)),URL(${`https://image.tmdb.org/t/p/original${showdetails_data.backdrop_path}`})`,backgroundSize:"100% 70%"}}>
                    {profileTrailer ? <Profile similar={similar} show={show} id={id} showdetails_data={showdetails_data} cast_data={cast_data} handleTrailerClick={handleTrailerClick} />:<Trailer show={show} id={id} handleTrailerClick={handleTrailerClick}/>}
                </div>
            )
        }
        else{
            return(
                <div  className="showDetails_background" style={{backgroundImage:`linear-gradient(240deg,rgba(0,0,80, 0.5),rgba(0,0,120,0.8)),URL(${`https://image.tmdb.org/t/p/original${showdetails_data.poster_path}`})`,backgroundSize:"100% 100%"}}>
                    {profileTrailer ? <Profilem similar={similar} show={show} id={id} showdetails_data={showdetails_data} cast_data={cast_data} handleTrailerClick={handleTrailerClick} />:<Trailer show={show} id={id} handleTrailerClick={handleTrailerClick}/>}
                </div>
            )
        }
    }
}


export default ShowDetails