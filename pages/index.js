import React, { useState } from 'react';
import Card2 from './components/card2';
import Card4 from './components/card4';
import Card3 from './components/card3';
import Card from './components/card';
import Image from 'next/image';
import arrow from '../public/assets/arrow.png';
import MyChart from './components/graph';
import line3 from '../public/assets/Line 3.png'
import line4 from '../public/assets/Line 4.png'




export default function Home() {
  const [expanded, setExpanded] = useState(false);
  const [rotate, setRotate] = useState(0); 
  const [showChart, setShowChart] = useState(false);
  

  const toggleExpand = () => {
    setExpanded(!expanded);
  };
  const handleImageClick = () => {
    setShowChart(!showChart); 
    setRotate(rotate + 180);
  };


  

  return (
    <>
    
    <div
      className={` bg-white border-2 rounded-[40px] mx-auto my-8 m-8 ${
        expanded ? 'h-[100%]' : ''
      }`}
    >
   
    
    
      <div className="flex justify-between items-start">
        <div className="flex justify-between gap-8">
          <div>
            <Card />
          </div>
          <div>
            <Card2 />
          </div>
          <div>
            <Card3 />
          </div>
          <div>
            <Card4 />
          </div>
        </div>
        <div className="mt-10 mr-6" onClick={toggleExpand}>
          <Image
            src={arrow}
            alt="trend"
            style={{ cursor: 'pointer', transform: `rotate(${rotate}deg)` }} 
            onClick={handleImageClick} 
          />
          
        </div>
        
      </div>
      {expanded ?(<>
      <div className='h-[450px] mt-4'>
      {showChart && <MyChart />}
      </div>

      {/*footer section*/}
<div className='flex justify-end gap-2 m-4'>
      <div className='flex items-center bg-gray-100 rounded-[6px] p-2'>
      <Image src={line3} alt='img'/>
      <p>Oct 1, 2022 - Feb 21, 2024</p>
      </div>
      <div className='flex items-center bg-gray-100 rounded-[6px] p-2'>
      <Image src={line4} alt='img'/>
      <p>Oct 1, 2022 - Feb 21, 2024</p>
      </div>
      </div></>):""}

    </div>
   
    </>
  );
}
