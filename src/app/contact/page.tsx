"use client"
import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {AiFillLinkedin, AiOutlineGithub, AiOutlineInstagram, AiOutlineTwitter} from 'react-icons/ai'

function ContactPage() {
    useEffect(() => {
        const submitButton = document.getElementById("submitButton");
        submitButton?.addEventListener("click", () => {
            alert('Thank you for reaching out! I will get back to you soon.');
        });

        // Cleanup the event listener when the component unmounts
        return () => {
            submitButton?.removeEventListener("click", () => {
                alert('Thank you for reaching out! I will get back to you soon.');
            });
        };
    }, []);
  return (
    <div className='lg:flex justify-between xl:m-16 m-2 sm:m-4 md:m-6 pb-32'>
      <div className='h-screen lg:w-[50%] w-full xl:mt-2 mt-12'>
        <h1 className='xl:text-[60px] text-[32px] lg:text-[42px] text-center font-medium dmSans xl:leading-[60px] lg:leading-[48px] leading-[38px] tracking-tighter text-black'>Get in Touch!</h1>
        <p className='border-2 border-black mt-4'>
        </p>
        <div className='xl:mt-4 mt-2 xl:text-[24px] md:text-[18px] text-[14px] text-center'>
            <p>We can do so much together. Let&apos;s talk</p>
        </div>
        <div className='xl:m-12 m-4 xl:mt-20 mt-6 md:flex justify-between'>
            <form className='dmSans font-medium'>
                <div>
                    <label htmlFor="fullname" className='xl:text-[21px] lg:text-[18px] text-[16px]'>Full Name</label><br />
                    <input type="text" name="fullname" id=""  className='outline-none border-b-2 border-black' />
                </div>
                <div className='lg:mt-8 mt-3'>
                    <label htmlFor="email" className='xl:text-[21px] lg:text-[18px] text-[16px]'>E-mail</label><br />
                    <input type="email" name="email" id=""  className='outline-none border-b-2 border-black' />
                </div>
                <div className='lg:mt-8 mt-3'>
                    <label htmlFor="message" className='xl:text-[21px] lg:text-[18px] text-[16px]'>Message</label><br />
                    <textarea name="message" id="" className='outline-none border-b-2 border-black' />
                </div>
                <button type="submit" id='submitButton' className='lg:mt-12 mt-8 bg-black text-[14px] sm:text-[20px] text-white rounded-full lg:w-full lg:px-6 px-4 lg:py-2 py-1'>Contact me</button>
            </form>
            <div>
                <div className='dmSans mt-14 md:mt-0 text-center sm:text-start'>
                    <h1 className='xl:text-[28px] md:text-[22px] text-[18px] text-black font-medium'>Contact</h1>
                    <p className='xl:text-[21px] md:text-[18px] text-[14px] text-gray-800 mt-2'>akksa007@gmail.com</p>
                </div>
                <div className='dmSans md:mt-8 mt-2 text-center sm:text-start'>
                    <h1 className='xl:text-[28px] md:text-[22px] text-[18px] text-black font-medium'>Based in</h1>
                    <p className='xl:text-[21px] lg:text-[18px] text-[14px] text-gray-800 mt-2'>Karachi, Pakistan</p>
                </div>
                <div className='dmSans xl:mt-8 mt-2'>
                    <ul className='flex gap-3 text-center justify-center sm:justify-normal'>
                        <li className='mt-2'>
                            <Link href={'https://www.linkedin.com/in/akksa-saeed-a561862b9/'} className='lg:text-[28px] text-[18px] text-black mt-2'> <AiFillLinkedin /></Link>
                        </li>
                        <li className='mt-2'>
                            <Link href={'https://github.com/Akksaa'} className='lg:text-[28px] text-[18px] text-black mt-2'> <AiOutlineGithub /> </Link>
                        </li>
                        <li><AiOutlineInstagram className='lg:text-[28px] text-[18px] text-black mt-2' /></li>
                        <li><AiOutlineTwitter className='lg:text-[28px] text-[18px] text-black mt-2' /></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className='text-center md:flex md:justify-end justify-normal lg:justify-center pt-8 mt-96 md:mt-52 lg:mt-16'>
            <p className='parisienne lg:text-[42px] md:text-[32px] text-[28px]'>Are you ready for design that <br /> gets you noticed?</p>
            
        </div>
    </div>
      <div className='lg:h-screen xl:w-[600px] lg:w-[400px] h-[500px] md:h-[300px] md:w-[300px] mt-14 sm:-mt-16 lg:mt-10 xl:mt-0'>
        <Image src={'/con2.jpeg'} alt='photo' width={600} height={800}></Image>
      </div>
    </div>
  )
}

export default ContactPage
