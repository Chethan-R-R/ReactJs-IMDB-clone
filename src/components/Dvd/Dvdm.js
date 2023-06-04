import "./Dvdm.css"
const Dvd=(props)=>{

    function handleclick(){
        props.activate(props.id)
    }
    return(
        <div className={props.class} style={{zIndex:`${props.z}`}} onClick={handleclick}>
            <div className="cdimagem">
                
                <img src={props.imgurl} alt="" ></img>   
            </div>
            <div className="cdnamem" style={{backgroundImage: `linear-gradient(45deg,rgba(0,0,0, 0.68),rgba(0,0,0,10))`}}>
            <h3>{props.name}&nbsp;<p>&nbsp;{props.no}&nbsp;</p></h3>
            </div>
        </div>
    )
}
export default Dvd