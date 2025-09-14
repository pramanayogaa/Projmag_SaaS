import React from 'react'
import PricingCard from '@/components/ui/pricingCard'

const basicPriceFeatures = ["Up to 5 Users", "Unlimited Tasks", "Basic Reports", "Email Support", "Shared Workspaces"]
const proPriceFeatures = ["All Basic Features", "Up to 50 Users", "Advanced Analytics", "Priority Support", "Custom Workspaces", "Integrations"]
const enterprisePriceFeatures = ["All Pro Features", "Unlimited Users", "Dedicated Account Manager", "On-Premise Option", "Advanced Security", "Custom Integrations"]

const pricing = () => {
  return (
    <section className='w-full mx-auto max-w-7xl'>
        <div className='flex flex-col items-center justify-center py-28'>
            <h2 className='font-bold text-4xl text-center mb-4'>Flexible Plans for Every Team</h2>
            <p className='text-lg text-gray-500 py-7 text-center max-w-2xl leading-relaxed'>
                Choose the perfect plan to boost your team&apos;s productivity and streamline your project management.
            </p>
            <div className='flex gap-8 mt-8'>
                <PricingCard
                    type='Basic'
                    price='$0'
                    features={basicPriceFeatures}
                />
                <PricingCard
                    type='Pro'
                    price='$19'
                    features={proPriceFeatures}
                />
                <PricingCard
                    type='Enterprise'
                    price='$45'
                    features={enterprisePriceFeatures}
                />
            </div>
        </div>
    </section>
  )
}

export default pricing