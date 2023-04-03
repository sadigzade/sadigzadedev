import React from "react";

import aboutImg from "../../assets/images/about.jpg";

import styles from "./About.module.scss";

const About = () => {
  return (
    <section className={`${styles.about} about`}>
      <h2 className={`${styles.title} text-gradient`}>Обо мне</h2>
      <div className={styles.about__content}>
        <div className={styles.image}>
          <img src={aboutImg} alt="" />
        </div>
        <div className={styles.info}>
          <h3>Front-End разработчик из Москвы, Россия 📍</h3>
          <p>
            Будучи младшим фронтенд-разработчиком, я обладаю внушительным арсеналом навыков в
            области HTML, CSS, JavaScript, TypeScript, React, Tailwind и SCSS. Я преуспеваю в
            разработке и поддержке адаптивных веб-сайтов, которые обеспечивают удобство работы
            пользователей. Мой опыт заключается в создании динамичных, привлекательных интерфейсов
            путем написания чистого и оптимизированного кода и использования передовых инструментов
            и методов разработки. Я также являюсь командным игроком, который преуспевает в
            сотрудничестве с кросс-функциональными командами для создания выдающихся веб-приложений.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
