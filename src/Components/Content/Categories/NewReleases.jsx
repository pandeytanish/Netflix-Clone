import React from 'react'
import NewApi from '../Category API/NewApi'
import { useState } from 'react';

function NewReleases() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dataLength = NewApi.length;

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % dataLength);
  };
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1) % dataLength);
  };
  return (
    <div >
<h1 className='text-white font-extrabold text-2xl  ml-14 mt-[50px]'>New Releases</h1>
    <div className='h-[200px] w-[95%] ml-[50px]  flex gap-2 '>
    <button className='ml-2 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl' onClick={prevSlide}> <i class="fa-solid fa-chevron-left"></i></button>
    {NewApi.slice(currentIndex, currentIndex + 6).map((value,index) =>
    <div key={index} className='h-[140px] w-[260px]  bg-slate-200 mt-5 rounded-md hover:border-4  hover:border-red-500 '>
      <img className='h-[140px] w-[260px] rounded-md ' src={value.img}/>
    </div>
    )}
    <button className='ml-6 mb-6 text-3xl text-white font-extrabold hover:text-white hover:text-4xl' onClick={nextSlide}><i class="fa-solid fa-chevron-right"></i></button>
</div>
</div>
  )
}

export default NewReleases