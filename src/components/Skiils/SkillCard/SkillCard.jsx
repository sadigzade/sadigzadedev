import React from "react";
import styles from "./SkillCard.module.scss";

const SkillCard = ({ logo, text }) => {
  return (
    <div className={styles.card}>
      <img src={logo} alt={text} />
      <span className="text-3xl">{text}</span>
    </div>
  );
};

export default SkillCard;
