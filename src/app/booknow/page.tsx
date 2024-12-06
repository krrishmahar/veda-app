'use client'

import Marker from '@/app/components/global/Marker';
import BookingForm from '@/app/components/home/BookingForm';

export default function Page(){

    return (
        <>
            <Marker marker={"Booking Page"} />
            <div>
                <p className='underlined text-2xl m-7 px-5 my-1 font-light border-black border-l-2'>
                    <samp className='text-2xl extra-lexa '>Book</samp> Your Room
                </p>
            </div>
            <BookingForm />
        </>
    )
}