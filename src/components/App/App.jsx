import ParallaxText from "../ParallaxText/ParallaxText";

import starIcon from "../../assets/images/star.svg";

import styles from "./App.module.scss";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import About from "../About/About";
import Skills from "../Skiils/Skills";
import Hero from "../Hero/Hero";
import Contacts from "../Contacts/Contacts";
import Projects from "../Projects/Projects";

const App = () => {
  return (
    <div>
      <Header />
      <main>
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
      </main>
      <Footer />
    </div>
  );
};

export default App;
