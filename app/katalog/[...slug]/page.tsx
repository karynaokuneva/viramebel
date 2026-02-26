import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { PageHeader } from "@/components/PageHeader";
import { ProjectCard } from "@/components/ProjectCard";
import { categories } from "@/data/categories";
import { projects } from "@/data/projects";

import styles from "../katalog.module.css";

type SlugParams = { slug?: string[] };

// В Next 16 params может приходить как Promise → типизируем так:
type PageProps = { params: Promise<SlugParams> };

function getCategory(catSlug: string) {
  return categories.find((c) => c.slug === catSlug);
}

function getSubcategory(cat: ReturnType<typeof getCategory>, subSlug?: string) {
  if (!cat || !subSlug || !cat.sub) return undefined;
  return cat.sub.find((s) => s.slug === subSlug);
}

// ✅ SEO (делаем async и await params)
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const parts = slug ?? [];
  const [catSlug, subSlug] = parts;

  if (!catSlug) {
    return {
      title: "Каталог робіт — меблі на замовлення в Одесі | ViraMebel",
      description:
        "Портфоліо робіт: кухні, шафи-купе, гардеробні та інші меблі на замовлення в Одесі та області.",
    };
  }

  const cat = getCategory(catSlug);
  if (!cat) return { title: "Каталог робіт | ViraMebel" };

  const sub = getSubcategory(cat, subSlug);
  if (subSlug && !sub) return { title: `${cat.title} | ViraMebel` };

  if (!subSlug) {
    return {
      title: `${cat.title} на замовлення — портфоліо | ViraMebel`,
      description: `Приклади робіт у категорії «${cat.title}».`,
    };
  }

  return {
    title: `${sub!.title} — ${cat.title} | ViraMebel`,
    description: `Приклади робіт: ${sub!.title} (${cat.title}).`,
  };
}

export default async function CatalogPage({ params }: PageProps) {
  const { slug } = await params; // ✅ вот ключевая строка
  const parts = slug ?? [];
  const [catSlug, subSlug] = parts;

  const cat = catSlug ? getCategory(catSlug) : undefined;
  if (catSlug && !cat) return notFound();

  const sub = cat ? getSubcategory(cat, subSlug) : undefined;
  if (subSlug && !sub) return notFound();

  const filtered = projects.filter((p) => {
    if (catSlug && p.categorySlug !== catSlug) return false;
    if (subSlug && p.subSlug !== subSlug) return false;
    return true;
  });

  const title = sub
    ? `${cat!.title}: ${sub.title}`
    : cat
      ? cat.title
      : "Каталог робіт";
  const subtitle = sub
    ? `Портфоліо робіт у підкатегорії «${sub.title}».`
    : cat
      ? `Портфоліо робіт у категорії «${cat.title}».`
      : "Оберіть категорію — покажемо приклади робіт. Це портфоліо, не магазин.";

  return (
    <main>
      <PageHeader title={title} subtitle={subtitle} />

      <div className={`container ${styles.layout}`}>
        <aside className={`card ${styles.sidebar}`}>
          <div className={styles.sidebarTitle}>Категорії</div>

          <nav className={styles.nav}>
            <div className={styles.navGroup}>
              <Link className={styles.navLink} href="/katalog">
                Усі роботи
              </Link>
            </div>

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
        </section>
      </div>
    </main>
  );
}
