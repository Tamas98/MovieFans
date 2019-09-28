import React from 'react'
import '../Styles/TopMenu.css'
import {Link} from 'react-router-dom'

export const TopMenu = () =>
<div className="topMenu mobile">
    <Link to="/"><button>Home</button></Link>
    <Link to="movies"><button>Movies</button></Link>
    <Link to="favorites"><button>Favorites</button></Link>
    <Link to="activities"><button>Activities</button></Link>
    <button>About</button>
</div>