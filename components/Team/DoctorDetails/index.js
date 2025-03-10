import Link from 'next/link';
import React from 'react';
import { CiImageOff } from "react-icons/ci";
import { IoChevronBack } from "react-icons/io5";

function DoctorDetails({ doctor }) {
  const formattedDesc = doctor.desc.split('\n').map((item, key) => {
    return <span key={key}>{item}<br/><br/></span>
  });

  return (
    <div className='mt-[200px] flex justify-center items-center'>
      <div className='md:w-[65%] w-[80%] md:grid grid-cols-3 grid-cols-1 md:space-y-0 space-y-5 gap-10 '>
        <div className=' overflow-hidden  flex justify-end items-start '>
         {
          doctor.imgPath ?  <img src={doctor.imgPath} alt=""  /> : <CiImageOff className='w-full h-full opacity-20  text-grayHead'/>
         }
        </div>
        <div className='  col-span-2 font-libre-bodoni'>
          <div className='mb-5'>
            <span className='text-grayHead font-[500] text-2xl'>
              {doctor.name}
            </span>
          </div>
          <div className='mb-5'>
            <span className='text-4xl'>
              {doctor.location}
            </span>
          </div>
          <div>
            <p className='text-xl  text-grayHead'>
              {formattedDesc}
            </p>
          </div>
          <div>
          <Link href="/team">
                      <button className='border flex justify-center items-center space-x-2 p-4 rounded-full bg-grayHead bg-opacity-75 hover:bg-opacity-100 cursor-pointer text-white'> <IoChevronBack/> <span>Back to Team</span>  </button>

          </Link>
          </div>
        </div>
      </div>

    </div>
  );
}

export default DoctorDetails;
