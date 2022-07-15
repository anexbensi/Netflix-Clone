import React, { useEffect, useState } from 'react'
import {API_KEY,imageUrl} from "../../Constants/Constants"
import "./Banner.css"
import axios from '../../axios'

function Banner() {
  const [movie,setMovie] = useState([])

  useEffect(()=>{
    axios.get(`trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
      
      let x = Math.floor((Math.random() * 20) + 0);
      console.log(x)
      console.log(response.data.results[x])
      if(response.data.results[x].title){
      setMovie(response.data.results[x])
      }else{
        response.data.results[x].title=response.data.results[x].name
        setMovie(response.data.results[x])
      }
    })
  },[])
  return (
    <div className='banner' style={{backgroundImage:`url(${movie? imageUrl+movie.backdrop_path:""})`}}>
        <div className='content'>
            <h1 className='title'>{movie?movie.title:""}</h1>
            <div className='banner_buttons'>
                <button className='button'>Play</button>
                <button className='button'>Mylist</button>
            </div>
            <h1 className='description'>{movie?movie.overview:""}</h1>
        </div>
        <div className="fade_bottom"></div>

    </div>
  )
}

export default Banner