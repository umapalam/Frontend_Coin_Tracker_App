import React, { Component } from 'react'
import Coin from './Coin'

export default class Coins extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coinObject: {},
            baseUrl: "https://api.coingecko.com/api/v3/simple/price?ids=",
            coinName: "",
            default: "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false",
            searchUrl: "",
        }
    }
handleChange = (event) => {
        this.setState({

          coinName: event.target.value
        })
        // this.setState({
        //     searchURL: this.state.baseUrl + this.state.coinName + this.state.default
        //   }, () => {

        //     fetch(this.state.searchURL)
        //     .then(response => {
        //         return response.json()
        //     }).then(json => this.setState([{
        //       coinObject: json.bitcoin,
        //     }]),
        //     (err) => console.log(err))
        //   })
    }   
 handleSubmit = (event) => {
     event.preventDefault()
    this.setState({
        searchUrl: this.state.baseUrl + this.state.coinName + this.state.default
      }, () => {
        fetch(this.state.searchUrl, {
            body: JSON.stringify(coinObject) //Fetch needs to stringify the API object
        })
        .then(response => {
         return response.json()
        }).then(json => 
            this.setState({
            coinObject: json,
        }),
        
        (err) => console.log(err))
      })
   }
    
        

componentDidMount() {
   // this.getCoin()
  }

render () {
    console.log(this.state.coinObject)
    return(
        <>
    <form onSubmit={this.handleSubmit}>
        <label htmlFor='coinName'> Name </label>
        <input
          id='coinName'
          type='text'
          value={this.state.coinName}
          onChange={this.handleChange}
        />
        <input
          type='submit'
          value='Find Coin Info'
        />
        </form>
        {/* <Coin coinObject={this.state.coinObject} coinName={this.state.coinName}/> */}
        </>


    )

}

}