'use client'

import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import Counter from '@/app/components/home/Counter';

interface DataLog {
    firstName: string;
    middleName?: string;
    lastName: string;
    email: string;
    phoneNumber: string;
    member: string;
    memberId?: string;
    otp?: string;
    roomType: string;
    guests: number;
    checkIn: string;
    checkOut: string;
    specialRequests?: string;
}

const BookingForm = () => {
    const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<DataLog>();
    const [isMember, setIsMember] = useState(false);
    const [guests, setGuests] = useState(1); // State to track the number of guests

    const onSubmit: SubmitHandler<DataLog> = (data) => {
        data.guests = guests; // Ensure the guest field is included in the data
        console.log(data);
    };

    const handleVerify = (e: React.FormEvent) => {
        e.preventDefault();
        console.log("Verifying member...");
        // Verification logic here
    };

    const memberStatus = watch('member');

    return (
        <>
            <div className="form pb-5">
                <form className="max-w-[48rem] m-10 mx-auto p-6 border border-[#717171] bg-white shadow-2xl rounded-md" onSubmit={handleSubmit(onSubmit)}>
                    {/* Name Fields */}
                    <div className="mb-4">
                        <label className="block font-bold mb-1">Name <samp className='text-[#FF0000]'>*</samp></label>
                        <div className='flex gap-2'>
                            <div>
                                {errors.firstName && <p className="text-red-500 block text-xs">First name is required</p>}
                                <input {...register('firstName', { required: true })} type="text" className="pr-10 w-full bg-[#F4F4F4] text-[#818181] border rounded p-2" placeholder="First Name" />
                            </div>
                            <div>
                                <input {...register('middleName')} type="text" className="pr-10 mx-2 w-full bg-[#F4F4F4] text-[#818181] border rounded p-2" placeholder="Middle Name" />
                            </div>
                            <div>
                                <input {...register('lastName', { required: true })} type="text" className="pr-10 mx-2 w-full bg-[#F4F4F4] text-[#818181] border rounded p-2" placeholder="Last Name" />
                                {errors.lastName && <p className="text-red-500 block text-xs">Last name is required</p>}
                            </div>
                        </div>
                    </div>

                    {/* Email and Phone */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                        <div>
                            <label className="block font-bold mb-1">Email <samp className='text-[#FF0000]'>*</samp></label>
                            <input {...register('email', { required: true })} type="email" className="w-full bg-[#F4F4F4] text-[#818181] border rounded p-2" placeholder="mail@sitename.com" />
                            {errors.email && <p className="text-red-500 text-xs">Email is required</p>}
                        </div>
                        <div>
                            <label className="block font-bold mb-1">Phone Number <samp className='text-[#FF0000]'>*</samp></label>
                            <input {...register('phoneNumber', { required: true })} type="tel" className="w-full bg-[#F4F4F4] text-[#818181] border rounded p-2" placeholder="91+ Phone Number" />
                            {errors.phoneNumber && <p className="text-red-500 text-xs">Phone number is required</p>}
                        </div>
                    </div>

                    {/* Member of Andhra Mahasabha */}
                    <div className="mb-4 flex justify-center border-t-2 border-[#d9d9d9] mt-4 pt-2">
                        <label className="font-bold mb-1 mr-4">Member of Andhra Mahasabha <samp className='text-[#FF0000]'>*</samp></label>
                        <div className="flex space-x-4">
                            <label className="flex items-center">
                                <input
                                    {...register('member', { required: true })}
                                    type="radio"
                                    value="yes"
                                    onChange={() => setIsMember(true)}
                                    className="mr-2"
                                />
                                Yes
                            </label>
                            <label className="flex items-center">
                                <input
                                    {...register('member', { required: true })}
                                    type="radio"
                                    value="no"
                                    onChange={() => setIsMember(false)}
                                    className="mr-2"
                                />
                                No
                            </label>
                        </div>
                    </div>
                    {errors.member && <p className="block text-red-500 text-xs">Please select a membership status</p>}

                    {/* Conditional Fields: Member ID and OTP */}
                    {isMember && (
                        <div className="grid grid-rows-2 gap-4 border-b-2 items-center pb-4 border-[#d9d9d9] mb-4">
                            <div className="flex justify-center items-center gap-4">
                                <label className="font-bold mb-1">Member ID</label>
                                <input {...register('memberId', { required: isMember })} type="text" className="w-60 bg-[#F4F4F4] text-[#818181] border rounded p-2" placeholder="Member ID" />
                            </div>
                            <div className="flex justify-center items-center gap-[4.75rem]">
                                <label className="font-bold mb-1">OTP</label>
                                <input {...register('otp')} type="text" className="w-60 bg-[#F4F4F4] text-[#818181] border rounded p-2" placeholder="Enter OTP" />
                            </div>
                        </div>
                    )}

                    {/* Guest Counter */}
                    <div className="grid grid-cols-4 gap-4 mb-4">
                        <div>
                            <label className="block font-bold mb-1">Room Type</label>
                            <select {...register('roomType')} className="w-full border bg-[#F4F4F4] border-black rounded p-2">
                                <option value="single">Single Room</option>
                                <option value="double">Double Room</option>
                                <option value="suite">Suite</option>
                            </select>
                        </div>
                        <div>
                            <Counter guests={guests} setGuests={setGuests} label="No. Of Guests" />
                        </div>
                        <div>
                            <label className="block font-bold mb-1">Check In</label>
                            <input {...register('checkIn', { required: true })} type="date" className="w-full border bg-[#F4F4F4] text-[#818181] border-black rounded p-[0.35rem]" />
                        </div>
                        <div>
                            <label className="block font-bold mb-1">Check Out</label>
                            <input {...register('checkOut', { required: true })} type="date" className="w-full border bg-[#F4F4F4] text-[#818181] border-black rounded p-[0.35rem]" />
                        </div>
                    </div>

                    {/* Special Requests */}
                    <div className="mb-4 border-b-2 p-5 pb-8 border-[#d9d9d9]">
                        <label className="block font-bold mb-1 pl-3">Special Requests</label>
                        <textarea {...register('specialRequests')} className="w-full border bg-[#F4F4F4] text-[#818181] rounded-md px-2 py-2 pr-[14.5rem] pb-20 p-2" placeholder="Additional Information"></textarea>
                    </div>

                    {/* Submit */}
                    <div className="flex justify-center">
                        <button type="submit" className="bg-black text-white px-20 py-2 rounded-md">Continue To Pay...</button>
                    </div>
                </form>
            </div>
        </>
    );
};

export default BookingForm;