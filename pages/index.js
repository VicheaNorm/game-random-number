import Head from 'next/head'
import { useState,useEffect } from 'react'
import CountUp from 'react-countup';
import { CParticle } from '../components/Particle';


export default function Home() {
  
  const [names, setNames] = useState([]);
  
 
  const getRandomName = () =>{
    fetch("https://opensheet.vercel.app/1KNzIDOx53GNSFelXob9kePjoqdbB9pOwkQ3ShdvKZPs/Sheet1")
      .then((res) => res.json())
      .then((data) => {
        let randomName = Math.floor(Math.random() * data.length);
        setTimeout(() => {
          setNames(data[randomName])
        }, 2000);
        
      });
        
  }
  
  

  return (
    <div className="flex flex-col items-center   justify-center min-h-screen py-2 ">
      <Head>
        <title>Asurraa</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="z-0">
      <CParticle/>
      </div>
      <div className="flex flex-col items-center justify-center w-full flex-1 px-20 text-center z-10 absolute">
        <div>
        
        
        <img className="w-96" src="/watermark.png"/> 
        </div>
        <div className="w-full h-full">
          <h1 className='py-10'>
            <span className="text-8xl text-gray-600 font-semibold">
              {names.username}
            </span>
            <br/>
            {/* <span className="text-3xl text-gray-600 font-semibold">{names.no}</span> */}
            <CountUp className="text-9xl text-red-400 font-semibold" start={0} end={names.no} duration={10} redraw={true} preserveValue={ true} useEasing={true} />
          </h1>
          
          <button className=" bg-red-400 text-white px-36 h-10 rounded-md mx-4" onClick={getRandomName}>Get RANDOM NAME</button>
        </div>
        
      </div>
      
      
    </div>
  )
}
