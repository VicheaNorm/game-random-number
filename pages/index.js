import Head from 'next/head'
import { useState } from 'react'
import CountUp from 'react-countup';
import { CParticle } from '../components/Particle';


export default function Home() {
  
  const [minVal, setMinVal]= useState(0);
  const [maxVal, setMaxVal]= useState(0);
  const [randomNum, setRandomNum] = useState(0);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random()*(maxVal - minVal + 1 ) + maxVal));
  } 


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
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
          <h1> <span className="text-9xl text-gray-600 font-semibold">RWS-</span>
            <CountUp className="text-9xl text-red-400 font-semibold" start={0} end={randomNum} duration={4} delay={2} />
          </h1>
          {/* <p className="text-3xl text-red-400">RANDOM NUMBER : <span className="font-extrabold text-5xl text-gray-700">{randomNum}</span> </p> */}

          <div className="flex justify-center py-5 items-center">
          <p className="uppercase font-medium text-gray-500">Number Start: </p>
          <input className="block w-80 mx-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="number " value={minVal} onChange={e =>setMinVal(e.target.value)}/>
          </div>
          <div className="flex justify-center py-3 items-center">
          <p className="uppercase font-medium text-gray-500 pr-3">Number End: </p>
          <input className="block w-80 mx-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring" type="number " value={maxVal} onChange={e =>setMaxVal(e.target.value)}/>
          </div>
          <button className=" bg-red-400 text-white px-36 h-10 rounded-md mx-4" onClick={handleRandomNum}>Get RANDOM Number</button>
        </div>
        
      </div>
      
      
    </div>
  )
}
