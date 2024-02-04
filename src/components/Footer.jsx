import React from 'react'

const Footer = () => {
    return (
        <section className='footer'>
            <div className='container'>

                <ul className='grid grid-cols-1 items-start gap-5 pb-5 md:grid-cols-2 lg:grid-cols-4 '>
                    <li>
                        <div className='space-y-1'>
                            <a href="#" className='text-4xl font-oswald uppercase'>
                                Bur<span className='text-secondaryColor'>ger</span>
                            </a>

                            <p className='text-xs'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
                            </p>

                        </div>
                    </li>

                    <li>
                        <div className='flex flex-col gap-3'>
                            <h3 className='text-lg uppercase font-oswald'>SUPPORT</h3>
                            <a href="" className='text-xs hover:text-secondaryColor'>FAQ's</a>
                            <a href="" className='text-xs hover:text-secondaryColor'>Privacy Policy</a>
                            <a href="" className='text-xs hover:text-secondaryColor'>Term & Condition</a>
                            <a href="" className='text-xs hover:text-secondaryColor'>Contact</a>
                        </div>
                    </li>

                    <li className='space-y-8 '>
                        <div className='space-y-2'>
                            <h3 className='text-lg uppercase font-oswald'>phone</h3>
                            <p className='flex items-center gap-2 text-xs'>
                                <i className="fa-solid fa-phone text-;g text-secondaryColor"></i>
                                +91 989898989
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h3 className='text-lg uppercase font-oswald'>Email</h3>
                            <p className='flex items-center gap-2 text-xs'>
                                <i className="fa-solid fa-envelope text-lg text-secondaryColor"></i>
                                burger.info@email.com
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h3 className='text-lg uppercase font-oswald'>Address</h3>
                            <p className='flex items-center gap-2 text-xs'>
                                <i className="fa-solid fa-location-dot text-lg text-secondaryColor"></i>
                                Burger, cross street, ahmedabad
                            </p>
                        </div>

                        <div className='space-y-2'>
                            <h3 className='text-lg uppercase font-oswald'>follow us</h3>
                            <div className='space-x-3'>
                                <i className="fa-brands fa-facebook-f text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in"></i>
                                <i className="fa-brands fa-twitter text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in"></i>
                                <i className="fa-brands fa-square-instagram text-lg cursor-pointer text-secondaryColor hover:-translate-y-1 ease-in"></i>
                            </div>

                        </div>

                    </li>
                </ul>

                <div className='flex flex-col items-center border border-primaryColorLight py-5 md:flex-row md:justify-between'>
                    <p className='paragraph'>Burger Template Kit by Light Code</p>
                    <p className='paragraph'>Copyright © 2023. All rights reserved.</p>
                </div>

            </div>
        </section>
    )
}

export default Footer