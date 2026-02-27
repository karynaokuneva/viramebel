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
          <div className={styles.textBlock}>
            <h2 className={styles.h2}>
              Виготовлення меблів під замовлення з повним контролем якості
            </h2>

            <p className={styles.lead}>
              Компанія «ViraMebel» спеціалізується на виготовленні меблів на
              замовлення в Одесі для квартир, приватних будинків та офісів.
              Кожен проєкт розробляється індивідуально з урахуванням планування
              приміщення та побажань клієнта.
            </p>

            <p>
              Ми виконуємо повний цикл робіт: безкоштовний замір, створення
              дизайн-проєкту, виробництво, доставку та професійний монтаж. Такий
              підхід дозволяє гарантувати точність, довговічність та
              відповідність результату вашим очікуванням.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.sectionAlt}>
        <div className="container">
          <div className={styles.textBlock}>
            <h2 className={styles.h2}>Наші напрямки виробництва</h2>
            <p className={styles.lead}>
              Виготовляємо меблі під замір для дому та офісу — оберіть категорію
              і перегляньте приклади робіт.
            </p>

            <div className={styles.categoryGrid}>
              <Link className={styles.categoryCard} href="/katalog/kukhni">
                <span className={styles.cardTitle}>Кухні на замовлення</span>
                <span className={styles.cardText}>
                  Проєктування, виробництво та монтаж “під ключ”.
                </span>
              </Link>

              <Link className={styles.categoryCard} href="/katalog/shafy-kupe">
                <span className={styles.cardTitle}>Шафи та шафи-купе</span>
                <span className={styles.cardText}>
                  Рішення для зберігання з точним підбором наповнення.
                </span>
              </Link>

              <Link className={styles.categoryCard} href="/katalog/garderobni">
                <span className={styles.cardTitle}>Гардеробні</span>
                <span className={styles.cardText}>
                  Системи з полицями, ящиками та фурнітурою під ваші задачі.
                </span>
              </Link>

              <Link className={styles.categoryCard} href="/katalog/pryhozhі">
                <span className={styles.cardTitle}>Передпокої</span>
                <span className={styles.cardText}>
                  Компактні рішення: тумби, шафи, дзеркала та панелі.
                </span>
              </Link>

              <Link className={styles.categoryCard} href="/katalog/vitalni">
                <span className={styles.cardTitle}>Вітальні</span>
                <span className={styles.cardText}>
                  ТВ-зони, стелажі, комоди — у єдиному стилі.
                </span>
              </Link>

              <Link className={styles.categoryCard} href="/katalog/ofis">
                <span className={styles.cardTitle}>Офісні меблі</span>
                <span className={styles.cardText}>
                  Столи, тумби, шафи та робочі місця для команди.
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={styles.textBlock}>
            <h2 className={styles.h2}>Чому клієнти обирають нас</h2>
            <p className={styles.lead}>
              Працюємо прозоро, дотримуємось термінів і підбираємо рішення під
              ваші розміри, стиль та бюджет.
            </p>

            <div className={styles.benefitsGrid}>
              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>📏</div>
                <h3 className={styles.h3}>Безкоштовний замір</h3>
                <p className={styles.p}>
                  Виїжджаємо на об’єкт у зручний час, робимо точні виміри та
                  підказуємо оптимальні рішення.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🛡️</div>
                <h3 className={styles.h3}>Гарантія та контроль якості</h3>
                <p className={styles.p}>
                  Працюємо за узгодженим проєктом і перевіряємо відповідність
                  розмірів та матеріалів перед монтажем.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🏭</div>
                <h3 className={styles.h3}>Власне виробництво</h3>
                <p className={styles.p}>
                  Без посередників: контролюємо процес і формуємо чесну вартість
                  меблів на замовлення.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🎨</div>
                <h3 className={styles.h3}>Індивідуальний дизайн</h3>
                <p className={styles.p}>
                  Можемо працювати з вашими ідеями або розробити проєкт з нуля —
                  під стиль інтер’єру та задачі.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🔩</div>
                <h3 className={styles.h3}>Матеріали під ваш бюджет</h3>
                <p className={styles.p}>
                  Підбираємо ДСП/МДФ, фурнітуру та фасади так, щоб збалансувати
                  ціну, вигляд і довговічність.
                </p>
              </div>

              <div className={styles.benefitCard}>
                <div className={styles.benefitIcon}>🤝</div>
                <h3 className={styles.h3}>Монтаж “під ключ”</h3>
                <p className={styles.p}>
                  Доставка та акуратне встановлення з перевіркою результату —
                  щоб усе працювало ідеально.
                </p>
              </div>
            </div>
          </div>
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
