import './normalize.css';
import './skeleton.css';
import React, { Component } from 'react'
import Coin from './Coin'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      coin:"bitcoin"

    }

  }
  render () {
  return (
    <div className="App">
      <h1>Test Styling</h1>
      <input type="button" value="button input"></input>
      <Coin />
    </div>
  )
}
}

export default App;
