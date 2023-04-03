import React, { useRef } from "react";
import styles from "./Header.module.scss";

const Header = () => {
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
                  data-goto="hero"
                  href="/"
                  className={styles.menu__link}
                  onClick={onMenuLinkClick}>
                  Главная
                </a>
              </li>
              <li>
                <a
                  data-goto="about"
                  href="/"
                  className={styles.menu__link}
                  onClick={onMenuLinkClick}>
                  Обо мне
                </a>
              </li>
              <li>
                <a
                  data-goto="skills"
                  href="/"
                  className={styles.menu__link}
                  onClick={onMenuLinkClick}>
                  Навыки
                </a>
              </li>
              <li>
                <a
                  data-goto="projects"
                  href="/"
                  className={styles.menu__link}
                  onClick={onMenuLinkClick}>
                  Проекты
                </a>
              </li>
              <li>
                <a
                  data-goto="contacts"
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
  );
};

export default Header;
