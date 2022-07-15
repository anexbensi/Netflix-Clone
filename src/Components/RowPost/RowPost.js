import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import {imageUrl} from '../../Constants/Constants'





function RowPost(props) {


  const [movies,setMovies]=useState([])

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    })
  },[])
  return (
    <div className='row' onMouseOver={new KeyboardEvent('keydown', {key: 'shift'})}>
      
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj,index)=>
            
            <img className={props.isSmall?'smallPoster':'poster'} src={movies? imageUrl+movies[index].backdrop_path:""} alt="poster" />

          )}
        
        
        </div>
        

    </div>
  )
}

export default RowPost