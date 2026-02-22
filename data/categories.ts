export type Category = {
  id: string; // для будущей БД
  slug: string; // для URL
  title: string; // отображение
  sub?: { slug: string; title: string }[];
};

export const categories: Category[] = [
  {
    id: "cat-kitchens",
    slug: "kukhni",
    title: "Кухні",
    sub: [
      { slug: "mdf", title: "Фасади МДФ" },
      { slug: "plastyk", title: "Пластик" },
      { slug: "kutovi", title: "Кутові" },
      { slug: "pryami", title: "Прямі" },
    ],
  },
  {
    id: "cat-wardrobes",
    slug: "shafy-kupe",
    title: "Шафи-купе",
    sub: [
      { slug: "vbudovani", title: "Вбудовані" },
      { slug: "kutovi", title: "Кутові" },
      { slug: "dzеркальні", title: "Дзеркальні" },
    ],
  },
  { id: "cat-living", slug: "vitalni", title: "Вітальні" },
  { id: "cat-closet", slug: "garderobni", title: "Гардеробні" },
  { id: "cat-hall", slug: "pryhozhi", title: "Передпокої" },
];
