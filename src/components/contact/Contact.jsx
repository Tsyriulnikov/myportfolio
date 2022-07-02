import React from 'react'
import styleContact from './Contact.module.css'
const Contact = () => {
  return (
    // <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-4'>
    <div name='contact' className={styleContact.mainBlock}>
        <form method='POST' action="https://getform.io/f/6e101a99-f1fe-4c6c-9e93-cf708b10e9e8" className={styleContact.formContact}>
            <div className={styleContact.descriptionBlock}>
                <p className={styleContact.caption}>Contact</p>
                <p className={styleContact.descrriptionText}>Submit the form below or shoot me an email - max3142255@gmail.com</p>
            </div>
            <input className={styleContact.nameInput} type="text" placeholder='Name' name='name' />
            <input className={styleContact.emailInput} type="email" placeholder='Email' name='email' />
            <textarea className={styleContact.messageText} name="message" rows="10" placeholder='Message'></textarea>
            <button className={styleContact.submitButton}>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact