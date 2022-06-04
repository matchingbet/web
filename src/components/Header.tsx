import Link from "next/link";

import styles from "../styles/Header.module.scss";

export default function Header() {
  return (
    <header className={styles.header}>
      <h2>
        <a className="hover:underline">Matching-bet</a>
      </h2>

      <div className={styles.links}>
        <Link href="/login">
          <a className="hover:underline">Login</a>
        </Link>

        <Link href="/registro">
          <a className="hover:underline">Registro</a>
        </Link>
      </div>
    </header>
  );
}
