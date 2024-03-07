import React, { useState, useEffect, useRef } from 'react';
import { AiFillEdit, AiOutlineLineChart, AiOutlineQuestionCircle } from "react-icons/ai";
import Image from 'next/image';
import trend from '../../public/assets/Trend.png';
import edit from '../../public/assets/Edit.png';
import { Typography } from '@mui/material'; 
import Skeleton from '@mui/material/Skeleton';

export default function Card() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);
  const [loading, setLoading] = useState(true); 
  const [selectedItem, setSelectedItem] = useState("Online Store Sessions");
  const [hoveredItem, setHoveredItem] = useState(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  const handleItemClick = (item) => {
    console.log(`Clicked on item: ${item}`);
    setSelectedItem(item);
  };

  const toggleDropdown = () => {
    setIsOpen(!isOpen); 
  };

  const handleMouseEnter = (item) => {
    setHoveredItem(item);
  };

  const handleMouseLeave = () => {
    setHoveredItem(null);
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
    <div className=" w-[220px] bg-white hover:bg-gray-200 m-4  rounded-[20px]  ">
    <Typography variant="h1">
          {loading ? <Skeleton /> : (
            <>
              <div className='flex justify-between px-4 py-4 items-center'>
                <div class="">
                  <div class="card text-[16px]">
                    {selectedItem}
                    <div className="border-b-2 border-dotted border-gray-400 w-[100%]"></div>
                    <div class='additionaldata rounded-[6px]'><p className='font-bold text-[20px] pb-2'>online store sessions</p>
                    <p>your online stores traffic volume, shown in sessions</p></div>
                  </div>
                </div>
                <Image src={edit} alt='edit' onClick={toggleDropdown} className="edit-icon" />
              </div>
            </>
          )}
        </Typography>
        <Typography variant="h1">
          {loading ? <Skeleton /> : (
            <>
              <div className='flex items-center gap-1 px-4 pb-2'>
                <p className='font-bold text-[20px]'>255,581</p>
                <Image src={trend} alt="image" />
                <p className='text-[14px]'>9%</p>
              </div>
            </>
          )}
        </Typography>
      </div>

      {isOpen && (
        <div ref={dropdownRef} className='relative' >

        <div className="bg-white p-4 rounded-md w-[260px] mt-[-40px] text-[14px]  ml-[150px] absolute top-[100%] left-[10px]">
        {['Average Order Value', 'Conversion rate', 'Gross Sales', 'Net return value', 'Store search conversion', 'Return rate'].map(item => (
              <div
                key={item}
                className={`flex justify-start gap-4 items-center hover:bg-gray-200 hover:justify-between pl-2"
                ${hoveredItem === item ? 'hovered' : ''}`}
                onMouseEnter={() => handleMouseEnter(item)}
                onMouseLeave={handleMouseLeave}
                onClick={() => handleItemClick(item)}
              >
                <AiOutlineLineChart />
                <h1>{item}</h1>
                {hoveredItem === item && <AiOutlineQuestionCircle />}
              </div>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
