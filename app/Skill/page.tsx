import Image from "next/image";
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
              <Image
                src={skill.imageSrc}
                width={500}
                height={500}
                alt={skill.title}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Page;
