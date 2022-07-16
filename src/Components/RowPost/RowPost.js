import React, { useEffect, useState } from 'react'
import "./RowPost.css"
import axios from '../../axios'
import {API_KEY, imageUrl} from '../../Constants/Constants'
import Youtube from 'react-youtube'





function RowPost(props) {
  const[key,setKey]=useState('')


  const opts = {
    height: '390',
    width: '100%',
    playerVars: {
      // https://developers.google.com/youtube/player_parameters
      autoplay: 1,
    },
  }


  const handleMovies = (id)=>{
    console.log(id)
    axios.get(`/movie/${id}/videos?api_key=${API_KEY}&append_to_response=videos`).then((response)=>{
      console.log(response.data.results[0].key)
      const urlId=response.data.results[0].key
      if(urlId){
        setKey(urlId)
      }else{
        console.log("Array not found")
      }
      
      console.log("Key:                    ",urlId)
    })
    window.scrollBy(0, 500)
  }


  const [movies,setMovies]=useState([])

  useEffect(()=>{
    axios.get(props.url).then((response)=>{
      console.log(response.data.results)
      setMovies(response.data.results)
    })
  },[])
  return (
    <div className='row'>
      
        <h2>{props.title}</h2>
        <div className="posters">
          {movies.map((obj,index)=>
            
            <img onClick={()=>handleMovies(obj.id)} className={props.isSmall?'smallPoster':'poster'} src={movies? imageUrl+movies[index].backdrop_path:""} alt="poster" />

          )}
        
        
        </div>
        {key && <Youtube videoId={key} opts={opts} />}
        

    </div>
  )
}

export default RowPost