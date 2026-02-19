export default function HomePage() {
  return (
    <main style={{ padding: "40px 16px" }}>
      <div style={{ maxWidth: 1120, margin: "0 auto" }}>
        <h1 style={{ fontSize: 40, margin: 0 }}>ViraMebel</h1>
        <p style={{ marginTop: 12, color: "#6b7280" }}>
          Меблі на замовлення в Одесі. Це тестова головна сторінка — далі
          зробимо дизайн.
        </p>

        <div
          style={{ marginTop: 24, display: "flex", gap: 12, flexWrap: "wrap" }}
        >
          <a
            href="/rozrahunok"
            style={{
              background: "#D86000",
              color: "white",
              padding: "12px 18px",
              borderRadius: 999,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Замовити розрахунок
          </a>

          <a
            href="/katalog"
            style={{
              border: "1px solid rgba(17,24,39,0.15)",
              padding: "12px 18px",
              borderRadius: 999,
              fontWeight: 600,
              textDecoration: "none",
            }}
          >
            Перейти в каталог
          </a>
        </div>
      </div>
    </main>
  );
}
