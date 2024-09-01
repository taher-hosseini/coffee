import React, {useEffect, useState} from 'react';
import Link from "next/link";
import Image from "next/image";
import {IoDocumentTextOutline, IoMoonOutline, IoSunnyOutline} from "react-icons/io5";
import {HiArrowLeftEndOnRectangle, HiOutlineChatBubbleLeftEllipsis, HiOutlinePhoneArrowUpRight} from "react-icons/hi2";
import {usePathname} from "next/navigation";
import {HiOutlineBriefcase, HiOutlineShoppingCart} from "react-icons/hi";
import {MdOutlineChevronLeft} from "react-icons/md";
import {FaBars} from "react-icons/fa";
import Logo from './icons/Logo';
import FavIcon from "@/components/icons/FavIcon";
import {FaChevronDown, FaXmark} from "react-icons/fa6";
import {AiOutlineHome} from "react-icons/ai";
import {RiShoppingBagLine} from "react-icons/ri";

export default function Header() {
    const pathname = usePathname()
    const [isDark, setIsDark] = useState<boolean>(false);
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
    const [isCartMenuOpen, setIsCartMenuOpen] = useState<boolean>(false);
    const [isSubMenuOpen, setIsSubMenuOpen] = useState<boolean>(false);
    const [overlay, setOverlay] = useState<boolean>(false);

    useEffect(() => {
        const theme = localStorage.getItem('theme');
        if (theme === 'dark') {
            document.documentElement.classList.add('dark');
            setIsDark(true); // همگام‌سازی state با حالت ذخیره‌شده
        } else {
            document.documentElement.classList.remove('dark');
            setIsDark(false);
        }
    }, []);

    const toggleTheme = () => {
        if (isDark) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
            setIsDark(false);
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
            setIsDark(true);
        }
    };
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
            {/* desktop header */}
            <header className='fixed md:flex hidden top-9 right-0 left-0 w-[95%] lg:w-[90%] h-24 px-5 lg:px-10 py-5 bg-black/50 mx-auto rounded-3xl backdrop-blur-[6px]'>
                <div className='flex justify-between w-full'>
                    {/* right menu */}
                    <nav className='flex items-center gap-x-5 lg:gap-x-9 h-14'>
                        <div className='shrink-0'>
                            <Image src='/images/app-logo.png' alt='logo' width='59' height='56'/>
                        </div>
                        <ul className='flex h-full gap-x-4 lg:gap-x-9 text-xl text-gray-300 tracking-tightest child:leading-[56px]'>
                            {/*<li className={`${router.pathname=="/"? 'text-orange-200':''}`}>*/}
                            <li className={`${pathname == "/" ? 'text-orange-200' : ''}`}>
                                <Link href='#'>صفحه اصلی</Link>
                            </li>
                            <li className='relative group'>
                                <Link href='#' className='group-hover:text-orange-300 transition-colors'>فروشگاه</Link>
                                <ul className='absolute invisible opacity-0 group-hover:visible group-hover:opacity-100 w-52 p-6 space-y-4 bg-white rounded-2xl dark:bg-zinc-700 text-zinc-700 text-base top-full
                             dark:text-white border-t-[3px] border-t-orange-300 shadow-normal transition-all delay-100 child:transition-colors child-hover:text-orange-300 tracking-normal'>
                                    <li>
                                        <Link href='#'>قهوه ویژه</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>ویژه در سطح جهانی</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>قهوه درجه یک</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>ترکیبات تجاری</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>کپسول قهوه</Link>
                                    </li>
                                    <li>
                                        <Link href='#'>قهوه زینو برزیلی</Link>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <Link href='#'>دیکشنری</Link>
                            </li>
                            <li>
                                <Link href='#'>بلاگ</Link>
                            </li>
                            <li>
                                <Link href='#'>درباره ما</Link>
                            </li>
                            <li>
                                <Link href='#'>تماس با ما</Link>
                            </li>
                        </ul>
                    </nav>
                    {/* left menu */}
                    <div className='flex gap-x-5 lg:gap-x-10 text-xl text-orange-200 items-center'>
                        <div className='flex items-center gap-x-2 lg:gap-x-5'>
                            <div className='py-3 relative group '>
                                <HiOutlineShoppingCart className='h-8 w-8 cursor-pointer'/>
                                <div className='absolute top-full left-0 invisible opacity-0 group-hover:visible group-hover:opacity-100 rounded-2xl bg-white dark:bg-zinc-700 w-[400px] p-5 border-t-[3px] border-t-orange-300
                                text-zinc-700 dark:text-white shadow-normal transition-all delay-100'>
                                    {/* cart header*/}
                                    <div
                                        className='flex items-center justify-between text-xs leading-6 tracking-tighter'>
                                        <span className='text-gray-300'>1 مورد</span>
                                        <a href="#" className='flex items-center text-orange-300'>
                                            مشاهده سبد خرید
                                            <MdOutlineChevronLeft className='h-5 w-5'/>
                                        </a>
                                    </div>
                                    {/* products list */}
                                    <div>
                                        <div
                                            className='flex items-center border-b border-b-gray-300 dark:border-b-white/10'>
                                            <img src="/images/products/p2.png" alt="product"
                                                 className='w-[120px] h-[120px]'/>
                                            <div className='flex flex-col mr-2.5 mb-6 mt-5'>
                                                <h4 className='text-base mb-6 line-clamp-2'>قهوه اسپرسو بن مانو مدل
                                                    پریسکا 250 گرمی</h4>
                                                <span
                                                    className='text-xs leading-6 tracking-tighter text-teal-600 dark:text-emerald-500'>14.500 تومان تخفیف</span>
                                                <span className='text-xl'>175,000 <span
                                                    className='text-sm'>تومان</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    {/* price */}
                                    <div className='flex flex-row justify-between items-center mt-5'>
                                        <div className='flex flex-col'>
                                            <span className='text-gray-300 text-xs leading-6 tracking-tighter'>مبلغ قابل پرداخت</span>
                                            <span className='text-xl'>350,000<span
                                                className='text-sm'> تومان</span></span>
                                        </div>
                                        <button
                                            className='w-36 h-14 bg-teal-600 dark:bg-emerald-500 hover:bg-teal-700 dark:hover:bg-emerald-600 transition-colors text-white text-xl rounded-xl tracking-[-0.065em]'>ثبت
                                            سفارش
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div>
                                {isDark ? (
                                    <IoSunnyOutline className='h-8 w-8 cursor-pointer' onClick={toggleTheme}/>
                                ) : (
                                    <IoMoonOutline className='h-8 w-8 cursor-pointer' onClick={toggleTheme}/>
                                )}
                            </div>


                        </div>
                        <span className='h-14 w-px block bg-white/20'></span>
                        <Link href='#' className='flex items-center gap-x-2.5'>
                            <HiArrowLeftEndOnRectangle className='h-8 w-8 rotate-180 '/>
                            <span className='hidden xl:block'>ورود | ثبت نام</span>
                        </Link>
                    </div>
                </div>

            </header>
            {/* mobile header */}
            <div className='md:hidden flex justify-between items-center p-4 h-16 bg-white dark:text-zinc-700'>
                {/* right hamburger icon */}
                <FaBars className='h-6 w-6 cursor-pointer' onClick={openMenu}/>
                <div
                    className={`fixed top-0 bottom-0 right-0 max-h-screen w-64 bg-white dark:bg-zinc-700 px-4 pt-3 z-20 transition-transform duration-300 ease-in-out 
                    ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>


                    {/* top section */}
                    <div className='flex justify-between items-center pb-5 mb-6 border-b border-gray-100 dark:border-white/10'>
                        <div className='flex justify-between gap-x-3.5 '>
                            {/* icon */}
                            <FavIcon className="w-10 h-10 text-orange-300"/>
                            {/* golden coffee icon */}
                            <Logo className="w-[100px] h-10 text-orange-300" />
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
                    <div >
                    </div>
                    {/* bottom section*/}
                    <div className='flex flex-col gap-y-6 pt-8 mt-8 text-base text-orange-300 border-t border-gray-100 dark:border-white/10'>
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
                    className={`fixed top-0 bottom-0 -left-64 max-h-screen w-64 bg-white dark:bg-zinc-700 px-4 pt-3 z-20 transition-transform duration-300 ease-in-out 
                    ${isCartMenuOpen ? 'translate-x-full' : 'translate-x-0'}`}>

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
                </div>

            </div>
            <div
                className={`${overlay ? 'overlay md:hidden fixed w-full h-full z-10 inset-0 bg-black/40' : 'hidden'}`}
                onClick={closeAllMenu}></div>
        </>
    );
}
