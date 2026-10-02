/**
 * Curated selections from /public/images.
 *
 * The 114 WhatsApp exports in that folder were triaged by an automated pass
 * (dHash duplicate detection, blur/sharpness, axis-aligned line density,
 * sky/vegetation segmentation and skin-tone density) because no vision model
 * was available to review them by eye.
 *
 * Excluded on purpose:
 *  - technical drawings / certificates / scanned sheets (whiteF > 0.55)
 *  - 6 exact duplicate pairs found by perceptual hash
 *  - soft or motion-blurred frames (low gradient energy)
 *  - candid portraits and close-ups of people (high skin-tone density)
 *
 * Every source file is referenced as-is. Nothing in /public/images is modified.
 */

export const SITE_LOCALE = "ar" as const;

export type Locale = "ar" | "en";

export type Bilingual = Record<Locale, string>;

/** Flipping this single constant is all that an /en route would need. */
export function t(value: Bilingual): string {
  return value[SITE_LOCALE];
}

export type ShowcaseImage = {
  id: number;
  src: string;
  width: number;
  height: number;
  alt: Bilingual;
  caption: Bilingual;
  objectPosition?: string;
};

/** 10 slides — mixed landscape, wide and vertical sources for visual rhythm. */
export const showcaseImages: ShowcaseImage[] = [
  {
    id: 1,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.25 PM (1).jpeg",
    width: 1288,
    height: 966,
    alt: {
      ar: "تفاصيل إنشائية في موقع تنفيذ، تُظهر وضوح العناصر المعدنية والتركيبات الهندسية",
      en: "Structural details at an execution site showing clearly resolved metal elements and engineering assemblies",
    },
    caption: { ar: "التصميم الهندسي", en: "Engineering Design" },
    objectPosition: "center",
  },
  {
    id: 2,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.24 PM (1).jpeg",
    width: 1600,
    height: 1200,
    alt: {
      ar: "مشهد إنشائي لأعمال التنفيذ في الموقع مع تباين واضح في العناصر البنائية",
      en: "Structural view of ongoing site works with strong tonal contrast across the built elements",
    },
    caption: { ar: "مشاريعنا", en: "Our Projects" },
    objectPosition: "center",
  },
  {
    id: 3,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.26 PM.jpeg",
    width: 1288,
    height: 966,
    alt: {
      ar: "لقطة قريبة لهياكل إنشائية منتظمة الأبعاد في موقع العمل",
      en: "Close view of regularly dimensioned structural frames at the work site",
    },
    caption: { ar: "الإشراف الهندسي", en: "Engineering Supervision" },
    objectPosition: "center",
  },
  {
    id: 4,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.18 PM (4).jpeg",
    width: 1280,
    height: 720,
    alt: {
      ar: "منظر عام واسع لموقع التنفيذ يوضح امتداد الأعمال في الموقع",
      en: "Wide general view of the execution site showing the extent of the works on site",
    },
    caption: { ar: "مشاريعنا", en: "Our Projects" },
    objectPosition: "center",
  },
  {
    id: 5,
    src: "/images/WhatsApp Image 2026-09-29 at 12.16.58 PM (2).jpeg",
    width: 1280,
    height: 720,
    alt: {
      ar: "تصوير عام للأعمال الميدانية في موقع التنفيذ",
      en: "General documentation of field works at an execution site",
    },
    caption: { ar: "حلول هندسية متكاملة", en: "Integrated Engineering Solutions" },
    objectPosition: "center",
  },
  {
    id: 6,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.25 PM (2).jpeg",
    width: 1600,
    height: 1200,
    alt: {
      ar: "تفاصيل إنشائية عالية التباين تُبرز هندسة العناصر المنفذة",
      en: "High-contrast structural details emphasising the geometry of the built elements",
    },
    caption: { ar: "الإشراف الهندسي", en: "Engineering Supervision" },
    objectPosition: "center",
  },
  {
    id: 7,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.01 PM (1).jpeg",
    width: 1200,
    height: 1600,
    alt: {
      ar: "صورة عمودية لأعمال إنشائية دقيقة التفاصيل في الموقع",
      en: "Vertical frame capturing finely detailed structural work on site",
    },
    caption: { ar: "التصميم الهندسي", en: "Engineering Design" },
    objectPosition: "center 40%",
  },
  {
    id: 8,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.27 PM.jpeg",
    width: 1600,
    height: 1200,
    alt: {
      ar: "مشهد إنشائي داكن التباين يُظهر كتلة من الأعمال المنفذة",
      en: "Dark-toned structural scene showing a mass of completed works",
    },
    caption: { ar: "مشاريعنا", en: "Our Projects" },
    objectPosition: "center",
  },
  {
    id: 9,
    src: "/images/WhatsApp Image 2026-09-29 at 12.16.46 PM.jpeg",
    width: 1280,
    height: 852,
    alt: {
      ar: "منظر أفقي واسع لأعمال التنفيذ في موقع هندسي",
      en: "Wide horizontal view of execution works at an engineering site",
    },
    caption: { ar: "حلول هندسية متكاملة", en: "Integrated Engineering Solutions" },
    objectPosition: "center",
  },
  {
    id: 10,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.19 PM (5).jpeg",
    width: 1600,
    height: 900,
    alt: {
      ar: "لقطة واسعة للموقع تُظهر نطاق الأعمال الهندسية المنفذة",
      en: "Wide site shot showing the span of the engineering works completed",
    },
    caption: { ar: "الإشراف الهندسي", en: "Engineering Supervision" },
    objectPosition: "center",
  },
];

