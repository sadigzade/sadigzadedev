import React from "react";

import home from "../../assets/images/home.jpg";

import styles from "./Hero.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";

const Hero = () => {
  return (
    <section className={`${styles.hero} hero`}>
      <div className={styles.content}>
        <h1 className={styles.content__title}>
          <span className="text-gradient">Front-End React</span> <br /> Developer 👋🏻
        </h1>
        <p className={styles.content__descr}>
          Привет, я Хикмет Садигзаде. Увлеченный Front-end React-разработчик из Москвы, Россия. 📍
        </p>
        <div className={styles.links}>
          <div className={styles.social}>
            <a
              href="https://github.com/sadigzade"
              target="_blank"
              className={styles.social__icons}
              rel="noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} />
            </a>
            <a
              href="https://t.me/sadigzade"
              target="_blank"
              className={styles.social__icons}
              rel="noreferrer">
              <FontAwesomeIcon icon={faTelegram} />
            </a>
            <a
              href="https://vk.com/sadigzade"
              target="_blank"
              className={styles.social__icons}
              rel="noreferrer">
              <FontAwesomeIcon icon={faVk} />
            </a>
          </div>
          <div className={styles.resume}>
            <a
              href="https://hh.ru/resume/81a09e58ff0b9e00b70039ed1f67427a38764e"
              target="_blank"
              className={styles.load_sv}
              rel="noreferrer">
              Скачать CV
            </a>
          </div>
        </div>
      </div>
      <div className={styles.hero__img}>
        <img src={home} alt="" />
      </div>
    </section>
  );
};

export default Hero;
