import React, { Component } from 'react'


export default class Coin extends Component {

render () {
    return(
        <>
        <h1>{this.props.coinName}</h1>
        <h1>{this.props.coinObject}</h1>
        {/* <h1>{this.props.coinMCap}</h1>
        <h1>{this.props.coinTVol}</h1>
        <h1>{this.props.coinChgPerc}</h1> */}
        </>
    )

}
}