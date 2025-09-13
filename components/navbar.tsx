import React from 'react'
import Button from "@/components/ui/button"

const navbar = () => {

    const navLists = ["Features", "Pricing", "About Us", "Contact"]
  return (
    <header className='w-full mx-auto max-w-7xl p-4'>
        <nav className='flex justify-between items-center'>
            <p className='font-bold'>Projmag.</p>
            <div>
                {navLists.map((nav, i) => (
                    <button key={i} className='text-sm px-4 cursor-pointer hover:text-blue-500'>
                        {nav}
                    </button>
                ))}
            </div>
            <Button/>
        </nav>
    </header>
  )
}

export default navbar