import React, {useEffect, useRef} from 'react'
import '../css/Loading.css'

export default function Loading() {

  const dotRef = useRef(null);
  const dotRef2 = useRef(null);
  const dotRef3 = useRef(null);

  

  const dotRefs = [dotRef, dotRef2, dotRef3];

  //animation of the buttons
 useEffect(()=>{dotRefs.map((item,index)=>{ return setTimeout(()=>{ return item.current.style.animation='anim1 3s infinite ease-in-out'},Number(`${index}000`))})});
  

  return (
    <div className="loading">My PortFolio is Loading <span className='dot' ref={dotRef}>.</span><span className='rot' ref={dotRef2}>.</span><span className='sot' ref={dotRef3}>.</span></div>
  )
}
