
// import Navbar from "./Nav";
import styles from "./Product.module.css";

export default function Product() {
  return (
    <main className={styles.product}>
         {/* <Navbar/> */}
      <section>
        <div>
          <h2>
           The Best Prefume
            <br />
            Price: $50 up to $160
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae vel
            labore mollitia iusto. Recusandae quos provident, laboriosam fugit
            voluptatem iste.
          </p>
        </div>
        <img src="/img-1.jpg" alt="Great perfume" />
      </section>
    </main>
  );
}