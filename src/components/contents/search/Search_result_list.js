import Card from "../Card/Card"
import { windowWidth } from "../../.."
import { useContext } from "react"
const Search_result_list=(props)=>{
    const pc=useContext(windowWidth)
    return(
        <div  style={{marginTop:30,display:"grid",gridTemplateColumns:pc ? "repeat(auto-fit, minmax(200px,1fr))":"repeat(auto-fit, minmax(150px,1fr))",gap:`${pc && "1rem"}`}}>
            {
                props.data.map(movie=>{
                    if((movie.media_type==="movie" || movie.media_type==="tv") && movie.title!=="(NULL)" && movie.poster_path){
                    return <Card key={movie.id} movies={movie} isMovie={movie.media_type==="movie"}/> 
                    }
                    
                 })
            }
        </div>
    )
}
export default Search_result_list