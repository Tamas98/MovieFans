import React from 'react'

export const Activity = (props) =>
{

return(props.hidden? <button onClick={() => props.onHide(props.id)}>Show hidden activity</button>:
<div className="Actvity">
    <button onClick={()=> props.onHide(props.id)}>Hide</button>
    {props.what === "rate"? <h1>Rating changed</h1> : <h1>New Movie added</h1>}
    {props.comments.map(c => <p key={c.substr(2,5)}>{c}</p>) }
</div>)}