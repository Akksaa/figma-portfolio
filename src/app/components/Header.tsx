import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-center mt-[40px] '>
      <div className=' flex md:justify-between h-[35px] w-[1120px]'>
         <div className=' text-black font-semibold text-[32px] robotoFlex'>as.</div>
        <div className='flex text-[21px] font-normal dmSans w-[390px] justify-around mt-3'>
            <Link href={"/"}> <p>Work</p> </Link>
            <Link href={"/about"}><p>About</p></Link>
            <Link href={"/"}><p>Playground</p></Link>
            <Link href={"/"}><p>Contact</p></Link>
        </div>
      </div>
       
    </div>
        
  )
}

export default Header
