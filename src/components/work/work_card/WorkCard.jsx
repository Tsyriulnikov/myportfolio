import React from "react";
import WorkImg from "../../../assets/workImg.jpeg";
import stylesWorkCard from './WorkCard.module.css'

export const WorkCard = () => {
    return (
        <div
            style={{backgroundImage: `url(${WorkImg})`}}
            className={stylesWorkCard.cardContainer}
        >
            <div className={stylesWorkCard.hoverDiv}>
              <span className={stylesWorkCard.captionWork}>
                React JS Application
              </span>
                <div className={stylesWorkCard.buttonBlock}>

                    <a href='/'>
                        <button
                            className={stylesWorkCard.buttonWork}>
                            Code
                        </button>
                    </a>
                </div>
            </div>
        </div>
    )
}