import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { PageHeader } from "@/components/PageHeader";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";
import { ProjectCard } from "@/components/ProjectCard";

import styles from "../katalog.module.css";

type Params = {
  slug?: string[];
};

/* -----------------------------
   Вспомогательные функции
----------------------------- */

function getCategory(slug0: string) {
  return categories.find((c) => c.slug === slug0);
}

function getSubcategory(cat: ReturnType<typeof getCategory>, slug1?: string) {
  if (!cat || !slug1 || !cat.sub) return undefined;
  return cat.sub.find((s) => s.slug === slug1);
}

/* -----------------------------
   SEO
----------------------------- */

export function generateMetadata({ params }: { params: Params }): Metadata {
  const parts = params.slug ?? [];
  const [catSlug, subSlug] = parts;

  if (!catSlug) {
    return {
      title: "Каталог робіт | ViraMebel",
      description: "Портфоліо меблів на замовлення в Одесі та області.",
    };
  }

  const cat = getCategory(catSlug);
  if (!cat) {
    return { title: "Каталог робіт | ViraMebel" };
  }

  const sub = getSubcategory(cat, subSlug);

  const title = sub
    ? `${sub.title} — ${cat.title} | ViraMebel`
    : `${cat.title} | ViraMebel`;

  const description = sub
    ? `Приклади робіт: ${sub.title} (${cat.title}). Меблі на замовлення в Одесі.`
    : `Приклади робіт: ${cat.title}. Меблі на замовлення в Одесі.`;

  return { title, description };
}

/* -----------------------------
   Страница
----------------------------- */

export default function CatalogFilteredPage({ params }: { params: Params }) {
  const parts = params.slug ?? [];
  const [catSlug, subSlug] = parts;

  // Если просто /katalog → показываем всё
  if (!catSlug) {
    return (
      <main>
        <PageHeader
          title="Каталог робіт"
          subtitle="Оберіть категорію — покажемо приклади робіт."
        />

        <div className={`container ${styles.layout}`}>
          <section style={{ gridColumn: "1 / -1" }}>
            <div className={styles.grid}>
              {projects.map((p) => (
                <ProjectCard
                  key={p.slug}
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

  const cat = getCategory(catSlug);
  if (!cat) return notFound();

  const sub = getSubcategory(cat, subSlug);
  if (subSlug && !sub) return notFound();

  // Фильтрация
  const filtered = projects.filter((p) => {
    if (p.categorySlug !== catSlug) return false;
    if (subSlug) return p.subSlug === subSlug;
    return true;
  });

  const headerTitle = sub ? `${cat.title}: ${sub.title}` : cat.title;

  const headerSubtitle = sub
    ? `Портфоліо робіт у підкатегорії «${sub.title}».`
    : `Портфоліо робіт у категорії «${cat.title}».`;

  return (
    <main>
      <PageHeader title={headerTitle} subtitle={headerSubtitle} />

      <div className={`container ${styles.layout}`}>
        {/* Sidebar */}
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

        {/* Content */}
        <section>
          <div className={styles.topBar}>
            <div className={styles.count}>Роботи: {filtered.length}</div>

            <Link className={styles.cta} href="/rozrahunok">
              Замовити розрахунок
            </Link>
          </div>

          <div className={styles.grid}>
            {filtered.map((p) => (
              <ProjectCard
                key={p.slug}
                href={`/portfolio/${p.slug}`}
                label={p.coverLabel}
                title={p.title}
              />
            ))}
          </div>

          {filtered.length === 0 && (
            <div
              style={{
                marginTop: 20,
                color: "var(--muted)",
                fontWeight: 700,
              }}
            >
              Поки що немає робіт у цій категорії.
            </div>
          )}
        </section>
      </div>
    </main>
  );
}
