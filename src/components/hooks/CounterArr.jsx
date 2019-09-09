import React from 'react'

export default function CounterArr(props) {
    return (
        <div>
            <button onClick={()=>props.onClick(props.id)}>+</button>
            <span>{props.value}</span>
        </div>
    )
}
