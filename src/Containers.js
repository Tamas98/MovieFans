import { connect } from 'react-redux'
import { hideActivity, addFavorite } from './Creators'
import { Activites } from './UI/Activities'
import { Movies } from './UI/Movies'
import { Favorites } from './UI/Favorites'

export const ActivityFlow = connect(
    state =>({
        activities: state.activities
    }),
    dispatch =>({
        onHide(id){
            dispatch(hideActivity(id))
        } 
    })
)(Activites)

export const MovieList = connect(
    state=>({
        movies: state.movies
    }),
    dispatch=>({
        onAddToFavorites(id,title){
                dispatch(addFavorite(id,title))
        }
    })

)(Movies)

export const FavoriteList = connect(
    state=>({
        favorites: state.favorites
    })
)(Favorites)