import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { projects } from "@/data/projects";
import { categories } from "@/data/categories";
import { PageHeader } from "@/components/PageHeader";
import { LeadForm } from "@/components/LeadForm";
import { PlaceholderImage } from "@/components/PlaceholderImage";

import styles from "./project.module.css";

type PageProps = {
  params: Promise<{ slug: string }>;
};

// ✅ SEO для проекта
export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) return { title: "Проєкт не знайдено | ViraMebel" };

  const title = project.title
    ? `${project.title} | ViraMebel`
    : `Проєкт | ViraMebel`;

  const description =
    project.description ??
    "Портфоліо меблів на замовлення в Одесі та області. Дізнайтесь вартість — залиште заявку.";

  return { title, description };
}

function getCategoryTitle(slug: string) {
  return categories.find((c) => c.slug === slug)?.title ?? slug;
}

export default async function ProjectPage({ params }: PageProps) {
  const { slug } = await params;

  const project = projects.find((p) => p.slug === slug);
  if (!project) return notFound();

  const categoryTitle = getCategoryTitle(project.categorySlug);

  return (
    <main>
      <PageHeader
        title={project.title ?? "Проєкт"}
        subtitle={`${categoryTitle}${project.subSlug ? ` • ${project.subSlug}` : ""}`}
      />

      <div className={`container ${styles.wrap}`}>
        {/* ЛЕВАЯ КОЛОНКА: фото */}
        <div className={`card ${styles.media}`}>
          <PlaceholderImage label={project.coverLabel} height={420} />
          <div className={styles.gallery}>
            {project.galleryLabels.map((g) => (
              <div key={g} className={styles.thumb}>
                <PlaceholderImage label={g} height={120} />
              </div>
            ))}
          </div>
        </div>

        {/* ПРАВАЯ КОЛОНКА: инфо */}
        <aside className={`card ${styles.info}`}>
          <div className={styles.metaRow}>
            <span className={styles.badge}>{categoryTitle}</span>
            {project.material ? (
              <span className={styles.badgeMuted}>{project.material}</span>
            ) : null}
          </div>

          {project.description ? (
            <p className={styles.desc}>{project.description}</p>
          ) : (
            <p className={styles.descMuted}>
              Опис додамо пізніше. Можемо розрахувати вартість під ваші розміри.
            </p>
          )}

          <div className={styles.actions}>
            <Link className={styles.primary} href="/rozrahunok">
              Замовити розрахунок
            </Link>
            <Link className={styles.secondary} href="/kontakty">
              Зв’язатися з нами
            </Link>
          </div>

          <div className={styles.form}>
            {/* Переиспользуемая форма */}
            <LeadForm variant="contact" />
          </div>
        </aside>
      </div>
    </main>
  );
}
