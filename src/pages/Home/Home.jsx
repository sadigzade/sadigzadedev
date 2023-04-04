import React from "react";
import Hero from "../../components/Hero/Hero";
import ParallaxText from "../../components/ParallaxText/ParallaxText";
import About from "../../components/About/About";
import Skills from "../../components/Skiils/Skills";
import Projects from "../../components/Projects/Projects";
import Contacts from "../../components/Contacts/Contacts";
import starIcon from "../../assets/images/star.svg";
import styles from "./Home.module.scss";

const HomePage = () => {
  return (
    <>
      <div className="container">
        <Hero />
      </div>
      <div className={styles.parallax}>
        <ParallaxText baseVelocity={-5}>
          <div className={styles.text}>
            Develop <img src={starIcon} alt="" />
          </div>
        </ParallaxText>
      </div>
      <About />
      <Skills />
      <Projects />
      <Contacts />
    </>
  );
};

export default HomePage;
