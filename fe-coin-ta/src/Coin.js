import React, { Component } from 'react'
import Coins from './Coins'

export default class Coin extends Component {

render () {
    return(
        <>
        <h1>{this.props.coinName}</h1>
        <h1>{this.props.coinSymbol}</h1>
        <h1>{this.props.coinPrice}</h1>
        <h1>{this.props.coinMCap}</h1>
        <h1>{this.props.coinTVol}</h1>
        <h1>{this.props.coinChgPerc}</h1>
        </>
    )

}
}