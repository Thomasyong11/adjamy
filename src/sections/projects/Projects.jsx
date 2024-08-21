import styles from "./ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import freshBurger from "../../assets/fresh-burger.png";
import hipsster from "../../assets/hipsster.png";
import fitlift from "../../assets/fitlift.png";
import ProjectCard from "../../common/ProjectCard";

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard src={viberr} link="" title="Viberr" desc="Streaming App" />
        <ProjectCard
          src={freshBurger}
          link=""
          title="Fresh Burger"
          desc="Restuarant"
        />
        <ProjectCard
          src={hipsster}
          link=""
          title="Hipsster"
          desc="Glasses Shop"
        />
        <ProjectCard src={fitlift} link="" title="FitLift" desc="Fitness App" />
      </div>
    </section>
  );
}

export default Projects;
