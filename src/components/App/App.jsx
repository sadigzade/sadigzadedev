import { useRef } from "react";

import home from "../../assets/images/home.jpg";
import starIcon from "../../assets/images/star.svg";
import jsLogo from "../../assets/images/js-logo.png";
import tsLogo from "../../assets/images/ts-logo.png";
import cssLogo from "../../assets/images/css-logo.png";
import gitLogo from "../../assets/images/git-logo.png";
import sassLogo from "../../assets/images/sass-logo.png";
import htmlLogo from "../../assets/images/html-logo.png";
import reactLogo from "../../assets/images/react-logo.png";
import webpackLogo from "../../assets/images/webpack-logo.png";
import tailwindcssLogo from "../../assets/images/tailwindcss-logo.png";

import styles from "./App.module.scss";
import ParallaxText from "../ParallaxText/ParallaxText";

const skills = [
  { id: 1, logo: htmlLogo, text: "HTML" },
  { id: 2, logo: cssLogo, text: "CSS" },
  { id: 3, logo: jsLogo, text: "JavaScript" },
  { id: 4, logo: tsLogo, text: "TypeScript" },
  { id: 5, logo: reactLogo, text: "React" },
  { id: 6, logo: gitLogo, text: "Git" },
  { id: 7, logo: sassLogo, text: "Sass" },
  { id: 8, logo: tailwindcssLogo, text: "Tailwind" },
  { id: 9, logo: webpackLogo, text: "Webpack" },
];

const App = () => {
  const menuBodyRef = useRef(null);
  const iconMenuRef = useRef(null);

  const onIconMenuClick = (e) => {
    if (menuBodyRef.current && iconMenuRef.current) {
      document.body.classList.toggle(styles._lock);
      iconMenuRef.current.classList.toggle(styles._active);
      menuBodyRef.current.classList.toggle(styles._active);
    }
  };

  const onMenuLinkClick = (e) => {
    e.preventDefault();

    const menuLink = e.target;

    if (menuLink.dataset.goto && document.querySelector(`.${menuLink.dataset.goto}`)) {
      const gotoBlock = document.querySelector(`.${menuLink.dataset.goto}`);
      const gotoBlockValue =
        gotoBlock.getBoundingClientRect().top +
        window.pageYOffset -
        document.querySelector("#header").offsetHeight;

      if (menuBodyRef.current.classList.contains(styles._active)) {
        document.body.classList.remove(styles._lock);
        iconMenuRef.current.classList.remove(styles._active);
        menuBodyRef.current.classList.remove(styles._active);
      }

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth",
      });
    }
  };

  return (
    <div>
      <header className={styles.header} id="header">
        <div className={`${styles.header__container} container`}>
          <a href="/" className={styles.header__logo}>
            Sadigzade.dev
          </a>
          <div className={styles.menu}>
            <nav ref={menuBodyRef} className={styles.menu__body}>
              <ul className={styles.menu__list}>
                <li>
                  <a
                    data-goto="title1"
                    href="/"
                    className={styles.menu__link}
                    onClick={onMenuLinkClick}>
                    Главная
                  </a>
                </li>
                <li>
                  <a
                    data-goto="title2"
                    href="/"
                    className={styles.menu__link}
                    onClick={onMenuLinkClick}>
                    Обо мне
                  </a>
                </li>
                <li>
                  <a
                    data-goto="title3"
                    href="/"
                    className={styles.menu__link}
                    onClick={onMenuLinkClick}>
                    Проекты
                  </a>
                </li>
                <li>
                  <a
                    data-goto="title4"
                    href="/"
                    className={styles.menu__link}
                    onClick={onMenuLinkClick}>
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
            <div ref={iconMenuRef} className={styles.menu__icon} onClick={onIconMenuClick}>
              <span></span>
            </div>
          </div>
        </div>
      </header>
      <main>
        <div className="container">
          <section className={styles.hero}>
            <div className={styles.content}>
              <h1 className={styles.content__title}>
                <span className="text-gradient">Front-End React</span> <br /> Developer 👋🏻
              </h1>
              <p className={styles.content__descr}>
                Привет, я Хикмет Садигзаде. Увлеченный Front-end React-разработчик из России,
                Москва. 📍
              </p>
              <div className={styles.social}>
                <a
                  href="https://github.com/sadigzade"
                  target="_blank"
                  className={styles.social__icons}
                  rel="noreferrer">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M7.999 0C3.58201 0 4.61648e-06 3.596 4.61648e-06 8.032C-0.0018 9.71555 0.525519 11.3571 1.50744 12.7246C2.48935 14.0922 3.87621 15.1166 5.472 15.653C5.872 15.727 6.018 15.479 6.018 15.266C6.018 15.075 6.011 14.57 6.007 13.9C3.782 14.385 3.312 12.823 3.312 12.823C2.949 11.895 2.424 11.648 2.424 11.648C1.697 11.15 2.478 11.16 2.478 11.16C3.281 11.217 3.703 11.988 3.703 11.988C4.417 13.215 5.576 12.861 6.032 12.655C6.104 12.136 6.311 11.782 6.54 11.581C4.764 11.378 2.896 10.689 2.896 7.612C2.896 6.735 3.208 6.018 3.72 5.456C3.637 5.253 3.363 4.436 3.798 3.331C3.798 3.331 4.47 3.115 5.998 4.154C6.65075 3.97561 7.32432 3.88482 8.00101 3.884C8.67772 3.88534 9.35126 3.97647 10.004 4.155C11.531 3.116 12.202 3.332 12.202 3.332C12.638 4.438 12.364 5.254 12.282 5.457C12.795 6.019 13.104 6.736 13.104 7.613C13.104 10.698 11.234 11.377 9.452 11.576C9.739 11.824 9.995 12.314 9.995 13.063C9.995 14.137 9.985 15.003 9.985 15.266C9.985 15.481 10.129 15.731 10.535 15.652C12.1292 15.1143 13.5144 14.0895 14.4949 12.7223C15.4755 11.3551 16.0019 9.71448 16 8.032C16 3.596 12.418 0 7.999 0Z"
                      fill="black"
                    />
                  </svg>
                </a>
                <a
                  href="https://hh.ru/resume/81a09e58ff0b9e00b70039ed1f67427a38764e"
                  target="_blank"
                  className={styles.load_sv}
                  rel="noreferrer">
                  Скачать CV
                </a>
              </div>
            </div>
            <div className={styles.hero__img}>
              <img src={home} alt="" />
            </div>
          </section>
        </div>
        <div className={styles.parallax}>
          <ParallaxText baseVelocity={-5}>
            <div className={styles.text}>
              Develop <img src={starIcon} alt="" />
            </div>
          </ParallaxText>
        </div>
      </main>
    </div>
  );
};

export default App;
