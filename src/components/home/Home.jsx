import React from 'react';
import stylesHome from './Home.module.css'
// import myFoto from '../../assets/myFoto.jpg'
import myFoto from '../../assets/4136918.jpg'

const Home = () => {
    return (
        <div name='home' className={stylesHome.mainBlock}>
            <div className={stylesHome.container}>
                <div className={stylesHome.textContainer}>

                    <div className={stylesHome.helloBlock}>
                        <h3 className={stylesHome.hello}>Hello, I'm</h3>
                    </div>
                    <div className={stylesHome.nameBlock}>
                        <h3 className={stylesHome.name}>Maksim Tsyriulnikov</h3>
                    </div>

                    <div className={stylesHome.jobBlock}>
                        <span className={stylesHome.job}>Frontend Developer</span>
                    </div>

                </div>

                <div className={stylesHome.fotoContainer}><img className={stylesHome.foto} alt={'My foto'}
                                                               src={myFoto}/></div>
            </div>
        </div>
    )


};

export default Home;
