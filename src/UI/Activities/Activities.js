import React from 'react'
import {Activity} from './Activity'

export const Activites = ({activities=[],onHide=f=>f}) => {
    console.log("im here")
return(
    <div className="container">
        <h1>Activities</h1>
        {activities.length === 0?
        <p>There are no activities at this moment</p>:
        activities.map(e=>
        <Activity key={e.id} type={e.what} {...e} onHide={onHide}/>)}
    </div>
)}