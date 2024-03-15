import styles from "./footer.module.css";
import Arrow from "@/icons/arrow";

const Footer = () => {
  return (
    <section className={`container`}>
      <div>
        <div className={styles.footerSectionOne}>
          <div className={styles.footerLogo}>VOSTORG</div>
          <p className={styles.footerDescription}>
            Milk Network TM is a brand development firm that works in thought
            and in action:
            <span
              className={styles.mailFooter}
              style={{ marginTop: "30px", paddingBottom: "10px" }}
            >
              hello@milknetwork.com
            </span>
          </p>
        </div>
      </div>

      <div className={styles.footerSectionOne}>
        <div>
          <span className={styles.footerMenuItemTitle}>Рассылка</span>
          <form>
            <input
              className={styles.mailSendInput}
              placeholder="Введите Email"
              type="text"
            />
            <button className={styles.mailSendButton}>
              <Arrow />
            </button>
          </form>
          <span className={styles.inputTerms}>
            Нажимая отпаврить Вы соглашаетесь с политикой конфиденциальности
          </span>
        </div>
        <div className={styles.footerMenu}>
          <div>
            <span className={styles.footerMenuItemTitle}>Мы в соц-сетях</span>
            <ul className={styles.footerMenuList}>
              <li>Instagram</li>
              <li>Vk</li>
              <li>Telegram</li>
              <li>WhatsUp</li>
              <li>Behance</li>
              <li>Дзен</li>
            </ul>
          </div>
          <div>
            <span className={styles.footerMenuItemTitle}>Компания</span>
            <ul className={styles.footerMenuList}>
              <li>Работы</li>
              <li>Художники</li>
              <li>События</li>
              <li>Выставки</li>
              <li>Контакты</li>
            </ul>
          </div>
          <div>
            <span className={styles.footerMenuItemTitle}>Офисы</span>
            <ul className={styles.footerMenuList}>
              <li>Москва</li>
              <li>Санкт-Петербург</li>
              <li>Керчь</li>
            </ul>
          </div>
        </div>
        <div className={styles.termsSection}>
          <div>© 2024 Maslenok. All right reserved</div>
          <div>Terms, Privacy Policy</div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
