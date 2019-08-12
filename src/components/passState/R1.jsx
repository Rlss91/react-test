import React, { Component } from 'react'

export default class R1 extends Component {
    render() {
        return (
            <div>
               <h1>{this.props.location.props.hhh}</h1> 
               <h2>{this.props.location.state.hhh2}</h2>
            </div>
        )
    }
}
