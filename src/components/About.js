import React from "react";  
import SocialIcons from "./SocialIcons";

export default function About(){
    return(
        <main>
            <section className="about">
                <div className="about-bio-image">
                    <div className="about-bio">
                        <h2 className="text-secondary">BIO</h2>
                        <p> Hi</p>
                    </div>
                </div>

                <div className="jobs">
                    <div className="jobs-job">
                        <h2 className="text-secondary">2018-Current</h2>
                        <h3>Freelancer</h3>
                        <h6>Front End Developer</h6>
                        <p>Lorem</p>
                    </div>
                    <div className="jobs-job">
                        <h2 className="text-secondary">2018-Current</h2>
                        <h3>Domino's</h3>
                        <h6>Store Manager</h6>
                        <p>Lorem</p>
                    </div>
                </div>
                
                <SocialIcons/>
                <footer>&copy; Copyright 2022</footer>
            </section>
        </main>
    )
}