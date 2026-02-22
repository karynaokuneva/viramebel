import Link from "next/link";
import { PageHeader } from "@/components/PageHeader";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";
import styles from "./katalog.module.css";

export default function CatalogPage() {
  return (
    <main>
      <PageHeader
        title="Каталог робіт"
        subtitle="Оберіть категорію — покажемо приклади робіт. Це портфоліо, не магазин."
      />

      <div className={`container ${styles.layout}`}>
        <aside className={`card ${styles.sidebar}`}>
          <div className={styles.sidebarTitle}>Категорії</div>

          <nav className={styles.nav}>
            {categories.map((c) => (
              <div key={c.id} className={styles.navGroup}>
                <Link className={styles.navLink} href={`/katalog/${c.slug}`}>
                  {c.title}
                </Link>

                {c.sub ? (
                  <div className={styles.subLinks}>
                    {c.sub.map((s) => (
                      <Link
                        key={s.slug}
                        className={styles.subLink}
                        href={`/katalog/${c.slug}/${s.slug}`}
                      >
                        {s.title}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            ))}
          </nav>
        </aside>

        <section>
          <div className={styles.topBar}>
            <div className={styles.count}>Усі роботи: {projects.length}</div>
            <Link className={styles.cta} href="/rozrahunok">
              Замовити розрахунок
            </Link>
          </div>

          <div className={styles.grid}>
            {projects.map((p) => (
              <ProjectCard
                key={p.id}
                href={`/portfolio/${p.slug}`}
                label={p.coverLabel}
                title={p.title}
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
