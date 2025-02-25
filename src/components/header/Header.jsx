import React from 'react';
import Logo_Header from "../../assets/Logo_Header.png";
import { LuCircleUserRound } from "react-icons/lu";
import { CiLogout } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';

function Header({isLoggedIn,doUpdateStatus}) {

  let doRedirect=useNavigate();
  function doNavigate(path){
    doRedirect(path);
  }

  function doLoginLogout(status){

    doUpdateStatus(status);
    if(status==true){
      doRedirect("/signin");
    }else{
      doRedirect("/");
    }

  }
  return (
    <>
      <div className='h-20 bg-blue-600 shadow-lg sticky flex'>
        <div className="logo w-1/5 h-full  flex justify-center items-center cursor-pointer" onClick={() => doNavigate("/")}>
          <img src={Logo_Header} className='h-full' alt="logo" />
        </div>

        <div className="components flex flex-wrap w-5/6 ">
          <div className="w-2/3 flex text-white">
              <div className="w-1/3  flex justify-center  my-auto p-1 cursor-pointer hover:underline" onClick={() => doNavigate("/")}>Home</div>
              <div className="w-1/3  flex justify-center  my-auto p-1 cursor-pointer hover:underline" onClick={() => doNavigate("/aboutus")}>About Us</div>
              <div className="w-1/3  flex justify-center  my-auto p-1 cursor-pointer hover:underline" onClick={() => doNavigate("/contactus")}>Contact us</div>

          </div>
          
        </div>

        <div className="w-1/5 flex justify-center items-center">
          {/* <button className='rounded bg-white h-10 w-20 hover:bg-black hover:border-2 hover:border-white-100 hover:text-white'>Login</button> */}
          {/* <span className='flex border-b-2 border-white text-white p-1 cursor-pointer text-sm hover:text-black hover:border-black hover:text-base'>Signin / SignUp <span className='p-1 ml-1'> <FaUser /></span> </span> */}
          {
            !isLoggedIn?<span className='btn rounded bg-white border-1 border-white text-blue-600 flex p-2 hover:bg-blue-600 hover:border-2 hover:border-white hover:text-white hover:underline cursor-pointer' onClick={() => doLoginLogout(true)} >Sign In <span className='ml-2 text-2xl'> <LuCircleUserRound /></span> </span>
            :<span className='btn rounded bg-white border-1 border-white text-blue-600 flex p-2 hover:bg-blue-600 hover:border-2 hover:border-white hover:text-white hover:underline cursor-pointer' onClick={() => doLoginLogout(false)}>Sign Out <span className='ml-2 text-2xl'> <CiLogout /></span> </span>
          }
        </div>
      </div>
    </>
  );
}

export default Header;




