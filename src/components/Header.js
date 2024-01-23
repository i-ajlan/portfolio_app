import {useState, useEffect} from 'react'
import '../css/Header.css'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

function Header() {

    const [isToggled,setIsToggled] = useState(false);
    const [display, setDisplay] = useState('hidden');
    const handleClick = (e) => {
        console.log('Clicked')
        e.preventDefault();
        const href = e.currentTarget.getAttribute('href');
        const elem = document.querySelector(href);
        window.scrollTo({
            left:0,
            top: elem.offsetTop 
        })
        setIsToggled(false)
    }
   
    const handleScrollResize = () => {
        const header = document.querySelector('.header')
        console.log(header.getBoundingClientRect().bottom)
        console.log(header.getBoundingClientRect().width)
        console.log()
        if(header.getBoundingClientRect().bottom <= 0 || window.innerWidth <= 700){
            setDisplay('visible')
        }else{
            if(isToggled){
                setIsToggled(!isToggled)
            }
            setDisplay('hidden')
        }
    }
    useEffect(()=>{
        window.addEventListener('scroll', handleScrollResize);
        return ()=> window.removeEventListener('scroll', handleScrollResize);
    })
    useEffect(()=>{
        window.addEventListener('resize', handleScrollResize);
        return ()=> window.removeEventListener('resize', handleScrollResize);
    })
    
   

  return (
<div className="header">
    <div className="header_content">

            <div className="logo">
                {/* <div> */}
                    MyPortfolio
                {/* </div> */}

            
            </div>
           <nav className={isToggled?'show_nav':'nav'}>
                <ul className={isToggled?'.ul_column':'ul_row'}>
                      
                      
                        <li><a className='link' href="#about_me" onClick={handleClick}>about me</a></li>
                      
                     
                
                        <li><a className='link' href="#my_projects" onClick={handleClick}>My projects</a></li>
        
                    
                    <li><a className='link' href="#contact_me" onClick={handleClick}>Contact me</a></li>
                </ul>
            </nav>
            <IconButton className={`button_header ${isToggled?'is_toggled':''}`}
            style={{visibility:`${display}`}} onClick={()=>{setIsToggled(!isToggled)}}>
                <MenuIcon/>
            </IconButton>
    </div>
        </div>  )
}

export default Header