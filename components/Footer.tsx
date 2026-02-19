import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.row}`}>
        <div>
          <div className={styles.brand}>ViraMebel</div>
          <div className={styles.muted}>Меблі на замовлення • Одеса</div>
        </div>

        <div className={styles.muted}>
          © {new Date().getFullYear()} • Всі права захищені
        </div>
      </div>
    </footer>
  );
}
