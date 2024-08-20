import styles from "./HeroStyles.module.css";
import heroImg from "../../assets/hero-img.png";
import twitterLight from "../../assets/twitter-light.svg";
import twitterDark from "../../assets/twitter-Dark.svg";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-Dark.svg";
import linkedinLight from "../../assets/linkedIn-Light.svg";
import linkedinDark from "../../assets/linkedIn-Dark.svg";
import CV from "../../assets/cv.pdf";
import { useTheme } from "../../common/ThemeContext";
function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const twitterIcon = theme === "light" ? twitterLight : twitterDark;
  const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroImg} alt="" />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Adjamkwalim <br /> Akum-Yong
        </h1>
        <h2>Frontend Developer</h2>
        <span>
          <a href="https://twitter.com/tay_jnr" target="_blank">
            <img src={twitterIcon} alt="x icon" />
          </a>
          <a href="https://github.com/Thomasyong11" target="_blank">
            <img src={githubIcon} alt="x icon" />
          </a>
          <a
            href="https://www.linkedin.com/in/adjamkwalim-akum-yong/"
            target="_blank"
          >
            <img src={linkedinIcon} alt="x icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern React web apps for commercial
          businesses
        </p>
        <a href={CV} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
