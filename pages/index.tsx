import Layout from "@/components/Layout";
import Curve from "@/components/icons/curve";
import {FaChevronDown} from "react-icons/fa6";
import {MdOutlineChevronLeft} from "react-icons/md";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import ProductBox from "@/components/body/ProductBox";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Pagination} from "swiper/modules";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

type Product = {
    id: string;
    name: string;
    finalPrice: number;
    originalPrice: number;
    discount: number;
    count: number;
    rating: number;
    createdAt: string; // تاریخ به صورت string
    salesCount: number; // تعداد فروش
};
export default function Home({products}:any) {
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
                    <section className='products min-h-[900px]'>
                        {/*<div className='products-wrapper mx-auto max-w-screen-md xl:max-w-screen-lg 2xl:max-w-screen-xl pt-48 text-zinc-700 dark:text-white'>*/}
                        <section className='container lg:pt-48 pt-8 text-zinc-700 dark:text-white'>
                            {/* latest products */}
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
                            <div
                                className='products-grid grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3.5 md:gap-5'>
                                {products?.length > 0 && products
                                    .sort((a: Product, b: Product) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
                                    .slice(0, 4)
                                    .map((product: Product) => (
                                        <ProductBox key={product.id} product={product}/>
                                    ))
                                }
                            </div>
                            <div
                                className='category-banner grid grid-cols-1 md:grid-cols-2 child:h-[142px] child:lg:h-[248px] gap-5 mt-8 md:mt-20 child:bg-gray-600 child:rounded-2xl '>
                                <div
                                    className='relative flex flex-col p-7 lg:p-12 gap-y-4 lg:gap-y-7 justify-center text-white leading-6'>
                                    <img src="/images/categories/category-right.jpg" alt="product"
                                         className='absolute inset-0 w-full h-full object-fill z-0 rounded-2xl'/>
                                    <div
                                        className='bg-gradient-to-r from-[#000000]/10 to-[#000000]/60 absolute inset-0 w-full h-full z-0 opacity-75 rounded-2xl'></div>
                                    <span className='text-2xl lg:text-4xl z-10'>انواع قهوه</span>
                                    <span className='text-base lg:text-xl z-10'>ترکیبی و تک خاستگاه</span>
                                </div>
                                <div
                                    className='relative flex flex-col p-7 lg:p-12 gap-y-4 lg:gap-y-7 justify-center text-white leading-6'>
                                    <img src="/images/categories/category-left.jpg" alt="product"
                                         className=' absolute inset-0 w-full h-full object-fill z-0 rounded-2xl'/>
                                    <div
                                        className='bg-gradient-to-r from-[#000000]/10 to-[#000000]/60 absolute inset-0 w-full h-full z-0 opacity-75 rounded-2xl'></div>
                                    <span className='text-2xl lg:text-4xl z-10'>پودر های فوری</span>
                                    <span className='text-base lg:text-xl z-10'>نسکافه ، هات چاکلت ، ماسالا</span>
                                </div>
                            </div>
                            <div className='products-category flex flex-wrap justify-evenly items-center my-20 gap-y-8'>
                                <div
                                    className='w-[100px] md:w-[200px] flex flex-col justify-center items-center text-center gap-y-1.5 md:gap-y-2.5'>
                                    <a href="#"><img src="/images/categories/category1.png" alt="product"/></a>
                                    <h4 className='text-sm lg:text-xl text-zinc-700 dark:text-white'>قهوه دمی و
                                        اسپرسو</h4>
                                </div>
                                <div
                                    className='w-[100px] md:w-[200px] flex flex-col justify-center items-center text-center gap-y-1.5 md:gap-y-2.5'>
                                    <a href="#"><img src="/images/categories/category2.png" alt="product"/></a>
                                    <h4 className='text-sm lg:text-xl text-zinc-700 dark:text-white'>لوازم جانبی و
                                        تجهیزات</h4>
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


                            {/* more sales products */}
                            <div className='flex justify-between items-end mb-5 md:mb-12'>
                                <div className='flex flex-col justify-center gap-y-1.5'>
                                    <h3 className='section-title'>محصولات پر فروش</h3>
                                    <span className='section-subtitle'>پیشنهاد قهوه خور ها ...</span>
                                </div>
                                <div className='section-slider'>
                                    <span className='swiper-button-next-custom section-slider-span group'>
                                        <FaChevronRight
                                            className='w-5 h-5 md:w-[26px] md:h-p26px] text-zinc-700 dark:text-white group-hover:dark:text-zinc-700'/>
                                    </span>
                                    <span className='swiper-button-prev-custom section-slider-span group'>
                                        <FaChevronLeft
                                            className='w-5 h-5 md:w-[26px] md:h-p26px] text-zinc-700 dark:text-white group-hover:dark:text-zinc-700'/>
                                    </span>
                                </div>
                            </div>
                            <div className='products-slider'>
                                <Swiper
                                    slidesPerView={2}
                                    spaceBetween={15}
                                    navigation={{
                                        nextEl: '.swiper-button-prev-custom',
                                        prevEl: '.swiper-button-next-custom',
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 3,
                                            spaceBetween: 15,
                                        },
                                        1024: {
                                            slidesPerView: 4,
                                            spaceBetween: 20,
                                        },
                                    }}
                                    modules={[Navigation]}
                                    className="mySwiper"
                                >
                                    {products?.length > 0 && products
                                        .sort((a: Product, b: Product) => b.salesCount - a.salesCount)
                                        .slice(0, 5)
                                        .map((product: Product) => (
                                            <SwiperSlide key={product.id}>
                                                <ProductBox product={product}/>
                                            </SwiperSlide>
                                        ))
                                    }
                                </Swiper>
                            </div>
                        </section>
                    </section>
                </main>
            </Layout>
        </>
    );
}

export async function getServerSideProps() {
    const res = await fetch('http://localhost:3000/api/products/' || 'https://coffee75.vercel.app/api/products/');
    // const res = await fetch('https://coffee75.vercel.app/api/products/');
    const data = await res.json()
    return {
        props: {
            products: data.products,
        },
    }
}