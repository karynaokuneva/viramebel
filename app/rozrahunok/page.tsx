import { PageHeader } from "@/components/PageHeader";
import { LeadForm } from "@/components/LeadForm";

export default function EstimatePage() {
  return (
    <main>
      <PageHeader
        title="Замовити розрахунок"
        subtitle="Заповніть коротку форму — уточнимо деталі та повернемося з розрахунком."
      />

      <div className="container" style={{ paddingBottom: 28 }}>
        <LeadForm variant="estimate" />
      </div>
    </main>
  );
}
