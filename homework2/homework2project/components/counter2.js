"use client";
import {useState} from "react";
export default function Counter2(){
    var [text, changeText] = useState("Resume            ");

    return (
        <div>
            {text}
            <button onClick = {() => changeText(text = "Coming soon!            ")}>Press Me</button>
        </div>
    );
}