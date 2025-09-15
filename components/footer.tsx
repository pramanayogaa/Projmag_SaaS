import Image from 'next/image'
import React from 'react'

const footer = () => {

    const footerLists = ["Resources", "Legal", "Company"]

  return (
    <section className='bg-gray-200'>
        <div className='w-full mx-auto max-w-7xl'>
            <div className='flex justify-end items-end pt-11'>
                {footerLists.map((footer, i) => (
                    <button key={i} className='text-sm px-4 cursor-pointer hover:text-blue-500'>
                        {footer}
                    </button>
                ))}
            </div>
            <div className='mt-12 py-6 border-t-1 border-gray-400 flex justify-between'>
                <p className='text-gray-500 text-sm'>© 2025 Pramana Yoga. All rights reserved.</p>                   
                <div className='flex gap-6 cursor-pointer'>
                    <Image
                        src={"/facebookIcon.png"}
                        alt='facebook'
                        width={20}
                        height={20}
                        priority
                    />
                    <Image
                        src={"/twitterIcon.png"}
                        alt='facebook'
                        width={20}
                        height={20}
                        priority
                    />
                    <Image
                        src={"/linkedinIcon.png"}
                        alt='facebook'
                        width={20}
                        height={20}
                        priority
                    />
                    <Image
                        src={"/instagramIcon.png"}
                        alt='facebook'
                        width={20}
                        height={20}
                        priority
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default footer