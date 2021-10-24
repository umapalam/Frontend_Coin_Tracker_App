import './normalize.css';
import './skeleton.css';
import React, { Component } from 'react'
import Coins from './Coins';

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
      </div>
    </div>
  )
}
}

export default App;
