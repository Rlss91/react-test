import React, {useState} from 'react'
import Counter from './Counter';

export default function Home() {
    let [counter1, setCounter1] = useState(100)
    let [counter2, setCounter2] = useState(100)
    const addNum = (val, setfunc) => {
        setfunc(val-5)
        //setCounter1(counter1-5)
    }
    return (
        <div>
            <Counter value={counter1} onClick={addNum} setFunc={setCounter1}></Counter>
            <Counter value={counter2} onClick={addNum} setFunc={setCounter2}></Counter>
        </div>
    )
}
