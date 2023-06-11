import React from 'react'
import NavBar from './Components/NavBar/NavBar'
import './App.css';
import { Action,originals} from './urls';
import Banner from './Components/Banner/Banner';
import RowPost from './Components/RowPost/RowPost';

function App() {
  return (
    <>
    
    <NavBar/>
    <Banner/>
    <RowPost url = {originals} title = "Netflix Originals"/>
    <RowPost url= {Action} title = "Action"  isSmall />


    </>

  )
}

export default App