import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div className='h-[100px] justify-center mt-20 mb-10 flex'>
        <div className='w-[1120px] flex justify-between items-end'>
           <div className=' dmSans font-medium text-[21px] text-blue-900'>
           Aqsa Saeed - 2024
           </div> 
           <div className='flex justify-evenly gap-7'>
            <Link href={'https://github.com/Akksaa'} className='dmSans font-medium text-[21px]'> <p>Github</p> </Link>
            <Link href={'www.linkedin.com/in/akksa-saeed-a561862b9'} className='dmSans font-medium text-[21px]'> <p>LinkedIn</p> </Link>
            <Link href={'/'} className='dmSans font-medium text-[21px]'> <p>Twitter</p> </Link>
            </div> 
        </div>
     
    </div>
  )
}

export default Footer
