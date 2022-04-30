import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={`${style.name}`}>Максим Цырюльников</h3>
                <div className={style.containerSquare}>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>

                </div>
                <footer className={style.footerFooter}>© 2022 Все права защищены</footer>

            </div>
        </div>
    )
}
export default Footer