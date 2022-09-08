import React from "react";
import {Helmet} from "react-helmet";

export default function App(){
    return(
        <div className="app-container">
            <Helmet>
                <meta charSet="utf-8" />
                <title>Best Portfolio Ever</title>
                <meta name="Ritace's Portfolio" content="Some information about Ritace"/>
            </Helmet>
            <h1>hello</h1>
        </div>
    )
}