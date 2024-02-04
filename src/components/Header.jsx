import React, { useState } from 'react'

const Header = ({ isScrolled , setIsMode, isMode} ) => {


    const [isMenuOpen, setIsMenuOpen ] = useState(false);

    const [activeLink, setActiveLink ] = useState('');

    const handleMenuClick = e =>{
        // e.stopPropagation();

        

        if(e.target.tagName === 'A'){
            setIsMenuOpen(!isMenuOpen);
        }

    }

    const handleMode = ()=> setIsMode(!isMode);

    const isOpen = isMenuOpen ? 'top-0  overflow-auto' : 'top-[-18rem]  overflow-hidden ';

    const isScrolledClass = isScrolled ? 'border-b border-secondaryColor' : '';

    const isModeClass = isMode ? 'ri-sun-line' :'ri-moon-line';

    return (
        <header className={`bg-primaryColor fixed top-0 left-0 w-full z-50 ${isScrolledClass}`}>

            <nav className={`container relative h-14 flex justify-between items-center z-50 `}>

                {/* Logo */}
                <div>
                    <a href='#' className='text-2xl uppercase font-oswald'>
                        Bur <span className='text-secondaryColor'>ger</span>
                    </a>
                </div>

                {/* Mobile Menu */}
                <div className={`absolute   w-full  bg-primaryColor border-b border-secondaryColor transition-all ease-linear duration-500 ${isOpen} md:block md:static md:border-none md:w-auto md:py-0 md:ml-auto z-10`}>
                    <ul className='flex flex-col text-center gap-5 md:flex-row p-10 md:gap-8 md:p-0' onClick={(e)=> handleMenuClick(e)}>

                        <li>
                            <a href='#home' className='hover:text-secondaryColor ease-in duration-200'>Home</a>
                        </li>

                        <li>
                            <a href='#about' className='hover:text-secondaryColor ease-in duration-200'>About us</a>
                        </li>

                        <li>
                            <a href='#menu' className='hover:text-secondaryColor ease-in duration-200'>Menu</a>
                        </li>

                        <li>
                            <a href='#review' className='hover:text-secondaryColor ease-in duration-200'>Review</a>
                        </li>

                        <li>
                            <a href='#contact' className='hover:text-secondaryColor ease-in duration-200'>Contact</a>
                        </li>

                    </ul>

                    {/* Menu Button */}
                    <div className='absolute top-[1rem] right-8 text-2xl cursor-pointer md:hidden'
                    onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                        <i className="ri-close-line"></i>
                    </div>

                </div>

                {/* Dark Mode Button  */}
                <div className='flex items-center gap-5'>
                    {/* <i className={`ri-moon-line cursor-pointer ml-4 text-xl ${isModeClass}`} onClick={handleMode} ></i> */}


                    <div className='md:hidden'
                    onClick={()=> setIsMenuOpen(!isMenuOpen)}>
                         <i className="ri-menu-2-line cursor-pointer  text-xl"></i> 
                    </div>
                </div>

            </nav>




        </header>
    )
}

export default Header