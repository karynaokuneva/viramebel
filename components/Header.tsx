"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import styles from "./Header.module.css";

export function Header() {
  const [open, setOpen] = useState(false);

  // закрывать меню при переходе по ссылке
  const close = () => setOpen(false);

  // закрывать меню при изменении ширины (например, повернула телефон)
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 900) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className={styles.header}>
      <div className={`container ${styles.row}`}>
        <Link href="/" className={styles.logo} onClick={close}>
          ViraMebel
        </Link>

        {/* Desktop nav */}
        <nav className={styles.navDesktop}>
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

        {/* Mobile burger */}
        <button
          type="button"
          className={styles.burger}
          aria-label="Відкрити меню"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
          <span className={styles.burgerLine} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open ? (
        <div className={styles.mobilePanel}>
          <div className={`container ${styles.mobileNav}`}>
            <Link href="/katalog" className={styles.mobileLink} onClick={close}>
              Каталог
            </Link>
            <Link href="/poslugy" className={styles.mobileLink} onClick={close}>
              Послуги
            </Link>
            <Link href="/pro-nas" className={styles.mobileLink} onClick={close}>
              Про нас
            </Link>
            <Link
              href="/kontakty"
              className={styles.mobileLink}
              onClick={close}
            >
              Контакти
            </Link>

            <Link
              href="/rozrahunok"
              className={styles.mobileCta}
              onClick={close}
            >
              Замовити розрахунок
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
