

import { Swiper, SwiperSlide } from 'swiper/react';

import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';



const reviews = [
    {
        id: 1,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, accusantium fugiat. Ducimus aperiam aliquid minus.',
        name: 'Ujjaval Parmar',
        post: 'Developer',
        img: '/img/review-1.jpg'
    },
    {
        id: 2,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, accusantium fugiat. Ducimus aperiam aliquid minus.',
        name: 'Ujjaval Parmar',
        post: 'Developer',
        img: '/img/review-2.jpg'
    },
    {
        id: 3,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, accusantium fugiat. Ducimus aperiam aliquid minus.',
        name: 'Ujjaval Parmar',
        post: 'Developer',
        img: '/img/review-3.jpg'
    },
    {
        id: 4,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, accusantium fugiat. Ducimus aperiam aliquid minus.',
        name: 'Ujjaval Parmar',
        post: 'Developer',
        img: '/img/review-4.jpg'
    },
    {
        id: 5,
        message: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo, accusantium fugiat. Ducimus aperiam aliquid minus.',
        name: 'Ujjaval Parmar',
        post: 'Developer',
        img: '/img/review-5.jpg'
    },
]


const Review = () => {

   

    return (

        <section id='review' className='bg-primaryColorLight py-20'>
            <div className='container '>

                <div className='max-w-lg mx-auto text-center'>
                    <h2 className='section__title'>OUR BEST MENU</h2>
                    <div className='separator mx-auto'></div>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>
                </div>

                <div className="swiper py-10  ">

                    <ul className="swiper-wrapper">

                        <Swiper
                            breakpoints={{
                                1024: {
                                    
                                    slidesPerView: 3,
                                },
                                768: {
                                  
                                    slidesPerView: 2,
                                },
                            }}
                            modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                            spaceBetween={50}
                            navigation
                            slidesPerView={1}
                            autoplay={{
                                delay: 3000,
                                disableOnInteraction: false
                            }}
                            pagination={{
                                el: '.swiper-pagination',
                                clickable: true
                            }}
                            onSlideChange={() => { }}
                            onSwiper={(swiper) => { }}
                            
                        >

                            {reviews.map(review => {
                                return (
                                    <SwiperSlide key={review.id}><li >
                                        <div className="flex flex-col gap-5 bg-primaryColor rounded-lg p-6 relative z-0 ">
                                            <p>{review.message}</p>
                                            <div className="flex items-center">
                                                <img src={review.img} alt="review" className="w-12 h-12 rounded-full" />
                                                <div className="ml-2">
                                                    <p className="font-oswald uppercase">{review.name}</p>
                                                    <p className="paragraph">{review.post}</p>
                                                </div>
                                                <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                                            </div>
                                        </div>
                                    </li>
                                    </SwiperSlide>
                                )
                            })

                            }

                        </Swiper>
                    </ul>

                    <div className="swiper-pagination">

                    </div>

                </div>















            </div>
        </section >
    )
}

export default Review