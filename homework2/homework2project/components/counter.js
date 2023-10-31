"use client";
import {useState} from "react";
export default function Counter(){
    var [text, changeText] = useState("Work Experience            ");

    return (
        <div>
            {text}
            <button onClick = {() => changeText(text = "Coming soon!            ")}>Press Me</button>
        </div>
    );
}