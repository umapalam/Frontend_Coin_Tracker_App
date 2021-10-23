import React, { Component } from 'react'
import Coin from './Coin'

export default class Coins extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coinObject: [],
            baseUrl: "https://api.coingecko.com/api/v3/simple/price?ids=",
            coinName: "",
            default: "&vs_currencies=usd&include_market_cap=true&include_24hr_vol=true&include_24hr_change=true&include_last_updated_at=false",
            searchUrl: "",
        }
    }
handleChange = (event) => {
        this.setState({
          [event.target.id]: event.target.value
        })
        this.setState({
            searchURL: this.state.baseUrl + this.state.coinName + this.state.default
          }, () => {

            fetch(this.state.searchURL)
            .then(response => {
                return response.json()
            }).then(json => this.setState({
              coinObject: [json],
            }),
            (err) => console.log(err))
          })
    }   
// handleSubmit = (event) => {
//             event.preventDefault()
//             // fetch
//             fetch(this.props.baseUrl + '/holidays', {
//               method: 'POST',
//               body: JSON.stringify({name: this.state.name}),
//               headers: {
//                 'Content-Type': 'application/json'
//               },
//             }).then( res => {
//                 return res.json()
//             }).then( data => {
//               // console.log(data)
//               this.props.addHoliday(data)
//               this.setState({
//                 name: ''
//               })
//             }).catch (error => console.error({'Error': error}))
 //   }
    
        

componentDidMount() {
   // this.getCoin()
  }

render () {
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
        <Coin coinObject={this.state.coinObject} coinName={this.state.coinName}/>
        </>


    )

}

}