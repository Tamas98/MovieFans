import React from 'react'
import Movie from './Movie'
import {NewMovieForm} from './NewMovieForm'
import '../../Styles/Movies.css'

export const Movies = ({movies=[],onAddToFavorites=f => f,onAddNewMovie=f => f}) =>{
    return(
        <div style={{display:'flex',justifyContent:"center",flexWrap:"wrap"}}>
            <NewMovieForm onAdd={onAddNewMovie}/>
            <div className="movies">
                {
                    movies.length === 0 ? <p>No movies added yet</p> :
                    movies.map(m =>
                        <Movie key={m.id} {...m} onFavorite={onAddToFavorites}/>)
                }
            </div>
        </div>
    )
}