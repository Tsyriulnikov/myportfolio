import React from "react";
import style from "./Header.module.css"
import Nav from "../nav/Nav";
import '.././bootstrap/css/bootstrap.min.css';


const Header = () => {
    return (
        // <div className={style.header}>
        //     <Nav/>
        // </div>
        <header id="header" className="header">
            <div className="header-inner">
                <div className="container">
                    <div className="row">
                        <div className="col-md-3 col-sm-2 col-xs-12">
                            <div className="logo">
                                {/*<a href="index.html"><img src="img/nnn.png" alt="logo.png"></a>*/}
                                {/*<a href="index.html"><img src={img_nnn_png} alt="logo.png"></a>*/}
                            </div>
                        </div>
                        <div className="col-md-9 col-sm-10 col-xs-12">
                            <div className="mobile-menu"></div>
                            <nav className="navbar navbar-default">
                                <div className="collapse navbar-collapse">
                                    <ul id="nav" className="nav navbar-nav">
                                        <li className="current"><a href="#slider">Welcome</a></li>
                                        <li><a href="#about">About Me</a></li>
                                        <li><a href="#service">My Service</a></li>
                                        <li><a href="#skill">Skill</a></li>
                                        <li><a href="#story">Story</a></li>
                                        <li><a href="#latest-works">Portfolio</a></li>
                                        <li><a href="#blog">Blog</a></li>
                                        <li><a href="#contact">Contact</a></li>
                                    </ul>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            {/*// <!--/ End Header Inner -->*/}
        </header>


    )
}
export default Header