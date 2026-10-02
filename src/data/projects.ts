export type ProjectType = {
  id: string;
  label: string;
  color: string;
};

export const PROJECT_TYPES: ProjectType[] = [
  { id: "all", label: "الكل", color: "primary" },
  { id: "government", label: "حكومية / بلدية", color: "primary" },
  { id: "residential", label: "سكنية / تراثية", color: "amber" },
  { id: "commercial", label: "تجارية / حضرية", color: "emerald" },
  { id: "industrial", label: "صناعية", color: "orange" },
];

export type Project = {
  id: number;
  title: string;
  slug: string;
  year: string;
  image: string;
  location: string;
  description: string;
  scope: string[];
  type: string;
};

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "مشروع أمانة حفر الباطن",
    slug: "hafr-albatin",
    year: "2025",
    image: "/projects/project-1.png",
    location: "حفر الباطن — المملكة العربية السعودية",
    description:
      "مشروع شامل لإنارة الطرق والمساحات العامة في أمانة حفر الباطن، يشمل توريد وتركيب أعمدة الإنارة وأنظمة LED عالية الكفاءة.",
    scope: [
      "توريد أعمدة إنارة طريقية",
      "تركيب أنظمة LED",
      "اختبار وتشغيل المشروع",
      "الالتزام بالمواصفات المعتمدة",
    ],
    type: "government",
  },
  {
    id: 2,
    title: "مشروع القرية الشعبية الرياض",
    slug: "riyadh-village",
    year: "2025",
    image: "/projects/project-2.png",
    location: "الرياض — المملكة العربية السعودية",
    description:
      "تنفيذ حلول إنارة ديكورية وطريقية للقرية الشعبية بالرياض، بما يعكس الهوية التراثية مع تقنيات إنارة حديثة.",
    scope: [
      "أعمدة إنارة ديكورية",
      "إنارة الممرات والساحات",
      "تصميم متناسق مع البيئة",
      "تسليم في الموعد المحدد",
    ],
    type: "residential",
  },
  {
    id: 3,
    title: "مشروع دولة الكويت",
    slug: "kuwait-project",
    year: "2025",
    image: "/projects/project-3.png",
    location: "الكويت",
    description:
      "مشروع إنارة خارجي في دولة الكويت يشمل توريد وتنفيذ أنظمة إنارة متكاملة لمساحات حضرية واسعة.",
    scope: [
      "حلول إنارة متكاملة",
      "توريد معدات معتمدة",
      "تنفيذ احترافي",
      "دعم فني مستمر",
    ],
    type: "commercial",
  },
  {
    id: 4,
    title: "مشروع المدينة الصناعية",
    slug: "industrial-city",
    year: "2025",
    image: "/projects/project-4.png",
    location: "المدينة الصناعية — المملكة العربية السعودية",
    description:
      "إنارة شاملة للمدينة الصناعية تشمل الطرق الداخلية والمناطق اللوجستية بمعايير أمان وكفاءة عالية.",
    scope: [
      "إنارة طرق صناعية",
      "أعمدة مقاومة للظروف القاسية",
      "أنظمة تحكم ذكية",
      "صيانة ما بعد التسليم",
    ],
    type: "industrial",
  },
];

export function getProjectBySlug(slug: string) {
  return PROJECTS.find((project) => project.slug === slug);
}

export function getProjectsByType(type: string) {
  if (type === "all") return PROJECTS;
  return PROJECTS.filter((project) => project.type === type);
}

export function getProjectType(typeId: string) {
  return PROJECT_TYPES.find((type) => type.id === typeId);
}