import React from 'react'

const Contact = () => {
  return (
    <section id='contact' className='bg-secondaryColor py-16'>
        <div className='container flex flex-col gap-5 md:items-center md:flex-row'>

            <div className='space-y-4 md:flex-1'>
                <h2 className='section__title text-black'>GET EXCLUSIVE UPDATE</h2>
                <p className='text-sm text-black'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </div>

            <div className='flex flex-col gap-3 md:flex-row md:flex-1'>
                <input type="email" placeholder='Email Address' className='p-2 text-black rounded-lg outline-none md:w-full'/>
                <a href="#" className='flex items-center justify-center gap-2 btn bg-black hover:opacity-75'>
                <i className="fa-solid fa-paper-plane"></i>
                </a>
            </div>


        </div>
    </section>
  )
}

export default Contact