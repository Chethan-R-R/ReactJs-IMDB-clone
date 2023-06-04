import { useContext, useEffect, useState } from "react"
import "./Search.css"
import Keyword from "./Keyword"
import Search_result_list from "./Search_result_list"
import { windowWidth } from "../../.."
const Search=()=>{
    const pc=useContext(windowWidth)
    const [search,setSearch]=useState("")
    const [keywords,setKeyword]=useState()
    const [multilist,setMultilist]=useState()
    const [collapse,setCollapse]=useState(false)
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/search/keyword?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${search}&page=1`)
        .then(res=>res.json())
        .then(data=>setKeyword(data.results))

        fetch(`https://api.themoviedb.org/3/search/multi?api_key=4e44d9029b1270a757cddc766a1bcb63&query=${search}&page=1`)
        .then(res=>res.json())
        .then(data=>setMultilist(data.results))
    },[search])
    const handlechange=(event)=>{
        setCollapse(false)
        setSearch(event.target.value)
    }
    const handleclick=(event)=>{
        if(event){
            setSearch(event.target.getAttribute('name'))
        }
        setCollapse(true)

        multilist.length>0 ? setDisplayResultList(<Search_result_list key="0" data={multilist} />):setDisplayResultList(<h1 style={{color:"whitesmoke",display:"flex",justifyContent:"center",marginTop:"20"}}>Oops!!!</h1>)
    }

    const [display_result_list,setDisplayResultList]=useState()

    const handlesubmit=(event)=>{
        
        event.preventDefault();
        handleclick()
    }
    if(keywords){
        const list=keywords.map(key=>{
            return <Keyword key={key.id} data={key} handleclick={handleclick}/>
        })
    
    return(
        <div className="searchpage">
            <form onSubmit={handlesubmit} className="searchbar" style={pc?{justifyContent:"center"}:{justifyContent:"flex-end"}}>
                <input  className="searchtext" type="text" onChange={handlechange} placeholder="Ex : Naruto Shippuden" value={search} style={pc ? {width: '50%',height: '50%',padding: '0 120 0 30',fontSize: 'medium',fontWeight: 300}:{width: '80%',height: '40%',padding: '0 35 0 20',margin:"30 10 0 0"}}></input>
                {pc ? <button className="submitbtnpc" type="submit"><span className="fa fa-search" ></span>search</button>:<button className="submitbtnm" type="submit"><span className="fa fa-search" ></span></button>}
            </form>
            <div className="keywordlist" style={collapse ? {display:"none"}:pc ?{top:65,left:'26%',width:'100%',height: '50%'}:{width:'200%',height: '35%'}}>
                {list}
            </div>
            <div className="Search_result_list">
            {display_result_list}
            </div>
        </div>
    )
    }
        
}

export default Search