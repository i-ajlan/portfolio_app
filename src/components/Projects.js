import {useState} from 'react'
import { my_projects } from '../data'
import '../css/Projects.css'

export default function Projects() {
      const [value, setValue] = useState(null);
  return (
    <div className='projects section' id='my_projects'>
      <h2 className='section__title'>Projects</h2>
        {my_projects.map((item,index) =>{
            const {title, link, frontend_link, backend_link, image, technologies} = item;
            return <div key={index} className='project' onClick={()=>{index === value?setValue(null):setValue(index)}}>
                <div className='project_title'>
                  {title}
                   </div>
                  
                <div className={index === value? 'show_div' : 'not_show'}>
                <div className='project_info'><div>
                <div className="project_link"><a href={link}><button>See the project</button></a></div>
                <div className='project_frontend_link'><a href={frontend_link}>See the frontend Code</a></div>
                {backend_link && <div className='project_backend_link'><a href={backend_link}>See the backend Code</a></div>}                
                <div className='project_technologies'> The technologies used in this app are: <ul>{technologies.map((item2,index2)=>{
                  
                  return <li key={index2} className='project_technology'>{item2}</li>})}</ul>
                  </div>
                  </div>
                  {image && <div className='image_container'>
                    <img src={image} alt="" />
                  </div>
                  }
                  
                </div>
                </div>
            </div>
        })}
    </div>
  )
}
