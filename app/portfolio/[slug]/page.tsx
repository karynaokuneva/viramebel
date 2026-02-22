import Link from "next/link";
import { projects } from "@/data/projects";
import { PageHeader } from "@/components/PageHeader";
import { PlaceholderImage } from "@/components/PlaceholderImage";
import styles from "./project.module.css";

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return (
      <main>
        <PageHeader
          title="Проєкт не знайдено"
          subtitle="Схоже, такого проєкту немає."
        />
        <div className="container">
          <Link
            href="/katalog"
            style={{ color: "var(--primary)", fontWeight: 800 }}
          >
            Повернутися до каталогу
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main>
      <PageHeader
        title={project.title ?? "Проєкт"}
        subtitle={
          project.material
            ? `Матеріал: ${project.material}`
            : "Приклад виконаної роботи"
        }
      />

      <div className="container" style={{ paddingBottom: 28 }}>
        <div className={styles.top}>
          <div className="card" style={{ padding: 16 }}>
            <div className={styles.metaTitle}>Коротко</div>
            <div className={styles.metaText}>
              {project.description ??
                "Опис можна додати пізніше (не обовʼязково)."}
            </div>

            <Link href="/rozrahunok" className={styles.cta}>
              Замовити розрахунок подібного
            </Link>
          </div>

          <PlaceholderImage label={project.coverLabel} height={260} />
        </div>

        <h2 className={styles.h2}>Галерея</h2>

        <div className={styles.grid}>
          {project.galleryLabels.map((label, idx) => (
            <PlaceholderImage key={idx} label={label} height={220} />
          ))}
        </div>
      </div>
    </main>
  );
}
