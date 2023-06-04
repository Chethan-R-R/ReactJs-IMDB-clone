import { BrowserRouter, Routes, Route } from "react-router-dom"
import Header from "./components/header/Header"
import "./App.css"
import Home from "./components/contents/home/Home.js"
import Display from "./components/contents/display/Display"
import ShowDetails from "./components/contents/showdetails/ShowDetails"
import Search from "./components/contents/search/Search"
import logo from "./components/images/logo.png"
import { Link } from "react-router-dom"
const App=()=>{
  return(
    <div className="App">
      <BrowserRouter >
      <Header/>
      <div className="contents" style={{overflow:"hidden"}}>
      <Link to={"/"}>
        <div className="logocontainer" style={{position:"fixed",backgroundColor:"rgba(0,0,0,0.7)",rotate:"-30deg",top:-90,left:-60,height:120,width:350,display:"flex",alignItems:"flex-end",zIndex:"10"}}>
          <img src={logo} alt="" style={{rotate:"30deg"}} width={"150px"}/>
          <p style={{rotate:"30deg",color:"rgba(0,190,255,0.9)",fontWeight:900,position:"absolute",left:75,top:60}}>RR</p>
          <p style={{rotate:"30deg",color:"rgba(0,190,255,0.9)",fontWeight:500,position:"absolute",left:100,top:82}}>Movies</p>
        </div>
      </Link>
      <Link to={"/search"}>
        <div className="search">
        <h1>search <span className="fa fa-search" ></span></h1>
        </div>
      </Link>
      <Link to="https://github.com/Chethan-R-R">
        <div className="about">
        <h1>About<span className="fa fa-info-circle" ></span></h1>
        </div>
      </Link>
      <Routes >
          <Route path="" element={<Home />}/>
          <Route path=":show/:type" element={<Display />} />
          <Route path="/showDetails/:show/:id" element={<ShowDetails />} />
          <Route path="/search" element={<Search />} />
          <Route path="/*" element={<h1> 404 not found</h1>} />
      </Routes>
      </div>
      </BrowserRouter>
    </div>
  )
}

export default App