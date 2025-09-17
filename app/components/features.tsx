import React from 'react'
import FeaturesCard from '@/components/ui/featuresCard'

const features = () => {
  return (
    <section className="bg-gray-200 mt-10">
        <div className="w-full mx-auto max-w-7xl py-12 md:py-28">
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-2xl px-20 text-center md:text-3xl lg:text-4xl'>Powerful Features Design For You</h1>
            <div className='flex flex-col md:flex-row gap-8 py-8 md:pt-24'>
                <FeaturesCard
                    image='/intuitiveWorkflow.png'
                    title='Intuitive Workflow'
                    description='Organize tasks with drag-and-drop ease, visualize progress at a glance, 
                    and keep your projects on track effortlessly.'

                />
                <FeaturesCard
                    image='/robustSecurity.png'
                    title='Robust Security'
                    description='Protect your data with enterprise-grade security, 
                    including two-factor authentication and data encryption.'

                />
                <FeaturesCard
                    image='/advancedAnalytics.png'
                    title='Advanced Analytics'
                    description='Gain deep insights into project performance with customizable dashboards and detailed reporting tools.'

                />
            </div>
            <div className='md:flex gap-8 pt-4 hidden'>
                <FeaturesCard
                    image='/seamlessCollaboration.png'
                    title='Seamless Collaboration'
                    description='Work together effectively with shared workspaces, comments, and file attachments for every task'

                />
                <FeaturesCard
                    image='/cloudIntegration.png'
                    title='Cloud Integration'
                    description='Connect Projmag with your favorite cloud tools for a unified and automated workflow experience.'

                />
                <FeaturesCard
                    image='/communication.png'
                    title='Communication'
                    description='Stay connected with your team through instant messaging and activity feeds for quick decisions.'

                />
            </div>
            <p className='text-sm text-gray-500 py-4 underline cursor-pointer md:hidden'>More Features</p>
          </div>
        </div>
      </section>
  )
}

export default features