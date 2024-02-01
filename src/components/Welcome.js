import ProfilePicture from '../images/profilePicture.png'
import '../css/Welcome.css'
import { useState } from 'react'



export default function Welcome({children}) {

  console.log('welcome hoooooome')
  

  return (

    <div className='welcome section'>
        {children}      
        <div className='welcome_body'>
            <div className='img'>

                <img src={ProfilePicture} alt="" />
            </div>
            

        <div className='welcome_sentences'>
          {/* <marquee behavior="" direction=""> */}

          
          
          <p>
            Welcome to My Portfolio! Welcome to My Portfolio!

          </p>
              
            
            <p>
              Scroll down to learn more about me. Scroll down to learn more about me.
            </p>
               
            
        
        </div>
       
        </div>
    </div>
  )
}
