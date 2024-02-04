import React from 'react'

const Hero = () => {
    return (
        <section id="home">

            <div className='container flex flex-col items-center gap-10 md:flex-row'>

                <div className='mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY relative z-[-1]'>
                    <img src='/img/home-image.png' alt='home' className='w-60 md:w-full relative z-[-1]' />
                </div>

                <div className='text-center md:text-start md:basis-1/2 lg:basis-3/5'>
                    <h1 className='home__title'>HAPPY TUMMY WITH TASTY BURGERS.</h1>
                    <div className='separator mx-auto md:mx-0'></div>
                    <p className='paragraph'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,libero magni? Fugiat perspiciatis eius, sequi aliquid ullam dolorem temporibus voluptate corrupti fugit saepe sunt unde culpa? Tenetur quos quod laudantium.</p>
                    <div className='text-base flex items-center justify-center gap-4 py-10  md:justify-start md:gap-20'>
                        <div className='text-center'>
                            <i className="fa-solid fa-utensils text-secondaryColor text-4xl"></i>
                            <br />
                            Deliciuos
                        </div>

                        <div className='text-center'>
                        <i className="fa-solid fa-droplet text-secondaryColor text-4xl"></i>
                            <br />
                            Fresh
                        </div>

                        <div className='text-center'>
                        <i className="fa-brands fa-envira text-secondaryColor text-4xl"></i>
                            <br />
                            Organic
                        </div>
                    
                    </div>

                    <div>
                        <a href="#" className='btn btn-primary'>Learn More </a>
                    </div>
                </div>

            </div>



        </section>
    )
}

export default Hero