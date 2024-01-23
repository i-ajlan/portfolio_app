import ProfilePicture from '../images/profilePicture.png'
import '../css/Welcome.css'

export default function Welcome({children}) {
  return (
    <div className='welcome'>
        {children}      
        <div className='welcome_body'>
            <div className='img'>

                <img src={ProfilePicture} alt="" />
            </div>
            

        <div className='welcome_sentences'>
           <p>
            Welcome to My Portfolio!<br/>
        </p>
          <p>Scroll down to learn more about me</p>
        </div>
       
        </div>
    </div>
  )
}
