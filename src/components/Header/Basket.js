"use client";
import Icons from "@/Icons";
import Image from "next/image";
import React, { useRef, useEffect } from "react";

export const Basket = ({ isBasketOpen, setisBasketOpen }) => {
  const basketRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (basketRef.current && !basketRef.current.contains(event.target)) {
        setisBasketOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isBasketOpen]);

  return (
    <>
      <div
        className={`fixed top-0 left-0 w-full h-full inset-0 z-40 bg-black transition-opacity duration-300 ${
          isBasketOpen ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />
      <div
        ref={basketRef}
        className={`fixed right-0 top-0 w-[400px] h-full max-md:w-[390px] max-sm:w-[30] max-sm:px-2 max-sm:mx-2 bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          isBasketOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          <div className="font-light text-center text-[32px] leading-[48px] my-[20px]">
            Sepetim
          </div>
          <div className="border-b-white200 border-b m-2"></div>
          <div className="flex justify-between">
            <div className="flex p-2">
              <Image
                src="/Images/onyx.jpeg"
                alt="product"
                width={103}
                height={103}
                className="w-[92px] h-[92px]"
              />
              <div className="ml-4 flex flex-col justify-between">
                <div className="text-[16px]">1 TL Gpay Epin</div>
                <div className="text-[14px] text-[#919191] font-normal pt-2">
                  1 TL Gpay Epin
                </div>
                <div className="text-red100 text-[20px] mt-2">Oyuncu Market</div>
              </div>
            </div>
            <div className="flex flex-col p-2 justify-between">
              <div className="text-[20px] ml-6">499TL</div>
              <div>
                <button className="flex justify-between px-2 items-center text-[20px] rounded-md border-white200 border">
                  <span className="px-2">
                    <Icons.Trash className="w-[16px] h-[16px]" />
                  </span>
                  <span className="px-2 text-[14px]">1</span>
                  <span className="px-2">+</span>
                </button>
              </div>
            </div>
          </div>

          <div className="border-b-white200 border-b m-2"></div>

          <div className="flex flex-col mt-auto p-2">
            <div className="font-bold text-[14px] leading-6 text-end mr-6 mb-2">
              TOPLAM 499 TL
            </div>
            <button className="text-white font-bold text-[16px] flex items-center justify-center leading-10 w-[420px] mx-auto bg-black">
              <span className="mr-3">DEVAM ET</span>
              <span>
                <Icons.Chevron className="w-[8px] h-[12px]" />
              </span>
            </button>
          </div>

          <div className="border-b-white200 border-b m-2"></div>
        </div>
      </div>
    </>
  );
};
