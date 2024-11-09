import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { FaArrowDown } from "react-icons/fa6";

function page() {
  return (
    <>
    <div className=' lg:flex justify-center xl:pr-[60px] pr-[20px]'>
      <div className='lg:flex md:h-screen xl:w-[1056px] w-full lg:justify-between p-6 xl:p-0 '>      
        <div className='dmSans md:text-[60px] text-[42px] font-medium tracking-tight lg:w-[360px] w-full sm:pt-[300px] md:pt-[230px] pt-[100px] lg:leading-[58px] leading-10'>Hello, I&apos;m Aqsa Saeed. </div>
        <div className='dmSans md:text-[28px] text-[19px] tracking-tight lg:w-[580px] w-full text-[#606060] lg:pt-[380px] pt-[30px] lg:leading-[37px] leading-6'>A student web developer specializing in front-end technologies and interactive UI design.</div>
      </div>
    </div>
    <div className='xl:w-[1056px] w-full m-auto lg:-mt-28 mt-8 sm:mt-4 md:-mt-28 '>
      <div className='xl:-ml-8 lg:ml-6 ml-4'>
        <FaArrowDown className='lg:text-4xl md:text-3xl text-2xl'/>
      </div>
    </div>
    <div className='flex justify-center lg:mt-[140px] mt-[60px] p-6 xl:p-0'>
      <div className='lg:h-[440px] xl:w-[1120px] w-full lg:border-b-2 lg:flex justify-between gap-6 border-black'>
        <div className='lg:w-[520px] w-full items-center'>
          <h1 className='lg:text-[21px] sm:text-[19px] text-[18px] font-medium inter tracking-normal text-black'>01/ RESUME BUILDER</h1>
          <p className='inter mt-5 font-normal lg:text-[21px] sm:text-[16px] text-[14px] tracking-normal text-pretty text-black lg:leading-[25px] leading-[18px]'>Developed a dynamic, resume webpage with dynamic form inputs that allow users to add personal information, skills, work history, and education seamlessly.</p>
          <p className='inter font-normal lg:text-[18px] sm:text-[14px] text-[12px] text-balance text-slate-700 lg:mt-10 mt-4 sm:leading-4 leading-3'>Built with HTML, CSS, and JavaScript to create custom, downloadable resumes.</p>
          <Link target='_blank' href={'https://generateresume-h1g8weam3-aqsa-saeeds-projects.vercel.app/'}> <p className='inter font-medium lg:text-[20px] md:text-[18px] text-[14px] text-black underline lg:mt-14 mt-6'>Generate your resume now ↗</p> </Link>
        </div>
        <div className='md:h-[365px] md:w-[640px] mt-4 lg:mt-0'>
          <Image src={'/pp1.png'} alt={'project 1: resume'} height={1088} width={850} className=' rounded-lg shadow-xl'/>
        </div>
      </div>
    </div>
    <div className='flex justify-center lg:mt-[140px] sm:mt-[60px] mt-[30px] p-6 xl:p-0'>
      <div className='lg:h-[440px] xl:w-[1120px] w-full lg:border-b-2 lg:flex justify-between gap-6 border-black'>
        <div className='lg:w-[520px] w-full items-center'>
          <h1 className='lg:text-[21px] sm:text-[19px] text-[18px] font-medium inter tracking-normal text-black'>02/ CLONED GIAIC WEBSITE</h1>
          <p className='inter mt-5 font-normal lg:text-[21px] sm:text-[16px] text-[14px] tracking-normal text-pretty text-black lg:leading-[25px] leading-[18px]'>Developed a fully responsive clone of the GIAIC website that focuses on layout precision and user experience.</p>
          <p className='inter font-normal lg:text-[18px] sm:text-[14px] text-[12px] text-balance text-slate-700 lg:mt-10 mt-4 sm:leading-4 leading-3'>Using Next.js and Tailwind CSS, mirroring the original design and functionality</p>
          <Link target='_blank' href={'https://github.com/Akksaa/GIAIC-web'}> <p className='inter font-medium lg:text-[20px] md:text-[18px] text-[14px] text-black underline lg:mt-14 mt-6'>This project is on Github →</p> </Link>
        </div>
      <div className='md:h-[365px] md:w-[640px] mt-4 lg:mt-0'>
          <Image src={'/pp3.png'} alt={'project 1: resume'} height={1088} width={850} className=' rounded-lg shadow-xl'/>
        </div>
      </div>
    </div>
    <div className='flex justify-center lg:mt-[140px] mt-[30px] p-6 xl:p-0'>
    <div className='lg:h-[440px] xl:w-[1120px] w-full lg:border-b-2 lg:flex justify-between gap-6 border-black'>
    <div className='lg:w-[520px] w-full items-center'>
          <h1 className='lg:text-[21px] sm:text-[19px] text-[18px] font-medium inter tracking-normal text-black'>03/ FIGMA TO WEB</h1>
          <p className='inter mt-5 font-normal lg:text-[21px] sm:text-[16px] text-[14px] tracking-normal text-pretty text-black lg:leading-[25px] leading-[18px]'>Developed a fully responsive website by converting a Figma template into clean, optimized code. Ensured pixel-perfect alignment and a seamless user experience across all devices.</p>
          <p className='inter font-normal lg:text-[18px] sm:text-[14px] text-[12px] text-balance text-slate-700 lg:mt-10 mt-4 sm:leading-4 leading-3'>Using Next.js and Tailwind CSS, mirroring the Figma design and functionality. </p>
          <Link target='_blank' href={'https://workspace-web-sable.vercel.app/'}> <p className='inter font-medium lg:text-[20px] md:text-[18px] text-[14px] text-black underline lg:mt-14 mt-6'>This project is on View →</p> </Link>
        </div>
        <div className='md:h-[365px] md:w-[640px] mt-4 lg:mt-0'>
          <Image src={'/p4.png'} alt={'project 3: Figma design'} height={1088} width={850} className='rounded-lg shadow-xl'/>
        </div>
      </div>
    </div> 
    </>   
  )
}

export default page
