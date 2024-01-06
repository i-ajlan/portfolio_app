import React, {useState} from 'react'
import '../css/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function Header() {

    const [isToggled,setIsToggled] = useState(false);

    const handleClick = (e) => {
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const elem = document.querySelector(href);
        const header_height = document.querySelector('.header').getBoundingClientRect().height
        window.scrollTo({
            left:0,
            top: elem.offsetTop - header_height
        })
        // setIsToggled(false)
    }
   
        
   

  return (
<div className="header">
    <div className="header_content">

            <div className="logo">
                MyPortfolio
            <IconButton className='button_header' onClick={()=>{setIsToggled(!isToggled)}}>

                <MenuIcon className={isToggled?'is_toggled':''}/>
            </IconButton>
            </div>
            <nav className={isToggled?'show_nav':''}>
                <ul>
                      
                      
                        <li><a href="#about_me" onClick={handleClick}>about me</a></li>
                      
                     
                
                        <li><a href="#my_projects" onClick={handleClick}>My projects</a></li>
        
                    
                    <li><a href="#contact_me" onClick={handleClick}>Contact me</a></li>
                </ul>
            </nav>
    </div>
        </div>  )
}

export default Header