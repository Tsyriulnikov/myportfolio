import React from "react";
import style from "./Contacts.module.css"
import styleContainer from "../common/styles/Container.module.css"

const Contacts = () => {
    return (
        <div className={style.contactsBlock}>
            <div className={`${styleContainer.container} ${style.contactsContainer}`}>
                <h3 className={`${style.text}`}>Контакты</h3>
                <form className={style.contactsForm}>
                    <input type={"text"}/>
                    <input type={"text"}/>
                    <textarea></textarea>
                </form>
                {/*</div>*/}
                <button className={style.buttonSend}>Отправить</button>
            </div>
        </div>
    )
}
export default Contacts
