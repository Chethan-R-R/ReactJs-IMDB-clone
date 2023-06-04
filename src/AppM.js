import { BrowserRouter, Routes, Route } from "react-router-dom"
import {Headerm} from "./components/header/Headerm"
import { Hideheader } from "./components/header/Headerm"
import "./AppM.css"
import {Homem} from "./components/contents/home/Homem.js"
import Display from "./components/contents/display/Display"
import { Link } from "react-router-dom"
import { useState } from "react"
import ShowDetails from "./components/contents/showdetails/ShowDetails"
import Search from "./components/contents/search/Search"
import logo from "./components/images/logo.png"
const AppM=()=>{

  const [showdvd,setDvd]=useState(false)
  function handleclick(){
    setDvd(!showdvd)
  }
  return(
    <div className="Appm">
      <BrowserRouter >
      <Hideheader class={showdvd ? "fa fa-close":"fa fa-bars"} handleclick={handleclick}/>
      {showdvd && <Headerm handleclick={handleclick} />}
    <div className="contentsm">
    <Link to={"/"}>
        <div style={{position:"fixed",backgroundColor:"rgba(0,0,0,0.7)",rotate:"-40deg",top:-75,left:-65,height:90,width:250,display:"flex",alignItems:"flex-end",zIndex:"10",padding:"0 0 4 16"}}>
          <img src={logo} style={{rotate:"40deg"}} width={"100px"}/>
          <p style={{rotate:"40deg",color:"rgba(0,190,255,0.9)",fontWeight:900,position:"absolute",left:64,top:48,fontSize:12}}>RR</p>
          <p style={{rotate:"40deg",color:"rgba(0,190,255,0.9)",fontWeight:500,position:"absolute",left:80,top:70,fontSize:12}}>Movies</p>
        </div>
      </Link>
      <Link to={"/search"}>
        <div className="searchm">
        <h1>search <span className="fa fa-search" ></span></h1>
        </div>
      </Link>
      <Routes >
          <Route path="" element={<Homem />}/>
          <Route path=":show/:type" element={<Display />} />
          <Route path="showDetails/:show/:id" element={<ShowDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<h1> 404 not found</h1>} />
      </Routes>
    </div>
      </BrowserRouter>
    </div>
  )
}

export default AppM