import React, { Component } from 'react'
import Login from './login'

export default class HomeLogin extends Component {
    state = {
        modelOpen: false
    }

    handleModel = () => {
        this.setState({modelOpen:!this.state.modelOpen})
    }

    render() {
        return (
            <div>
                {
                    this.state.modelOpen
                    ?
                    <Login onCloseModel={this.handleModel} nameB='4' />
                    :
                    <button onClick={this.handleModel}>open</button>
                
                }
            </div>
        )
    }
}
