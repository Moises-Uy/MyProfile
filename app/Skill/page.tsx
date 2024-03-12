import { aboutme } from "../components/constants";
import styles from "./Skill.module.css";

const Page = () => {
  return (
    <section>
      <div className={styles.content}>
        <h2 className={styles.title}>Skills</h2>
        <div className={styles.imgContainer}>
          {aboutme.map((skill, id) => (
            <div key={id} className={styles.gridItem}>
              <img src={skill.imageSrc} alt={skill.title} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Page;
