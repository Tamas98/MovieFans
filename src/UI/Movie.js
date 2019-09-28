import React from 'react'

const Movie = (props) =>

<div  className="movie" style={{border:'10px solid lightgray',backgroundColor:'whitesmoke',width:'22.5rem',padding:'2rem 0 2rem 3rem',margin:'5rem',position:'relative'}}>
    <div> {/* onClick={() => props.history.push(`/${props.id}`) }> */}
        <h1>Title: {props.title}</h1>
        <h3>Genres: {props.genres}</h3>
        <h4>On air: {props.date}</h4>
        <p>About the movie: <br/> {props.desc}</p>
        <button onClick={()=>props.onFavorite(props.id,props.title)}>Add to Favorites</button>
    </div>
</div>

export default Movie