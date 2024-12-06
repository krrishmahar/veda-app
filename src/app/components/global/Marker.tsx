'use client'
import { FC } from "react";

type MarkerProps = {
    marker: string; // No Adjust type string etc.)
}

const Marker: FC<MarkerProps> = ({ marker }) => {
    return (
        <>
            <div className='flex justify-center '>
                <div className='bg-[#CF484A] lexend text-white font-extrabold text-2xl mt-16 mb-6 py-2 px-8 rounded-full'>
                    {marker}
                </div>
            </div>
        </>
    );
};

export default Marker;