"use client";

import { useMemo, useState } from "react";
import styles from "./LeadForm.module.css";

type Variant = "contact" | "estimate";
type Messenger = "telegram" | "viber" | "whatsapp";

type ContactState = {
  name: string;
  phoneOrEmail: string;
  messengers: Messenger[];
  message: string;
};

type EstimateState = {
  name: string;
  phoneOrEmail: string;
  messengers: Messenger[];

  material: string;
  layout: string;
  size: string;

  message: string;
  file: File | null;
};

const contactInitial: ContactState = {
  name: "",
  phoneOrEmail: "",
  messengers: [],
  message: "",
};

const estimateInitial: EstimateState = {
  name: "",
  phoneOrEmail: "",
  messengers: [],

  material: "ЛДСП",
  layout: "Пряма",
  size: "",

  message: "",
  file: null,
};

function toggleMessenger(list: Messenger[], item: Messenger) {
  return list.includes(item) ? list.filter((x) => x !== item) : [...list, item];
}

export function LeadForm({ variant }: { variant: Variant }) {
  const [sent, setSent] = useState(false);

  const [contact, setContact] = useState<ContactState>(contactInitial);
  const [estimate, setEstimate] = useState<EstimateState>(estimateInitial);

  // 1) Выбираем “активное состояние” в зависимости от варианта формы
  const state = variant === "contact" ? contact : estimate;

  // 2) Заголовки (UI-часть)
  const title =
    variant === "contact" ? "Звʼязатися з нами" : "Розрахувати вартість";
  const subtitle =
    variant === "contact"
      ? "Залиште контакт — ми відповімо та підкажемо деталі."
      : "Заповніть коротку форму — уточнимо деталі та повернемося з розрахунком.";

  // 3) Типобезопасные обновлялки полей (без any)
  function updateContact<K extends keyof ContactState>(
    key: K,
    value: ContactState[K],
  ) {
    setContact((prev) => ({ ...prev, [key]: value }));
  }

  function updateEstimate<K extends keyof EstimateState>(
    key: K,
    value: EstimateState[K],
  ) {
    setEstimate((prev) => ({ ...prev, [key]: value }));
  }

  // 4) Валидация (минимальная, как у тебя)
  const errors = useMemo(() => {
    const e: { name?: string; phoneOrEmail?: string; size?: string } = {};

    if (state.name.trim().length < 2) e.name = "Вкажіть імʼя (мін. 2 символи)";
    if (state.phoneOrEmail.trim().length < 5)
      e.phoneOrEmail = "Вкажіть телефон або email";

    if (variant === "estimate") {
      const s = (state as EstimateState).size.trim();
      if (s.length < 1) e.size = "Вкажіть розмір (наприклад: 3.2 м)";
    }

    return e;
  }, [state, variant]);

  const canSubmit = Object.keys(errors).length === 0;

  function reset() {
    setSent(false);
    setContact(contactInitial);
    setEstimate(estimateInitial);
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!canSubmit) return;

    // Пока что “заглушка”: выводим данные в консоль
    console.log("LEAD FORM SUBMIT:", { variant, data: state });

    setSent(true);
  }

  // 5) UI после успешной “отправки”
  if (sent) {
    return (
      <div className={`card ${styles.wrap}`} style={{ padding: 16 }}>
        <div className={styles.sentTitle}>Дякуємо!</div>
        <div className={styles.sentText}>
          Ми звʼяжемося з вами найближчим часом.
        </div>
        <button className={styles.secondaryBtn} type="button" onClick={reset}>
          Відправити ще одну заявку
        </button>
      </div>
    );
  }

  // 6) Основной UI формы
  return (
    <form className={`card ${styles.wrap}`} onSubmit={onSubmit}>
      <div className={styles.head}>
        <div>
          <div className={styles.title}>{title}</div>
          <div className={styles.subtitle}>{subtitle}</div>
        </div>
      </div>

      <div className={styles.grid}>
        {/* --- Имя --- */}
        <div className={styles.field}>
          <label className={styles.label}>Імʼя*</label>

          {variant === "contact" ? (
            <input
              className={styles.input}
              value={contact.name}
              onChange={(e) => updateContact("name", e.target.value)}
              placeholder="Ваше імʼя"
            />
          ) : (
            <input
              className={styles.input}
              value={estimate.name}
              onChange={(e) => updateEstimate("name", e.target.value)}
              placeholder="Ваше імʼя"
            />
          )}

          {errors.name ? (
            <div className={styles.error}>{errors.name}</div>
          ) : null}
        </div>

        {/* --- Телефон / Email --- */}
        <div className={styles.field}>
          <label className={styles.label}>Телефон або email*</label>

          {variant === "contact" ? (
            <input
              className={styles.input}
              value={contact.phoneOrEmail}
              onChange={(e) => updateContact("phoneOrEmail", e.target.value)}
              placeholder="+38(...) або email"
            />
          ) : (
            <input
              className={styles.input}
              value={estimate.phoneOrEmail}
              onChange={(e) => updateEstimate("phoneOrEmail", e.target.value)}
              placeholder="+38(...) або email"
            />
          )}

          {errors.phoneOrEmail ? (
            <div className={styles.error}>{errors.phoneOrEmail}</div>
          ) : null}
        </div>

        {/* --- Мессенджеры --- */}
        <div className={styles.field}>
          <label className={styles.label}>Зручно відповісти через</label>

          <div className={styles.checkRow}>
            {(["telegram", "viber", "whatsapp"] as Messenger[]).map((m) => {
              const label =
                m === "telegram"
                  ? "Telegram"
                  : m === "viber"
                    ? "Viber"
                    : "WhatsApp";

              const checked =
                variant === "contact"
                  ? contact.messengers.includes(m)
                  : estimate.messengers.includes(m);

              const onToggle = () => {
                if (variant === "contact") {
                  updateContact(
                    "messengers",
                    toggleMessenger(contact.messengers, m),
                  );
                } else {
                  updateEstimate(
                    "messengers",
                    toggleMessenger(estimate.messengers, m),
                  );
                }
              };

              return (
                <label key={m} className={styles.check}>
                  <input
                    type="checkbox"
                    checked={checked}
                    onChange={onToggle}
                  />
                  <span>{label}</span>
                </label>
              );
            })}
          </div>
        </div>

        {/* --- Поля расчёта (только для estimate) --- */}
        {variant === "estimate" ? (
          <>
            <div className={styles.field}>
              <label className={styles.label}>Матеріал</label>
              <select
                className={styles.input}
                value={estimate.material}
                onChange={(e) => updateEstimate("material", e.target.value)}
              >
                <option>ЛДСП</option>
                <option>МДФ</option>
                <option>Пластик</option>
                <option>Фарбований МДФ</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Розташування</label>
              <select
                className={styles.input}
                value={estimate.layout}
                onChange={(e) => updateEstimate("layout", e.target.value)}
              >
                <option>Пряма</option>
                <option>Кутова</option>
                <option>П-подібна</option>
              </select>
            </div>

            <div className={styles.field}>
              <label className={styles.label}>Розмір (пог. м.)*</label>
              <input
                className={styles.input}
                value={estimate.size}
                onChange={(e) => updateEstimate("size", e.target.value)}
                placeholder="Напр.: 3.2 м"
              />
              {errors.size ? (
                <div className={styles.error}>{errors.size}</div>
              ) : null}
            </div>

            <div className={styles.field}>
              <label className={styles.label}>
                План / фото (не обовʼязково)
              </label>
              <input
                className={styles.input}
                type="file"
                onChange={(e) =>
                  updateEstimate("file", e.target.files?.[0] ?? null)
                }
              />
              <div className={styles.hint}>
                Поки що файл не відправляємо — підключимо пізніше.
              </div>
            </div>
          </>
        ) : null}

        {/* --- Сообщение --- */}
        <div className={styles.field} style={{ gridColumn: "1 / -1" }}>
          <label className={styles.label}>Повідомлення (не обовʼязково)</label>

          {variant === "contact" ? (
            <textarea
              className={styles.textarea}
              value={contact.message}
              onChange={(e) => updateContact("message", e.target.value)}
              placeholder="Коротко опишіть, що потрібно"
            />
          ) : (
            <textarea
              className={styles.textarea}
              value={estimate.message}
              onChange={(e) => updateEstimate("message", e.target.value)}
              placeholder="Коротко опишіть, що потрібно"
            />
          )}
        </div>
      </div>

      <div className={styles.actions}>
        <button
          className={styles.primaryBtn}
          type="submit"
          disabled={!canSubmit}
        >
          {variant === "contact" ? "Надіслати заявку" : "Дізнатись вартість"}
        </button>

        <div className={styles.smallNote}>
          Після відправки ми звʼяжемося з вами протягом дня.
        </div>
      </div>
    </form>
  );
}
