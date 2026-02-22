import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="Про нас"
        subtitle="ViraMebel — меблі на замовлення в Одесі та області. Працюємо під ваші розміри: від заміру до монтажу."
      />

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <div>
            <h2 className={styles.h2}>Хто ми</h2>
            <p className={styles.p}>
              Ми виготовляємо кухні, шафи-купе та гардеробні на замовлення.
              Підбираємо матеріали та фурнітуру під бюджет, готуємо проєкт і
              доводимо до результату “під ключ”.
            </p>
            <p className={styles.p}>
              Для нас важливо: акуратність, прозорі терміни і комфортна
              комунікація. Ви завжди знаєте, на якому етапі робота.
            </p>

            <div className={styles.badges}>
              <span className={styles.badge}>Замір</span>
              <span className={styles.badge}>Проєкт</span>
              <span className={styles.badge}>Виготовлення</span>
              <span className={styles.badge}>Монтаж</span>
            </div>
          </div>

          <PlaceholderImage label="Фото майстерні / команди" height={320} />
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <h2 className={styles.h2}>Наші переваги</h2>

          <ol className={styles.numberList}>
            <li>
              <strong>Індивідуальні розміри.</strong> Виготовляємо меблі точно
              під ваш простір та планування.
            </li>
            <li>
              <strong>Якісні матеріали.</strong> Працюємо з перевіреними
              постачальниками та фурнітурою.
            </li>
            <li>
              <strong>Акуратний монтаж.</strong> Дотримуємось термінів і чистоти
              під час встановлення.
            </li>
            <li>
              <strong>Гарантія та підтримка.</strong> Ми залишаємося на звʼязку
              після здачі проєкту.
            </li>
          </ol>
        </div>
      </section>

      <section className={styles.section}>
        <div className="container">
          <div className={`card ${styles.policy}`}>
            <div>
              <h2 className={styles.h2} style={{ marginTop: 0 }}>
                Цінова політика
              </h2>
              <ul className={styles.list}>
                <li>
                  Тип фасадів і матеріалів (ЛДСП / МДФ / фарбування тощо).
                </li>
                <li>
                  Фурнітура та механізми (напрямні, доводчики, підйомники).
                </li>
                <li>Складність проєкту та кількість модулів.</li>
                <li>Терміни та обсяг робіт (виготовлення + монтаж).</li>
              </ul>
            </div>

            <PlaceholderImage
              label="Приклад матеріалів / фурнітури"
              height={220}
            />
          </div>

          <div className={styles.ctaRow}>
            <Link href="/rozrahunok" className={styles.cta}>
              Замовити розрахунок
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
