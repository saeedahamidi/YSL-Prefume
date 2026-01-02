
import styles from "./Home.module.css";
import Navbar from "./Nav";

export default function Home() {
  return (
    <main className={styles.home}>
      <Navbar/>
      {/* <div className={styles.navbar}>
        <img src="icon.jpg" alt="Great perfume" className={styles.logo} />
      </div> */}
      <section className={styles.content}>
        <h1>Yves Saint Laurent (YSL)</h1>
        <h2>Would you like to have some  information about this brand?</h2>
      </section>
    </main>
  );
}

