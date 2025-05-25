import React from 'react';
import imageaboutus from "../img/image.gif";
import "../Style.css";
function Aboutus() {



  return (
    <>
<div className='flex flex-row-reverse h-[100vh] justify-center mx-auto mt-10'>
    <div className='bg-transparent w-[50%]'>
        <p className='text-lg text-gray-400'> import logo from './logo.svg';
import './App.css';
import Footerss from './Footer/Footerss';
import TopNav from './Navbar/TopNav';
import Aboutus from './Aboutus/Aboutus';

</p>
    </div>
    <div className='bg-transparent  w-[50%]'>
       <img  className='hover:scale-125 w-[60%] h-[60%] mx-auto'  alt='' 
       src={imageaboutus}/>
       
    </div>
</div>
    
    </>
  );
}
export default Aboutus;  