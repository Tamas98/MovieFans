import React from 'react'
import Favorite from './Favorite'

export const Favorites = ({favorites=[],onRemoveFavorite = f => f}) =>
<div>
    {favorites.length === 0 ? <h2>You have no favorites at this moment</h2> :
        favorites.map(f => 
            <Favorite onRemove={onRemoveFavorite} key={f.id} {...f}/>)
    }
</div>


