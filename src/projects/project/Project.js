import React from "react";
import style from "./Project.module.css"



const Project = (props) => {
    return (
        <div className={style.project}>
            {/*<div className={style.imgContainer}>*/}
            {/*    Картинка*/}
            {/*<div className={style.linkProject}> Link </div>*/}
            </div>
            <h3>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}
export default Project