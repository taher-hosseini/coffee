import React, {useState} from 'react';
import {FaBars} from "react-icons/fa";
import FavIcon from "@/components/icons/FavIcon";
import Logo from "@/components/icons/Logo";
import {FaChevronDown, FaXmark} from "react-icons/fa6";
import Link from "next/link";
import {AiOutlineHome} from "react-icons/ai";
import {RiShoppingBagLine} from "react-icons/ri";
import {HiArrowLeftEndOnRectangle, HiOutlineChatBubbleLeftEllipsis, HiOutlinePhoneArrowUpRight} from "react-icons/hi2";
import {HiOutlineBriefcase, HiOutlineShoppingCart} from "react-icons/hi";
import {IoDocumentTextOutline, IoMoonOutline, IoSunnyOutline} from "react-icons/io5";

export default function HeaderM({
    isDark,
    toggleTheme}:any) {

    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isCartMenuOpen, setIsCartMenuOpen] = useState<boolean>(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
    const [overlay, setOverlay] = useState<boolean>(false);
    const openMenu = () => {
        setIsMenuOpen(true);
        setOverlay(true);
    };

    const closeAllMenu = () => {
        setIsMenuOpen(false);
        setOverlay(false);
        setIsCartMenuOpen(false);
        setOverlay(false);
    };
    const openCartMenu = () => {
        setIsCartMenuOpen(true);
        setOverlay(true);
    }
    const toggleSubMenu = () => {
        setIsSubMenuOpen(!isSubMenuOpen);
    };

    return (
        <>
            <div className='md:hidden flex justify-between items-center p-4 h-16 bg-white dark:text-zinc-700'>
                {/* right hamburger icon */}
                <FaBars className='h-6 w-6 cursor-pointer' onClick={openMenu}/>
                <div
                    className={`fixed top-0 bottom-0 right-0 max-h-screen w-64 bg-white dark:bg-zinc-700 px-4 pt-3 z-20 transition-transform duration-300 ease-in-out 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}
                >
                    {/* top section */}
                    <div
                        className='flex justify-between items-center pb-5 mb-6 border-b border-gray-100 dark:border-white/10'>
                        <div className='flex justify-between gap-x-3.5 '>
                            {/* icon */}
                            <FavIcon className="w-10 h-10 text-orange-300"/>
                            {/* golden coffee icon */}
                            <Logo className="w-[100px] h-10 text-orange-300"/>
                        </div>
                        {/* X icon */}
                        <FaXmark className='text-zinc-600 dark:text-white' onClick={closeAllMenu}/>
                    </div>
                    {/* body section */}
                    <ul className='flex flex-col gap-y-6 text-base text-zinc-700 dark:text-white dark:border-white/10'>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <AiOutlineHome className='h-5 w-5'/>
                                صفحه اصلی
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex justify-between items-center' onClick={toggleSubMenu}>
                                <div className='flex items-center w-fit gap-x-2'>
                                    <RiShoppingBagLine className='h-5 w-5'/>
                                    فروشگاه
                                </div>
                                <FaChevronDown className='h-5 w-5'/>
                            </Link>
                            <ul
                                className={`overflow-hidden transition-all duration-500 ${
                                    isSubMenuOpen
                                        ? 'max-h-60 opacity-100 mt-3'
                                        : 'max-h-0 opacity-0'
                                } space-y-3 mr-7`}
                            >
                                <li>
                                    قهوه ویژه
                                </li>
                                <li>
                                    ویژه در سطح جهانی
                                </li>
                                <li>
                                    قهوه درجه یک
                                </li>
                                <li>
                                    ترکیبات تجاری
                                </li>
                                <li>
                                    کپسول قهوه
                                </li>
                                <li>
                                    قهوه زینو برزیلی
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <HiOutlineChatBubbleLeftEllipsis className='h-5 w-5'/>
                                دیکشنری
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <HiOutlineBriefcase className='h-5 w-5'/>
                                درباره ما
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <IoDocumentTextOutline className='h-5 w-5'/>
                                بلاگ
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <HiOutlinePhoneArrowUpRight className='h-5 w-5'/>
                                تماس با ما
                            </Link>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-y-6 text-base text-zinc-700 dark:text-white dark:border-white/10'>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <AiOutlineHome className='h-5 w-5'/>
                                صفحه اصلی
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex justify-between items-center' onClick={toggleSubMenu}>
                                <div className='flex items-center w-fit gap-x-2'>
                                    <RiShoppingBagLine className='h-5 w-5'/>
                                    فروشگاه
                                </div>
                                <FaChevronDown className='h-5 w-5'/>
                            </Link>
                            <ul
                                className={`overflow-hidden transition-all duration-500 ${
                                    isSubMenuOpen
                                        ? 'max-h-60 opacity-100 mt-3'
                                        : 'max-h-0 opacity-0'
                                } space-y-3 mr-7`}
                            >
                                <li>
                                    قهوه ویژه
                                </li>
                                <li>
                                    ویژه در سطح جهانی
                                </li>
                                <li>
                                    قهوه درجه یک
                                </li>
                                <li>
                                    ترکیبات تجاری
                                </li>
                                <li>
                                    کپسول قهوه
                                </li>
                                <li>
                                    قهوه زینو برزیلی
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <HiOutlineChatBubbleLeftEllipsis className='h-5 w-5'/>
                                دیکشنری
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <HiOutlineBriefcase className='h-5 w-5'/>
                                درباره ما
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <IoDocumentTextOutline className='h-5 w-5'/>
                                بلاگ
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <HiOutlinePhoneArrowUpRight className='h-5 w-5'/>
                                تماس با ما
                            </Link>
                        </li>
                    </ul>
                    <ul className='flex flex-col gap-y-6 text-base text-zinc-700 dark:text-white dark:border-white/10'>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <AiOutlineHome className='h-5 w-5'/>
                                صفحه اصلی
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex justify-between items-center' onClick={toggleSubMenu}>
                                <div className='flex items-center w-fit gap-x-2'>
                                    <RiShoppingBagLine className='h-5 w-5'/>
                                    فروشگاه
                                </div>
                                <FaChevronDown className='h-5 w-5'/>
                            </Link>
                            <ul
                                className={`overflow-hidden transition-all duration-500 ${
                                    isSubMenuOpen
                                        ? 'max-h-60 opacity-100 mt-3'
                                        : 'max-h-0 opacity-0'
                                } space-y-3 mr-7`}
                            >
                                <li>
                                    قهوه ویژه
                                </li>
                                <li>
                                    ویژه در سطح جهانی
                                </li>
                                <li>
                                    قهوه درجه یک
                                </li>
                                <li>
                                    ترکیبات تجاری
                                </li>
                                <li>
                                    کپسول قهوه
                                </li>
                                <li>
                                    قهوه زینو برزیلی
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <HiOutlineChatBubbleLeftEllipsis className='h-5 w-5'/>
                                دیکشنری
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <HiOutlineBriefcase className='h-5 w-5'/>
                                درباره ما
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <IoDocumentTextOutline className='h-5 w-5'/>
                                بلاگ
                            </Link>
                        </li>
                        <li>
                            <Link href='#' className='flex items-center w-fit gap-x-2'>
                                <HiOutlinePhoneArrowUpRight className='h-5 w-5'/>
                                تماس با ما
                            </Link>
                        </li>
                    </ul>
                    <div>
                    </div>
                    {/* bottom section*/}
                    <div
                        className='flex flex-col gap-y-6 pt-8 mt-8 text-base text-orange-300 border-t border-gray-100 dark:border-white/10'>
                        <Link href='#' className='flex items-center w-fit gap-x-2'>
                            <HiArrowLeftEndOnRectangle className='h-5 w-5 rotate-180 '/>
                            ورود | ثبت‌نام
                        </Link>
                        <div className='flex items-center w-fit gap-x-2 cursor-pointer' onClick={toggleTheme}>
                            {isDark ? (
                                <>
                                    <IoSunnyOutline className='h-5 w-5'/>
                                    تم روشن
                                </>
                            ) : (
                                <>
                                    <IoMoonOutline className='h-5 w-5'/>
                                    تم تیره
                                </>
                            )}
                        </div>
                        <Link href='#' className='flex items-center w-fit gap-x-2'>
                            <HiOutlineShoppingCart className='h-5 w-5'/>
                            سبد خرید
                        </Link>
                    </div>
                </div>

                {/* golden coffee icon */}
                <Logo className="w-[100px] h-10 text-orange-300"/>

                {/* left cart icon */}
                <HiOutlineShoppingCart className='h-6 w-6 cursor-pointer' onClick={openCartMenu}/>
                <div
                    className={`fixed top-0 -left-64 h-screen w-64 bg-white dark:bg-zinc-700 px-4 pt-3 z-20 transition-transform duration-300 ease-in-out 
                    ${isCartMenuOpen ? 'translate-x-full' : 'translate-x-0'}`}>

                    <div
                        className='flex justify-between items-center pb-5 border-b border-gray-100 dark:border-white/10'>
                        <FaXmark className='text-zinc-600 dark:text-white' onClick={closeAllMenu}/>
                        {/* icon */}
                        <h4 className='text-base text-zinc-700 dark:text-white'>سبد خرید</h4>
                    </div>
                    <div className='flex items-center border-b border-b-gray-100 dark:border-b-white/10 gap-x-1'>
                        <img src="/images/products/p2.png" alt="product" className='w-[90px] h-[90px]'/>
                        <div className='flex flex-col mb-6 mt-5'>
                            <h4 className='text-sm mb-1.5 line-clamp-2'>قهوه اسپرسو بن مانو مدل پریسکا 250 گرمی</h4>
                            <span className='text-xs leading-6 tracking-tighter text-teal-600 dark:text-emerald-500'>14.500 تومان تخفیف</span>
                            <span className='text-base'>175,000
                                <span className='text-xs pr-1'>تومان</span>
                            </span>
                        </div>
                    </div>
                </div>

            </div>
            <div
                className={`${overlay ? 'overlay md:hidden fixed w-full h-full z-10 inset-0 bg-black/40' : 'hidden'}`}
                onClick={closeAllMenu}>
            </div>
        </>
    );
}