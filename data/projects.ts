export type Project = {
  id: string;
  slug: string;
  title?: string; // опционально (как ты хотела)
  categorySlug: string; // "kukhni"
  subSlug?: string; // "plastyk"
  coverLabel: string; // для заглушки
  galleryLabels: string[]; // заглушки для внутренних фото
  material?: string; // опционально
  description?: string; // опционально
};

export const projects: Project[] = [
  {
    id: "p1",
    slug: "kukhna-plastyk-svitla-001",
    title: "Кухня з пластику, світла",
    categorySlug: "kukhni",
    subSlug: "plastyk",
    coverLabel: "Кухня • пластик",
    galleryLabels: ["Фото 1", "Фото 2", "Фото 3"],
    material: "Пластик",
    description: "Світлі фасади, акуратний монтаж, під стелю.",
  },
  {
    id: "p2",
    slug: "kukhna-mdf-002",
    categorySlug: "kukhni",
    subSlug: "mdf",
    coverLabel: "Кухня • МДФ",
    galleryLabels: ["Фото 1", "Фото 2"],
    material: "МДФ",
  },
  {
    id: "p3",
    slug: "shafa-vbudovana-001",
    title: "Шафа-купе вбудована",
    categorySlug: "shafy-kupe",
    subSlug: "vbudovani",
    coverLabel: "Шафа-купе • вбудована",
    galleryLabels: ["Фото 1", "Фото 2", "Фото 3"],
  },
  {
    id: "p4",
    slug: "vitalnya-001",
    title: "Вітальня під ТВ",
    categorySlug: "vitalni",
    coverLabel: "Вітальня",
    galleryLabels: ["Фото 1", "Фото 2"],
  },
  {
    id: "p5",
    slug: "garderobna-001",
    categorySlug: "garderobni",
    coverLabel: "Гардеробна",
    galleryLabels: ["Фото 1", "Фото 2", "Фото 3"],
  },
];
