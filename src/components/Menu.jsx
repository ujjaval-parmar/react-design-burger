import React, { useState } from 'react'

const menu = [
    {
        id: 1,
        name: 'regular beef burger',
        img: '/img/burger-1.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'food'
    },
    {
        id: 2,
        name: 'regular beef burger',
        img: '/img/burger-2.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'food'
    },
    {
        id: 3,
        name: 'regular beef burger',
        img: '/img/burger-3.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'food'
    },
    {
        id: 4,
        name: 'regular beef burger',
        img: '/img/burger-4.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'food'
    },
    {
        id: 5,
        name: 'regular beef burger',
        img: '/img/burger-5.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'food'
    },
    {
        id: 6,
        name: 'french fries',
        img: '/img/snack-1.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'snack'
    },
    ,
    {
        id: 7,
        name: 'french fries',
        img: '/img/snack-2.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'snack'
    },
    ,
    {
        id: 8,
        name: 'french fries',
        img: '/img/snack-3.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'snack'
    },
    ,
    {
        id: 9,
        name: 'french fries',
        img: '/img/snack-4.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'snack'
    },
    ,
    {
        id: 10,
        name: 'french fries',
        img: '/img/snack-5.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'snack'
    },
    ,
    {
        id: 11,
        name: 'french fries',
        img: '/img/snack-6.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'snack'
    },
    ,
    {
        id: 12,
        name: 'sweet smoothie',
        img: '/img/beverage-1.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'beverage'
    },
    {
        id: 13,
        name: 'sweet smothie',
        img: '/img/beverage-2.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'beverage'
    },
    {
        id: 14,
        name: 'sweet smothie',
        img: '/img/beverage-3.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'beverage'
    },
    {
        id: 15,
        name: 'sweet smothie',
        img: '/img/beverage-4.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'beverage'
    },
    {
        id: 16,
        name: 'sweet smothie',
        img: '/img/beverage-5.png',
        desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        price: "$42.00",
        category: 'beverage'
    }

]



const Menu = () => {

    const [filter, setFilter] = useState('all');

    const handleFilter = e => {
        if (e.target.tagName !== 'LI') return;


        setFilter(() => e.target.innerHTML.toLowerCase());
    }

    const filteredMenu = menu.filter(item => {
        if (filter === 'all') return item;

        return item.category === filter;

    })

    // console.log(filteredMenu);

    const activeFilter = 'bg-secondaryColor text-black';


    return (
        <section id='menu'>
            <div className='container '>

                <div className='max-w-lg mx-auto text-center'>
                    <h2 className='section__title'>OUR BEST MENU</h2>
                    <div className='separator mx-auto'></div>
                    <p className='paragraph'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa.</p>

                    <div>
                        <ul className='flex flex-wrap justify-center gap-3 py-10' onClick={(e) => handleFilter(e)}>
                            <li className={`btn bg-primaryColorLight  hover:bg-secondaryColor hover:text-black  ${filter === 'all' && activeFilter}`}>All</li>
                            <li className={`btn bg-primaryColorLight  hover:bg-secondaryColor hover:text-black  ${filter === 'food' && activeFilter}`}>Food</li>
                            <li className={`btn bg-primaryColorLight   hover:bg-secondaryColor hover:text-black  ${filter === 'snack' && activeFilter}`}>Snack</li>
                            <li className={`btn bg-primaryColorLight  hover:bg-secondaryColor  hover:text-black  ${filter === 'beverage' && activeFilter}`}>Beverage</li>

                        </ul>
                    </div>

                </div>

                <div>
                    <ul className='grid grid-cols-1 gap-5 md:grid-cols-2  md:gap-10 lg:grid-cols-4 lg:gap-15'>
                        {filteredMenu.map(item => {
                            return (
                                <li key={item.id}>
                                    <div className='h-60  grid place-items-center bg-primaryColorLight rounded-3xl hover:bg-secondaryColor ease-linear duration-200 lg:h-50 menu-li'>
                                        <img src={item.img} alt={item.name} className='w-40 md:w-35 lg:w-28 object-cover hover:scale-110 ease-linear duration-200 menu-img'/>
                                    </div>

                                    <div className='pt-5'>
                                        <div className='mb-2'>
                                            <h4 className='card__title'>{item.name}</h4>
                                            <p>{item.desc}</p>
                                        </div>
                                        <p className='text-secondaryColor'>{item.price}</p>
                                    </div>

                                </li>
                            )
                        })}
                    </ul>
                </div>


            </div>
        </section>
    )
}

export default Menu