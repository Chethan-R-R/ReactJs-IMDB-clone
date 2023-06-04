import React, { useContext} from "react";
import "./Home.css"
import Carousel from "./Carousel";
import Movielist from "../movielist/Movielist";
import {popular_movie_context} from "../../../index"
import {popular_tv_context} from "../../../index"
import { upcoming_movie_context } from "../../../index";
import { top_rated_tv_context } from "../../../index";
import { top_rated_movies_context } from "../../../index";
const Home=()=>{
    const popular_movies=useContext(popular_movie_context)
    const popular_tv=useContext(popular_tv_context)
    const upcoming_movies=useContext(upcoming_movie_context)
    const top_rated_tv=useContext(top_rated_tv_context)
    const top_rated_movies=useContext(top_rated_movies_context)
    return(
        <div className="home">
            <Carousel isMovie={true} data={top_rated_movies}/>
            <h1>Top Rated Tv Shows</h1>
            <Movielist isMovie={false} home={true} data={top_rated_tv}/>
            <h1>Trending Movies</h1>
            <Movielist isMovie={true} home={true} data={upcoming_movies}/>
            <h1>Popular Movies</h1>
            <Movielist isMovie={true} home={true} data={popular_movies}/>
            <h1>Popular Tv Shows</h1>
            <Movielist isMovie={false} home={true} data={popular_tv}/>

        </div>
    )
}

export default Home