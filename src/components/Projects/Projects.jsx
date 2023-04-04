import React from "react";

import ProjectPreview1 from "../../assets/images/project-preview-1.jpg";

import styles from "./Projects.module.scss";

const Projects = () => {
  return (
    <section className={`${styles.projects} portfolio`}>
      <div className="container">
        <h2 className="title">
          <span className="text-gradient">Портфолио</span>&nbsp;🧩
        </h2>
        <div className={styles.projects__body}>
          <div className={styles.projects__list}>
            <div className={styles.projects__item}>
              <img src={ProjectPreview1} alt="" />
              <div className={styles.projects__item__info}>
                <div className={styles.item__header}>
                  <h3>Stellar Burgers</h3>
                  <span>Приложения бургеров</span>
                </div>
                <div className={styles.links}>
                  <a href="/" className={styles.links__item}>
                    <span>Code</span>
                  </a>
                  <a href="/" className={styles.links__item}>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projects__item}>
              <img src={ProjectPreview1} alt="" />
              <div className={styles.projects__item__info}>
                <div className={styles.item__header}>
                  <h3>Stellar Burgers</h3>
                  <span>Приложения бургеров</span>
                </div>
                <div className={styles.links}>
                  <a href="/" className={styles.links__item}>
                    <span>Code</span>
                  </a>
                  <a href="/" className={styles.links__item}>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projects__item}>
              <img src={ProjectPreview1} alt="" />
              <div className={styles.projects__item__info}>
                <div className={styles.item__header}>
                  <h3>Stellar Burgers</h3>
                  <span>Приложения бургеров</span>
                </div>
                <div className={styles.links}>
                  <a href="/" className={styles.links__item}>
                    <span>Code</span>
                  </a>
                  <a href="/" className={styles.links__item}>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
            <div className={styles.projects__item}>
              <img src={ProjectPreview1} alt="" />
              <div className={styles.projects__item__info}>
                <div className={styles.item__header}>
                  <h3>Stellar Burgers</h3>
                  <span>Приложения бургеров</span>
                </div>
                <div className={styles.links}>
                  <a href="/" className={styles.links__item}>
                    <span>Code</span>
                  </a>
                  <a href="/" className={styles.links__item}>
                    <span>Demo</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
