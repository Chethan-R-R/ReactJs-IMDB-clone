import React from "react";
import "./Headerm.css"
import { Link } from "react-router-dom";
import Dvd from "../Dvd/Dvdm";

const Headerm=(props)=>{
    const links=React.useRef(["/movies/trending","/tv/trending","/movies/popular","/tv/popular","/movies/top_rated","tv/top_rated"])
    const template=React.useRef({
        0:"",1:"",2:"",3:"",4:"",5:""
    })
    const [activatelinks,setActivate]=React.useState({
        0:"",1:"",2:"",3:"",4:"",5:""
    })

    function activate(id){
        if(activatelinks[id])props.handleclick()
        setActivate(()=>{
            return {
                ...template.current,[id]:links.current[id]
            }
        })   
    }
    return(
        <div className="headerm">
           <Link to={activatelinks[0]}><Dvd activate={activate} id={0} class="dvd1m" name="Trending Movies" no="01" z={6} imgurl="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701154083.jpg"/></Link>
           <Link to={activatelinks[1]}><Dvd activate={activate} id={1} class="dvdm" name="Trending Tv Shows" no="02" z={5} imgurl="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/10/A5699-An-Architectural-Review-of-Money-Heist.jpg"/></Link>
           <Link to={activatelinks[2]}><Dvd activate={activate} id={2} class="dvdm" name="Popular Movies" no="03" z={4} imgurl="https://cdn.wallpapersafari.com/73/33/VeBDPA.jpg"/></Link>
           <Link to={activatelinks[3]}><Dvd activate={activate} id={3} class="dvdm" name="Popular Tv Shows" no="04" z={3} imgurl="https://flxt.tmsimg.com/assets/p20392448_i_h9_aa.jpg"/></Link>
           <Link to={activatelinks[4]}><Dvd activate={activate} id={4} class="dvdm" name="Top Rated Movies" no="05" z={2} imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJ6g40NYGeczDzWEtOC4Web4nHg4zy7TvG6M6VF2LQlpbn-i-j94Y5l9Qlb4j2LEUKeA&usqp=CAU"/></Link>
           <Link to={activatelinks[5]}><Dvd activate={activate} id={5} class="dvdm" name="Top Rated Tv Shows" no="06" z={1} imgurl="https://cutewallpaper.org/27/breaking-bad-wallpaper-art/2464521910.jpg"/></Link>
        </div>
    )
}
const Hideheader=(props)=>{
    return(
        <div className="hideheader">
             <span className={props.class} onClick={props.handleclick}></span>
        </div>
    )
}

export  {Headerm,Hideheader}
