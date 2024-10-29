import Link from 'next/link';
import Image from 'next/image'
import React from 'react'
import { FaArrowDown } from "react-icons/fa6";

function page() {
  return (
    <>
    <div className=' flex justify-center pr-[60px]'>
      <div className='flex h-screen w-[1056px] justify-between '>      
        <div className='dmSans text-[60px] font-medium tracking-tight w-[360px] pt-[300px] leading-[58px]'>Hello, I&apos;m Aqsa Saeed. </div>
        <div className='dmSans text-[28px] tracking-tight w-[580px] text-[#606060] pt-[380px] leading-[37px]'>A student web developer specializing in front-end technologies and interactive UI design.</div>
      </div>
    </div>
    <div className='w-[1056px] m-auto -mt-28'>
      <div className='-ml-8'>
        <FaArrowDown className='text-4xl'/>
      </div>
    </div>
    <div className='flex justify-center mt-[140px]'>
      <div className='h-[440px] w-[1120px] border-b-2 flex justify-between gap-6 border-black'>
        <div className='w-[520px] '>
          <h1 className='text-[21px] font-medium inter tracking-normal text-black'>01/ RESUME BUILDER</h1>
          <p className='inter mt-5 font-normal text-[21px] tracking-normal text-pretty text-black leading-[25px]'>Developed a dynamic, resume webpage with dynamic form inputs that allow users to add personal information, skills, work history, and education seamlessly.</p>
          <p className='inter font-normal text-[18px] text-balance text-slate-700 mt-10 leading-4'>Built with HTML, CSS, and JavaScript to create custom, downloadable resumes.</p>
          <Link target='_blank' href={'https://akksaa.github.io/resume/'}> <p className='inter font-medium text-[20px] text-black underline mt-14'>View and generate custom resume now ↗</p> </Link>
        </div>
        <div className='h-[365px] w-[640px]'>
          <Image src={'/pp1.png'} alt={'project 1: resume'} height={1088} width={850}/>
        </div>
      </div>
    </div>
    <div className='flex justify-center mt-[140px]'>
      <div className='h-[440px] w-[1120px] border-b-2 flex justify-between gap-6 border-black'>
        <div className='w-[520px] '>
          <h1 className='text-[21px] font-medium inter tracking-normal text-black'>02/ MY PORTFOLIO</h1>
          <p className='inter mt-5 font-normal text-[21px] tracking-normal text-pretty text-black leading-[25px]'>This responsive Portfolio showcases my skills and passion that strikes a perfect balance between professionalism and approachability.</p>
          <p className='inter font-normal text-[18px] text-balance text-slate-700 mt-10 leading-4'>Crafted with Next.js and Tailwind CSS embodies a warm, inviting aesthetic with its soft, layered background and well-structured layout. </p>
          <Link target='_blank' href={'https://github.com/Akksaa/My-Portfolio.git'}> <p className='inter font-medium text-[20px] text-black underline mt-14'>Available on Github →</p> </Link>
        </div>
        <div className='h-[365px] w-[640px]'>
          <Image src={'/pp2.png'} alt={'project 2: Portfolio'} className='shadow-xl' height={1088} width={850}/>
        </div>
      </div>
    </div>
    <div className='flex justify-center mt-[140px]'>
      <div className='h-[440px] w-[1120px] border-b-2 flex justify-between gap-6 border-black'>
        <div className='w-[520px] '>
          <h1 className='text-[21px] font-medium inter tracking-normal text-black'>03/ CLONED GIAIC WEBSITE</h1>
          <p className='inter mt-5 font-normal text-[21px] tracking-normal text-pretty text-black leading-[25px]'>Developed a fully responsive clone of the GIAIC website that focuses on layout precision and user experience.</p>
          <p className='inter font-normal text-[18px] text-balance text-slate-700 mt-10 leading-4'>Using Next.js and Tailwind CSS, mirroring the original design and functionality. </p>
          <Link target='_blank' href={'https://github.com/Akksaa/GIAIC-web.git'}> <p className='inter font-medium text-[20px] text-black underline mt-14'>This project is on Github →</p> </Link>
        </div>
        <div className='h-[365px] w-[640px]'>
          <Image src={'/pp3.png'} alt={'project 3: GIAIC web'} height={1088} width={850}/>
        </div>
      </div>
    </div>
    </>   
  )
}

export default page
