import React, { Component } from 'react'

export default class T1 extends Component {
    render() {
        let arr = [1,1,1,1]
        return (
            <div>
                <h1>hello world from t1</h1>
                <div>
                {arr.map((item, idx)=>{
                    return <h2 key={idx}>{item}</h2>
                })}
                </div>
            </div>
        )
    }
}
