export type NavSubmenu = "services" | "projects";

export type NavItem = {
  title: string;
  href: string;
  submenu?: NavSubmenu;
};

export const NAV_ITEMS: NavItem[] = [
  {
    title: "الصفحة الرئيسية",
    href: "/",
  },
  {
    title: "من نحن",
    href: "/about",
  },
  {
    title: "خدماتنا",
    href: "/services",
    submenu: "services",
  },
  {
    title: "الكتالوج",
    href: "/catalog",
  },
  {
    title: "المشاريع",
    href: "/projects",
    submenu: "projects",
  },
  {
    title: "اتصل بنا",
    href: "/contact",
  },
];

export const footerLinks = [
  {
    title: "الصفحة الرئيسية",
    href: "/",
  },
  {
    title: "من نحن",
    href: "/about",
  },
  {
    title: "خدماتنا",
    href: "/services",
  },
  {
    title: "المشاريع",
    href: "/projects",
  },
  {
    title: "اتصل بنا",
    href: "/contact",
  },
];

export const footerServices = [
  "أعمدة الإنارة",
  "فوانيس الإنارة",
  "إنارة الطرق",
  "لمبات الليد",
  "المحطات الكهربائية",
];

export const contactInfo = {
  email1: "khalidisok@yahoo.com",
  email2: "mangment@diamondlights.site",
  phone: "+966540212965",
  location: "الرياض - السلي - مخرج 18",
  mapsUrl:
    "https://www.google.com/maps/search/?api=1&query=%D8%A7%D9%84%D8%B1%D9%8A%D8%A7%D8%B6+%D8%A7%D9%84%D8%B3%D9%84%D9%8A+%D9%85%D8%AE%D8%B1%D8%AC+18",
};

export const catalogInfo = {
  title: "كتالوج منتجاتنا",
  description:
    "حمّل كتالوج شركة الضوء الماسي واطّلع على تشكيلة أعمدة الإنارة، الفوانيس، حلول LED، والمستلزمات الكهربائية.",
  fileUrl: "/catalog/catalog.pdf",
  fileName: "diamond-catalog.pdf",
  coverImage: "/services/service-1.jpg",
};
