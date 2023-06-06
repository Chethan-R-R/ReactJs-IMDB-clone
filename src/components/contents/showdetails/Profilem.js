import CastCard from "./CastCard"
import "./Profilem.css"
import Movielist from "../movielist/Movielist"
import { useRef } from "react"
const Profilem=(props)=>{
    const show_details_ref=useRef()
    if(show_details_ref.current){
        show_details_ref.current.scrollTo(0,0)
    }
    return(
        <div className="showDetailsm" ref={show_details_ref}>
                <div className="profilem">
                    <div className="titlebgm" style={{backgroundImage:`linear-gradient(160deg,rgba(0,0,0, 0.1),rgba(0,0,0,10)),URL(${`https://image.tmdb.org/t/p/original${props.showdetails_data.backdrop_path}`})`}}>
                    <h1>{props.show==="tv" ? props.showdetails_data.name:props.showdetails_data.title}</h1>
                        <h2><span className="fa fa-star checked"></span>  {Math.round(props.showdetails_data.vote_average * 10) / 10}   </h2>

                        <div className="genrem">
                            {props.showdetails_data.genres.map((genre)=>{
                               return <h3 key={genre.id}>{genre.name}</h3>                                
                            })}
                        </div>
                    </div>
                    <div className="sideDetailsm">
                        
                        <p>{props.showdetails_data.overview}</p>
                        <div className="trailerlinkscrollm">
                            <h3 className="watchtrailerm" onClick={props.handleTrailerClick}><span className='fa fa-angle-double-right'></span>Watch Trailer </h3>
                        </div>
                    </div>
                </div>
                <h2>Casts</h2>
                <div className="castlistm">
                    
                    {
                        props.cast_data.slice(0,10).map(cast_detail=>{
                            return <CastCard key={cast_detail.id}cast_detail={cast_detail} />
                        })
                    }
                </div>
                {props.similar.length!==0 && <h2>Recommendations</h2>}
                {props.similar.length!==0 && <div className="similarlist"><Movielist isMovie={props.show==="movie"} home={false} data={props.similar}/></div>}
                </div>
    )
}

export default Profilem