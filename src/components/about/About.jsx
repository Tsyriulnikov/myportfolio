import React from 'react';
import styleAbout from './About.module.css'

const About = () => {
  return (
    <div name='about' className={styleAbout.mainBlock}>
      <div className={styleAbout.container}>
               <div className={styleAbout.aboutBlockGrid}>
              <div className={styleAbout.aboutBlockGridMobile}>
            {/*<p className='text-4xl font-bold inline border-b-4 border-pink-600'>*/}
            <p className={styleAbout.headerAbout}>
              Обо мне
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p> Я рад, что вы проявили интерес к моей персоне.</p>
            </div>
            <div>
              <p>Стараюсь практиковаться и совершенствовать свои навыки, а также
                приобретать более глубокие знания в области фронтенд. Очень люблю
                свою профессию. Хочу чтобы работа способствовала моему профессиональному росту.</p>
            </div>
          </div>
      </div>
    </div>
  );
};

export default About;
