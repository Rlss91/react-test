import React, {useState} from 'react'

export default function Counter(props) {
    return (
        <div>
            <button onClick={()=>props.onClick(props.value, props.setFunc)}>+</button>
            <span>{props.value}</span>
            <button >-</button>
        </div>
    )
}
