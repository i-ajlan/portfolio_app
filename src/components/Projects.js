import React from 'react'
import { my_projects } from '../data'
import '../css/Projects.css'

export default function Projects() {
  return (
    <div className='projects' id='my_projects'>
      <h2>Projects</h2>
        {my_projects.map((item,index) =>{
            const {title, link, source, technologies} = item;
            return <div key={index} className='project'>
                <div className='project_title'>{title}</div>
                <div className="project_link">This is the link of this project: <a href={link}>{link}</a></div>
                <div className='project_source'>This is the source code link:<a href={source}>{source}</a></div>
                <div className='project_technologies'> The technologies used in this app are: <ul>{technologies.map((item2,index2)=>{
                  
                  return <li key={index2} className='project_technology'>{item2}</li>})}</ul></div>
            </div>
        })}
    </div>
  )
}
