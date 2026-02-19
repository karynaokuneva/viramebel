import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.hesder}>
      <div className={`container ${styles.row}`}>
        <Link href="/" className={styles.logo}>
          ViraMebel
        </Link>

        <nav className={styles.nav}>
          <Link href="/katalog" className={styles.link}>
            Каталог
          </Link>
          <Link href="/poslugy" className={styles.link}>
            Послуги
          </Link>
          <Link href="/pro-nas" className={styles.link}>
            Про нас
          </Link>
          <Link href="/kontakty" className={styles.link}>
            Контакти
          </Link>
          <Link href="/rozrahunok" className={styles.cta}>
            Замовити розрахунок
          </Link>
        </nav>
      </div>
    </header>
  );
}
