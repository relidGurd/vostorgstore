import LogoIcon from "@/icons/logo";
import styles from "./contactUs.module.css";
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";

import Image from "next/image";
const ContactUs = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 2], [-350, 350]);

  return (
    <section ref={ref} className={`container`}>
      <div className={styles.contactUsContainer}>
        <motion.div
          style={{ width: "100%", height: "100%", position: "absolute", y }}
        >
          <Image
            style={{
              width: "100%",
              height: "auto",
              objectFit: "cover",
            }}
            src={"/1.webp"}
            alt={`fdsfs`}
            width={1000}
            height={1000}
          />
        </motion.div>
        <div
          style={{
            zIndex: "2",
            padding: "2rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height: "100%",
            color: "white",
          }}
        >
          <div className={styles.contactUsSection}>
            <h2 className={styles.contactUsText}>
              Русский букварь с иллюстрациями, при участии различных современных
              художников.
            </h2>
            <div className={styles.contactUsLogo}>
              <LogoIcon color={"white"} />
            </div>
          </div>
          <div className={styles.buttonContactsSection}>
            <div>
              <span className={styles.contactUsTitle}>Свяжитесь с нами</span>
            </div>
            <button className={styles.contactsButton}>Контакты</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
