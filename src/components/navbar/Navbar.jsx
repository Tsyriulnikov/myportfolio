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
import myPDF from '../../assets/CV_Maksim_Tsyriulnikov.pdf';

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleClick = () => setNav(!nav);
    const menuItems = [
        {titleMenu: 'Home', linkMenu: 'home'},
        {titleMenu: 'About', linkMenu: 'about'},
        {titleMenu: 'Skills', linkMenu: 'skills'},
        {titleMenu: 'Work', linkMenu: 'work'},
        {titleMenu: 'Contact', linkMenu: 'contact'},
    ]


    return (
        <div className={stylesNavbar.navbarMainBlock}>
            <div>
                <img src={Logo} alt='Logo' style={{width: '50px'}}/>
            </div>

            {/* menu */}
            <ul className={stylesNavbar.menu}>
                {menuItems.map((el, index) =>
                    <li key={index}>
                        <Link to={el.linkMenu} smooth={true} duration={500}>
                            {el.titleMenu}
                        </Link>
                    </li>)}
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

                    {menuItems.map((el, index) =>
                        <li key={index} className={stylesNavbar.hamburgerItems}>
                            <Link onClick={handleClick} to={el.linkMenu} smooth={true} duration={500}>
                                {el.titleMenu}
                            </Link>
                        </li>)}
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
                            className={stylesNavbar.linkSocialItem}
                            href='https://github.com/Tsyriulnikov' target='_blank' rel="noreferrer"
                        >
                            Github <FaGithub size={30}/>
                        </a>
                    </li>
                    <li className={`${stylesNavbar.socialIconsItem} ${stylesNavbar.email}`}>
                        <Link
                            className={stylesNavbar.linkSocialItem}
                            to='contact' smooth={true} duration={500}
                        >
                            Email <HiOutlineMail size={30}/>
                        </Link>
                    </li>
                    <li className={`${stylesNavbar.socialIconsItem} ${stylesNavbar.resume}`}>
                        <a
                            className={stylesNavbar.linkSocialItem}
                            href={myPDF} download={"CV_Maksim_Tsyriulnikov.pdf"}
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
