import "./Movielist.css"
import Card from "../Card/Card";
import { windowWidth } from "../../..";
import { useContext } from "react";

const Movielist=(props)=>{

    const pc=useContext(windowWidth)
    if(props.data){
        return(
            <div className="movie_list" >

                <div className="cards_list" style={props.home ? {display:"flex",overflowX:"scroll",height:`${pc ? 320:220}`}:{display:"flex",flexWrap:'wrap',justifyContent:'space-around'}}>
                    {  
                        !props.home && props.data.map(movie=>{
                            return <Card key={movie.id} movies={movie} isMovie={props.isMovie}/> 
                         })
                        
                    }
                    {
                        props.home && props.data.slice(0,10).map(movie=>{
                            return <Card key={movie.id} movies={movie} isMovie={props.isMovie}/> 
                         })
                    }
                </div>
            </div>
        )
    }
}

export default Movielist