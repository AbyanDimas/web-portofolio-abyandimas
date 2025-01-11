import { Icons } from "@/components/common/icons";

interface SocialInterface {
  name: string;
  username: string;
  icon: any;
  link: string;
}

export const SocialLinks: SocialInterface[] = [
  {
    name: "Github",
    username: "@abyandimas",
    icon: Icons.gitHub,
    link: "https://github.com/AbyanDimas",
  },
  {
    name: "LinkedIn",
    username: "Abyan Dimas",
    icon: Icons.linkedin,
    link: "https://www.linkedin.com/in/abyan-dimas-r-mussyafa-669a0a29a/",
  },
  {
    name: "Twitter",
    username: "@abyan dimas",
    icon: Icons.twitter,
    link: "https://twitter.com/abyandimas",
  },
  {
    name: "Gmail",
    username: "abyandimas",
    icon: Icons.gmail,
    link: "mailto:abyandimasrymussyafa@gmail.com",
  },
];
