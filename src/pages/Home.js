import React from 'react'
import homeImg from '../images/home-img.png'

export default function Home(){
    return(
        <div className='home-page'>
            <div className='introduction'>
                <p>
                    <span className='fragments'>&lt;&gt;</span>                
                        Hello, World!                                   
                </p>
                <p title='name'>I'm <span className='fragments'>Hritesh</span> Shrestha</p>
                <p>
                    Web Developer 
                    <span className='fragments'>|</span>
                    Music Producer
                    <span className='fragments'>&lt;/&gt;</span> 
                </p>
            </div>
            <img src={homeImg} alt="Home Page Side"/>
        </div>
    )
}