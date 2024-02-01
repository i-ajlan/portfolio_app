import { useState, useEffect, useRef} from 'react';
import {Contacts, Loading, Welcome, AboutMe, Projects, Header} from './components';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { IconButton } from '@mui/material';
import './css/App.css'

function App() {


  const [isLoading, setIsLoading] = useState(true);
  const [display, setDisplay] = useState('none');

  const[headerHeight, setHeaderHeight] = useState();

  
  
  const [top, setTop] = useState(null);
  const headerRef = useRef();
  // console.log(headerRef);

  document.documentElement.style.setProperty('--header-height', headerHeight);
  console.log('headerHeight:'+headerHeight);
  useEffect(()=>{
    console.log('effect of App')
    setHeaderHeight(headerRef.current?.getBoundingClientRect().height);
    
     
  },[headerHeight, isLoading])

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
     <div className="app">


    {isLoading ? <Loading/>
    :
  <div>
    <Header headerHeight={headerHeight} ref={headerRef}/>
    
     <Welcome/>
  
    <AboutMe setTop={setTop}/>
  
    <Projects />
  
    <Contacts />
    {/* <IconButton className='toTheTop' style={{position:'fixed', bottom:'30px', right:'30px',
    backgroundColor: 'white',
    width:'50px',
    boxShadow: '0 0 5px',
   borderRadius:'50%', padding:'5px', display:`${display}`}}> <a href='#' ><ArrowUpwardIcon/></a></IconButton> */}
  
   </div>

    
      }

      
    </div>
  );
}

export default App;
