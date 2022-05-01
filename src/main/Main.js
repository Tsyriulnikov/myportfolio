import React from "react";
import style from "./Main.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={`${style.text}`}>


                    <span className={style.textAbout}>Прривет!</span>

                </div>

                <div className={style.foto}>Foto</div>
            </div>
        </div>
    )
}
export default Main