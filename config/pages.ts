import { ValidPages } from "./constants";

type PagesConfig = {
  [key in ValidPages]: {
    title: string;
    description: string;
    metadata: {
      title: string;
      description: string;
    };
    // featuredDescription: string;
  };
};

export const pagesConfig: PagesConfig = {
  home: {
    title: "Beranda",
    description: "Selamat datang di situs portofolio saya.",
    metadata: {
      title: "Beranda",
      description: "Abyan Dimas R Mussyafa",
    },
  },
  skills: {
    title: "Keahlian",
    description: "Keahlian utama yang mendefinisikan identitas profesional saya.",
    metadata: {
      title: "Keahlian",
      description: "Keahlian utama Abyan Dimas yang mendefinisikan identitas profesionalnya.",
    },
  },
  experience: {
    title: "Pengalaman",
    description: "Menyoroti perjalanan karier dan proyek-proyek berdampak.",
    metadata: {
      title: "Pengalaman",
      description: "Pengalaman Abyan Dimas dalam membangun aplikasi web.",
    },
  },
  contact: {
    title: "Kontak",
    description: "Mari terhubung dan eksplorasi kolaborasi.",
    metadata: {
      title: "Kontak",
      description: "Hubungi Abyan Dimas R Mussyafa.",
    },
  },
  contributions: {
    title: "Kontribusi",
    description: "Kontribusi open-source dan keterlibatan dalam komunitas.",
    metadata: {
      title: "Kontribusi",
      description: "Kontribusi open-source dan keterlibatan komunitas Abyan Dimas.",
    },
  },
  resume: {
    title: "CV",
    description: "Curriculum Vitae Abyan Dimas.",
    metadata: {
      title: "CV",
      description: "Curriculum Vitae Abyan Dimas.",
    },
  },
};
