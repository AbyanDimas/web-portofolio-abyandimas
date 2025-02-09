export interface contributionsInterface {
  repo: string;
  contibutionDescription: string;
  repoOwner: string;
  link: string;
}

export const contributionsUnsorted: contributionsInterface[] = [
  {
    repo: "adbcreative",
    contibutionDescription:
      "Berkontribusi dalam pengembangan website ADB Creative, termasuk desain UI yang modern dan pengalaman pengguna yang responsif.",
    repoOwner: "ADB Creative",
    link: "https://github.com/web-adb/adbcreative",
  },
  {
    repo: "Front-End_Web-SMKN-1-ADW",
    contibutionDescription:
      "Membangun dan mengoptimalkan frontend website SMK 1 Adiwerna menggunakan React dan Tailwind CSS.",
    repoOwner: "SMKN 1 Adiwerna",
    link: "https://github.com/SMKN1ADIWERNA/Front-End_Web-SMKN-1-ADW",
  },
  {
    repo: "LMS-smkn1adw",
    contibutionDescription:
      "Mengembangkan sistem Learning Management System (LMS) untuk SMK 1 Adiwerna dengan fitur yang memudahkan pembelajaran daring.",
    repoOwner: "SMKN 1 Adiwerna",
    link: "https://github.com/web-adb/LMS-smkn1adw",
  },
];

export const featuredContributions: contributionsInterface[] =
  contributionsUnsorted.slice(0, 3);
