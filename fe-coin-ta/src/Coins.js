import React, { Component } from 'react'
import Coin from './Coin'

export default class Coins extends Component {
    constructor(props) {
        super(props)
        this.state = {
            coin: [],
            // coinSymbol: "",
            // coinPrice: number,
            // coinMCap: number,
            // coinTVol: number,
            // coinChgPerc: number,
        }
    }


componentDidMount() {
        this.getCoin()
      }

getCoin =() => {
    fetch()
}

render () {
    return(
        <>

        </>


    )

}

}