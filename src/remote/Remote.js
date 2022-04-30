import React from "react";
import style from "./Remote.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Remote = () => {
    return (
        <div className={style.remoteBlock}>
            <div className={`${styleContainer.container} ${style.remoteContainer}`}>
                <h3 className={`${style.text}`}>Рассматриваю варианты удалённой работы</h3>
                <button className={style.buttonHire}>Нанять меня</button>
            </div>
        </div>
    )
}
export default Remote

