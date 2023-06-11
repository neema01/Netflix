import React from 'react'
import { useState,useEffect } from 'react'
import YouTube from 'react-youtube'
import './RowPost.css'
import {imageUrl,API_KEY} from '../../constants/constants'
import axios from '../../axios'

function RowPost(props) {

  const[movies,setMovies] = useState ([])
  const [urlid,setUrlId] = useState('')
  useEffect(()=>{
    axios.get(props.url).then(response =>{
      console.log(response.data);
      setMovies(response.data.results)
    }).catch(err => {
      alert('Network Error')
    })
  },[])

  const opts = {
    height: '390',
    width: '640',
    playVars: {
        autoplay: 0,
    },
  };
  
  const handleMovie = (id) => {

    console.log(id);

    axios.get(`/movie/${id}/videos? ${API_KEY}&language=en-US`).then(response=>{

      if(response.data.results.length!==0){
        setUrlId(response.data.results[0]);
      }else{
        console.log('array empty');
      }

    })

console.log(urlid);

  }

  return (
    <div className='row'>
        <h2>{props.title}</h2>
        <div className='posters'>
        {movies.map((obj,i)=>
        
        <img key={i} onClick = {()=>handleMovie(obj.id)} className = {props.isSmall ? 'poster' : "smallPoster"} alt = "poster" src = {`${imageUrl + obj.backdrop_path}`} />


        )}
        

        </div>
      
     { urlid &&  <YouTube videoId={urlid.key} opts={opts} onReady={this._onReady} />  }
    </div>
  )
}

export default RowPost