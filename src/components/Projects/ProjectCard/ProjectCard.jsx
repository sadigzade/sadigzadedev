import React, { useEffect, useState } from "react";
import { getDownloadURL, ref } from "firebase/storage";

import { storage } from "../../../firebase";

import styles from "./ProjectCard.module.scss";

const ProjectCard = ({ project }) => {
  const { title, description, codeLink, demoLink, imageName } = project;
  const [url, setUrl] = useState("");

  const getProjcetImage = async () => {
    const reference = ref(storage, `projects/${imageName}.jpg`);
    await getDownloadURL(reference).then((url) => setUrl(url));
  };

  useEffect(() => {
    getProjcetImage();
  }, []);

  return (
    <div className={styles.projectCard}>
      <img src={url} alt="" />
      <div className={styles.item__info}>
        <div className={styles.item__header}>
          <h3>{title}</h3>
          <span>{description}</span>
        </div>
        <div className={styles.links}>
          <a href={codeLink} className={styles.links__item} target="_blank" rel="noreferrer">
            <span>Code</span>
          </a>
          <a href={demoLink} className={styles.links__item} target="_blank" rel="noreferrer">
            <span>Demo</span>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
