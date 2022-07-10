import React from 'react';
import styleAbout from './About.module.css'

const About = () => {
    return (
        <div name='about' className={styleAbout.mainBlock}>
            <div className={styleAbout.container}>
                <div className={styleAbout.aboutBlockGrid}>
                    <div className={styleAbout.aboutBlockGridMobile}>
                        <p className={styleAbout.headerAbout}>
                            About me
                        </p>
                    </div>
                </div>
                <div className={styleAbout.story}>
                    <div className={styleAbout.storyBlock1}>
                        <p>Well met!</p>
                    </div>
                    <div className={styleAbout.storyBlock2}>
                        <p>I'm frontend developer with
                            experience in creating SPA
                            using React, Redux,
                            TypeScript, JavaScript,
                            SCSS, HTML. I'm planing to study AngularJS.
                            I like mobile development and i improve skills React Native.
                            I spend my leisure time in learning English and Spanish.
                            Open for your suggestions.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
