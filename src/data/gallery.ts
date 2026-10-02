export type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category?: string;
};

function encodePath(path: string): string {
  return path.replace(/ /g, "%20");
}

export const galleryImages: GalleryImage[] = [
  { id: 1, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.47 PM.jpeg"), alt: "فوانيس إنارة LED على أعمدة طريقية", category: "فوانيس" },
  { id: 2, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.49 PM.jpeg"), alt: "ممرات مشاة مضاءة في مشروع سكني", category: "ممرات" },
  { id: 3, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.50 PM.jpeg"), alt: "ساحة عامة مضاءة بتصميم معماري", category: "ساحات" },
  { id: 4, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.51 PM.jpeg"), alt: "تفاصيل تركيب عمود إنارة ديكوري", category: "تفاصيل" },
  { id: 5, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.52 PM.jpeg"), alt: "مجمع صناعي بإنارة متكاملة", category: "صناعي" },
  { id: 6, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.53 PM.jpeg"), alt: "أعمدة إنارة ديكورية في مشروع تراثي", category: "ديكورية" },
  { id: 7, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.54 PM.jpeg"), alt: "طريق رئيسي بإنارة عالية الكفاءة", category: "طرق سريعة" },
  { id: 8, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.57 PM.jpeg"), alt: "تمديدات كابلات أرضية للمشروع", category: "كابلات" },
  { id: 9, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.59 PM.jpeg"), alt: "إنارة ليلية لطريق سريع", category: "ليلية" },
  { id: 10, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.00 PM.jpeg"), alt: "أعمدة إنارة بتصميم عصري", category: "أعمدة" },
  { id: 11, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.04 PM.jpeg"), alt: "منشأة تجارية مضاءة ليلاً", category: "منشآت" },
  { id: 12, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.05 PM.jpeg"), alt: "عناصر إنارة جمالية في ممشى", category: "جمالية" },
  { id: 13, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.17 PM.jpeg"), alt: "تركيب فوانيس على أعمدة رئيسية", category: "تركيب" },
];

export const editorialImages: GalleryImage[] = [
  { id: 1, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.19 PM.jpeg"), alt: "تفاصيل عمود إنارة ديكوري بتصميم تراثي", category: "تفاصيل" },
  { id: 2, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.20 PM.jpeg"), alt: "فريق هندسي في موقع المشروع", category: "فريق" },
  { id: 3, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.23 PM.jpeg"), alt: "طريق داخلي في مشروع سكني", category: "طرق" },
];

export const compositionImages: GalleryImage[] = [
  { id: 1, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.22 PM.jpeg"), alt: "ساحة عامة مضاءة ليلاً بتصميم معماري", category: "ساحات" },
  { id: 2, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.24 PM.jpeg"), alt: "تفاصيل تركيب وحدة إنارة", category: "تفاصيل" },
  { id: 3, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.25 PM.jpeg"), alt: "منظور جوي لمشروع إنارة متكامل", category: "جوي" },
  { id: 4, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.17.26 PM.jpeg"), alt: "أعمدة إنارة على طريق رئيسي", category: "أعمدة" },
  { id: 5, src: encodePath("/images/WhatsApp Image 2026-09-29 at 12.16.54 PM.jpeg"), alt: "طريق رئيسي بإنارة عالية الكفاءة", category: "طرق سريعة" },
];