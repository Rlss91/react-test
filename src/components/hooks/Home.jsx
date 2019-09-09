import React, {useState} from 'react'
import Counter from './Counter';
import CounterArr from './CounterArr';

export default function Home() {
    let [counter1, setCounter1] = useState(100)
    let [counter2, setCounter2] = useState(100)
    let [arrs, setArrs] = useState([0,0,0,0])

    const addNum = (val, setfunc) => {
        setfunc(val-5)
        //setCounter1(counter1-5)
    }

    const addANum = (idx) => {
        let arr = [...arrs]
        arr[idx] -= 5
        setArrs(arr)
    }

    const initArray = () => {
        return arrs.map((item, idx)=><CounterArr 
        key={new Date().getMilliseconds()+Math.random()} 
        value={arrs[idx]} 
        id={idx} 
        onClick={addANum} />)
    }

    const addCtr = ()=>{
        let arr = [...arrs, 0]
        setArrs(arr)
    }

    return (
        <div>
            <Counter value={counter1} onClick={addNum} setFunc={setCounter1}></Counter>
            <Counter value={counter2} onClick={addNum} setFunc={setCounter2}></Counter>
            {initArray()}
            <button onClick={addCtr}>add ctr</button>
        </div>
    )
}
