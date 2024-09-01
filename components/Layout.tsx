import React, {ReactNode} from 'react';
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer";

interface LayoutProps {
    children: ReactNode;
}
export default function Layout({children}:any) {
    return (
        <>
            <Header/>
            {/*<main className="container mx-auto">*/}
                {children}
            {/*</main>*/}
            <Footer/>
        </>
    );
}