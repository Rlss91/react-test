import React, { Component } from 'react'
import { Route, Switch, Redirect, Link } from "react-router-dom";
import R1 from "./R1"

export default class MainState extends Component {
    state={
        aaa:'11111',
        sendState:{
            pathname: '/state/r1',
            props:{
                hhh: ''
            },
            state:{
                hhh2: 'totoo'
            }
        }
    }
    handleOnChange = (event) =>{
        let state = {...this.state}
        state.sendState.props.hhh = event.target.value
        this.setState({...state})
    }
    render() {
        return (
            <div>
                <Switch>
                    <Route path="/state/r1" component={R1} />
                </Switch>
                <input type="text" value={this.state.sendState.props.hhh} onChange={this.handleOnChange} />
                <Link to={this.state.sendState}>R1</Link>
            </div>
        )
    }
}
