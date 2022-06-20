import React, {useState} from 'react';
import {
    FaBars,
    FaTimes,
    FaGithub,
    FaLinkedin,
} from 'react-icons/fa';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonLinesFill} from 'react-icons/bs';
import Logo from '../../assets/TSYRIULNIKOV_logo.png';
import {Link} from 'react-scroll';
import stylesNavbar from './Navbar.module.css'

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);

    return (
        <div className={stylesNavbar.navbarMainBlock}>
            <div>
                <img src={Logo} alt='Logo Image' style={{width: '50px'}}/>
            </div>

            {/* menu */}
            <ul className={stylesNavbar.menu}>
                <li>
                    <Link to='home' smooth={true} duration={500}>
                        Home
                    </Link>
                </li>
                <li>
                    <Link to='about' smooth={true} duration={500}>
                        About
                    </Link>
                </li>
                <li>
                    <Link to='skills' smooth={true} duration={500}>
                        Skills
                    </Link>
                </li>
                <li>
                    <Link to='work' smooth={true} duration={500}>
                        Work
                    </Link>
                </li>
                <li>
                    <Link to='contact' smooth={true} duration={500}>
                        Contact
                    </Link>
                </li>
            </ul>

            {/* Hamburger */}
            <div onClick={handleClick} className={stylesNavbar.hamburger}>
                {!nav ? <FaBars/> : <FaTimes/>}
            </div>

            {/* Mobile menu */}
            <ul
                className={
                    !nav
                        ? stylesNavbar.hiddenMobileMenu
                        : stylesNavbar.showMobileMenu
                }
            >
                <div className={stylesNavbar.hamburgerBlock}>
                    <li className={stylesNavbar.hamburgerItems}>
                        <Link onClick={handleClick} to='home' smooth={true} duration={500}>
                            Home
                        </Link>
                    </li>
                    <li className={stylesNavbar.hamburgerItems}>
                        {' '}
                        <Link onClick={handleClick} to='about' smooth={true} duration={500}>
                            About
                        </Link>
                    </li>
                    <li className={stylesNavbar.hamburgerItems}>
                        {' '}
                        <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
                            Skills
                        </Link>
                    </li>
                    <li className={stylesNavbar.hamburgerItems}>
                        {' '}
                        <Link onClick={handleClick} to='work' smooth={true} duration={500}>
                            Work
                        </Link>
                    </li>
                    <li className={stylesNavbar.hamburgerItems}>
                        {' '}
                        <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
                            Contact
                        </Link>
                    </li>
                </div>
            </ul>

            {/* Social icons */}
            <div className={stylesNavbar.socialIconsBlock}>
                <ul>
                    <li className={`${stylesNavbar.socialIconsItem} ${stylesNavbar.linkedIn}`}>
                        <a
                            className={stylesNavbar.linkSocialItem}
                            href='/'
                        >
                            Linkedin <FaLinkedin size={30}/>
                        </a>
                    </li>
                    <li className={`${stylesNavbar.socialIconsItem} ${stylesNavbar.gitHub}`}>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='https://github.com/Tsyriulnikov' target='_blank'
                        >
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className={`${stylesNavbar.socialIconsItem} ${stylesNavbar.email}`}>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Email <HiOutlineMail size={30}/>
                        </a>
                    </li>
                    <li className={`${stylesNavbar.socialIconsItem} ${stylesNavbar.resume}`}>
                        <a
                            className='flex justify-between items-center w-full text-gray-300'
                            href='/'
                        >
                            Resume <BsFillPersonLinesFill size={30}/>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Navbar;
