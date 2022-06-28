import React from 'react';
import WorkImg from '../../assets/workImg.jpeg';
import realEstate from '../../assets/realestate.jpg';
import stylesWork from './Work.module.css'
import {WorkCard} from "./work_card/WorkCard";

const Work = () => {
    return (
        // <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
        <div name='work' className={stylesWork.workMainBlock}>
            {/*<div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>*/}
            <div className={stylesWork.container}>
                <div className={stylesWork.headerBlock}>
                    <p className={stylesWork.headerName}>
                        Work
                    </p>
                    <p className={stylesWork.headerDescription}>// Check out some of my recent work</p>
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
