import React from "react";
import style from "./Footer.module.css"
import styleContainer from "../common/styles/Container.module.css"
import Square from "./square/Square";

const Footer = () => {
    return (
        <div className={style.footerBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h3 className={`${style.name}`}>Максим Цырюльников</h3>
                <div className={style.containerSquare}>
                    <Square />
                    <Square />
                    <Square />
                    <Square />
                </div>
                <footer className={style.footerFooter}>© 2022 Все права защищены</footer>

            </div>
        </div>
    )
}
export default Footer