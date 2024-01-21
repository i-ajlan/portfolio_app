import '../css/Loading.css'

export default function Loading() {

 
  

  return (<section className='loading_section'>
    <span className="loader"></span>
  </section>)
}

// .loader{
//     display: block;
//     position: relative;
//     height: 32px;
//     width: 200px;
//     background: #fff;
//     border:2px solid #fff;
//     color: red;
//     overflow: hidden;
//   }
//   .loader::before{
//     content: '';
//     background: red;
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 0;
//     height: 100%;
//     animation: loading 10s linear infinite;
//   }
//   .loader:after{
//     content: '';
//     position: absolute;
//     left: 0;
//     top: 0;
//     width: 100%;
//     height: 100%;
//     text-align: center;
//     font-size: 24px;
//     line-height: 32px;
//     color: rgb(0,255,255);
//     mix-blend-mode: difference;
//     animation: percentage 10s linear infinite;
//   }
  
//   @keyframes loading {
//     0% { width: 0 }
//     100% { width: 100% }
//   }
 
  
  