import React from "react";
import styles from "./Contacts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

const Contacts = () => {
  return (
    <section className={`${styles.contacts} contacts`}>
      <div className="container">
        <h2 className="title">
          <span className="text-gradient">Контакты</span>&nbsp;🔗
        </h2>
        <div className={styles.contacts__body}>
          <div className={styles.contacts__item}>
            <div className={styles.contacts__item__icon}>
              <FontAwesomeIcon icon={faLocationDot} />
            </div>
            <div>
              <h3>Локация</h3>
              <span>Москва, Россия</span>
            </div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.contacts__item__icon}>
              <FontAwesomeIcon icon={faPhone} />
            </div>
            <div>
              <h3>Телефон</h3>
              <a href="tel:+79253525383">+7 (925) 352-5383</a>
            </div>
          </div>
          <div className={styles.contacts__item}>
            <div className={styles.contacts__item__icon}>
              <FontAwesomeIcon icon={faEnvelope} />
            </div>
            <div>
              <h3>Email</h3>
              <a href="mailto:sadigzade.hi@yandex.ru">sadigzade.hi@yandex.ru</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contacts;
