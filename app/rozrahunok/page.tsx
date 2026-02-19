import { PageHeader } from "@/components/PageHeader";

export default function EstimatePage() {
  return (
    <main>
      <PageHeader
        title="Замовити розрахунок"
        subtitle="Заповніть коротку форму — ми уточнимо деталі та повернемося з розрахунком."
      />
      <div className="container">
        <div className="card" style={{ padding: 16 }}>
          Тут буде форма (зробимо наступним кроком як окремий компонент).
        </div>
      </div>
    </main>
  );
}
