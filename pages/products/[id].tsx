import React from 'react';
import Layout from "@/components/Layout";

export default function ProductDetails ({product}:any) {
    return(
    <>
        <Layout>
            <div>
                <h1 className="text-4xl font-bold mb-4">{product.name}</h1>
                <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-cover mb-4"/>
                <p className="text-gray-700 mb-4">{product.description}</p>
                <p className="text-2xl font-bold">{product.price} تومان</p>
            </div>
        </Layout>
    </>
    );
}

export async function getServerSideProps(context: any) {
    const {params} = context;
    const res = await fetch(`http://localhost:3000/api/products/${params.id}`)
    const data = await res.json();
    return {
        props: {
            product: data.product,
        }
    }

}
