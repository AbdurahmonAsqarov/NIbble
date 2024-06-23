import React from 'react'

// Icons
import { TbCurrentLocation } from "react-icons/tb";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { BiSolidCoupon } from "react-icons/bi";
import { IoSearch,IoFilterSharp } from "react-icons/io5";
import { RiShoppingCart2Fill } from "react-icons/ri";

const Top_nav = () => {
  return (
    <>
        <nav className='flex items-center  max-lg:w-[768px]'>
          <img src="src/assets/Icon.png" alt="" className='hidden max-lg:inline max-lg:ml-[40px]' />
            <div className='flex  items-center m-[20px] mb-[40px] mr-[220px]  '>
              <img src="src/assets/Icon.png" alt="" className='max-lg:hidden' />
              <h1 className='font-bold text-lg ml-[5px] max-lg:hidden'>Nibble</h1>
          </div>
            <div className='flex items-center'>
                <h1 className='flex  max-lg:hidden'><TbCurrentLocation className='text-[#503E9D] text-[24px] mr-[5px] items-center'/>San Francisco, California </h1>
                <h1 className='flex mx-[30px]  max-lg:hidden'><HiMiniShoppingBag className='text-[#FB6D3A] text-[24px] mr-[5px] items-center'/>Pick up</h1>
                <h1 className='flex  max-lg:hidden'><BiSolidCoupon className='text-[#FACD5D] text-[24px] mr-[5px] items-center'/>Best deals</h1>
                <div className='w-[385px] mb-[15px] ml-[50px]'>
                    <IoSearch  className='translate-y-[22px] text-[20px] max-lg:translate-x-[80px] max-lg:translate-y-[10px] max-lg:text-[25px]'/>
                    <input type="text" placeholder='Search for anything…' className='w-full pl-[30px] outline-none max-lg:hidden'/>
                </div>
                <div className='flex space-x-[20px] ml-[150px] max-lg:ml-[-320px] max-lg:mt-[10px]'>
                    <div className='bg-[#503E9D] py-[10px] px-[10px] rounded-[8px] max-lg:translate-x-[-330px]'>
                    <IoFilterSharp className=' text-[30px] text-[#fff]'/>
                    </div>
                    <div className='bg-[#FB6D3A] py-[10px] px-[10px] rounded-[8px] '>
                    <RiShoppingCart2Fill className=' text-[30px] text-[#fff]'/>
                    </div>
                </div>
            </div>
        </nav>
    </>
  )
}

export default Top_nav