import Link from "next/link";
import React, {useEffect, useState} from "react";
import Layout from "@/components/Layout";
import Curve from "@/components/icons/curve";
import {FaChevronDown} from "react-icons/fa6";
import {MdOutlineChevronLeft} from "react-icons/md";
import {HiOutlineArrowsRightLeft} from "react-icons/hi2";
import {HiOutlineShoppingCart} from "react-icons/hi";
import {FaRegStar} from "react-icons/fa";

interface Product {
    _id: string,
    name: string,
    price: number,
    description: string,
}
export default function Home() {
    const [products, setProducts] = useState<Product[]>([])
    useEffect(() => {
        const fetchProducts = async ():Promise<void> =>{
            const response = await fetch('http://localhost:3000/api/products/');
            const data = await response.json();
            setProducts(data.products);
        }
        fetchProducts();
    }, []);
    return (
        <>
            <head>
                <title>صفحه اصلی</title>
                <meta name="description" content="This is the index page of MyApp."/>
            </head>
            <Layout>
                <main>
                    <section className='home relative h-[200px] xs:h-auto xs:aspect-[2/1] md:aspect-auto bg-home-mobile md:bg-home-desktop bg-no-repeat bg-cover bg-[center_top]'>
                        {/*<div className='h-full mx-auto md:h-[calc(100vh-50px)] max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl flex justify-end items-center'>*/}
                        <div className='h-full mx-auto md:h-[calc(100vh-50px)] container flex justify-end items-center'>
                            <div className='text-white'>
                                <h2 className='text-2xl md:text-6xl mb-0.5 md:mb-2'>قهوه عربیکا تانزانیا</h2>
                                <span className='text-xl md:text-5xl'>یک فنجان بالانس !</span>
                                <span className='block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8'></span>
                                <p className='max-w-[201px] md:max-w-[460px] text-xs md:text-2xl'>قطعا نام آشنای عربیکا
                                    را
                                    شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت
                                    میشود.</p>
                            </div>
                        </div>
                        <Curve className='md:flex hidden absolute bottom-0 right-0 left-0 mx-auto text-gray-100 dark:text-zinc-800'/>
                        <div className='absolute bottom-0 right-0 left-0 translate-y-2/4 mx-auto circle circle--lg'>
                            <div className='circle circle--md'>
                                <div className='circle circle--sm'></div>
                            </div>
                        </div>
                        <div className='md:flex hidden absolute bottom-0 right-0 left-0 mx-auto translate-y-2/4 items-center justify-center w-[30px] h-[30px] border-2 border-orange-300 rounded-full'>
                            <FaChevronDown className='h-4 w-4 text-zinc-700 dark:text-white'/>
                        </div>
                    </section>
                    <section className='products-new min-h-[900px]'>
                        {/*<div className='products-wrapper mx-auto max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl pt-48 text-zinc-700 dark:text-white'>*/}
                        <section className='container lg:pt-48 pt-8 text-zinc-700 dark:text-white'>
                            <div className='flex justify-between items-end mb-5 md:mb-12'>
                                <div className='flex flex-col justify-center gap-y-1.5'>
                                    <h3 className='section-title'>جدیدترین محصولات</h3>
                                    <span className='section-subtitle'>فرآوری شده از دانه قهوه</span>
                                </div>
                                <a href="" className='section-link'>
                                    <span className='hidden md:flex'>مشاهده همه محصولات</span>
                                    <span className='flex md:hidden'>مشاهده همه</span>
                                    <MdOutlineChevronLeft className='w-5 h-5'/>
                                </a>
                            </div>
                            <div className='products-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5'>
                                <div className='flex flex-col bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-5 '>
                                    <div className='relative mb-2 lg:mb-5'>
                                        <img src="/images/products/p1.png" alt="product" className='w-full h-full'/>
                                        <span className='flex justify-center items-center absolute right-1 top-1
                                         w-[40px] h-[20px] lg:w-[54px] lg:h-[30px] text-xs lg:text-base bg-orange-300 text-white dark:text-zinc-700 rounded-[100px]'>12%</span>
                                    </div>
                                    <h5 className='text-sm lg:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </h5>
                                    <div className='flex items-center gap-x-2 lg:gap-x-2.5 mt-2.5'>
                                        <div
                                            className='flex items-center text-base lg:text-xl text-teal-600 dark:text-emerald-500 gap-x-0.5'>
                                            <span>154,000</span>
                                            <span className='text-xs lg:text-sm'>تومان</span>
                                        </div>
                                        <div className='offer flex items-center text-xs lg:text-xl text-gray-400'>
                                            <span>154,000</span>
                                            <span className='lg:flex hidden text-xs lg:text-sm'>تومان</span>
                                        </div>

                                        {/*<span className='text-red-400 text-base lg:text-xl'>فعلا موجود نیست</span>*/}
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div className='flex items-center gap-x-2.5 lg:gap-x-3'>
                                            <span
                                                className='flex items-center justify-center w-[26px] h-[26px] lg:w-9 lg:h-9 bg-gray-100 dark:bg-zinc-800 rounded-full'>
                                                <HiOutlineShoppingCart
                                                    className='h-4 w-4 lg:h-[22px] lg:w-[22px] cursor-pointer text-gray-400'/>
                                            </span>
                                            <HiOutlineArrowsRightLeft
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-400'/>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-300 dark:text-gray-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-5 '>
                                    <div className='relative mb-2 lg:mb-5'>
                                        <img src="/images/products/p2.png" alt="product" className='w-full h-full'/>
                                        <span className='flex justify-center items-center absolute right-1 top-1
                                         w-[40px] h-[20px] lg:w-[54px] lg:h-[30px] text-xs lg:text-base bg-orange-300 text-white dark:text-zinc-700 rounded-[100px]'>12%</span>
                                    </div>
                                    <h5 className='text-sm lg:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </h5>
                                    <div className='flex items-center gap-x-2 lg:gap-x-2.5 mt-2.5'>
                                        <div
                                            className='flex items-center text-base lg:text-xl text-teal-600 dark:text-emerald-500 gap-x-0.5'>
                                            <span>154,000</span>
                                            <span className='text-xs lg:text-sm'>تومان</span>
                                        </div>
                                        <div className='offer flex items-center text-xs lg:text-xl text-gray-400'>
                                            <span>154,000</span>
                                            <span className='lg:flex hidden text-xs lg:text-sm'>تومان</span>
                                        </div>

                                        {/*<span className='text-red-400 text-base lg:text-xl'>فعلا موجود نیست</span>*/}
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div className='flex items-center gap-x-2.5 lg:gap-x-3'>
                                            <span
                                                className='flex items-center justify-center w-[26px] h-[26px] lg:w-9 lg:h-9 bg-gray-100 dark:bg-zinc-800 rounded-full'>
                                                <HiOutlineShoppingCart
                                                    className='h-4 w-4 lg:h-[22px] lg:w-[22px] cursor-pointer text-gray-400'/>
                                            </span>
                                            <HiOutlineArrowsRightLeft
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-400'/>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-300 dark:text-gray-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-5 '>
                                    <div className='relative mb-2 lg:mb-5'>
                                        <img src="/images/products/p3.png" alt="product" className='w-full h-full'/>
                                        <span className='flex justify-center items-center absolute right-1 top-1
                                         w-[40px] h-[20px] lg:w-[54px] lg:h-[30px] text-xs lg:text-base bg-orange-300 text-white dark:text-zinc-700 rounded-[100px]'>12%</span>
                                    </div>
                                    <h5 className='text-sm lg:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </h5>
                                    <div className='flex items-center gap-x-2 lg:gap-x-2.5 mt-2.5'>
                                        <div
                                            className='flex items-center text-base lg:text-xl text-teal-600 dark:text-emerald-500 gap-x-0.5'>
                                            <span>154,000</span>
                                            <span className='text-xs lg:text-sm'>تومان</span>
                                        </div>
                                        <div className='offer flex items-center text-xs lg:text-xl text-gray-400'>
                                            <span>154,000</span>
                                            <span className='lg:flex hidden text-xs lg:text-sm'>تومان</span>
                                        </div>

                                        {/*<span className='text-red-400 text-base lg:text-xl'>فعلا موجود نیست</span>*/}
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div className='flex items-center gap-x-2.5 lg:gap-x-3'>
                                            <span
                                                className='flex items-center justify-center w-[26px] h-[26px] lg:w-9 lg:h-9 bg-gray-100 dark:bg-zinc-800 rounded-full'>
                                                <HiOutlineShoppingCart
                                                    className='h-4 w-4 lg:h-[22px] lg:w-[22px] cursor-pointer text-gray-400'/>
                                            </span>
                                            <HiOutlineArrowsRightLeft
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-400'/>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-300 dark:text-gray-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-5 '>
                                    <div className='relative mb-2 lg:mb-5'>
                                        <img src="/images/products/p4.png" alt="product" className='w-full h-full'/>
                                        <span className='flex justify-center items-center absolute right-1 top-1
                                         w-[40px] h-[20px] lg:w-[54px] lg:h-[30px] text-xs lg:text-base bg-orange-300 text-white dark:text-zinc-700 rounded-[100px]'>12%</span>
                                    </div>
                                    <h5 className='text-sm lg:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </h5>
                                    <div className='flex items-center gap-x-2 lg:gap-x-2.5 mt-2.5'>
                                        <div
                                            className='flex items-center text-base lg:text-xl text-teal-600 dark:text-emerald-500 gap-x-0.5'>
                                            <span>154,000</span>
                                            <span className='text-xs lg:text-sm'>تومان</span>
                                        </div>
                                        <div className='offer flex items-center text-xs lg:text-xl text-gray-400'>
                                            <span>154,000</span>
                                            <span className='lg:flex hidden text-xs lg:text-sm'>تومان</span>
                                        </div>

                                        {/*<span className='text-red-400 text-base lg:text-xl'>فعلا موجود نیست</span>*/}
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div className='flex items-center gap-x-2.5 lg:gap-x-3'>
                                            <span
                                                className='flex items-center justify-center w-[26px] h-[26px] lg:w-9 lg:h-9 bg-gray-100 dark:bg-zinc-800 rounded-full'>
                                                <HiOutlineShoppingCart
                                                    className='h-4 w-4 lg:h-[22px] lg:w-[22px] cursor-pointer text-gray-400'/>
                                            </span>
                                            <HiOutlineArrowsRightLeft
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-400'/>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-300 dark:text-gray-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-5 '>
                                    <div className='relative mb-2 lg:mb-5'>
                                        <img src="/images/products/p2.png" alt="product" className='w-full h-full'/>
                                        <span className='flex justify-center items-center absolute right-1 top-1
                                         w-[40px] h-[20px] lg:w-[54px] lg:h-[30px] text-xs lg:text-base bg-orange-300 text-white dark:text-zinc-700 rounded-[100px]'>12%</span>
                                    </div>
                                    <h5 className='text-sm lg:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </h5>
                                    <div className='flex items-center gap-x-2 lg:gap-x-2.5 mt-2.5'>
                                        <div
                                            className='flex items-center text-base lg:text-xl text-teal-600 dark:text-emerald-500 gap-x-0.5'>
                                            <span>154,000</span>
                                            <span className='text-xs lg:text-sm'>تومان</span>
                                        </div>
                                        <div className='offer flex items-center text-xs lg:text-xl text-gray-400'>
                                            <span>154,000</span>
                                            <span className='lg:flex hidden text-xs lg:text-sm'>تومان</span>
                                        </div>

                                        {/*<span className='text-red-400 text-base lg:text-xl'>فعلا موجود نیست</span>*/}
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div className='flex items-center gap-x-2.5 lg:gap-x-3'>
                                            <span
                                                className='flex items-center justify-center w-[26px] h-[26px] lg:w-9 lg:h-9 bg-gray-100 dark:bg-zinc-800 rounded-full'>
                                                <HiOutlineShoppingCart
                                                    className='h-4 w-4 lg:h-[22px] lg:w-[22px] cursor-pointer text-gray-400'/>
                                            </span>
                                            <HiOutlineArrowsRightLeft
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-400'/>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-300 dark:text-gray-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-5 '>
                                    <div className='relative mb-2 lg:mb-5'>
                                        <img src="/images/products/p1.png" alt="product" className='w-full h-full'/>
                                        <span className='flex justify-center items-center absolute right-1 top-1
                                         w-[40px] h-[20px] lg:w-[54px] lg:h-[30px] text-xs lg:text-base bg-orange-300 text-white dark:text-zinc-700 rounded-[100px]'>12%</span>
                                    </div>
                                    <h5 className='text-sm lg:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </h5>
                                    <div className='flex items-center gap-x-2 lg:gap-x-2.5 mt-2.5'>
                                        <div
                                            className='flex items-center text-base lg:text-xl text-teal-600 dark:text-emerald-500 gap-x-0.5'>
                                            <span>154,000</span>
                                            <span className='text-xs lg:text-sm'>تومان</span>
                                        </div>
                                        <div className='offer flex items-center text-xs lg:text-xl text-gray-400'>
                                            <span>154,000</span>
                                            <span className='lg:flex hidden text-xs lg:text-sm'>تومان</span>
                                        </div>

                                        {/*<span className='text-red-400 text-base lg:text-xl'>فعلا موجود نیست</span>*/}
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div className='flex items-center gap-x-2.5 lg:gap-x-3'>
                                            <span
                                                className='flex items-center justify-center w-[26px] h-[26px] lg:w-9 lg:h-9 bg-gray-100 dark:bg-zinc-800 rounded-full'>
                                                <HiOutlineShoppingCart
                                                    className='h-4 w-4 lg:h-[22px] lg:w-[22px] cursor-pointer text-gray-400'/>
                                            </span>
                                            <HiOutlineArrowsRightLeft
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-400'/>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-300 dark:text-gray-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-5 '>
                                    <div className='relative mb-2 lg:mb-5'>
                                        <img src="/images/products/p4.png" alt="product" className='w-full h-full'/>
                                        <span className='flex justify-center items-center absolute right-1 top-1
                                         w-[40px] h-[20px] lg:w-[54px] lg:h-[30px] text-xs lg:text-base bg-orange-300 text-white dark:text-zinc-700 rounded-[100px]'>12%</span>
                                    </div>
                                    <h5 className='text-sm lg:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </h5>
                                    <div className='flex items-center gap-x-2 lg:gap-x-2.5 mt-2.5'>
                                        <div
                                            className='flex items-center text-base lg:text-xl text-teal-600 dark:text-emerald-500 gap-x-0.5'>
                                            <span>154,000</span>
                                            <span className='text-xs lg:text-sm'>تومان</span>
                                        </div>
                                        <div className='offer flex items-center text-xs lg:text-xl text-gray-400'>
                                            <span>154,000</span>
                                            <span className='lg:flex hidden text-xs lg:text-sm'>تومان</span>
                                        </div>

                                        {/*<span className='text-red-400 text-base lg:text-xl'>فعلا موجود نیست</span>*/}
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div className='flex items-center gap-x-2.5 lg:gap-x-3'>
                                            <span
                                                className='flex items-center justify-center w-[26px] h-[26px] lg:w-9 lg:h-9 bg-gray-100 dark:bg-zinc-800 rounded-full'>
                                                <HiOutlineShoppingCart
                                                    className='h-4 w-4 lg:h-[22px] lg:w-[22px] cursor-pointer text-gray-400'/>
                                            </span>
                                            <HiOutlineArrowsRightLeft
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-400'/>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-300 dark:text-gray-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex flex-col bg-white dark:bg-zinc-700 shadow-normal rounded-2xl p-5 '>
                                    <div className='relative mb-2 lg:mb-5'>
                                        <img src="/images/products/p3.png" alt="product" className='w-full h-full'/>
                                        <span className='flex justify-center items-center absolute right-1 top-1
                                         w-[40px] h-[20px] lg:w-[54px] lg:h-[30px] text-xs lg:text-base bg-orange-300 text-white dark:text-zinc-700 rounded-[100px]'>12%</span>
                                    </div>
                                    <h5 className='text-sm lg:text-xl text-zinc-700 dark:text-white line-clamp-2'>
                                        قهوه ترک بن مانو مقدار 250 گرم خط دوم اسم طولانی
                                    </h5>
                                    <div className='flex items-center gap-x-2 lg:gap-x-2.5 mt-2.5'>
                                        <div
                                            className='flex items-center text-base lg:text-xl text-teal-600 dark:text-emerald-500 gap-x-0.5'>
                                            <span>154,000</span>
                                            <span className='text-xs lg:text-sm'>تومان</span>
                                        </div>
                                        <div className='offer flex items-center text-xs lg:text-xl text-gray-400'>
                                            <span>154,000</span>
                                            <span className='lg:flex hidden text-xs lg:text-sm'>تومان</span>
                                        </div>

                                        {/*<span className='text-red-400 text-base lg:text-xl'>فعلا موجود نیست</span>*/}
                                    </div>
                                    <div className='flex justify-between items-center mt-4'>
                                        <div className='flex items-center gap-x-2.5 lg:gap-x-3'>
                                            <span
                                                className='flex items-center justify-center w-[26px] h-[26px] lg:w-9 lg:h-9 bg-gray-100 dark:bg-zinc-800 rounded-full'>
                                                <HiOutlineShoppingCart
                                                    className='h-4 w-4 lg:h-[22px] lg:w-[22px] cursor-pointer text-gray-400'/>
                                            </span>
                                            <HiOutlineArrowsRightLeft
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-400'/>
                                        </div>
                                        <div className='flex items-center'>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-gray-300 dark:text-gray-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                            <FaRegStar
                                                className='h-4 w-4 lg:h-6 lg:w-6 cursor-pointer text-yellow-400'/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='category-banner grid grid-cols-1 md:grid-cols-2 child:h-[142px] child:lg:h-[248px] gap-5 mt-8 md:mt-20 child:bg-gray-600 child:rounded-2xl '>
                                <div className='relative flex flex-col p-7 lg:p-12 gap-y-4 lg:gap-y-7 justify-center text-white leading-6'>
                                    <img src="/images/categories/category-right.jpg" alt="product"
                                         className='absolute inset-0 w-full h-full object-fill z-0 rounded-2xl'/>
                                    <div
                                        className='bg-gradient-to-r from-[#000000]/10 to-[#000000]/60 absolute inset-0 w-full h-full z-0 opacity-75 rounded-2xl'></div>
                                    <span className='text-2xl lg:text-4xl z-10'>انواع قهوه</span>
                                    <span className='text-base lg:text-xl z-10'>ترکیبی و تک خاستگاه</span>
                                </div>
                                <div className='relative flex flex-col p-7 lg:p-12 gap-y-4 lg:gap-y-7 justify-center text-white leading-6'>
                                    <img src="/images/categories/category-left.jpg" alt="product"
                                         className=' absolute inset-0 w-full h-full object-fill z-0 rounded-2xl'/>
                                    <div
                                        className='bg-gradient-to-r from-[#000000]/10 to-[#000000]/60 absolute inset-0 w-full h-full z-0 opacity-75 rounded-2xl'></div>
                                    <span className='text-2xl lg:text-4xl z-10'>پودر های فوری</span>
                                    <span className='text-base lg:text-xl z-10'>نسکافه ، هات چاکلت ، ماسالا</span>
                                </div>
                            </div>
                            <div className='products-category flex flex-wrap justify-evenly items-center my-20 gap-y-8'>
                                <div className='w-[100px] md:w-[200px] flex flex-col justify-center items-center text-center gap-y-1.5 md:gap-y-2.5'>
                                    <a href="#"><img src="/images/categories/category1.png" alt="product"/></a>
                                    <h4 className='text-sm lg:text-xl text-zinc-700 dark:text-white'>قهوه دمی و
                                        اسپرسو</h4>
                                </div>
                                <div
                                    className='w-[100px] md:w-[200px] flex flex-col justify-center items-center text-center gap-y-1.5 md:gap-y-2.5'>
                                    <a href="#"><img src="/images/categories/category2.png" alt="product"/></a>
                                    <h4 className='text-sm lg:text-xl text-zinc-700 dark:text-white'>لوازم جانبی و تجهیزات</h4>
                                </div>
                                <div
                                    className='w-[100px] md:w-[200px] flex flex-col justify-center items-center text-center gap-y-1.5 md:gap-y-2.5'>
                                    <a href="#"><img src="/images/categories/category3.png" alt="product"/></a>
                                    <h4 className='text-sm lg:text-xl text-zinc-700 dark:text-white'>اسپرسو ساز</h4>
                                </div>
                                <div
                                    className='w-[100px] md:w-[200px] flex flex-col justify-center items-center text-center gap-y-1.5 md:gap-y-2.5'>
                                    <a href="#"><img src="/images/categories/category4.png" alt="product"/></a>
                                    <h4 className='text-sm lg:text-xl text-zinc-700 dark:text-white'>پک تستر قهوه</h4>
                                </div>
                                <div
                                    className='w-[100px] md:w-[200px] flex flex-col justify-center items-center text-center gap-y-1.5 md:gap-y-2.5'>
                                    <a href="#"><img src="/images/categories/category5.png" alt="product"/></a>
                                    <h4 className='text-sm lg:text-xl text-zinc-700 dark:text-white'>قهوه ترک</h4>
                                </div>

                            </div>
                        </section>


                    </section>
                    <div className='mx-auto max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl'>
                        {products ? products.map((product: Product) => (
                            <Link key={product._id} href={`/products/${product._id}`}>
                                <p className="block py-2 text-sm text-gray-700 hover:text-gray-900">
                                {product.name} {product.description}
                                </p>
                            </Link>
                        )) : <p>error</p>}
                    </div>

                </main>

            </Layout>
        </>
    );
}