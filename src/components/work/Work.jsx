import React from 'react';
import stylesWork from './Work.module.css'
import {WorkCard} from "./work_card/WorkCard";

const Work = () => {
    return (
        <div name='work' className={stylesWork.workMainBlock}>
            <div className={stylesWork.container}>
                <div className={stylesWork.headerBlock}>
                    <p className={stylesWork.headerName}>
                        Work
                    </p>
                    <p className={stylesWork.headerDescription}>Check out some of my recent work</p>
                </div>
                <div className={stylesWork.workCardsGrid}>

                    {/* Grid Item */}

                    <WorkCard/>
                    <WorkCard/>
                    <WorkCard/>
                    <WorkCard/>
                    <WorkCard/>
                    <WorkCard/>


                </div>
            </div>
        </div>
    );
};

export default Work;
