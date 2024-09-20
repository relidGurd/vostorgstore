"use client";
import PageSlide from "@/conponents/PageSlider/PageSlide";

const Contacts = () => {
  return (
    <>
      <PageSlide title="Контакты" />
      <section className={`container`}>
        <p>
          Мы всегда открыты для диалога. Сотрудники разных направлений Vostorg
          готовы ответить на ваши вопросы, услышать пожелания и предложения.
        </p>

        <div>
          <ul>
            <li>
              <span>Художественная программа</span>
              <a href="">curatorial@v-a-c.org</a>
            </li>

            <li>
              <span>Художественная программа</span>
              <a href="">curatorial@v-a-c.org</a>
            </li>

            <li>
              <span>Художественная программа</span>
              <a href="">curatorial@v-a-c.org</a>
            </li>

            <li>
              <span>Художественная программа</span>
              <a href="">curatorial@v-a-c.org</a>
            </li>

            <li>
              <span>Художественная программа</span>
              <a href="">curatorial@v-a-c.org</a>
            </li>

            <li>
              <span>Художественная программа</span>
              <a href="">curatorial@v-a-c.org</a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
};

export default Contacts;
