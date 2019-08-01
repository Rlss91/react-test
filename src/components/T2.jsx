import React, { Component } from 'react'

export default class T2 extends Component {
    render() {
        let arr = [2,2,2,2]
        return (
            <div>
                <h1>hello world from t2</h1>
                <div>
                {arr.map((item, idx)=>{
                    return <h2 key={idx}>{item}</h2>
                })}
                </div>
            </div>
        )
    }
}
