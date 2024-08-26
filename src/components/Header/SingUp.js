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
  validationSchema: Yup.object({
    name: Yup.string()
      .max(15, 'Ad 15 karakterden az olmalı')
      .required('Bu alan zorunludur'),
  
    lastName: Yup.string()
      .max(20, 'Soyad 20 karakterden az olmalı')
      .required('Bu alan zorunludur'),
  
    email: Yup.string()
      .email('Geçersiz e-posta adresi')
      .required('Bu alan zorunludur'),
  
    password: Yup.string()
      .min(8, 'Şifre en az 8 karakter olmalı')
      .required('Bu alan zorunludur'),
  
    passwordAgain: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Şifreler eşleşmiyor')
      .required('Bu alan zorunludur'),
  }),
  validateOnChange: true,  
  validateOnBlur: true, 


  onSubmit: values => {
    console.log('daat', JSON.stringify(values));
    localStorage.setItem('loginData', JSON.stringify(values));
    formik.resetForm()
    
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
          <label  className="text-[20px] ml-4">Ad</label>
          <input  {...formik.getFieldProps('name')} type="text" className="mt-[8px] text-[12px] rounded-lg px-[6px] py-[12px] w-[220px] max-md:w-auto bg-[#F0F0F0]" placeholder="Lütfen adınızı buraya giriniz..."/>
          {formik.touched.name && formik.errors.name ? (
         <div className='text-[12px] text-red-800 mt-[8px] ml-[12px]'>{formik.errors.name}</div>
       ) : null}
          </div> 
          <div className="flex flex-col">
          <label  className="text-[20px] ml-4">Soyad</label>
          <input  {...formik.getFieldProps('lastName')} type="text" className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-[220px] max-md:w-auto bg-[#F0F0F0]" placeholder="Lütfen soyadınızı buraya giriniz..."/>
          {formik.touched.lastName && formik.errors.lastName ? (
         <div className='text-[12px] text-red-800 mt-[8px] ml-[12px]'>{formik.errors.lastName}</div>
       ) : null}
          </div>
          </div>
          <div className="flex flex-col mt-[20px]">
          <label htmlFor="email" className="text-[20px] ml-4">E-mail</label>
          <input name="email"  {...formik.getFieldProps('email')}  type="email" className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]" placeholder="Lütfen email adresinizi buraya giriniz..."/>
          {formik.touched.email && formik.errors.email ? (
         <div className='text-[12px] text-red-800 mt-[8px] ml-[12px]'>{formik.errors.email}</div>
       ) : null}
          </div>
          <div className="flex flex-col mt-[20px]">
          <label htmlFor="password" className="text-[20px] ml-4">Şifre</label>
          <input name="password" {...formik.getFieldProps('password')}  type="password" className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]" placeholder="Lütfen şifrenizi giriniz..."/>
          {formik.touched.password && formik.errors.password ? (
         <div className='text-[12px] text-red-800 mt-[8px] ml-[12px]'>{formik.errors.password}</div>
       ) : null}
</div>
          <div className="flex flex-col mt-[20px]">
          <label htmlFor="passwordAgain" className="text-[20px] ml-4">Şifre Tekrar</label>
          <input type="password" name="passwordAgain" {...formik.getFieldProps('passwordAgain')} className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]" placeholder="Lütfen şifrenizi tekrar  giriniz..."/>
          {formik.touched.passwordAgain && formik.errors.passwordAgain ? (
         <div className='text-[12px] text-red-800 mt-[8px] ml-[12px]'>{formik.errors.passwordAgain}</div>
       ) : null}
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

