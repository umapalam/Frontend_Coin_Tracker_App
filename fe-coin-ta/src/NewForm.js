import React, { Component } from 'react'

export default class NewForm extends Component {
    constructor(props)  {
        super(props)
        this.state = {
            coinName: '',
        }
    }

    handleChange = (event) => {
        // console.log(event.target.value)
        this.setState({
          coinName: event.target.value
        })
      }

    handleSubmit = (event) => {
        event.preventDefault()
        // fetch
        fetch(this.props.baseUrl + '/cryptos', {
          method: 'POST',
          body: JSON.stringify({coinName: this.state.coinName}),
          headers: {
            'Content-Type': 'application/json'
          },
        }).then( res => {
            return res.json()
        }).then( data => {
          // console.log(data)
          this.props.addCrypto(data)
          this.setState({
            coinName: ''
          })
        }).catch (error => console.error({'Error': error}))
      }
    
    render () {
    return (
        <form onSubmit={this.handleSubmit}>
        <label htmlFor="coinName">Name: </label>
        <input type="text" id="coinName" name="coinName" onChange={ (e) => this.handleChange(e)} value={this.state.coinName} />
        <input type="submit" value="Track Coin" />
      </form>



    )
}
}