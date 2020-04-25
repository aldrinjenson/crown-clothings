import React from 'react';
import './App.css';
import Homepage from './pages/homepage.component';
import { Switch, Route } from 'react-router-dom';

const HatsPage = () =>{
  return(
    <h1>HatsPage</h1>
  )
}

function App() {
  return (
    <div>      
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/hats' component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
