import React, { Component } from 'react'
import CounterC from './CounterC'

export default class CounterFather extends Component {
    state={
        counters:[5,6],
        total: 11
    }
    handleAdd = (key)=>{
        // console.log(key)
        let state = {...this.state}
        state.counters[key]--
        state.total--
        this.setState(state)
    }
    render() {
        return (
            <div>
                <div>{this.state.total}</div>
                {this.state.counters.map((item, idx)=>{
                    return <CounterC 
                    key={idx} 
                    aindex={idx} 
                    startval={item} 
                    onAddClick={this.handleAdd}  />
                })}
            </div>
        )
    }
}
