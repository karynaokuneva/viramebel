"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import styles from "./Hero.module.css";

export function Hero() {
  const bgRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Параллакс: двигаем фон чуть-чуть в зависимости от scroll
    const onScroll = () => {
      if (!bgRef.current) return;
      const y = window.scrollY || 0;
      // чем меньше коэффициент — тем мягче движение
      bgRef.current.style.transform = `translate3d(0, ${y * 0.18}px, 0) scale(1.08)`;
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className={styles.hero}>
      {/* фон */}
      <div className={styles.bgWrap} aria-hidden="true">
        <div ref={bgRef} className={styles.bg} />
        <div className={styles.overlay} />
      </div>

      {/* контент */}
      <div className={`container ${styles.inner}`}>
        <div className={styles.kicker}>
          Одеса та область • меблі на замовлення
        </div>

        <h1 className={styles.h1}>
          Кухні, шафи та гардеробні —
          <br />
          під ваші розміри
        </h1>

        <p className={styles.p}>
          Замір, проєкт, виготовлення та монтаж. Розрахунок вартості — швидко і
          без зайвих дзвінків.
        </p>

        <div className={styles.actions}>
          <Link href="/kontakty" className={styles.primaryBtn}>
            Звʼязатися з нами
          </Link>
          <Link href="/katalog" className={styles.secondaryBtn}>
            Переглянути роботи
          </Link>
        </div>

        {/* счётчики */}
        <div className={styles.stats}>
          <div className={styles.statCard}>
            <div className={styles.statNum}>7800+</div>
            <div className={styles.statLabel}>квартир з нашими меблями</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNum}>14+</div>
            <div className={styles.statLabel}>років досвіду</div>
          </div>

          <div className={styles.statCard}>
            <div className={styles.statNum}>4.9/5</div>
            <div className={styles.statLabel}>середня оцінка клієнтів</div>
          </div>
        </div>
      </div>
    </section>
  );
}
