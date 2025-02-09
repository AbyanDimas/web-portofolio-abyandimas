import { Icons } from "@/components/common/icons";

export interface skillsInterface {
  name: string;
  description: string;
  rating: number;
  icon: any;
}

export const skillsUnsorted: skillsInterface[] = [
  {
    name: "Next.js",
    description:
      "Membangun aplikasi dinamis dengan mudah menggunakan routing, layout, UI pemuatan, dan API routes.",
    rating: 5,
    icon: Icons.nextjs,
  },
  {
    name: "React",
    description:
      "Membuat antarmuka pengguna interaktif menggunakan komponen, state, props, dan virtual DOM.",
    rating: 5,
    icon: Icons.react,
  },
  {
    name: "express.js",
    description:
      "Membangun aplikasi web dan API dengan cepat menggunakan framework Node.js yang ringan.",
    rating: 5,
    icon: Icons.express,
  },
  {
    name: "Node.js",
    description:
      "Menjalankan JavaScript di sisi server untuk aplikasi yang dinamis dan responsif.",
    rating: 5,
    icon: Icons.nodejs,
  },
  {
    name: "MongoDB",
    description:
      "Menyimpan dan mengambil data dengan mudah menggunakan database NoSQL yang fleksibel dan skala besar.",
    rating: 5,
    icon: Icons.mongodb,
  },
  {
    name: "Typescript",
    description:
      "Meningkatkan JavaScript dengan tipe statis untuk membuat kode lebih dapat dimengerti dan andal.",
    rating: 5,
    icon: Icons.typescript,
  },
  {
    name: "Javascript",
    description:
      "Menciptakan pengalaman web interaktif dan dinamis dengan bahasa pemrograman yang serbaguna.",
    rating: 5,
    icon: Icons.javascript,
  },
  {
    name: "HTML 5",
    description:
      "Membuat struktur konten web dengan versi terbaru dari HyperText Markup Language.",
    rating: 4,
    icon: Icons.html5,
  },
  {
    name: "CSS 3",
    description:
      "Mendesain halaman web secara kreatif dengan Cascading Style Sheets versi terbaru.",
    rating: 4,
    icon: Icons.css3,
  },
  {
    name: "Material UI",
    description:
      "Membuat antarmuka pengguna yang menarik dan responsif dengan framework React populer.",
    rating: 4,
    icon: Icons.mui,
  },
  {
    name: "Tailwind CSS",
    description:
      "Mendesain situs modern dan indah lebih cepat dengan framework CSS berbasis utilitas.",
    rating: 5,
    icon: Icons.tailwindcss,
  },
  {
    name: "AWS",
    description:
      "Menggunakan Amazon Web Services untuk membangun dan mendistribusikan aplikasi yang skala besar, andal, dan aman.",
    rating: 3,
    icon: Icons.amazonaws,
  },
  {
    name: "Bootstrap",
    description:
      "Dengan cepat membuat desain web responsif dan menarik menggunakan framework CSS populer.",
    rating: 2,
    icon: Icons.bootstrap,
  },
  {
    name: "MySQL",
    description:
      "Mengelola dan mengatur database relasional secara efisien untuk aplikasi berbasis data.",
    rating: 2,
    icon: Icons.mysql,
  },
  {
    name: "Cloud Computing",
    description:
      "Menggunakan layanan cloud seperti VPS dan deployment aplikasi berbasis cloud.",
    rating: 4,
    icon: Icons.cloud,
  },
  {
    name: "Red Hat Linux",
    description:
      "Mengelola sistem operasi berbasis Linux untuk pengelolaan server dan pengembangan aplikasi.",
    rating: 4,
    icon: Icons.linux,
  },
  {
    name: "Git & GitHub",
    description:
      "Mengelola versi kode dengan Git serta berkolaborasi melalui GitHub.",
    rating: 5,
    icon: Icons.github,
  },
];


export const skills = skillsUnsorted
  .slice()
  .sort((a, b) => b.rating - a.rating);

export const featuredSkills = skills.slice(0, 6);
