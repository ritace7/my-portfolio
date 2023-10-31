import React from 'react'
import '../styles/Home.css'
import homeImg from '../images/home-img.png'

export default function Home(){
    return(
        <div className='home-page'>
            <div className='introduction'>
                <p>
                    <span className='fragments'> 
                        &lt;&gt;
                    </span>                
                        Hello, World!                                   
                </p>
                <p>I'm Hritesh Shrestha</p>
                <p>
                    Web Developer | Music Producer
                    <span className='fragments'> 
                        &lt;/&gt;
                    </span> 
                </p>
            </div>
            <img src={homeImg} alt="home" className="homeImage"/>
        </div>
    )
}