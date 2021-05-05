import React from "react";
import {ReactComponent as Search} from '../assets/search.svg';

export default function Header({setUserInput, userInput, header}) {
    
    return (
        <header className="header">
            <h1 className="heading-01">{header}</h1>
        </header>
    )
}