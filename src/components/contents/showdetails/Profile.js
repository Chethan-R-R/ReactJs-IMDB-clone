import { useRef } from "react"
import CastCard from "./CastCard"
import Movielist from "../movielist/Movielist"
const Profile=(props)=>{
    const show_details_ref=useRef()
    if(show_details_ref.current){
        show_details_ref.current.scrollTo(0,0)
    }
    return(
        <div className="showDetails" ref={show_details_ref}>
                <div className="profile">
                    <div className="dp">
                        <img src={`https://image.tmdb.org/t/p/original/${props.showdetails_data.poster_path}`} />
                    </div>
                    <div className="sideDetails">
                        <h1>{props.show==="tv" ? props.showdetails_data.name:props.showdetails_data.title}</h1>
                        <h2><span className="fa fa-star checked"></span>  {Math.round(props.showdetails_data.vote_average * 10) / 10}   </h2>

                        <div className="genre">
                            {props.showdetails_data.genres.map((genre)=>{
                               return <h3 key={genre.id}>{genre.name}</h3>                                
                            })}
                        </div>
                        <p>{props.showdetails_data.overview}</p>
                        <div className="trailerlinkscroll">
                            <h3 className="watchtrailer" onClick={props.handleTrailerClick}><span className='fa fa-angle-double-right'></span>Watch Trailer </h3>
                            <h3 className="scrollcast">Casts<span className='fa fa-angle-double-down'></span></h3>
                        </div>
                    </div>
                </div>
                <h2>Casts</h2>
                <div className="castlist">
                    
                    {
                        props.cast_data.slice(0,10).map(cast_detail=>{
                            return <CastCard key={cast_detail.id} cast_detail={cast_detail} />
                        })
                    }
                </div>
                {props.similar && props.similar.length!==0 && <h2>Recommendations</h2>}
                {props.similar && props.similar.length!==0 && <div className="similarlist"><Movielist isMovie={props.show==="movie"} home={false} data={props.similar}/></div>}
                </div>
    )
}
export default Profile