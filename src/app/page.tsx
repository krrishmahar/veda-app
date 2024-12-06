'use client'

import Booking from "@/app/components/home/Booking"
import ImageCarousel from "@/app/components/home/ImageCarousel"
import RoomBookingForm from "@/app/components/home/RoomBookingForm"

const page = () => {
  return (
    <>
      <div>
        <div className="relative">
          <ImageCarousel />
        </div>
        <p className='underlined text-2xl m-7 px-5 my-16 border-black border-l-2'>
          <samp className='text-2xl extra-lexa '>Book</samp> A Room Now:
        </p>
        <div className='relative z-20 mt-14'>
          <RoomBookingForm />
        </div>
        <p className='underlined text-2xl m-7 px-5 border-black border-l-2'>
          <samp className='text-2xl extra-lexa underline'>New</samp> Hotel Rooms
        </p>
        <div className='relative z-20 mt-14'>
          <Booking endpoint={"/api/rooms"} />
        </div>
        <p className='underlined text-2xl mx-7 px-5 my-3 border-black border-l-2'>
          <samp className='text-2xl extra-lexa underline'>New</samp> Banquet Halls
        </p>
        <div className='relative z-20 mt-14'>
          <Booking endpoint={"/api/halls"} />
        </div>
      </div>
    </>
  )
}

export default page
