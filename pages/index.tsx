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
                <main className='w-[65%] mx-auto mt-[1000px]'>
                    <h1 className='text-brown-900 border rounded-4xl font-Vazir'>index page</h1>
                    <h1 className='text-brown-900 border rounded-4xl'>سلام</h1>
                    <h1 className='text-brown-900 border rounded-lg font-Vazir'>سلام این متن 12345 فارسی است.</h1>
                    {products ? products.map((product: Product) => (
                        <Link key={product._id} href={`/products/${product._id}`}>
                            <p className="block px-4 py-2 text-sm text-gray-700 hover:text-gray-900">
                                {product.name} {product.description}
                            </p>
                        </Link>
                    )):<p>error</p>}
                </main>
            </Layout>
        </>
    );
}