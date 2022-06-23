import React from 'react';

import HTML from '../../assets/html.png';
import CSS from '../../assets/css.png';
import JavaScript from '../../assets/javascript.png';
import ReactImg from '../../assets/react.png';
import Node from '../../assets/node.png';
import GitHub from '../../assets/github.png';
import Typescript from '../../assets/ts.png';
import stylesSkills from './Skills.module.css'

const Skills = () => {
    const skills = [
        {id: '1', tech: HTML, Title: 'HTML'},
        {id: '2', tech: CSS, Title: 'CSS'},
        {id: '3', tech: JavaScript, Title: 'JAVASCRIPT'},
        {id: '4', tech: ReactImg, Title: 'REACT'},
        {id: '5', tech: GitHub, Title: 'GITHUB'},
        {id: '6', tech: Node, Title: 'NODE JS'},
        {id: '7', tech: Typescript, Title: 'TYPESCRIPT'},
        {id: '8', tech: ReactImg, Title: 'REACT NATIVE'},
    ]
    const skillsRend = skills.map((item) => {
        return (
            <div key={item.id} className={stylesSkills.card}>
                <img className={stylesSkills.imgCard} src={item.tech} alt="HTML icon"/>
                <p className={stylesSkills.pCard}>{item.Title}</p>
            </div>
        )
    });
    return (
        <div name='skills' className={stylesSkills.skillsMainBlock}>
            {/* Container */}
            <div className={stylesSkills.container}>
                <div>
                    <p className={stylesSkills.headerSkills}>Умею</p>
                    <p className={stylesSkills.header2Skills}>Мой стэк технологий</p>
                </div>
                <div className={stylesSkills.skillsBlock}>
                    {skillsRend}
                </div>
            </div>
        </div>
    );
};

export default Skills;
