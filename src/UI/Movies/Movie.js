import React from 'react'
import '../../Styles/Movies.css'

const Movie = (props) =>

<div  className="movie">
    <div> {/* onClick={() => props.history.push(`/${props.id}`) }> */}
        <h1>Title: {props.title}</h1>
        <h3>Genres: {props.genres}</h3>
        <h4>On air: {props.date}</h4>
        <p>About the movie: <br/> {props.desc}</p>
        <button  style={{position:"absolute",bottom:'10px'}} onClick={()=>props.onFavorite(props.id,props.title)}>Add to Favorites</button>
    </div>
</div>

export default Movie