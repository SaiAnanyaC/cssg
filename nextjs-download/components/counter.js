"use client";
import {useState} from "react";
export default function Counter(){
    const [count1, setCount] = useState(0);
    const [count2, setCount2] = useState(0);
    const [count3, setCount3] = useState(0);

    function count1Button(){
        setCount(count1+1);
        setCount3(count3+1);
    }

    function count2Button(){
        setCount2(count2+1);
        setCount3(count3+1);
    }

    return (
        <div>
            <h1>counter component</h1>
            <p>Count: {count1}</p>
            <button onClick={() => setCount(count1Button)}>Press Me</button>
            <p>Count 2: {count2}</p>
            <button onClick={() => setCount2(count2Button)}>Press Me 2</button>
            <p>Count 3: {count3}</p>
        </div>
    );
}