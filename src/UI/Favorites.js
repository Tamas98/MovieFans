import React from 'react'
import Favorite from './Favorite'

export const Favorites = ({favorites=[]}) =>
<div>
    {favorites.length === 0 ? <h2>You have no favorites at this moment</h2> :
        favorites.map(f => 
            <Favorite key={f.id} {...f}/>)
    }
</div>


