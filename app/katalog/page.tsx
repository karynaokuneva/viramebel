import { PageHeader } from "@/components/PageHeader";

export default function CatalogPage() {
  return (
    <main>
      <PageHeader
        title="Каталог робіт"
        subtitle="Приклади наших проєктів: кухні, шафи-купе, гардеробні та інші меблі на замовлення."
      />

      <div className="container">
        <div className="card" style={{ padding: 16 }}>
          Тут буде сітка проєктів (заглушки → потім реальні фото).
        </div>
      </div>
    </main>
  );
}
