import React from "react";
import style from './App.module.css';
import Header from "./header/Header";
import Main from "./main/Main";
import Skills from "./skills/Skills";
import Projects from "./projects/Projects";
import Remote from "./remote/Remote";
import Footer from "./footer/Footer";
import Contacts from "./contacts/Contacts";

function App() {
    return (
        <div className={style.app}>
            <Header />
            <Main />
            <Skills />
            <Projects />
            <Remote />
            <Contacts />
            <Footer />
        </div>
    );
}

export default App;
