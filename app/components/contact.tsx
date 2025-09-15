import React from 'react'
import ContactCard from '@/components/ui/contactCard'

const contact = () => {
  return (
    <section className='w-full mx-auto max-w-7xl'>
        <div className='flex flex-col items-center'>
            <p className='font-bold text-4xl pt-24'>Get In Touch</p>
            <div className='py-16'>
                <ContactCard/>
            </div>
        </div>
    </section>
  )
}

export default contact