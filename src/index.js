import React, { createContext, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AppM from './AppM';


const root = ReactDOM.createRoot(document.getElementById('root'));

const popular_movie_context=createContext()
const popular_tv_context=createContext()
const upcoming_movie_context=createContext()
const upcoming_tv_context=createContext()

const windowWidth=createContext()
const top_rated_movies_context=createContext()
const top_rated_tv_context=createContext()

const Index=()=>{
  const [PcOrMob,setPcmob]=React.useState(window.innerWidth>1200)
  const handleWindow=()=>{
    window.innerWidth>1200 ? setPcmob(true):setPcmob(false)
  }
  useEffect(()=>{
    window.addEventListener("resize",handleWindow)
    return ()=>{
      window.removeEventListener("resize",handleWindow)
    }

  })
  const [popular_movies,setpopular_movies]=useState()
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1")
    .then(res=>res.json())
    .then(data=>setpopular_movies(data.results))
  },[])

  const [popular_tv,setpopular_tv]=useState()
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/tv/popular?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1")
    .then(res=>res.json())
    .then(data=>setpopular_tv(data.results))
  },[])
  
  const [upcoming_movies,setUpcomingmovies]=useState()
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/upcoming?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1")
    .then(res=>res.json())
    .then(data=>setUpcomingmovies(data.results))
  },[])

  const [top_rated_movies,setTopratedmovies]=useState()
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1")
    .then(res=>res.json())
    .then(data=>setTopratedmovies(data.results))
  },[])

  const [top_rated_tv,setTopratedtv]=useState()
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/tv/top_rated?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1")
    .then(res=>res.json())
    .then(data=>setTopratedtv(data.results))
  },[])

  const [upcoming_tv,setUpcomingtv]=useState()
  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/tv/airing_today?api_key=4e44d9029b1270a757cddc766a1bcb63&language=en-US&page=1")
    .then(res=>res.json())
    .then(data=>setUpcomingtv(data.results))
  },[])
    if(PcOrMob){
    return (
    
    <windowWidth.Provider value={PcOrMob} >
      <popular_movie_context.Provider value={popular_movies}>
        <popular_tv_context.Provider value={popular_tv}>
          <upcoming_movie_context.Provider value={upcoming_movies}>
          <upcoming_tv_context.Provider value={upcoming_tv}>
            <top_rated_movies_context.Provider value={top_rated_movies}>
            <top_rated_tv_context.Provider value={top_rated_tv}>
            <App />
            </top_rated_tv_context.Provider>
            </top_rated_movies_context.Provider>
            </upcoming_tv_context.Provider>
          </upcoming_movie_context.Provider>
        </popular_tv_context.Provider>
      </popular_movie_context.Provider>
    </windowWidth.Provider>
    
    )
        
    }else{
    return (
    
      <windowWidth.Provider value={PcOrMob} >
      <popular_movie_context.Provider value={popular_movies}>
        <popular_tv_context.Provider value={popular_tv}>
          <upcoming_movie_context.Provider value={upcoming_movies}>
          <upcoming_tv_context.Provider value={upcoming_tv}>
            <top_rated_movies_context.Provider value={top_rated_movies}>
              <top_rated_tv_context.Provider value={top_rated_tv}>
              <AppM />
              </top_rated_tv_context.Provider>            
            </top_rated_movies_context.Provider>  
            </upcoming_tv_context.Provider>        
          </upcoming_movie_context.Provider>
        </popular_tv_context.Provider>
      </popular_movie_context.Provider>
    </windowWidth.Provider>
    
    )
    }

  
}
export {popular_movie_context,windowWidth,popular_tv_context,upcoming_movie_context,top_rated_movies_context,top_rated_tv_context,upcoming_tv_context}
root.render(
  <React.StrictMode>
  <Index />
  </React.StrictMode>
);


