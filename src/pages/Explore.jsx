import React, {useContext} from 'react'

// Context
import { UserContext } from '../context/Context';

// Icons
import { MdOutlineMap } from "react-icons/md";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosStar } from "react-icons/io";
import { GiMoneyStack } from "react-icons/gi";
import { FaUtensils } from "react-icons/fa6";
import { MdMyLocation } from "react-icons/md";
import { PiSquaresFourLight } from "react-icons/pi";
import { PiMotorcycleFill } from "react-icons/pi";

const Explore = () => {
  const {data1,data2 } = useContext(UserContext);
  return (
    <>
      <div>
      <div className="block mb-[50px] gap-[5px] max-lg:mt-[20px] max-lg:ml-[-50px]">
      <div className='flex space-x-[805px] max-lg:space-x-[180px]'>
       <div>
       <h1 className='text-[#182135] text-[24px] mt-[10px] font-[700]'>Restaurants nearby</h1>
       </div>
        <div className='flex mt-[25px]'>
          <MdOutlineMap/>
          <h2 className='text-[#182135] font-[600] items-center leading-4 text-[12px]'>  20 km </h2>
          <IoIosArrowDown />
        </div>
      </div>
      </div>
  


      <div className='grid grid-cols-3 gap-[60px] ml-[20px] max-lg:grid-cols-2 max-lg:gap-[10px]'>
        {
          data1?.map((item)=>(
            <div key={item.id} className='flex items-center gap-[20px] leading-10'> 
              <img src={item.img} alt="" className='w-[96px] h-[96px]'/>
              <div className=''>
                <h1 className='text-[20px] font-bold text-[#182135]'>{item.name}</h1>
                <div className='flex gap-[10px]'>
                <div className="flex items-center gap-[5px]">
                <IoIosStar className='text-[#FACD5D]' />
                  <h2> {item.star} </h2>
                </div>
                  <h2 className='flex items-center gap-[5px] text-[#626264]'><FaUtensils />{item.sort}</h2>
                  <h2 className='flex items-center gap-[5px] text-[#626264]'><GiMoneyStack />{item.money} </h2>
                </div>
                <div className='flex items-center space-x-[40px] '>
                  <p className='cursor-pointer text-[#503E9D] text-[14px] font-[600] hover:border-b hover:border-[#503E9D] p-[0px]'>Buy now</p>
                  <h2 className='flex items-center gap-[5px] text-[#626264]'><MdMyLocation />{item.km} km</h2>
                </div>
              </div>
            </div>
          ))
        }
      </div>

      <div className=" my-[50px]">
      <div className='flex space-x-[850px]'>
       <div>
       <h1 className='text-[#182135] text-[24px] mt-[10px] font-[700]'>Popular orders</h1>
       </div>
        <div className='flex mt-[25px] gap-[5px]'>
          <PiSquaresFourLight/>
          <h2 className='text-[#182135] font-[600] items-center leading-4 text-[12px]'>  Today </h2>
          <IoIosArrowDown />
        </div>
      </div>
      </div>

            <div className='grid grid-cols-3 gap-[20px]'>
            {
              data2?.map((item)=>(
                <div key={item.id} className=''>
                  <img src={item.img} alt="" />
                  <div className='flex items-center gap-[30px] my-[10px]'>
                    <h1 className='text-[20px] font-bold text-[#182135]'>{item.name}</h1>
                    <p className='cursor-pointer text-[#503E9D] text-[14px] font-[600] hover:border-b hover:border-[#503E9D] p-[0px]'>{item.deliever} </p>
                  </div>
                  <div className='flex items-center gap-[15px]'>
                  <div className="flex items-center gap-[5px]">
                <IoIosStar className='text-[#FACD5D]' />
                  <h2> {item.star} </h2>
                </div>
                    <h2 className='flex items-center gap-[5px] text-[#626264]'><FaUtensils />{item.sort}</h2>
                    <h2 className='flex items-center gap-[5px] text-[#626264]'><PiMotorcycleFill />{item.time}</h2>
                  </div>
                </div>
              ))
            }
            </div>
      </div>
    </>
  )
}

export default Explore