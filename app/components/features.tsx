import React from 'react'
import FeaturesCard from '@/components/ui/featuresCard'

const features = () => {
  return (
    <section className="bg-gray-200 mt-10">
        <div className="w-full mx-auto max-w-7xl py-28">
          <div className='flex flex-col items-center'>
            <h1 className='font-bold text-4xl'>Powerful Features Design For You</h1>
            <div className='flex gap-8 pt-24'>
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
            <div className='flex gap-8 pt-8'>
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
          </div>
        </div>
      </section>
  )
}

export default features