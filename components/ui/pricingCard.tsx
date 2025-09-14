import React from "react";

interface pricingCardProps {
    type: string;
    price: string;
    features: string[];
}

export default function PricingCard ({
    price,
    type,
    features
}: pricingCardProps) {
    return (
        <div className="bg-white w-[320px] h-[506px] rounded-[4px] shadow-[0px_0px_1px] px-8 pt-8 pb-8 flex flex-col">
            <div className='flex flex-col mb-10'>
                <p className="font-bold text-2xl">{type}</p>
                <p className='font-bold text-5xl'>{price}<span className="text-[18px] font-normal text-gray-600">/month</span></p>                            
            </div>
            
            <div className="flex-1 flex flex-col">
                <div className="space-y-3 flex-1">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-center">
                            <svg 
                                className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" 
                                fill="currentColor" 
                                viewBox="0 0 20 20"
                            >
                                <path 
                                    fillRule="evenodd" 
                                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                                    clipRule="evenodd" 
                                />
                            </svg>
                            <p className="text-sm text-gray-700">{feature}</p>
                        </div>
                    ))}
                </div>
                
                <div className="mt-8">
                    <button className="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-4 rounded transition-colors cursor-pointer">
                        Choose Plan
                    </button>
                </div>
            </div>
        </div>
    )
}