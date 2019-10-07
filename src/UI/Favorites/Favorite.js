import React from 'react'

const Favorite = (props) =>
<div style={{padding:'3rem',backgroundColor:"red",margin:'5rem 10rem',position:'relative'}}>
    <button style={{position:'absolute',top:'0',right:'0',borderRadius: '10rem 0 10rem 10rem'}} onClick={() => props.onRemove(props.id)}>X</button>
    <h2>{props.title}</h2>
</div>

export default Favorite