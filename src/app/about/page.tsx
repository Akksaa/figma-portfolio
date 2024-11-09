import Link from 'next/link'
import React from 'react'

function aboutPage() {
  return (
    <>
    <div className='xl:h-screen sm:h-[400px] md:h-[300px] lg:h-[500px] h-screen flex justify-center xl:mt-36 mt-16'>
        <div className='xl:h-[680px] xl:w-[1120px] w-full lg:flex justify-between gap-6 p-6 xl:p-0'>
        <div className='xl:w-[520px] w-full '>
          <h1 className='lg:text-[60px] sm:text-[48px] text-[42px] font-medium dmSans lg:leading-[60px] leading-[44px] tracking-tighter text-black'>Hi I&apos;m Aqsa Saeed, Web Developer</h1>
          <p className='dmSans lg:mt-10 mt-4 sm:mt-6 font-normal lg:text-[28px] sm:text-[20px] text-[18px] tracking-tight text-slate-600 lg:leading-[32px] leading-[22px]'>My primary objective is to craft responsive and captivating web designs that emphasize layout precision, ensuring a seamless user experience. I am passionate about developing professional yet approachable websites that resonate with users.</p>
          <p className='dmSans lg:mt-10 mt-3 sm:mt-5 font-normal lg:text-[28px] sm:text-[20px] text-[18px] tracking-tight text-slate-600 lg:leading-[32px] leading-[22px]'>Currently, I am a student in Generative AI in Pakistan, actively expanding my knowledge and skills while seeking internship opportunities to further enhance my expertise.</p>
        </div>
        <div className='xl:h-[640px] xl:w-[420px] w-[240px] sm:hidden xl:flex mt-4 xl:mt-0'>
          <img src="pp4.jpeg" alt="" className='shadow-xl rounded-lg' height={1088} width={850}/>
        </div>
        </div>
    </div>
    <div className='flex xl:justify-center md:justify-center gap-20 sm:justify-between justify-center mt-8 sm:mt-0 p-6 xl:p-0 sm:border-b-2 xl:border-b-0 border-b-0 border-black'>
       <div className='xl:w-[1120px] w-full sm:w-[40%] xl:h-[260px] h-[200px] xl:pb-16 mt-40 sm:mt-6 xl:mt-0 flex-col lg:flex items-center xl:gap-12 gap-4 xl:border-b-2 sm:border-b-0 border-b-2 border-black p-6 xl:p-0'>
          <h1 className='inter font-medium text-[20px] leading-[22px] underline lg:no-underline lg:border-b-2 border-black'>Primary Skills</h1>
          <p className='inter font-normal sm:text-[18px] text-[16px] leading-[22px] mt-3 xl:mt-0'>HTML, CSS, Typescript, JavaScript, Next.js, Tailwind CSS </p>
        </div> 
        <div className='sm:h-[340px] sm:w-[220px] lg:w-[300px] lg:h-[400px] sm:flex hidden xl:hidden pb-9'>
          <img src="pp4.jpeg" alt="" className='shadow-xl rounded-lg' height={1088} width={850}/>
        </div>
    </div>
    <div className='flex justify-center'>
        <div className='xl:w-[1120px] w-full h-[180px] lg:flex items-center gap-64 xl:gap-96 space-y-8 xl:space-y-0 p-6 lg:p-9 xl:p-0'>
            <p className='dmSans font-normal lg:text-[28px] text-[18px] leading-[20px] xl:leading-[32px]'>I am thrilled to work for <br /> your next project → </p>
            <div>
                <p className='dmSans font-normal lg:text-[28px] text-[18px] leading-[20px] xl:leading-[32px]'>akksa007@gmail.com</p>
                <Link target='_blank' href={'https://akksaa.github.io/resume/'}> <p className='inter font-normal xl:text-[16px] text-[12px] xl:leading-[22px] leading-4 pt-1'>View Resume</p> </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default aboutPage
