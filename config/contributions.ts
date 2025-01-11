export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "My-Project",
    contibutionDescription:
      "Membangun fitur untuk sistem navigasi yang dinamis dan responsif menggunakan React Router.",
    repoOwner: "Abyan Dimas",
    link: "https://github.com/AbyanDimas/My-Project",
  },
  {
    repo: "attendance-system",
    contibutionDescription:
      "Mengembangkan sistem kehadiran otomatis yang terintegrasi dengan Google Sheets dan menyoroti status siswa.",
    repoOwner: "Abyan Dimas",
    link: "https://github.com/AbyanDimas/attendance-system",
  },
  {
    repo: "osis-management",
    contibutionDescription:
      "Merancang dan membangun aplikasi CRUD untuk pengelolaan data OSIS.",
    repoOwner: "Abyan Dimas",
    link: "https://github.com/AbyanDimas/osis-management",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
