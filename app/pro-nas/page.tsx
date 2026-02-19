import { PageHeader } from "@/components/PageHeader";

export default function AboutPage() {
  return (
    <main>
      <PageHeader
        title="Про нас"
        subtitle="Ми виготовляємо меблі на замовлення в Одесі та області. Працюємо за розмірами, ескізами та дизайн-проєктами."
      />
      <div className="container">
        <div className="card" style={{ padding: 16 }}>
          Тут буде історія, принципи роботи, гарантія.
        </div>
      </div>
    </main>
  );
}
