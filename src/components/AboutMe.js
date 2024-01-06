import React, { useState, useEffect} from 'react'
import { about_me } from '../data'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import '../css/AboutMe.css'


export default function AboutMe({setTop}) {


  const [value, setValue] = useState(0);
 
  console.log("about me is here too")
  useEffect(()=>{
    setTop(document.querySelector('.about_me'))
  },[])

  return (
    <div className='about_me' id='about_me'>
      <div className="about_me_body">

      <h2>About Me</h2>
        {about_me.map((item,index) =>{
            const {title, info} = item;
            return <div key={index}><div className={`about_me_title ${index === value &&'active_title'}`}
            onClick={()=>setValue(index)}
            >
             
              <ArrowForwardIosIcon className={index === value && 'arrow_down'}/>
           
              {title}
            </div>
            <div className="about_me_info">{index === value && info}</div></div>
        })}
      </div>
    </div>
  )
}
