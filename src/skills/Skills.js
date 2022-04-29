import React from "react";
import style from "./Skills.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Skill from "./skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
                <div className={style.skills}>
                    <Skill title={"JavaScript"} description={" мультипарадигменный язык программирования." +
                        " Поддерживает объектно-ориентированный, императивный и функциональный стили."}/>
                    <Skill title={"TypeScript"} description={"язык программирования, представленный Microsoft в " +
                        "2012 году и позиционируемый как средство разработки веб-приложений, расширяющее возможности JavaScript."}/>
                    <Skill title={"React"} description={"JavaScript-библиотека с открытым исходным кодом для " +
                        "разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook"}/>
                </div>
            </div>
        </div>
    )
}
export default Skills