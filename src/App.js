import { useState, useEffect} from 'react';
import {Contacts, Loading, Welcome, AboutMe, Projects, Header} from './components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material';

function App() {


  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState('none');
  
  const [top, setTop] = useState(null);
  
   useEffect(()=>{
   const timeOutObj = setTimeout(()=>setIsLoading(false), 2000)
    return ()=>clearTimeout(timeOutObj)
  },[])
   
   const handleScroll = () => {
    //  console.log("work");
    //  console.log(top)
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
    
    <Welcome >
      <Header/>
    </Welcome>
  
    <AboutMe setTop={setTop}/>
  
    <Projects />
  
    <Contacts />
    <IconButton className='toTheTop' style={{position:'fixed', bottom:'30px', right:'30px',
    backgroundColor: 'white',
    width:'50px',
    boxShadow: '0 0 5px',
   borderRadius:'50%', padding:'5px', display:`${display}`}}> <a href='#' ><ArrowUpwardIcon/></a></IconButton>
   </div>

        
      }

     
    </div>
  );
}

export default App;
