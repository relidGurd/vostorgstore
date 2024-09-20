import ArtistCard from "@/conponents/ArtistCard/ArtistCard";
import styles from "./ArtistsList.module.css";
import PageSlide from "@/conponents/PageSlider/PageSlide";

const ArtistsList = () => {
  return (
    <section className={`container`}>
      <PageSlide title="Наши" subtitle="Художники" />
      <ul className={styles.artistListContainer}>
        <li>
          <ArtistCard />
        </li>
        <li>
          <ArtistCard />
        </li>
        <li>
          <ArtistCard />
        </li>
        <li>
          <ArtistCard />
        </li>
      </ul>
    </section>
  );
};

export default ArtistsList;
