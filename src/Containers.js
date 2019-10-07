import { connect } from 'react-redux'
import { hideActivity, addFavorite, addMovie, removeFavorite } from './Creators'
import { Activites } from './UI/Activities/Activities'
import { Movies } from './UI/Movies/Movies'
import { Favorites } from './UI/Favorites/Favorites'

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
        },
        onAddNewMovie(title,genres,date,desc){
            dispatch(addMovie(title,genres,date,desc))
        }
    })

)(Movies)

export const FavoriteList = connect(
    state=>({
        favorites: state.favorites
    }),
    dispatch=>({
        onRemoveFavorite(id){
            dispatch(removeFavorite(id))
        }
    })

)(Favorites)