import styles from "./SkillsStyles.module.css";
import checkMarkIconLight from "../../assets/checkmark-light.svg";
import checkMarkIconDark from "../../assets/checkmark-dark.svg";
import SkillList from "../../common/SkillList";
function Skills() {
  return (
    <section id="skills" className={styles.container}>
      <h1 className="sectionTitle">Skills</h1>
      <div className={styles.skillList}>
        <SkillList checkmark={checkMarkIconLight} skill="HTML" />
        <SkillList checkmark={checkMarkIconLight} skill="CSS" />
        <SkillList checkmark={checkMarkIconLight} skill="JavaScript" />
        <SkillList checkmark={checkMarkIconLight} skill="TypeScript" />
        <SkillList checkmark={checkMarkIconLight} skill="Node" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList checkmark={checkMarkIconLight} skill="React" />
        <SkillList checkmark={checkMarkIconLight} skill="React Native" />
        <SkillList checkmark={checkMarkIconLight} skill="Tailwind CSS" />
      </div>
      <hr />
      <div className={styles.skillList}>
        <SkillList checkmark={checkMarkIconLight} skill="Redux" />
        <SkillList checkmark={checkMarkIconLight} skill="Git" />
        <SkillList checkmark={checkMarkIconLight} skill="Webpack" />
        <SkillList checkmark={checkMarkIconLight} skill="Jest" />
        <SkillList checkmark={checkMarkIconLight} skill="Bootstrap" />
      </div>
      <hr />
    </section>
  );
}

export default Skills;
