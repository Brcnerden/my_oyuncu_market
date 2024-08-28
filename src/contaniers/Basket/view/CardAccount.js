"use client";
import Icons from "@/Icons/index";
import React, { useRef, useEffect } from "react";
import { useFormik } from "formik";

export const CardAccount = ({
  basketButton,
  setBasketButton = () => {},
  setShowAddress,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      lastName: "",
      adress: "",
      city: "",
      state: "",
      mobile: "",
      title: "",
    },

    validateOnChange: true,
    validateOnBlur: true,

    onSubmit: (values) => {
      console.log("adress", JSON.stringify(values));
      localStorage.setItem("adress", JSON.stringify(values));
      formik.resetForm();
    },
  });

  const handle_Click = () => {
    setBasketButton(!basketButton);
  };

  const handle_Address = () => {
    setShowAddress(true);
  };

  const loginRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (loginRef.current && !loginRef.current.contains(event.target)) {
        setBasketButton(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [setBasketButton]);

  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full inset-0 z-40 bg-black transition-opacity duration-300 ${
          basketButton ? "opacity-50" : "opacity-0 pointer-events-none"
        }`}
      />

      <div
        ref={loginRef}
        className={`fixed bottom-1/2 right-1/2 p-5 w-[700px] max-md:w-[390px] max-sm:px-2 max-sm:mx-2 h-auto bg-white transform transition-transform duration-300 ease-in-out z-50 ${
          basketButton
            ? "translate-x-[50%] translate-y-[50%]"
            : "-translate-x-full -translate-y-full"
        }`}
      >
        <div className="flex justify-end">
          <button onClick={handle_Click}>
            <Icons.CloseButton className="w-[24px] h-[24px]" />
          </button>
        </div>

        <div className="text-center text-[28px] my-[20px] max-md:mx-4">
          Adres Oluştur
        </div>

        <form onSubmit={formik.handleSubmit}>
          <div className="flex flex-col mr-[20px] max-md:mr-0 ">
            <label className="text-[16px] ml-4">*Adres Başlığı</label>
            <input
              {...formik.getFieldProps("title")}
              type="text"
              className="mt-[8px] text-[12px] w-[320px] rounded-lg px-[16px] py-[12px] max-md:w-auto bg-[#F0F0F0]"
            />
          </div>
          <div className="flex max-md:flex-col mt-[20px]">
            <div className="flex flex-col mr-[20px] max-md:mr-0">
              <label className="text-[16px] ml-4">*Ad</label>
              <input
                {...formik.getFieldProps("name")}
                type="text"
                className="mt-[8px] text-[12px] w-[320px] rounded-lg px-[6px] py-[12px] max-md:w-auto bg-[#F0F0F0]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] ml-4">*Soyad</label>
              <input
                {...formik.getFieldProps("lastName")}
                type="text"
                className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-[320px] max-md:w-auto bg-[#F0F0F0]"
              />
            </div>
          </div>
          <div className="flex flex-col mt-[20px]">
            <label className="text-[16px] ml-4">*Adres</label>
            <input
              {...formik.getFieldProps("adress")}
              type="text"
              className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]"
            />
          </div>

          <div className="flex mt-[20px] max-md:flex-col">
            <div className="flex flex-col mr-[20px] max-md:mr-0">
              <label className="text-[16px] ml-4">*Şehir</label>
              <input
                {...formik.getFieldProps("city")}
                type="text"
                className="mt-[8px] text-[12px] w-[320px] rounded-lg px-[6px] py-[12px] max-md:w-auto bg-[#F0F0F0]"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-[16px] ml-4">*İlçe</label>
              <input
                {...formik.getFieldProps("state")}
                type="text"
                className="mt-[8px] text-[12px] rounded-lg px-[6px] py-[12px] w-[320px] max-md:w-auto bg-[#F0F0F0]"
              />
            </div>
          </div>

          <div className="flex flex-col mt-[20px]">
            <label className="text-[16px] ml-4">*Telefon</label>
            <input
              {...formik.getFieldProps("mobile")}
              type="number"
              className="mt-[8px] text-[12px] rounded-lg px-[8px] py-[12px] w-auto bg-[#F0F0F0]"
            />
          </div>

          <div className="flex mb-[40px] mt-[40px] text-[12px] text-[#F0F0F0] max-md:flex-col">
            <button
              type="submit"
              className="bg-black rounded-lg px-[6px] py-[12px] w-[320px] max-md:w-auto"
            >
              <span>Kaydet</span>
            </button>
            <button
              onClick={handle_Address}
              className="bg-black rounded-lg ml-4 px-[6px] py-[12px] w-[320px] max-md:mt-[20px] max-md:ml-0 max-md:w-auto"
            >
              <span>Kayıtlı Adreslerim</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
