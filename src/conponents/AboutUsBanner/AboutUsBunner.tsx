import Arrow from "@/icons/arrow";
import styles from "./aboutUsBanner.module.css";

interface IAboutUsBanner {
  url: string;
  buttonText: string;
}

const AboutUsBunner = ({ buttonText, url }: IAboutUsBanner) => {
  return (
    <section className={`container ${styles.contactSection}`}>
      <div className={styles.contactSectionItem}>
        <div className={styles.aboutUsMoreSection}>
          <h2>{buttonText}</h2>
          <div>
            ©️{" "}
            <span
              style={{
                display: "inline-block",
                fontSize: "25px",
                fontWeight: "500",
              }}
            >
              VOSTORG
            </span>
          </div>
        </div>
        <button className={styles.aboutUsButton}>
          <Arrow />
        </button>
      </div>
    </section>
  );
};

export default AboutUsBunner;
