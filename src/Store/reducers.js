import c from '../Constants'

export const activity = (state={},action)=>{
    switch(action.type){
        case c.ADD_ACTIVITY:
            return{
                id: action.id,
                what: action.what,
                hidden: false,
                comments: []
            }
        case c.HIDE_ACTIVITY:
            return state.id !== action.id ? state : {...state,hidden:!state.hidden}

        case c.COMMENT_ACTIVITY:
            return state.id !== action.id ? state : {...state,comments: state.comments.push(action.comment)} 

        default: return state
    }
}

export const activities = (state=[],action) => {
    switch(action.type){
        case c.ADD_ACTIVITY:
            return [...state,activity({},action)]
        
        case c.HIDE_ACTIVITY:
            return state.map(a => activity(a,action))

        case c.COMMENT_ACTIVITY:
            return state.map(a => activity(a,action))
        
        default: return state

    }
}

export const movie = (state={},action) => {
    switch(action.type){
        case c.ADD_MOVIE:
            
            return{
                id: action.id,
                title: action.title,
                genres: action.genres,
                date: action.date,
                rating: 0,
                desc: action.desc
            }

        case c.RATE_MOVIE:
            return (state.id !== action.id) ? state : {...state,rating:action.rating}
    
        default: return state
    }    
}

export const movies = (state=[],action) =>{
    switch(action.type){
        case c.ADD_MOVIE:
            let newState = [...state,movie({},action)]
            return newState

        case c.RATE_MOVIE:
            return state.map(m => movie(m,action))
                
        default: return state
    }
}

export const favorite = (state={},action) => {
    switch(action.type){
        case c.ADD_FAVORITE:
            return {
                id: action.id,
                title: action.title
            }
                
        default: return state

    }
}

export const favorites = (state=[],action) => {
    switch(action.type){
        case c.ADD_FAVORITE:
            return [...state,favorite({},action)]
        
            case c.REMOVE_FAVORITE:
            return state.filter(e => e.id !== action.id)
            
        default: return state

    }
}