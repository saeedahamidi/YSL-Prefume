import { Link } from "react-router-dom";

import styles from "./Nav.module.css";

export default function Navbar() {
  return (
    <nav className={styles.nav}>
      {/* <Link to="/">
      <img src="/icon.jpg" alt="WorldWise logo" className={styles.logo} />
    </Link> */}
      <img src="/icon.jpg" alt="WorldWise logo" className={styles.logo} />
      <ul>
        <li>
          <Link to="/brandinfo">Brand-Info</Link>
        </li>
        <li>
          <Link to="/product">Product</Link>
        </li>
      </ul>
    </nav>
  );
}
