import Image from 'next/image';
import React from 'react'

interface featuresCardProps {
    image?: string;
    title: string;
    description: string;
}

export default function featuresCard ({
    image,
    title,
    description
}: featuresCardProps) {
    return (
        <div className='bg-white w-[320px] h-[202px] rounded-[4px] px-4 pt-8'>
            <div className='flex gap-4 items-center'>
                {image &&(
                    <Image
                        src={image}
                        alt={'img'}
                        width={32}
                        height={32}
                        priority
                    />
                )}
                <p className='font-bold text-xl'>{title}</p>
            </div>
            <p className='text-sm pt-6'>{description}</p>
        </div>
    )
}