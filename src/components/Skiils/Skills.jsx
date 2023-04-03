import React from "react";

import SkillCard from "./SkillCard/SkillCard";

import jsLogo from "../../assets/images/js-logo.png";
import tsLogo from "../../assets/images/ts-logo.png";
import cssLogo from "../../assets/images/css-logo.png";
import gitLogo from "../../assets/images/git-logo.png";
import sassLogo from "../../assets/images/sass-logo.png";
import htmlLogo from "../../assets/images/html-logo.png";
import reactLogo from "../../assets/images/react-logo.png";
import webpackLogo from "../../assets/images/webpack-logo.png";
import tailwindcssLogo from "../../assets/images/tailwindcss-logo.png";

import styles from "./Skills.module.scss";

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

const Skills = () => {
  return (
    <section className={`${styles.skills} skills`}>
      <h2 className={`${styles.title} text-gradient`}>Мои навыки</h2>
      <div className={styles.cards}>
        {skills.map((skill) => (
          <SkillCard key={skill.id} logo={skill.logo} text={skill.text} />
        ))}
      </div>
    </section>
  );
};

export default Skills;
