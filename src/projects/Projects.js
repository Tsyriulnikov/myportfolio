import React from "react";
import style from "./Projects.module.css"
import styleContainer from "../common/styles/Container.module.css";
import Project from "./project/Project";


const Projects = (props) => {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
            {/*<div className={styleContainer.container}>*/}
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    {/*<Project title={"TodoList"} description={"мультипарадигменный язык программирования." +*/}
                    {/*    " Поддерживает объектно-ориентированный, императивный и функциональный стили."}/>*/}
                    {/*<Project title={"Counter"} description={"язык программирования, представленный Microsoft в " +*/}
                    {/*    "2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript."}/>*/}
                </div>
            </div>
        </div>
    )
}
export default Projects