'use client'

import React, { useState } from 'react'

interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

export default function ContactCard() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className='bg-white w-[768px] h-[450px] rounded-[4px] shadow-lg border border-gray-200 px-8 pt-8 pb-6'>
      <form onSubmit={handleSubmit} className='flex flex-col gap-6 h-full'>
        <div className='grid grid-cols-2 gap-6'>
          <div>
            <label htmlFor="name" className='block font-semibold text-sm text-gray-700 mb-2'>
              Name *
            </label>
            <input 
              type="text" 
              id="name"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              placeholder="Enter your name"
              className='w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
            />
          </div>
          <div>
            <label htmlFor="email" className='block font-semibold text-sm text-gray-700 mb-2'>
              Email *
            </label>
            <input 
              type="email" 
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              required
              placeholder="Enter your email"
              className='w-full h-12 px-4 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all'
            />
          </div>
        </div>
        <div className='flex-1'>
          <label htmlFor="message" className='block font-semibold text-sm text-gray-700 mb-2'>
            Message *
          </label>
          <textarea 
            id="message"
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            placeholder="Write your message here..."
            rows={5}
            className='w-full h-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all resize-none'
          />
        </div>
        <div className='flex justify-center pt-6'>
          <button 
            type="submit"
            className='w-full cursor-pointer bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-md transition-colors duration-200 shadow-md hover:shadow-lg'
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  )
}