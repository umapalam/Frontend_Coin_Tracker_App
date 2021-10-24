import './normalize.css';
import './skeleton.css';
import React, { Component } from 'react'
import Coins from './Coins';
import NewForm from './NewForm';

//backend url port
let baseUrl = 'http://localhost:4000'

class App extends Component {
  constructor(props) {
    super(props)
    this.state ={
      cryptos:[],
    }
  }
  getCryptos = () => {
        // fetch to the backend
        fetch(baseUrl + "/cryptos")
        .then(res => {
          if(res.status === 200) {
            return res.json()
          } else {
            return []
          }
        }).then(data => {
          console.log(data)
          this.setState({ cryptos: data })
        })
      }

  addCrypto = (newCrypto) => {
    const copyCryptos = [...this.state.cryptos]
    copyCryptos.push(newCrypto)
    this.setState({
      cryptos: copyCryptos,
    })
  }

  componentDidMount() {
        this.getCryptos()
       }

  render () {
  return (
    <div className="container">
      <div className="inner-container">
        <h1>My Coin Tracker</h1>
        <Coins />
      </div>
      <div>
      <NewForm baseUrl={baseUrl} addCrypto={ this.addCrypto }/>
        <table>
            <tbody>
              { this.state.cryptos.map((crypto, i) => {
                  return (
                    <tr>
                      <td key={crypto._id}> {crypto.coinName} </td>
                      {/* <td key={i}> {crypto.coinPrice} </td> */}
                    </tr>
                  )
                })
              }
            </tbody>
          </table>
        </div>
    </div>
  )
}
}

export default App;
