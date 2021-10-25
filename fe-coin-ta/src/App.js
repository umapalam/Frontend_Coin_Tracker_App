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
      modalOpen: false,
      cryptoToBeEdited: {},
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

  toggleFavorite = (crypto) => {
    // console.log(holiday)
    fetch(baseUrl + '/cryptos/' + crypto._id, {
      method: 'PUT',
      body: JSON.stringify({favorite: !crypto.favorite}),
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .then(resJson => {
      // console.log(resJson)
      const copyCryptos = [...this.state.cryptos]
      const findIndex = this.state.cryptos.findIndex(
        crypto => crypto._id === resJson._id)
      copyCryptos[findIndex].favorite = resJson.favorite
      this.setState({
        cryptos: copyCryptos
      })
    })
  }

  deleteCrypto = (id) => {
    // console.log(id)
    fetch(baseUrl + '/cryptos/' + id, {
    method: 'DELETE'
  }).then( res => {
    // console.log(res)
    // if I checked for a 200 response code 
    const findIndex = this.state.cryptos.findIndex(crypto => crypto._id === id)
    const copyCryptos = [...this.state.cryptos]
    copyCryptos.splice(findIndex, 1)
    this.setState({
      cryptos: copyCryptos
    })
  })
}

handleSubmit = async (e) => {
  e.preventDefault()
  const url = baseUrl + '/cryptos/' + this.state.cryptoToBeEdited._id
  try{
    const response = await fetch( url , {
      method: 'PUT',
      body: JSON.stringify({
        coinName: e.target.coinName.value,
      }),
      headers: {
        'Content-Type' : 'application/json'
      },
    })

    if (response.status === 200){
      const updatedCrypto = await response.json()
      //console.log(updatedHoliday)
      const findIndex = this.state.cryptos.findIndex(crypto => crypto._id === updatedCrypto._id)
      const copyCryptos = [...this.state.cryptos]
      copyCryptos[findIndex] = updatedCrypto
      this.setState({
        cryptos: copyCryptos,
        modalOpen:false
      })
    }
  }
  catch(err){
    console.log('Error => ', err);
  }
}

  handleChange = (e)=>{
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  showEditForm = (crypto)=>{
   this.setState({
     modalOpen:true,
     coinName: crypto.coinName,
     favorite: "",
     cryptoToBeEdited: crypto,

   })
 }

  componentDidMount() {
        this.getCryptos()
       }

  render () {
  return (
    <div>
      <div className="App">
        <h1>My Coin Tracker</h1>
        <Coins />
      </div>
      <div className="u-pull-right">
        <NewForm baseUrl={baseUrl} addCrypto={ this.addCrypto }/>
        <table>
            <tbody>
              { this.state.cryptos.map((crypto, i) => {
                  return (
                    <tr className="divstyle2"key={crypto._id}>
                    <td onClick={() => this.toggleFavorite(crypto)}
                     className={ crypto.favorite ? 'favorite' : null }>
                     { crypto.coinName }
                    </td>
                    <td onClick={() => { this.showEditForm(crypto)}}>✏️</td>
                    <td onClick={() => this.deleteCrypto(crypto._id)}>X</td>
                    </tr>
                  )
                })
              }
            </tbody>

          </table>
          <br/>
          {
            this.state.modalOpen &&
                   <form onSubmit={this.handleSubmit}>
                   <label>Name: </label>
                   <input name="coinName" value={this.state.crypto} onChange={this.handleChange}/> <br/>
                  <button className="button-primary">submit</button>
                 </form>
          }
        </div>
    </div>
  )
}
}

export default App;
