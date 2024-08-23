"use client"
import React, { useState, useRef, useEffect } from "react";
import { Login } from "./Login";
import { useFormik } from 'formik';
import * as Yup from 'yup';




export const SingUp = ({ isOpen,setisOpen }) => {

  
const formik = useFormik({
  initialValues: {
    name:"",
    lastName:"",
    email:"",
    password:"",
    passwordAgain:"",
  },

  onSubmit: values => {
    localStorage.setItem('loginData', JSON.stringify(values));
    
  },
});

  const [loginButton,setloginButton]=useState(false)

  const handle_Click=()=>{
    setloginButton(!loginButton)

  }

  const loginRef=useRef(null)

  



  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setisOpen(false);
      }
    };

  

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setisOpen]);

  return (
    <div >
 
      
      <div 
            className={`fixed top-0 left-0 w-full h-full inset-0 z-40 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-50" : "opacity-0 pointer-events-none"
            }`}
            
          />

      <div ref={loginRef}



        className={`fixed  bottom-1/2 right-1/2  w-[500px] max-md:w-[390px] max-sm:w-[30] max-sm:px-2 max-sm:mx-2 h-auto bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-[50%] translate-y-[50%] " : "-translate-x-full -translate-y-full"
        }`}
      >
        <div className={`my-[40px] px-[20px] ${loginButton ? "hidden":""}`}>

        <div className="text-center text-[28px] my-[20px] max-md:mx-4">ÜYE OL</div>
     
        
            <form  onSubmit={formik.handleSubmit}  >
<div className="flex max-md:flex-col">
          <div className="flex flex-col mr-[20px] max-md:mr-0">
          <label htmlFor="name" className="text-[20px] ml-4">Ad</label>
          <input name="name" value={formik.values.name}  onChange={formik.handleChange} type="text" className="mt-[8px] text-[12px] rounded-lg px-[6px] py-[12px] w-[220px] max-md:w-auto bg-[#F0F0F0]" placeholder="Lütfen adınızı buraya giriniz..."/>
          </div> 
          <div className="flex flex-col">
          <label htmlFor="lastName" className="text-[20px] ml-4">Soyad</label>
          <input name="lastName" value={formik.values.lastName}  onChange={formik.handleChange} type="text" className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-[220px] max-md:w-auto bg-[#F0F0F0]" placeholder="Lütfen soyadınızı buraya giriniz..."/>
          </div>
          </div>
          <div className="flex flex-col mt-[20px]">
          <label htmlFor="email" className="text-[20px] ml-4">E-mail</label>
          <input name="email" value={formik.values.email} onChange={formik.handleChange}  type="email" className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]" placeholder="Lütfen email adresinizi buraya giriniz..."/>
          </div>
          <div className="flex flex-col mt-[20px]">
          <label htmlFor="password" className="text-[20px] ml-4">Şifre</label>
          <input name="password" value={formik.values.password} onChange={formik.handleChange}  type="password" className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]" placeholder="Lütfen şifrenizi giriniz..."/>
          </div>
          <div className="flex flex-col mt-[20px]">
          <label htmlFor="passwordAgain" className="text-[20px] ml-4">Şifre Tekrar</label>
          <input type="password" name="passwordAgain" value={formik.values.passwordAgain} onChange={formik.handleChange} className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]" placeholder="Lütfen şifrenizi tekrar  giriniz..."/>
          </div>
          <div className="flex  mt-[20px] text-[12px] text-[#F0F0F0] max-md:flex-col ">
          <button  type="submit"    className="bg-black rounded-lg   px-[6px] py-[12px] w-[220px] max-md:w-auto">
          <span >Üye OL</span> 

           </button>
          <button onClick={handle_Click} className="bg-black rounded-lg ml-4 px-[6px] py-[12px] w-[220px] max-md:mt-[20px] max-md:ml-0 max-md:w-auto ">
          <span >Zaten Üye Misiniz ?</span>

          </button>
          </div>
            </form>
        
       
          

      
        
        

        </div>
        <div  className={`${loginButton?"":"hidden"}`}>
          <Login/>
          </div>
      </div>
    </div>
  );

};

