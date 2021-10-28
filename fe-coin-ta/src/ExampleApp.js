import React, {Component} from 'react'
import ReactModal from 'react-modal'
import { ReactDOM } from 'react-dom'
import Nav from './Nav'

export default class ExampleApp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            showModal: false
        }
    }
    handleOpenModal = () => {
        this.setState({showModal:true})
    }
    handleCloseModal = () => {
        this.setState({showModal:false})
    }
    render () {
        return (
            <div>
        <button onClick={this.handleOpenModal}>Register or Login Here.</button>
        <ReactModal 
           isOpen={this.state.showModal}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={this.handleCloseModal}>Back to Coin Tracker.</button>
          <h1>Information for Registration and Login.</h1>
          <Nav loginUser={this.loginUser} signup={this.signup}/>
        </ReactModal>
      </div>
    );
  }
}

// const props = {};

// ReactDOM.render(<ExampleApp {...props} />, document.getElementById('main'))


