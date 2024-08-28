"use client";
import Icons from "@/Icons/index";
import React, { useRef } from "react";

export const Adress = ({ showAddress }) => {
  const addressRef = useRef(null);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full inset-0 z-40 bg-black transition-opacity duration-300 ${
          showAddress ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        ref={addressRef}
        className={`fixed  bottom-1/2 right-1/2 p-5   w-[700px] max-md:w-[390px] max-sm:w-[30] max-sm:px-2 max-sm:mx-2 h-auto bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          showAddress
            ? "translate-x-[50%] translate-y-[50%] "
            : "-translate-x-full -translate-y-full"
        }`}
      >
        <div className="flex justify-end">
          <button>
            <Icons.CloseButton className="w-[24px] h-[24px] " />
          </button>
        </div>

        <div className="text-center text-[28px] my-[20px] max-md:mx-4">
          Adreslerim
        </div>
        <div className="flex justify-center">
          <div className="w-[400px]   h-auto border p-4 border-white300">
            <div className="text-[20px] my-4 font-light">başlık</div>
            <p className="text-[16px] ">adress</p>
            <p>İsim Soyİsim</p>
          </div>
        </div>
      </div>
    </div>
  );
};
