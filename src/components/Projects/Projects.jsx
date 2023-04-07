import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProjectCard from "./ProjectCard/ProjectCard";
import { projectsRequestFetch } from "../../services/actions/projects";

import styles from "./Projects.module.scss";

const Projects = () => {
  const dispatch = useDispatch();
  const projects = useSelector((state) => state.projects.projects);

  useEffect(() => {
    dispatch(projectsRequestFetch());
  }, []);

  return (
    <section className={`${styles.projects} portfolio`}>
      <div className="container">
        <h2 className="title">
          <span className="text-gradient">Портфолио</span>&nbsp;🧩
        </h2>
        <div className={styles.projects__body}>
          <div className={styles.projects__list}>
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
