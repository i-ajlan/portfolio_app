import React from 'react'
import ProfilePicture from '../images/profilePicture.png'
import '../css/Welcome.css'

export default function Welcome() {
  return (
    <div className='welcome'>
        
        <div className='welcome_body'>
            <div className='img'>

                <img src={ProfilePicture} alt="" />
            </div>
            


        <h1>
            Welcome to My Portfolio!<br/>
        <span>Scroll down to learn more about me.</span>
        </h1>
        
        </div>
    </div>
  )
}
