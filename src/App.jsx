import { useState } from 'react'
import './App.css'
import Navbar from "./compoments/Navbar.jsx";
import tb303 from './img/tb303yellow-removebg.png'
import acidsmile from './img/acidsmile-removebg.png'
import acid303 from '../src/img/303smile.png'
import shema from '../src/img/shema303.jpg'
import re303 from '../src/img/re-303.jpg'
import xoxbox from '../src/img/xoxbox2-removebg.png'
import td3RemovedBg from '../src/img/xoxbox3-removebg.png'
import tt303 from '../src/img/cyclone-analogic.png'
import mammb33 from '../src/img/mammb33-removebg.png'
import React, { useEffect } from 'react';
import data from './json/bassline.json';

function App() {

  <div>

  </div>
 
//   const lessynthe = [tb303,re303,tt303,td3RemovedBg,xoxbox,shema,mammb33]
//   console.log(data);
  
//   return (

// <div className=' overflow-x-hidden flex justify-start items-center flex-col bg-black '>
//   <Navbar></Navbar>

//   <div className='flex justify-around items-center h-[5rem] mt-9 w-full '>

//     <input type="text" placeholder="Type here" className="input input-bordered w-[12rem] max-w-xs bg-black" />

//           <div className='flex justify-center items-center  '>
//             <h1 className='text-[#FEDA00] text-8xl hover:scale-125 duration-75 ease-out font-bold cursor-pointer '>ACID BASSLINE</h1>
//           </div>

//     <details className="dropdown w-[12rem]">
//       <summary className="btn m-1  bg-black">Tags</summary>
//       <ul className="menu dropdown-content bg-[black] border-[1px] rounded-box z-[1] w-52 p-2 shadow">
//         <li><a>Item 1</a></li>
//         <li><a>Item 2</a></li>
//       </ul>
//     </details>
//   </div>

//     <div className='flex flex-wrap gap-12 justify-center items-center pt-10 bgmain'>
//     {
//       data.map((element,id)=>{
//         return(
//       <div className="card w-[75rem] shadow-xl h-[34rem] group hover:h-[50rem] duration-1000 ease-out bg-black border-[1px]">
//       <figure>
//         <img 
//           src={lessynthe[id]}
//           alt="Acid" />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{element.titre}</h2>
//         <div className='flex justify-center items-center'>
//           <p className=''>{element.text}</p>          
//         </div>
//         <div className="card-actions justify-between">
//         <img className='w-[5rem] h-[5rem] scale-0 group-hover:scale-100 duration-1000 ease-out' src={acid303} alt="" />
//           <button className="btn bg-[#FFFE00] text-black hover:text-white ">Details</button>
//         </div>
//       </div>
//     </div>
//         )
//       })
//     }
//     </div>
// </div>
//   )

}

export default App
