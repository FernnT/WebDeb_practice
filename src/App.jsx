import { useState } from 'react'
import {BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import NavBar from './assets/components/NavBar'
import Home from './assets/components/Home'
import Create from './assets/components/Create'
import BlogDetails from './assets/components/BlogDetails'
import NotFound from './assets/components/NotFound'
import Todo from './assets/components/Todo'

function App() {

  return (
    <Router>
   <div className="App">
    <NavBar/>

    <div className="content">
    
    <Routes>
      <Route exact path='/' Component={Home} />

      <Route exact path='/create' Component={Create} />

      <Route exact path='/blogs/:id' Component={BlogDetails} />

      <Route exact path = '/TODO' Component={Todo}/>

     <Route path = "*" Component={NotFound}/>

    </Routes>



    </div>

   </div>
   </Router>
  );
}

export default App
