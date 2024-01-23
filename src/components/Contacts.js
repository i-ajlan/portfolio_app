import React from 'react'
import { my_contacts } from '../data'
import { IconButton } from '@mui/material';
import '../css/Contacts.css'


function Contacts() {
  console.log("Hello from Contact");
  return (
    <div className='contacts' id='contact_me'>
      <h2 className='contacts_title'>Contacts</h2>
      <p>Lists of my socials: </p>
        <ul>
        
        {my_contacts.map((item, index) => {
        const {title, Icon, link} = item;
         
        return <li key={index}>
            <a href={link}>
              <IconButton color='secondary' className='contacts_button'>
                {Icon}
              </IconButton>
              </a>
                {title} 
        </li>
    })}
    
        </ul>
    </div>
  )
}

export default Contacts;