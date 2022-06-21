import React from 'react';
import stylesHome from './Home.module.css'
// import myFoto from '../../assets/myFoto.jpg'
import myFoto from '../../assets/4136918.jpg'

const Home = () => {
    return (
        <div name='home' className={stylesHome.mainBlock}>
            <div className={stylesHome.container}>
                <div className={stylesHome.textContainer}>

                    <p className={stylesHome.helloP}>Привет, моё имя</p>
                    {/*<span className={stylesHome.textAbout}>Прривет!</span>*/}
                    <h1 className={stylesHome.myNameH1}>
                        Максим Цырюльников.
                    </h1>
                    <h2 className={stylesHome.frontEndH2}>
                        Я front-end разработчик.
                    </h2>
                    <p className={stylesHome.aboutP}>
                        Занимаюсь разработкой веб-проектов под ключ и их техническим сопровождением
                    </p>
                </div>

                <div className={stylesHome.fotoContainer}><img className={stylesHome.foto} src={myFoto}/></div>
            </div>
        </div>
    )


};

export default Home;
