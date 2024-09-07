import React from 'react';
import {HiOutlineShoppingCart} from "react-icons/hi";
import {HiOutlineArrowsRightLeft} from "react-icons/hi2";
import {FaRegStar} from "react-icons/fa";

export default function ProductBox({product}:any) {
    return (
        <div className='flex flex-col bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-5 '>
            <div className='relative mb-2 lg:mb-5'>
                <img src={product.image} alt="product" className='w-full h-full'/>
                <span className={`${product.discount && product.count ?'flex':'hidden'} justify-center items-center absolute right-1 top-1
                    w-[40px] h-[20px] lg:w-[54px] lg:h-[30px] text-xs lg:text-base bg-orange-300
                    text-white dark:text-zinc-700 rounded-[100px]`}>{product.discount?product.discount+'%':''}</span>
            </div>
            <h5 className='text-sm lg:text-xl text-zinc-700 dark:text-white line-clamp-2'>{product.name}</h5>
            <div className='flex items-center gap-x-2 lg:gap-x-2.5 mt-2.5'>
                {product.count ?
                    <>
                        <div
                            className='flex items-center text-base lg:text-xl text-teal-600 dark:text-emerald-500 gap-x-0.5'>
                            <span>{product.finalPrice}</span>
                            <span className='text-xs lg:text-sm'>تومان</span>
                        </div>
                        <div className={`${product.discount?'flex':'hidden'} offer items-center text-xs lg:text-xl text-gray-400`}>
                            <span>{product.originalPrice}</span>
                            <span className='lg:flex hidden text-xs lg:text-sm'>تومان</span>
                        </div>
                    </> :
                    <>
                        <span className='text-red-400 text-base lg:text-xl'>فعلا موجود نیست</span>
                    </>
                }
            </div>
            <div className='flex justify-between items-center mt-4'>
                <div className='flex items-center gap-x-2.5 lg:gap-x-3'>
                    <span
                        className='flex items-center justify-center w-[26px] h-[26px] lg:w-9 lg:h-9 bg-gray-100 dark:bg-zinc-800 rounded-full'>
                        <HiOutlineShoppingCart className='h-4 w-4 lg:h-[22px] lg:w-[22px] cursor-pointer text-gray-400'/>
                    </span>
                    <HiOutlineArrowsRightLeft className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-400'/>
                </div>
                <div className='flex items-center'>
                    {[...Array(5)].map((_, i) => (
                        // for reverse show: 5-i <=
                        <FaRegStar key={i} className={`h-4 w-4 lg:h-6 lg:w-6 cursor-pointer ${i < product.rating ? 'text-yellow-400' : 'text-gray-300 dark:text-gray-400'}`} />
                    ))}
                </div>
            </div>
        </div>
    );
}