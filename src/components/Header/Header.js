"use client";
import Icons from "@/Icons";
import React, { useState, useRef, useEffect } from "react";
import { SingUp } from "./SingUp";
import { Basket } from "./Basket";
import { useRouter } from "next/navigation";
import Link from 'next/link';
import useCartStore from "@/store/BasketStore";
import { OpenMenu } from "./OpenMenu";



export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenBasket, setIsOpenBasket] = useState(false);
  const [navbarMenuOpen,setNavbarMenuOpen]=useState(false);

  const router=useRouter()

  const  cart  = useCartStore((state) =>  state.cart,
);

const totalQuantity = cart.reduce((total, item) => total + item.quantity, 0);



  const menuRef = useRef(null);





  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    const handleResize = () => {
      setIsMenuOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("resize", handleResize);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  const handleBasketClick = () => {
    router.push('/Sepetim');
  };


  return (
    <>
     <div className="bg-white">
      <div className="max-w-[1200px] w-full mx-auto  max-lg:px-[12px] ">
        <div
          className={`${
            isMenuOpen ? "fixed" : "hidden"
          } top-0 left-0 w-full h-full bg-black opacity-50 z-40`}
        ></div>


        <div className="flex justify-between py-[8px]">
          <Link href="./">
          <div className="text-[32px] font-Playwrite text-red-800">LOGO</div>

          </Link>
          <div className="flex items-center text-text-color font-light font-Roboto text-[20px] max-md:hidden">
            
            <button onClick={()=>{setNavbarMenuOpen(!navbarMenuOpen)}} className="mr-[28px] font-normal hover:after:bg-red-800 hover:underline-offset-4 hover:after:content-[''] hover:after:block hover:after:w-full hover:after:h-[2px] pb-[2px] cursor-pointer">E-pin</button>
            <div className="mr-[28px] cursor-pointer">CD-Key</div>
            <div className="mr-[28px] cursor-pointer">Oyun Parası</div>
            <div className="mr-[28px] cursor-pointer">CS:GO Skin</div>
          </div>
          <div className="flex items-center">
            <button>
              <Icons.Search className="w-[24px] h-[24px] mr-[20px]" />
            </button>
            <button onClick={()=>setIsOpenLogin(!isOpenLogin)}>
              <Icons.User className="w-[24px] h-[24px] mr-[20px]" />
            </button>
            <button onClick={handleBasketClick} className="relative">
              <Icons.ShoppingBag className="w-[24px] h-[24px] mr-[20px]" />
              <div className="bg-red-800 w-[16px] h-[16px] text-center absolute bottom-[-4px] right-[16px] text-white text-[12px] rounded-full">
                {totalQuantity}
              </div>
            </button>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              <Icons.Hamburger className="w-[24px] h-[24px] font-thin" />
            </button>
            <div
              ref={menuRef}
              className={`fixed top-0 left-0 w-[328px] h-full bg-white transform transition-transform duration-300 ease-in-out z-50 ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div>
                <div className="flex justify-between mr-4 items-center">
                <div className="text-[32px]">LOGO</div>
                <button onClick={() => setIsMenuOpen(!isMenuOpen)} >
                <Icons.CloseButton className="w-6 h-6"/>
                </button>


                </div>
                <div className="text-text-color font-medium mt-[40px] font-Roboto text-[24px] mr-[16px]">
                  <div className="flex justify-between items-center mt-[28px]">
                    <div className="cursor-pointer">E-pin</div>
                    <Icons.Arrow className="w-[20px] h-[20px] mt-[8px] -rotate-90" />
                  </div>
                  <div className="flex justify-between items-center mt-[28px]">
                    <div className="cursor-pointer">CD-Key</div>
                    <Icons.Arrow className="w-[20px] h-[20px] -rotate-90" />
                  </div>
                  <div className="flex justify-between items-center mt-[28px]">
                    <div className="cursor-pointer">Oyun Pazarı</div>
                    <Icons.Arrow className="w-[20px] h-[20px] -rotate-90" />
                  </div>
                  <div className="flex justify-between items-center mt-[28px]">
                    <div className="cursor-pointer">Oyun Parası</div>
                    <Icons.Arrow className="w-[20px] h-[20px] -rotate-90" />
                  </div>
                  <div className="flex justify-between items-center mt-[28px]">
                    <div className="cursor-pointer">Bakiye Yükle</div>
                    <Icons.Arrow className="w-[20px] h-[20px] -rotate-90" />
                  </div>
                  <div className="flex justify-between items-center mt-[28px]">
                    <div className="cursor-pointer">Market</div>
                    <Icons.Arrow className="w-[20px] h-[20px] -rotate-90" />
                  </div>
                  <div className="flex justify-between items-center mt-[28px]">
                    <div className="cursor-pointer">CS:GO Skin</div>
                    <Icons.Arrow className="w-[20px] h-[20px] -rotate-90" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
    <SingUp isOpen={isOpenLogin} setisOpen={setIsOpenLogin}/>
    <Basket isBasketOpen={isOpenBasket} setisBasketOpen={setIsOpenBasket}/>

    <div>
    </div>
    {
    
    navbarMenuOpen ?<OpenMenu/> :""
    }


    </>
   
  );
};
