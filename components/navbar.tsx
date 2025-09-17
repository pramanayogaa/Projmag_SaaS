import React from 'react'
import Button from "@/components/ui/button"
import Image from 'next/image'

const navbar = () => {

    const navLists = ["Features", "Pricing", "About Us", "Contact"]
  return (
    <header className='sticky top-0 bg-white'>
        <div className='w-full mx-auto max-w-7xl p-4'>
            <nav className='flex justify-between items-center'>
                <p className='font-bold'>Projmag.</p>
                <div className='hidden md:flex'>
                    {navLists.map((nav, i) => (
                        <button key={i} className='text-sm px-4 cursor-pointer hover:text-blue-500'>
                            {nav}
                        </button>
                    ))}
                </div>
                <Button/>
                <Image
                    src={"/burgerIcon.svg"}
                    alt='burgerIcon'
                    width={40}
                    height={40}
                    className='md:hidden cursor-pointer'
                />
            </nav>
        </div>
    </header>
  )
}

export default navbar