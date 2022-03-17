import React from 'react'
import Home from './components/pages/Home'
import Themes from './components/pages/Themes'
import GameWild from './components/pages/GameWild'
import GameFarm from './components/pages/GameFarm'
import GameFood from './components/pages/GameFood'
import GameSection from './components/GameSection'
import {HashRouter, Switch, Route } from 'react-router-dom'
import './App.css';
import SettingsPage from './components/pages/SettingsPage'
import Stats from './components/pages/Stats'


function App() {
  //const classes = styles(); 

  return (
    <>
      <HashRouter>
        <Switch>
          <Route path='/' exact component = {Home} />
          <Route path='/game-themes' exact component = {Themes} />
          <Route path='/game-farm' exact component = {GameFarm} />
          <Route path='/game-wild' exact component = {GameWild} />
          <Route path='/game-food' exact component = {GameFood} />
          <Route path='/game-gk' exact component = {GameSection} />
          <Route path='/settings' exact component = {SettingsPage} />
          <Route path='/player-stats' exact component = {Stats} />
        </Switch>
      </HashRouter>
    </>
  );
}

export default App;