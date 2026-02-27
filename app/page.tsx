import Link from "next/link";
import styles from "./page.module.css";
import { Hero } from "@/components/Hero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Меблі на замовлення в Одесі | Кухні, шафи, гардеробні",
  description:
    "Виготовлення меблів на замовлення в Одесі: кухні, шафи-купе, гардеробні та офісні меблі. Безкоштовний замір, власне виробництво, гарантія якості.",
};

export default function HomePage() {
  return (
    <main>
      <Hero />

      <section className={styles.hero}>
        <div className={`container ${styles.heroGrid}`}>
          <div>
            <p className={styles.kicker}>
              Одеса та область • меблі на замовлення
            </p>
            <h1 className={styles.h1}>
              Кухні, шафи та гардеробні — під ваші розміри
            </h1>

            <p className={styles.lead}>
              Замір, проєкт, виготовлення та монтаж. Розрахунок вартості —
              швидко і без зайвих дзвінків.
            </p>

            <div className={styles.actions}>
              <Link href="/rozrahunok" className={styles.primaryBtn}>
                Замовити розрахунок
              </Link>
              <Link href="/katalog" className={styles.secondaryBtn}>
                Переглянути роботи
              </Link>
            </div>

            <div className={styles.stats}>
              <div className="card" style={{ padding: 14 }}>
                <div className={styles.statTitle}>Термін</div>
                <div className={styles.statValue}>від 14 днів</div>
              </div>
              <div className="card" style={{ padding: 14 }}>
                <div className={styles.statTitle}>Гарантія</div>
                <div className={styles.statValue}>12 міс.</div>
              </div>
              <div className="card" style={{ padding: 14 }}>
                <div className={styles.statTitle}>Підхід</div>
                <div className={styles.statValue}>під ключ</div>
              </div>
            </div>
          </div>

          <div className={styles.heroMock}>
            <div className={styles.mockTop}>Проєкт • Виготовлення • Монтаж</div>
            <div className={styles.mockBody}>
              <div className={styles.mockLine} />
              <div className={styles.mockLine} />
              <div className={styles.mockLineShort} />
              <div className={styles.mockCardRow}>
                <div className={styles.mockCard} />
                <div className={styles.mockCard} />
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.h2}>
            Виготовлення меблів під замовлення з повним контролем якості
          </h2>
          {/* TODO: текст */}
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <h2 className={styles.h2}>Наші напрямки виробництва</h2>
          {/* TODO: категорії */}
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.h2}>Чому клієнти обирають нас</h2>
          {/* TODO: переваги */}
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <h2 className={styles.h2}>Як ми працюємо</h2>
          {/* TODO: етапи */}
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.h2}>Матеріали та фурнітура</h2>
          {/* TODO: матеріали */}
        </div>
      </section>

      <section className={styles.sectionCta}>
        <div className="container">
          <h2 className={styles.h2}>Розрахуємо вартість вашого проєкту</h2>
          {/* TODO: CTA */}
        </div>
      </section>
    </main>
  );
}
