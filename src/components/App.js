import React from "react";
import Title from "./Title"
import Header from "./Header";
import HomePage from "./HomePage";

export default function App(){
    return(
        <div className="app-container">
            <Title/>
            <Header/>
            <HomePage/>
        </div>
    )
} 