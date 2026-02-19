import { PageHeader } from "@/components/PageHeader";

export default function ServicesPage() {
  return (
    <main>
      <PageHeader
        title="Послуги"
        subtitle="Замір, дизайн-проєкт, виготовлення та монтаж — під ключ."
      />
      <div className="container">
        <div className="card" style={{ padding: 16 }}>
          Тут буде список послуг + етапи.
        </div>
      </div>
    </main>
  );
}
