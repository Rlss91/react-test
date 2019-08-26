import React, { Component } from 'react'
import PropTypes from 'prop-types'; 

export default class Login extends Component {
    state = {
        inputs:
        {
            us: '',
            ps: ''
        }
    }

    handleInput = (e) => {
        let state = {...this.state}
        state.inputs[e.target.name] = e.target.value
        this.setState(state)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        //send server request
    }

    render() {
        return (
            <div>
                <button onClick={this.props.onCloseModel}>x</button>
                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="us" placeholder="Username" onChange={this.handleInput} value={this.state.inputs.us} /><br />
                    <input type="text" name="ps" placeholder="Password" onChange={this.handleInput} value={this.state.inputs.ps} /><br />
                    <button>send</button>
                </form>
            </div>
        )
    }
}

Login.propTypes = {
    onCloseModel: PropTypes.func.isRequired
}