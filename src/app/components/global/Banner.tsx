'use client'

import { FC } from "react"

const Banner:FC = () => {
    return (
        <>
            <div className='relative w-full flex gap-8 justify-center '>
                <div className="logo bg-white flex  p-3 ">
                    <img src="/static/logo.jpg" alt="Image 404" className='item-center justify-center h-[164px] w-[164px]'/>
                </div>
                <div className='Header flex flex-col items-center p-5'>
                    <img src="/static/tamil.svg" alt="image 404" className='h-[66px]'/>
                    <h1 className='text-center text-[38px] font-extrabold '>THE MUMBAI ANDHRA MAHASABHA & GYMKHANA</h1>
                    <p className='text-center text-sm  font-bold text-slate-600'>ESTD. 1928 (Public Trust - Regd. No Bom.) Dtd. 3rd August 1960 Regn. No. 1258/1943-44 dtd 11-11-1943 under Registration of Societies Act XXI of 1860</p>
                </div>
                <div className='end p-5 flex'>
                    <img src="/static/90yrs.svg" alt="Image 404" className='items-center align-middle  h-[164px] w-[164px]' />
                </div>
            </div>
        </>
    )
}

export default Banner
