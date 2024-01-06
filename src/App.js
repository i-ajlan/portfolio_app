import { useState, useEffect} from 'react';
import './App.css';
import {Contacts, Loading, Welcome, AboutMe, Projects, Header} from './components';

function App() {


  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState('none');
  
  const [top, setTop] = useState(null);
  
   useEffect(()=>{
   setTimeout(()=>setIsLoading(false), 3000)
    
  },[])
   
   const handleScroll = () => {
     console.log("work");
     console.log(top)
     if (!top) return;
     let y1 = top.getBoundingClientRect().y;
   
    if(y1<0){
      setDisplay("inline")
    } else {
      setDisplay("none")
    }
    
    
  }
  useEffect(()=>{
    
    window.addEventListener('scroll',handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  },[top])

  return (
     <div className="App">


    {isLoading ? <Loading/>
    :
  <div>
    <Header/>
    
    <Welcome />
  
    <AboutMe setTop={setTop}/>
  
    <Projects />
  
    <Contacts />
    <button style={{position:'fixed', bottom:'30px', right:'30px', borderRadius:'50%', padding:'5px', display:`${display}`}}> <a href='#' style={{textDecoration:"none", color:'orange'}}>To the top</a></button>
   </div>
     
        
      }

     
    </div>
  );
}

export default App;
