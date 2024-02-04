import React from 'react'

const Promo = () => {
    return (
        <section id='promo'>
            <div className='container flex flex-col gap-5 lg:gap-10 lg:flex-row'>

                <div className='bg-primaryColorLight flex flex-col p-5 rounded-lg promo-card md:flex-row md:items-center lg:flex-row-reverse lg:flex-1'>

                    <img src="/img/promo-1.png" alt="promo image" className='w-40 mx-auto promo-img md:mx-5' />

                    <div className='space-y-2 pt-5 md:pt-0'>
                        <p className='text=xs text-secondaryColor'>Payday promo</p>
                        <h3 className='card__title'>GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className='text-xs text-secondaryColor'>But Online</a>
                    </div>


                </div>

                <div className='bg-primaryColorLight flex flex-col p-5 rounded-lg promo-card md:flex-row  md:items-center lg:flex-row-reverse lg:flex-1'>

                    <img src="/img/promo-2.png" alt="promo image" className='w-40 mx-auto promo-img md:mx-5' />

                    <div className='space-y-2 pt-5 md:pt-0'>
                        <p className='text=xs text-secondaryColor'>Payday promo</p>
                        <h3 className='card__title'>GET A 10% DISCOUNT ON PAYDAY WEEK</h3>
                        <p className='paragraph'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        <a href="#" className='text-xs text-secondaryColor'>But Online</a>
                    </div>


                </div>


            </div>

        </section>
    )
}

export default Promo