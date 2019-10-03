import c from './Constants'
import {v4} from 'uuid'

export const addActivity = (what) =>
({
    type: c.ADD_ACTIVITY,
    id: v4(),
    what
})

export const hideActivity = (id) =>
({
    type: c.HIDE_ACTIVITY,
    id
})

export const commentActivity = (id,comment) =>
({
    type: c.COMMENT_ACTIVITY,
    id,
    comment
})

export const addMovie = (title,genres,date,desc) => 
({
    type: c.ADD_MOVIE,
    id:v4(),
    title,
    genres,
    date,
    desc
})

export const rateMovie = (id,rating) =>
({
    type: c.RATE_MOVIE,
    id,
    rating
})

export const addFavorite = (id,title) =>
({
    type: c.ADD_FAVORITE,
    id,
    title
})

export const removeFavorite = (id) =>
({
    type: c.REMOVE_FAVORITE,
    id
})