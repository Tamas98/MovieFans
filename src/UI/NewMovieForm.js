import React from 'react'
import "../Styles/Movies.css"

export const NewMovieForm = ({onAdd=f => f}) =>{
    
    let _title,_genres,_date,_desc

    return(
        <div style={{padding:"1.5rem",margin:'1.5rem',backgroundColor:"lightgray",width:"70%",borderRadius:'10rem',display:"flex",justifyContent:'space-evenly'}}>
            <form>
                <input type="text" placeholder="Title" ref={input => _title = input} required/>
                <input type="text" placeholder="Genres" ref={input => _genres = input} required/>
                <input type="date" ref={input => _date = input} required/>
                <input type="text" placeholder="Description" ref={input => _desc = input}required/>
            </form>
            <button onClick={() => onAdd(_title.value,_genres.value,_date.value,_desc.value)}>Add new movie</button>
        </div>
    )
}
