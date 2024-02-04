import React from 'react'

const About = () => {
    return (
        <section id='about'>
            <div className='container flex flex-col gap-10 md:flex-row'>

                <div className='flex-1'>
                    <img src="/img/about.jpg" alt="about"  className='rounded-lg'/>
                </div>

                <div className='flex-1'>
                    <h2 className='section__title'>FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.</h2>
                    <div className='separator'></div>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes.</p>
                    <ul className='grid grid-cols-2 py-5 space-y-1 '>
                        <li className='text-xs text-paragraphColor'>
                            <i className="fa-solid fa-check text-secondaryColor mr-2"></i>
                             Best Price
                        </li>
                        <li className='text-xs text-paragraphColor'>
                            <i className="fa-solid fa-check text-secondaryColor mr-2"></i>
                             Fresh Ingredient
                        </li>
                        <li className='text-xs text-paragraphColor'>
                            <i className="fa-solid fa-check text-secondaryColor mr-2"></i>
                             Best Service
                        </li>
                        <li className='text-xs text-paragraphColor'>
                            <i className="fa-solid fa-check text-secondaryColor mr-2"></i>
                             Fresh Ingredient
                        </li>
                    </ul>
                    <a href="#" className='btn btn-primary'>About Us</a>
                </div>


            </div>

        </section>
    )
}

export default About