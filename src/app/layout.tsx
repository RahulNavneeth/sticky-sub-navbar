'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { Navbar } from '@/libs/components/navbar'
import {useEffect, useState} from 'react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

    const [clientWindowHeight, setClientWindowHeight] = useState(0);
    
    const handleScroll = () => {
      setClientWindowHeight(window.scrollY);
    };
    
    useEffect(() => {
      window.addEventListener("scroll", handleScroll); 
      return () => window.removeEventListener("scroll", handleScroll);
    });

    return (
        <html lang="en">
            <body className={inter.className}>
                <div className='w-screen h-screen'>
                    <Navbar isFixed={clientWindowHeight >= 70} />
                    <div className='w-full h-full'>
                        {children}
                    </div>
                </div>
            </body>
        </html>
    )
}
