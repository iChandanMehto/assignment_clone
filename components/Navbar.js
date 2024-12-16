import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import logo from '../public/assets/logo.svg'
import { Button } from "@/components/ui/button"
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
  


const Navbar = () => {
  return (
    <nav className=" p-4 text-2xl text-[#1b1d22] font-normal ">
      <div className="container mx-auto flex justify-between items-center">
        <div >
            <Link href={"/"}> 
            <Image
            src={logo} // Path relative to the `public` folder
            alt="Website Logo"     // Add alt attribute
            width={280}
            height={100}
          /></Link>
 
        </div>
        <ul className='gap-3 hidden md:flex space-x-4 items-center  tracking-normal text-[22px] text-[#1b1d22] font-normal '>
          {/* Example Navigation Links */}
         <li><Link href="/" className="text-slate-950 px-4">
            Home
          </Link></li> 

        <li><Link href="/voice_Sample" className="text-slate-950 px-4">
        AI Voices
        </Link>
        </li>

          <li><Link href="/contact" className="text-slate-950 px-4">
            Pricing
          </Link>
          </li>

          <li><Link href="/contact" className="text-slate-950  px-4">
            Contact
          </Link>
          </li>
         <li>
         <Button  className="border-[#5095f8] mx-1 px-4 text-xl rounded-3xl text-black  py-1.5 pr-12 pl-12 pt-6 pb-6 border-2 border-solid hover:bg-slate-200" variant="outline">Log In</Button>  </li>
         <li>
         <Button  className="border-[#5095f8] bg-[#5679f3] mx-1 px-4 text-xl rounded-3xl text-white  py-1.5 pr-12 pl-12 pt-6 pb-6 border-2 hover:bg-[#5c78dc]  " variant="outline">Register</Button>  </li>
     
        </ul>
        <div className='md:hidden'>
        <Sheet>
  <SheetTrigger>
  <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path d="M 3 7 A 1.0001 1.0001 0 1 0 3 9 L 27 9 A 1.0001 1.0001 0 1 0 27 7 L 3 7 z M 3 14 A 1.0001 1.0001 0 1 0 3 16 L 27 16 A 1.0001 1.0001 0 1 0 27 14 L 3 14 z M 3 21 A 1.0001 1.0001 0 1 0 3 23 L 27 23 A 1.0001 1.0001 0 1 0 27 21 L 3 21 z"/></svg>
   </SheetTrigger>

            <SheetContent>
    <SheetHeader>
      <SheetTitle className = "py-4 lg:h-16 w-auto">  <div>
            <Link href={"/"}> 
            <Image
            src={logo} // Path relative to the `public` folder
            alt="Website Logo"     // Add alt attribute
          /></Link>
 
        </div></SheetTitle>
      <SheetDescription asChild >
      <div >
          {/* Example Navigation Links */}
          <ul className='gap-6 flex flex-col  align-center'>
          {/* Example Navigation Links */}
          <li><Link href="/" className="text-slate-950 px-4">
            Home
          </Link></li> 

        <li><Link href="/about" className="text-slate-950 px-4">
        AI Voices
        </Link>
        </li>

          <li><Link href="/contact" className="text-slate-950 px-4">
            Pricing
          </Link>
          </li>

          <li><Link href="/contact" className="text-slate-950  px-4">
            Contact
          </Link>
          </li>
         <li>
         <Button  className="border-[#5095f8] mx-1 px-4 text-xl rounded-3xl text-black py-1.5 pr-12 pl-12 pt-6 pb-6 border-2 border-solid hover:bg-slate-200" variant="outline">Log In</Button> </li>
         <li><Button  className="border-[#5095f8] bg-[#5679f3] mx-1 px-4 text-xl rounded-3xl  text-white py-1.5 pr-12 pl-12 pt-6 pb-6 border-2 hover:bg-[#5c78dc] hover:text-white " variant="outline">Register</Button>  </li>
        </ul>
   
        </div>
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>

        </div>
      
       
      </div>
    </nav>
  );
};

export default Navbar;
