import Link from "next/link";
import React, {useEffect, useState} from "react";
import Layout from "@/components/Layout";

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
                <main className=''>
                    <div className='mx-auto max-w-screen-md sm:max-w-screen-sm lg:max-w-screen-md   flex justify-end items-center'>
                        <div className='text-white'>
                            <h2 className='text-2xl md:text-6xl mb-0.5 md:mb-2'>قهوه عربیکا تانزانیا</h2>
                            <span className='text-xl md:text-5xl'>یک فنجان بالانس !</span>
                            <span className='block w-[100px] h-px md:h-0.5 bg-orange-300 my-3 md:my-8'></span>
                            <p className='max-w-[201px] md:max-w-[460px] text-xs md:text-2xl'>قطعا نام آشنای عربیکا را
                                شنیده اید، عربیکا یکی از گونه های قهوه است که در نواحی مختلف کمربند قهوه کشت میشود.</p>
                        </div>
                    </div>

                    {/*{products ? products.map((product: Product) => (*/}
                    {/*    <Link key={product._id} href={`/products/${product._id}`}>*/}
                    {/*        <p className="block py-2 text-sm text-gray-700 hover:text-gray-900">*/}
                    {/*            {product.name} {product.description}*/}
                    {/*        </p>*/}
                    {/*    </Link>*/}
                    {/*)):<p>error</p>}*/}
                </main>
            </Layout>
        </>
    );
}