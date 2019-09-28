import React from 'react'
import Movie from './Movie'

export const Movies = ({movies=[],onAddToFavorites=f => f}) =>{
    return(
        <div>
            {
                movies.length === 0 ? <p>No movies added yet</p> :
                movies.map(m =>
                    <Movie key={m.id} {...m} onFavorite={onAddToFavorites}/>)
            }
        </div>
    )
}