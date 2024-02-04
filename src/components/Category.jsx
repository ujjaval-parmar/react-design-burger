import React from 'react'

const Category = () => {
  return (
    <section id='category'>
        <div className='container flex flex-col gap-5 md:flex-row  '>

            <div className='bg-secondaryColor text-black flex py-3 rounded-lg overflow-hidden md:flex-1'>
                <div className='basis-1/3 relative'>
                    <img src="/img/burger-1.png" alt="category" className='absolute w-28 -bottom-4 -left-4'  />
                </div>
                <div>
                    <div className='mb-2'>
                        <h4 className='card__title'>Food</h4>
                        <p className='text-xs'>Lorem ipsum dolor sit.</p>
                    </div>
                    <a href="#" className='text-black cursor-pointer'>Buy online</a>
                </div>
            </div>

            <div className='bg-redColor flex py-3 rounded-lg overflow-hidden md:flex-1'>
                <div className='basis-1/3 relative'>
                    <img src="/img/snack-1.png" alt="category" className='absolute w-28 -bottom-4 -left-4'  />
                </div>
                <div>
                    <div className='mb-2'>
                        <h4 className='card__title'>Snack</h4>
                        <p className='text-xs'>Lorem ipsum dolor sit.</p>
                    </div>
                    <a href="#" className='text-secondaryColor cursor-pointer'>Buy online</a>
                </div>
            </div>

            <div className='bg-greenColor flex py-3 rounded-lg overflow-hidden md:flex-1'>
                <div className='basis-1/3 relative'>
                    <img src="/img/beverage-2.png" alt="category" className='absolute w-28 -bottom-4 -left-4'  />
                </div>
                <div>
                    <div className='mb-2'>
                        <h4 className='card__title'>Baverage</h4>
                        <p className='text-xs'>Lorem ipsum dolor sit.</p>
                    </div>
                    <a href="#" className='text-secondaryColor cursor-pointer'>Buy online</a>
                </div>
            </div>

        </div>
    </section>
  )
}

export default Category