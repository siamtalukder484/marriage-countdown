import React, { useState, useEffect } from 'react';
import patro from '../assets/sifat.png'

const Countdown = () => {
  const weddingDate = new Date('2025-01-23T00:00:00').getTime();
  const [timeLeft, setTimeLeft] = useState({});

  const calculateTimeLeft = () => {
    const now = new Date().getTime();
    const difference = weddingDate - now;

    if (difference > 0) {
      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      return { days, hours, minutes, seconds };
    } else {
      return { message: "The big day is here!" };
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      {timeLeft.message ? (
        <h1>{timeLeft.message}</h1>
      ) : (
        <div className=' bg-pink-500 w-[92%] mx-auto sm:w-[500px] h-[470px] sm:h-[600px] rounded-2xl p-8'>
            <div className='size-24 sm:size-28 rounded-full bg-white mx-auto mt-2 sm:mt-10 overflow-hidden'>
                <img src={patro} alt='img' className='w-full h-full' />
            </div>
            <h2 className='text-white text-2xl sm:text-3xl text-center font-bold mt-7 leading-normal'>সিফাতের বিবাহের বাকি আরমাত্র:</h2>
                <div className='mt-4 sm:mt-8 flex gap-x-2 justify-center'>
                    <span className='block w-[70px] sm:w-28 text-center text-base sm:text-xl text-white'>দিন</span>
                    <span className='block w-[70px] sm:w-28 text-center text-base sm:text-xl text-white'>ঘন্টা</span>
                    <span className='block w-[70px] sm:w-28 text-center text-base sm:text-xl text-white'>মিনিট</span>
                    <span className='block w-[70px] sm:w-28 text-center text-base sm:text-xl text-white'>সেকেন্ড</span>
                </div>
            <div className='flex gap-x-2 justify-center mt-1 sm:mt-3'>
                <div className='w-[70px] sm:w-28 h-14 sm:h-20 bg-white rounded-lg flex items-center justify-center text-black text-2xl sm:text-5xl font-bold'>{timeLeft.days}</div>
                <div className='w-[70px] sm:w-28 h-14 sm:h-20 bg-white rounded-lg flex items-center justify-center text-black text-2xl sm:text-5xl font-bold'>{timeLeft.hours}</div>
                <div className='w-[70px] sm:w-28 h-14 sm:h-20 bg-white rounded-lg flex items-center justify-center text-black text-2xl sm:text-5xl font-bold'>{timeLeft.minutes}</div>
                <div className='w-[70px] sm:w-28 h-14 sm:h-20 bg-white rounded-lg flex items-center justify-center text-black text-2xl sm:text-5xl font-bold'>{timeLeft.seconds}</div>
            </div>
            <div className='flex justify-center'>
                <a href='https://www.facebook.com/siam.web.dev' target='_blank' className='text-black text-center inline-block rounded-md py-1 px-4 font-medium mt-14 bg-white'>Developed by: Siam Talukder</a>
            </div>
          {/* {timeLeft.days} days {timeLeft.hours} hours {timeLeft.minutes} minutes {timeLeft.seconds} seconds */}
        </div>
      )}
    </div>
  );
};

export default Countdown;
