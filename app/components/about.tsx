import React from 'react'
import AboutCard from '@/components/ui/aboutCard'

const about = () => {
  return (
    <section className='bg-gray-200'>
        <div className='w-full mx-auto max-w-7xl'>
            <div className='flex flex-col items-center justify-center'>
                <h2 className='font-bold text-4xl pt-24'>About Us</h2>
                <p className='text-lg text-gray-500 max-w-4xl text-center pt-14'>Projmag is dedicated to revolutionizing how teams manage projects. Our mission is to provide intuitive, 
                    powerful, and collaborative tools that empower businesses of all sizes to achieve their goals with clarity
                     and efficiency. We believe in simplicity without sacrificing capability, ensuring every project,
                      big or small, is a success story.
                </p>
                <div className='flex gap-8 py-16'>
                    <AboutCard
                        image='/aliceJohnsonn.jpg'
                        name='Alice Johnson'
                        position='CEO & Founder'
                        quote='"Inspiring teams to achieve their greatest potential with innovative tools."'
                    />
                    <AboutCard
                        image='/bobSmith.jpg'
                        name='Bob Smith'
                        position='Lead Developer'
                        quote='"Building robust and scalable solutions for complex project challenges."'
                    />
                    <AboutCard
                        image='/carolWhite.jpg'
                        name='Carol White'
                        position='Head of Product'
                        quote='"Crafting user-centric experiences that simplify project management for everyone."'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default about