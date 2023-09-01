import React from "react"
import troll_face from "../assets/troll-face.png"
export default function Header() {
    return(
        <header>
            <img className="logo" src={troll_face}/>
            <h2 className="website--title">Meme Generator</h2>
            <h4 className="course--title">React Course - Project 3</h4>
        </header>
    )
}