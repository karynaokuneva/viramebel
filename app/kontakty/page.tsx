import { PageHeader } from "@/components/PageHeader";

export default function ContactsPage() {
  return (
    <main>
      <PageHeader
        title="Контакти"
        subtitle="Звʼяжіться з нами — підкажемо по матеріалах, термінах та вартості."
      />
      <div className="container">
        <div className="card" style={{ padding: 16 }}>
          Тут буде телефон/месенджери/карта + міні-форма.
        </div>
      </div>
    </main>
  );
}