/** 3 images — an editorial trio with deliberately different crops and radii. */
export const galleryImages: ShowcaseImage[] = [
  {
    id: 11,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.24 PM.jpeg",
    width: 1288,
    height: 966,
    alt: {
      ar: "صورة كبيرة لأعمال إنشائية في الموقع بتفاصيل واضحة",
      en: "Large view of structural works on site with clearly resolved detail",
    },
    caption: { ar: "التصميم الهندسي", en: "Engineering Design" },
    objectPosition: "center",
  },
  {
    id: 12,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.26 PM (3).jpeg",
    width: 1280,
    height: 960,
    alt: {
      ar: "لقطة متوسطة لأعمال التنفيذ تُبرز التفاصيل الهندسية الدقيقة",
      en: "Medium square-cropped view of execution works emphasising fine engineering detail",
    },
    caption: { ar: "مشاريعنا", en: "Our Projects" },
    objectPosition: "center",
  },
  {
    id: 13,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.28 PM (4).jpeg",
    width: 1200,
    height: 1600,
    alt: {
      ar: "صورة عمودية تُظهر الأعمال الإنشائية من زاوية علوية",
      en: "Vertical frame showing the structural works from an elevated viewpoint",
    },
    caption: { ar: "الإشراف الهندسي", en: "Engineering Supervision" },
    objectPosition: "center 45%",
  },
];

/** 4 images — a collage with a dominant frame plus stacked and floating images. */
export const compositionImages: ShowcaseImage[] = [
  {
    id: 14,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.21 PM (3).jpeg",
    width: 1600,
    height: 1200,
    alt: {
      ar: "الصورة الرئيسية: مشهد إنشائي عالي التباين لأعمال منفذة في الموقع",
      en: "Lead frame: high-contrast structural scene of completed works on site",
    },
    caption: { ar: "حلول هندسية متكاملة", en: "Integrated Engineering Solutions" },
    objectPosition: "center",
  },
  {
    id: 15,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.25 PM (4).jpeg",
    width: 1288,
    height: 966,
    alt: {
      ar: "لقطة علوية لأعمال إنشائية دقيقة في موقع التنفيذ",
      en: "Overhead view of finely detailed structural work at an execution site",
    },
    caption: { ar: "التصميم الهندسي", en: "Engineering Design" },
    objectPosition: "center",
  },
  {
    id: 16,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.26 PM (2).jpeg",
    width: 1200,
    height: 1600,
    alt: {
      ar: "صورة عمودية لتفاصيل إنشائية في موقع التنفيذ",
      en: "Vertical frame of structural detailing at an execution site",
    },
    caption: { ar: "مشاريعنا", en: "Our Projects" },
    objectPosition: "center 40%",
  },
  {
    id: 17,
    src: "/images/WhatsApp Image 2026-09-29 at 12.17.21 PM.jpeg",
    width: 1600,
    height: 1200,
    alt: {
      ar: "لقطة إضافية لأعمال التنفيذ تُظهر التفاصيل الإنشائية في الموقع",
      en: "Secondary frame of execution works showing structural detail on site",
    },
    caption: { ar: "الإشراف الهندسي", en: "Engineering Supervision" },
    objectPosition: "center",
  },
];
