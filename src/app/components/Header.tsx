import Link from 'next/link'
import React from 'react'
import { IoMdMenu } from "react-icons/io";

function Header() {
  return (
    <div className='flex md:justify-center lg:mt-[40px] mt-[15px] p-6 xl:p-0'>
      <div className=' flex justify-between h-[35px] w-[1120px]'>
         <div className=' text-black font-semibold text-[32px] robotoFlex'>as.</div>
            <div className='md:flex hidden text-[21px] font-normal dmSans w-[390px] justify-around mt-3'>
                <Link href={"/"}> <p>Work</p> </Link>
                <Link href={"/about"}><p>About</p></Link>
                <Link href={"/contact"}><p>Contact</p></Link>
            </div>
            <div className='md:hidden flex text-[36px] mt-[6px] font-normal'>
              <IoMdMenu/>
            </div>
          </div>
       
    </div>
        
  )
}

export default Header
