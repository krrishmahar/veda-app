'use client'

import { Dispatch, FC, SetStateAction } from 'react';
import { FiMinus } from 'react-icons/fi';
import { IoMdAdd } from 'react-icons/io';

interface CounterProp {
    guests: number
    setGuests: Dispatch<SetStateAction<number>>
    // idk if it's right, just saw type of setGuests and did it     code dept?
    label: string
};

const Counter: FC<CounterProp> = ({ guests, setGuests, label }) => {
    const handleIncrement = () => setGuests(guests + 1);
    const handleDecrement = () => {
        if (guests > 1) setGuests(guests - 1); // Prevent going below 1
    };

    return (
        <>
            <div className="flex flex-col items-start justify-center rounded-md w-40">
                <label className="mr-4 text-base font-bold mb-1">{label}</label>
                <div className="flex items-center bg-[#F4F4F4] border border-black gap-4 rounded h-9">
                    <button
                        onClick={handleDecrement}
                        className="px-2 py-1 text-black rounded-l-md"
                    >
                        <FiMinus />
                    </button>
                    <span className='w-16 text-center'>{guests}</span>
                    <button
                        onClick={handleIncrement}
                        className="px-2 py-1 text-black rounded-r-md"
                    >
                        <IoMdAdd />
                    </button>
                </div>
            </div>
        </>
    );
};

export default Counter;
