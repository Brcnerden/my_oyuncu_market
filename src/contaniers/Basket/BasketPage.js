"use client"
import React, { useState } from "react";
import Image from 'next/image';
import Icons from "@/Icons/index";
import useCartStore from "../../store/BasketStore";
import Link from "next/link";
import { CardAccount } from "./view/CardAccount";
import { Adress } from "./view/Adresses";

export const BasketPage = () => {


    const { cart, removeFromCart, clearCart } = useCartStore((state) => ({
        cart: state.cart,
        removeFromCart: state.removeFromCart,
        clearCart: state.clearCart,
    }));

    const [productCounts, setProductCounts] = useState(
        cart.reduce((acc, item) => {
            acc[item.id] = item.quantity;
            return acc;
        }, {})
    );

    const [basketButton,setBasketButton]=useState(false)
    const [showAddress,setShowAddress]=useState(false)


    const handle_increase = (id) => {
        setProductCounts((prevCounts) => ({
            ...prevCounts,
            [id]: (prevCounts[id] || 1) + 1,
        }));
    };

    const handle_decrease = (id) => {
        setProductCounts((prevCounts) => ({
            ...prevCounts,
            [id]: Math.max((prevCounts[id] || 1) - 1, 1),
        }));
    };

    const handle_delete = (id) => {
        removeFromCart(id);
    };

    return (
        <div className="max-w-[1200px] w-full mx-auto">
            <div>
                <h1 className="font-Playwrite font-light mt-[40px] text-center text-[28px]">SEPETİM</h1>
                <Link href="/">
                    <div className="flex items-center justify-end  mr-10 max-sm:my-4">
                        <p className="block text-center mr-2  text-red-800">
                            Alışverişe Devam Et
                        </p>
                        <Icons.ArrowRight className="w-[20px] h-[20px] fill-red-800" />
                    </div>
                </Link>
            </div>

            <div className="bg-white300 shadow-md max-w-[1200px] max-lg:max-w-[780px]  w-full mx-auto mt-[40px] max-sm:w-[390px ] max-sm:m-2 p-5">
                <div className="flex justify-between pt-2 pr-[50px]   max-sm:hidden">
                    <div className="text-gray100 font-Playwrite font-light text-[16px]">
                        Ürün Detay
                    </div>
                    <div className="flex w-[600px] max-lg:w-[450px] max-lg:ml-[32px] justify-between  max-sm:flex-col  ">
                        <div className="text-gray100 font-Playwrite font-light text-[16px]">
                            Fiyat
                        </div>
                        <div className="text-gray100 font-Playwrite font-light text-[16px]">
                            Adet
                        </div>
                        <div className="text-gray100 font-Playwrite font-light text-[16px]">
                            Toplam
                        </div>
                        <div className="text-gray100 font-Playwrite font-light text-[16px]">
                            <Icons.Trash className="w-[24px] h-[24px]"/>
                        </div>
                    </div>
                </div>
                {
                    cart.map((item, key) => (
                        <>
                            <div className="w-[600px]  max-lg:w-[450px] max-sm:w-[390px]  border border-[#E0E0E0 ] my-[20px] "></div>
                            <div className="flex justify-between items-center mb-[16px] pt-2  mr-[44px] max-sm:flex-col max-sm:items-start max-sm:justify-center " key={key}>
                                <div className="flex">
                                    <Image src={item.image} alt="resim" width={120} height={120} className="w-[120px] h-[120px] max-lg:w-[90px] max-lg:h-[90px] max-sm:mb-4" />
                                    <div className="ml-4 max-lg:ml-2">
                                        <div className="text-[20px] max-lg:text-[16px]">{item.name}</div>
                                        <div className="font-thin text-[14px] ">{item.name}</div>
                                    </div>
                                </div>
                                <div className="flex w-[600px] max-lg:w-[450px]  max-lg:ml-[32px] max-sm:ml-0 max-sm:w-[320px] justify-between items-center  ">
                                    <div>{item.price}</div>
                                    <div className="flex border px-3 py-1 items-center rounded-lg border-gray100 ">
                                        <button onClick={() => handle_increase(item.id)} className="px-1 mr-1">+</button>
                                        <div className="px-2">{productCounts[item.id] || 1}</div>
                                        <button onClick={() => handle_decrease(item.id)} className="px-1 ml-1 mb-[4px]">-</button>
                                    </div>
                                    <div>  {((item.price * (productCounts[item.id] || 1)).toFixed(2))} TL</div>
                                    <button onClick={() => handle_delete(item.id)}>
                                    <Icons.Trash className="w-[24px] h-[24px]" />
                                </button>
                                </div>
                               
                            </div>
                        </>
                    ))
                }

                <div className="w-full border border-[#E0E0E0 ] my-[20px] "></div>
            </div>
            <div className="max-w-[1200px] w-full mx-auto flex justify-end mb-[60px]">
                <div className="bg-white300 shadow-md mt-[60px] pt-[60px] w-[400px] p-10 h-auto">
                    <div className="flex justify-between">
                        <div className="text-gray100 font-Playwrite font-light text-[16px]">
                            Fiyat
                        </div>
                      
                      <div> {((cart.reduce((total, item) => total + item.price * (productCounts[item.id] || 1), 0)).toFixed(2))} TL</div>
                    </div>
                    <div className="w-full border border-[#E0E0E0] my-[20px] "></div>
                    <div className="flex justify-between">
                        <div className="text-gray100 font-Playwrite font-light text-[16px]">
                            KDV
                        </div>
                        <div>{((cart.reduce((total, item) => total + item.price * (productCounts[item.id] || 1), 0) * 0.20).toFixed(2))} TL
                        </div>
                    </div>
                    <div className="w-full border border-[#E0E0E0] my-[20px] "></div>
                    <div className="flex justify-between">
                        <div className="text-gray100 font-Playwrite font-light text-[16px]">
                            Toplam Fiyat
                        </div>
                        <div>{(cart.reduce((total, item) => total + item.price * (productCounts[item.id] || 1), 0) * 1.20).toFixed(2)}  TL</div>
                    </div>

                    <div className='flex justify-end items-center mt-[40px]'>
                        <button onClick={()=>setBasketButton(!basketButton)} className='border w-[180px] flex justify-center items-center py-2 text-white rounded-3xl bg-red-800'>Sepeti Onayla</button>
                    </div>

                    {
                       
                       showAddress ? <Adress showAddress={showAddress} setShowAddress={setShowAddress} /> :<CardAccount basketButton={basketButton} setBasketButton={(data) => setBasketButton(data)} showAddress={showAddress} setShowAddress={setShowAddress}/>
                    }
                    
                    
                </div>
                <CardAccount/>
            </div>
        </div>
    );
};
