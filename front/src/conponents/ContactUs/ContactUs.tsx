import LogoIcon from "@/icons/logo";
import styles from "./contactUs.module.css";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

import Image from "next/image";
import Popup from "../Popup/Popup";
const ContactUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [-550, 450]);

  return (
    <section ref={ref} className={`container`}>
      <div className={styles.contactUsContainer}>
        <div className={styles.contactFilter}></div>
        <motion.div
          style={{
            y,
            z: 50,
          }}
        >
          <img className={styles.contactsBgImage} src="/1.webp" alt="" />
        </motion.div>

        <div className={styles.contactUsContent}>
          <div>
            <h2 className={styles.contactUsTitle}>
              Оставьте заявку и мы свяжемся с Вами
            </h2>
          </div>
          <div>
            <span className={styles.agitka}>
              Наши специалисты помогут в выборе
            </span>
            <Popup
              elem={<button className={styles.agitkaButton}>Связаться</button>}
            >
              <div>Форма</div>
            </Popup>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
