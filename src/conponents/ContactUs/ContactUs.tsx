import LogoIcon from "@/icons/logo";
import styles from "./contactUs.module.css";
import { useRef, useState } from "react";
import { useScroll, useMotionValueEvent } from "framer-motion";

import Image from "next/image";
const ContactUs = () => {
  const ref = useRef(null);
  const [setPath, useSetPath] = useState(100);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest: any) => {
    useSetPath(100 - latest * 100);
  });

  return (
    <section ref={ref} className={`container`}>
      <div className={styles.contactUsContainer}>
        <div
          style={{
            position: "absolute",
            top: "-120%",
            bottom: "0",
            left: "0",
            right: "0",
            width: "100%",
            height: "100%",
            textAlign: "center",
            transform: `translate3d(0px, ${setPath}px, 0px)`,
            transition: "transform 1s ease",
          }}
        >
          <Image
            style={{ width: "50%", height: "auto" }}
            src={"/dsdsd.jpg"}
            width={1000}
            height={1000}
            alt={"sdsd"}
          />
        </div>
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
    </section>
  );
};

export default ContactUs;
