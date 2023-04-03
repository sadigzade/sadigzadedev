import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithubSquare, faTelegram, faVk } from "@fortawesome/free-brands-svg-icons";

import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.footer__container} container`}>
        <div className={styles.topline}></div>
        <div className={styles.footer__content}>
          <a href="/">Sadigzade.dev</a>
          <div className={styles.social}>
            <a
              href="https://github.com/sadigzade"
              target="_blank"
              className={styles.social__item}
              rel="noreferrer">
              {/* <FontAwesomeIcon icon={faGithubSquare} /> */}
            </a>
            <a
              href="https://t.me/sadigzade"
              target="_blank"
              className={styles.social__item}
              rel="noreferrer">
              {/* <FontAwesomeIcon icon={faTelegram} /> */}
            </a>
            <a
              href="https://vk.com/sadigzade"
              target="_blank"
              className={styles.social__item}
              rel="noreferrer">
              {/* <FontAwesomeIcon icon={faVk} /> */}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
