import React from 'react';
import { MdFacebook } from "react-icons/md";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";
import Avatar from '@mui/material/Avatar';
import myfotoo from "../img/farhangian.jpg";
import "../Style.css";
function TopNav() {



  return (
    <>
   
<nav dir='rtl' className=' md:sticky top-0 flex justify-around w-[100%] bg-transparent h-[60px]  drop-shadow-lg  py-3  mx-auto z-10 '>
  <div className='flex flex-row justify-center'>
      <Avatar
        alt="Remy Sharp"
        src={myfotoo}
        sx={{ width: 45, height: 45 ,':hover':{scale:1.3}}}
      />
    <p className='text-2xl text-[#8229d5] font-bold mt-1 pr-2 hover:text-[#f9f9f9] hover:scale-110 '>Farhangian</p>
  </div>
  <div>
<ul className='flex flex-row justify-center'>
  <li className='px-2.5'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>خدمات</p></li>
  <li className='px-2.5'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>درباره</p></li>
  <li className='px-2.5'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>نمونه کار</p></li>
  <li className='px-2.5'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>مهارت</p></li>
  <li className='px-2.5'><p className='text-md font-bold text-white hover:text-[#8229d5] hover:scale-110'>تماس با ما</p></li>
</ul>
   </div>
   <div>
    
    <button className='button1 ' type='submit' >  <span className='formbutton'>   دانلود رزومه</span>   </button>
  
    </div>     
        </nav>
 



    
    </>
  );
}
export default TopNav;       


