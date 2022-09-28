import React from "react";  
import SocialIcons from "./SocialIcons";

export default function HomePage(){
    return(
        <main>
            <section className="home">
                <h2>Hi! My Name Is</h2>
                <h1 className="home-name">
                    Hritesh <span className="home-name-last">Shrestha</span> 
                </h1>
                <h2>Web Developer and Music Producer</h2>
                <SocialIcons/>
                <footer>&copy; Copyright 2022</footer>
            </section>
        </main>
    )
}