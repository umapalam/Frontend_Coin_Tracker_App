import './normalize.css';
import './skeleton.css';
import React, { Component } from 'react'
import Coins from './Coins';
import FavCoins from './FavCoins';

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      coin:"bitcoin"
    }

  }
  render () {
  return (
    <div className="container">
      <div className="inner-container">
        <h1>My Coin Tracker</h1>
  
        <Coins />
        <FavCoins />
      </div>
    </div>
  )
}
}

export default App;
