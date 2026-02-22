import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import styles from "./contacts.module.css";

export default function ContactsPage() {
  return (
    <main>
      <PageHeader
        title="Контакти"
        subtitle="Напишіть або зателефонуйте — підкажемо по матеріалах, термінах та вартості."
      />

      <section className={styles.section}>
        <div className={`container ${styles.grid}`}>
          <div className={styles.left}>
            <div className="card" style={{ padding: 16 }}>
              <div className={styles.cardTitle}>Телефон</div>
              <a className={styles.link} href="tel:+380987291786">
                +38 (098) 729 17 86
              </a>
              <a className={styles.link} href="tel:+380668981227">
                +38 (066) 898 12 27
              </a>
              <div className={styles.note}>Приймаємо дзвінки: 8:00 – 22:00</div>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <div className={styles.cardTitle}>Адреса</div>
              <div className={styles.text}>
                м. Одеса, вул. Маршала Бабаджаняна, 40В
              </div>
              <div className={styles.note}>Графік офісу: 9:00 – 18:00</div>
            </div>

            <div className="card" style={{ padding: 16 }}>
              <div className={styles.cardTitle}>Email</div>
              <a className={styles.link} href="mailto:odesmebel@gmail.com">
                odesmebel@gmail.com
              </a>
              <div className={styles.note}>
                Відповідаємо протягом робочого дня
              </div>
            </div>

            <div className={styles.actions}>
              <Link href="/rozrahunok" className={styles.cta}>
                Викликати на замір / розрахунок
              </Link>
            </div>
          </div>

          <div className={styles.right}>
            <div className={`card ${styles.mapCard}`}>
              <iframe
                title="ViraMebel map"
                className={styles.map}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=Odesa%20%D0%9C%D0%B0%D1%80%D1%88%D0%B0%D0%BB%D0%B0%20%D0%91%D0%B0%D0%B1%D0%B0%D0%B4%D0%B6%D0%B0%D0%BD%D1%8F%D0%BD%D0%B0%2040%D0%92&output=embed"
              />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
