import React from "react";
import "./Headerm.css"
import { Link } from "react-router-dom";
import Dvd from "../Dvd/Dvd";
const Header=()=>{
    return(
        <div className="header">

           <Link to="/movies/trending" ><Dvd class="dvd1" name="Trending Movies" no="01" z={6} imgurl="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701154083.jpg"/></Link>
           <Link to="/tv/trending"><Dvd class="dvd" name="Trending Tv Shows" no="02" z={5} imgurl="https://www.re-thinkingthefuture.com/wp-content/uploads/2021/10/A5699-An-Architectural-Review-of-Money-Heist.jpg"/></Link>
           <Link to="/movies/popular"><Dvd class="dvd" name="Popular Movies" no="03" z={4} imgurl="https://cdn.wallpapersafari.com/73/33/VeBDPA.jpg"/></Link>
           <Link to="/tv/popular"><Dvd class="dvd" name="Popular Tv Shows" no="04" z={3} imgurl="https://flxt.tmsimg.com/assets/p20392448_i_h9_aa.jpg"/></Link>
           <Link to="/movies/top_rated"><Dvd class="dvd" name="Top Rated Movies" no="05" z={2} imgurl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaJ6g40NYGeczDzWEtOC4Web4nHg4zy7TvG6M6VF2LQlpbn-i-j94Y5l9Qlb4j2LEUKeA&usqp=CAU"/></Link>
           <Link to="tv/top_rated"><Dvd class="dvd" name="Top Rated Tv Shows"no="06 "  z={1} imgurl="https://cutewallpaper.org/27/breaking-bad-wallpaper-art/2464521910.jpg"/></Link>

        </div>
    )
}

export default Header
