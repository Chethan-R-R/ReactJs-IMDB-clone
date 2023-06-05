import { useState, useEffect, useRef, useContext } from "react"
import "./Trailer.css"
import { windowWidth } from "../../.."
const Trailer=(props)=>{
    const pc=useContext(windowWidth)
    const [TrailerList,setTrailerList]=useState()

    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/${props.show}/${props.id}/videos?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US`)
        .then(res=>res.json())
        .then(data=>setTrailerList(data.results))
    },[])
    let Trailer=useRef()
    if(TrailerList){
        for(let i=0;i<TrailerList.length;i++){
            if(TrailerList[i].type==="Trailer" ){
                Trailer.current=TrailerList[i].key
                break
            }
        }
    }
    return(
        <div className="trailerPlay">
            <span style={pc ? {top:120,right: 100}:{top:150,right: 10}}className="fa fa-close" onClick={props.handleTrailerClick}></span>

            <iframe title="Trailer" style={pc ? {width:853,height:400}:{width:"100%",height:"65vw",maxHeight:"96vh"}}allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen src={`https://www.youtube-nocookie.com/embed/${Trailer.current}`} />

        </div>
    )
}

export default Trailer