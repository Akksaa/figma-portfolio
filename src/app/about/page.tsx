import Link from 'next/link'
import React from 'react'

function aboutPage() {
  return (
    <>
    <div className='h-screen flex justify-center mt-36'>
        <div className='h-[680px] w-[1120px] flex justify-between gap-6'>
        <div className='w-[520px] '>
          <h1 className='text-[60px] font-medium dmSans leading-[60px] tracking-tighter text-black'>Hi I&apos;m Aqsa Saeed, Web Designer</h1>
          <p className='dmSans mt-10 font-normal text-[28px] tracking-tight text-slate-600 leading-[32px]'>My primary objective is to craft responsive and captivating web designs that emphasize layout precision, ensuring a seamless user experience. I am passionate about developing professional yet approachable websites that resonate with users.</p>
          <p className='dmSans mt-10 font-normal text-[28px] tracking-tight text-slate-600 leading-[32px]'>Currently, I am a student in Generative AI in Pakistan, actively expanding my knowledge and skills while seeking internship opportunities to further enhance my expertise.</p>
        </div>
        <div className='h-[640px] w-[420px]'>
          <img src="pp4.jpeg" alt="" className='shadow-xl rounded-lg' height={1088} width={850}/>
        </div>
        </div>
        
    </div>
    <div className='flex justify-center'>
       <div className='w-[1120px] h-[260px] pb-16 flex items-center gap-12 border-b-2 border-black'>
        <h1 className='inter font-medium text-[20px] leading-[22px] border-b-2 border-black'>Primary Skills</h1>
        <p className='inter font-normal text-[18px] leading-[22px]'>HTML, CSS, Typescript, JavaScript, Next.js, Tailwind CSS </p>
      </div> 
    </div>
    <div className='flex justify-center'>
        <div className='w-[1120px] h-[180px] flex items-center gap-96 '>
            <p className='dmSans font-normal text-[28px] leading-[32px]'>I am thrilled to work for <br /> your next project → </p>
            <div>
                <p className='dmSans font-normal text-[28px] leading-[32px]'>akksa007@gmail.com</p>
                <Link target='_blank' href={'https://akksaa.github.io/resume/'}> <p className='inter font-normal text-[16px] leading-[22px] pt-1'>View Resume</p> </Link>
            </div>
        </div>
    </div>
    </>
  )
}

export default aboutPage
