import Image from 'next/image';
import React from 'react'

interface aboutCardProps {
    image?: string;
    name: string;
    position: string;
    quote: string;
}

export default function aboutCard ({
    image,
    name,
    position,
    quote
}: aboutCardProps) {
    return (
        <div className='bg-white w-[352px] h-[322px] rounded-[4px] px-4 pt-8'>
            <div className='flex flex-col gap-4 items-center'>
                {image &&(
                    <Image
                        src={image}
                        alt={'img'}
                        width={70}
                        height={70}
                        priority
                        className='rounded-full object-cover'
                    />
                )}
                <p className='font-bold text-xl'>{name}</p>
                <p className='text-[16px] py-2 text-gray-500'>{position}</p>
                <p className='text-sm text-center italic text-gray-500'>{quote}</p>
            </div>
        </div>
    )
}