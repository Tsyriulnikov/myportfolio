import React from 'react';
import stylesHome from './Home.module.css'
import myFoto from '../../assets/myFoto.jpg'

const Home = () => {
    return (
        //     <div name='home' className={stylesHome.home}>
        //
        //         <div className={stylesHome.containerText}>
        //             <p className={stylesHome.helloP}>Привет, меня зовут</p>
        //             <h1 className={stylesHome.myNameH1}>
        //                 Максим Цырюльников
        //             </h1>
        //             <h2 className={stylesHome.frontEndH2}>
        //                 Я front-end developer.
        //             </h2>
        //             <p className={stylesHome.aboutP}>
        //                 I’m a full-stack developer specializing in building (and occasionally
        //                 designing) exceptional digital experiences. Currently, I’m focused on
        //                 building responsive full-stack web applications.
        //             </p>
        //         </div>
        //
        //         <div className={stylesHome.containerFoto}>
        //             <img src={myFoto}/>
        //         </div>
        //
        //     </div>
        // );


        <div name='home' className={stylesHome.mainBlock}>
            <div className={stylesHome.container}>
                <div className={stylesHome.textContainer}>

                    <p className={stylesHome.helloP}>Привет, моё имя</p>
                    {/*<span className={stylesHome.textAbout}>Прривет!</span>*/}
                    <h1 className={stylesHome.myNameH1}>
                        Максим Цырюльников
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
