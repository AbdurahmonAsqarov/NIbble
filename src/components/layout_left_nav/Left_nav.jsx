import React from 'react'

// Css
import "./Left_nav.css"

// Icons
import { SlHome,SlEnvolopeLetter} from "react-icons/sl";
import { PiSquaresFourLight } from "react-icons/pi";
import { CgFileDocument } from "react-icons/cg";
import { IoBookmarkOutline,IoCloseSharp } from "react-icons/io5";
import { LuSettings } from "react-icons/lu";
import { BsFire } from "react-icons/bs";
import { FaArrowRightLong } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

const Left_nav = () => {
  const delet = () =>{
    const delete_card = document.querySelector('.delete_card')
    delete_card.classList.add('hidden')
  }
  const delet2 = () => {
    const itachi = document.querySelector('.itachiRip')
    const messag = document.querySelector('.messag')
    itachi.classList.add('hidden')
    messag.classList.add('border-none')
  }

  return (
    <>
          <div className='w-[304px] h-[1024px] max-lg:w-[100px] mx-[30px] text-center'>
         
        <div className='w-[272px] h-[320px] ' >
        <NavLink to="/" className='hover:text-[#fff]  gg focus-within:text-[#fff] focus-within:bg-[#503E9D] '>
          <div  className=' max-lg:w-[60px] max-lg:pl-[10px] flex items-center w-[272px] h-[56px]  rounded-[8px] hover:text-[#fff] hover:bg-gradient-to-r from-violet-500 to-[#503E9D] transition text-[#626264]'>
            <SlHome className='mx-[10px]'/>
            <h1 className='font-bold max-lg:hidden'>Home</h1>
          </div>
          </NavLink>
          <NavLink to="/explore" className='hover:text-[#fff] gg focus-within:text-[#fff] focus-within:bg-[#503E9D]'>
          <div  className=' max-lg:w-[60px] max-lg:pl-[10px]  flex items-center w-[272px] h-[56px]  rounded-[8px] hover:text-[#fff] hover:bg-gradient-to-r from-violet-500 to-[#503E9D] transition text-[#626264]'>
            <PiSquaresFourLight className='mx-[10px]'/>
            <h1 className='font-bold max-lg:hidden'>Explore</h1>
          </div>
          </NavLink>
          <NavLink to="/favourites" className='hover:text-[#fff] gg focus-within:text-[#fff] focus-within:bg-[#503E9D]'>
          <div  className=' max-lg:w-[60px] max-lg:pl-[10px]  flex items-center w-[272px] h-[56px]  rounded-[8px] hover:text-[#fff] hover:bg-gradient-to-r from-violet-500 to-[#503E9D] transition text-[#626264]'>
            <IoBookmarkOutline className='mx-[10px]'/>
            <h1 className='font-bold max-lg:hidden'>Favourites</h1>
          </div>
          </NavLink>
          <NavLink to="/explore" className='hover:text-[#fff] gg focus-within:text-[#fff] focus-within:bg-[#503E9D]'>
          <div  className=' max-lg:w-[60px] max-lg:pl-[10px]  flex items-center w-[272px] h-[56px]  rounded-[8px] hover:text-[#fff] hover:bg-gradient-to-r from-violet-500 to-[#503E9D] transition text-[#626264]'>
            <CgFileDocument className='mx-[10px]'/>
            <h1 className='font-bold max-lg:hidden'>Orders</h1>
          </div>
          </NavLink>
          <NavLink to="/explore" className='hover:text-[#fff] gg focus-within:text-[#fff] focus-within:bg-[#503E9D]'>
          <div className=' max-lg:w-[60px] max-lg:pl-[10px]  flex items-center w-[272px] h-[56px]  rounded-[8px] hover:text-[#fff] hover:bg-gradient-to-r from-violet-500 to-[#503E9D] transition text-[#626264]'>
            <SlEnvolopeLetter className='mx-[10px]'/>
            <h1 className='font-bold max-lg:hidden'>Messages</h1>
            <span onClick={delet2} class="itachiRip relative flex h-5 w-5 ml-[130px] max-lg:hidden ">
              <span class=" animate-ping absolute inline-flex h-full w-full rounded-full bg-[#503E9D] opacity-75"></span>
               <span  class=" relative inline-flex rounded-full h-5 w-5 bg-[#503E9D]  text-[#fff]"><h5 className='text-[12px] ml-[6px] hover:text-[#503E9D]' >2</h5></span>
             </span>
          </div>
          </NavLink>
          <NavLink to="/explore" className=' hover:text-[#fff] gg focus-within:text-[#fff] focus-within:bg-[#503E9D]'>
          <div  className=' max-lg:w-[60px] max-lg:pl-[10px]  flex items-center w-[272px] h-[56px]  rounded-[8px] hover:text-[#fff] hover:bg-gradient-to-r from-violet-500 to-[#503E9D] transition text-[#626264]'>
            <LuSettings className='mx-[10px]'/>
            <h1 className='font-bold max-lg:hidden'>Settings</h1>
          </div>
          </NavLink>
        </div>
      

  
            





     
<div class="wrapper mt-[120px] shadow-2xl delete_card border-none max-lg:hidden">
  
   
       
        <div  ontouchstart="this.classList.toggle('hover');">
            <div class="container ">
                <div class="front bg4">
                    <div class="inner">
                   
          <BsFire  className='text-6xl ml-[60px] mt-[-130px] text-[#FD7F20] hover:text-[#000] '/>

          <div className='  bruh'>
          <h1 className='w-[176px] mt-[10px] text-[#fff] font-bold text-[24px] absolute'>Free delivery on all orders over</h1> 
          </div>
          <h2 className='absolute mt-[90px] text-[18px] w-[200px] ml-[-10px] text-[#626264]'>It is a limited time offer that will expire soon.</h2>
          <button className='absolute mt-[170px] px-[10px] py-[12px] bg-[#503E9D] h-[50px] w-[150px] text-[#F7FAFC] text-[20px] flex items-center rounded-[8px]  ml-[15px] hover:animate-pulse '>Order now <FaArrowRightLong className='ml-[10px] items-center'/></button>
                    </div>
                </div>
                <div class="back">
                    <div class="inner">
                    <IoCloseSharp  onClick={delet} className='delete_btn hover:text-[50px]  text-[#000] mt-[-160px] text-3xl ml-[160px] active:animate-ping hover:text-[#626264]' />  
                                 {/* bruh */}
          <div class="fire">
  <div class="fire-left">
    <div class="main-fire"></div>
    <div class="particle-fire"></div>
  </div>
  <div class="fire-center">
    <div class="main-fire"></div>
    <div class="particle-fire"></div>
  </div>
  <div class="fire-right">
    <div class="main-fire"></div>
    <div class="particle-fire"></div>
  </div>
  <div class="fire-bottom">
    <div class="main-fire"></div>
  </div>
</div>
{/* bruh */}
<div className='  bruh '>
          <h1 className='w-[176px] mt-[70px] text-[#000] font-bold text-[24px] absolute'>Free delivery on all orders over</h1> 
          </div>
          <h2 className='absolute mt-[150px] text-[18px] w-[200px] ml-[-10px] text-[#626264]'>It is a limited time offer that will expire soon.</h2>
          <button className='absolute mt-[230px] px-[10px] py-[12px] bg-[#503E9D] h-[50px] w-[150px] text-[#F7FAFC] text-[20px] flex items-center rounded-[8px]  ml-[15px] hover:animate-pulse '>Order now <FaArrowRightLong className='ml-[10px] items-center'/></button>
                    </div>
                </div>
            </div>
        </div>
       

    </div>
</div>

    </>
  )
}

export default Left_nav