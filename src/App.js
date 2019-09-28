import React from 'react';
import { TopMenu } from './UI/TopMenu';
import {HashRouter,Route} from 'react-router-dom'
import { ActivityFlow, MovieList, FavoriteList } from './Containers'
import {PropTypes} from 'prop-types'
import { Home } from './UI/Home';


const App = () =>{
 return(<HashRouter>
      <TopMenu/>
      {/*<Route exact path="/" component={App}/>*/}
      <Route exact path="/" component={Home}/>
      <Route path="/movies" component={MovieList}/>
      <Route path="/favorites" component={FavoriteList}/>
      <Route path="/activities" component={ActivityFlow}/> 
    </HashRouter>
 )}

App.contextTypes = {
  store: PropTypes.object
 }

 export default App
