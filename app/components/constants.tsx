type NAV_BAR = {
  title: string;
  path: string;
};

const constants: NAV_BAR[] = [
  {
    title: "About",
    path: "/",
  },
  {
    title: "Skill",
    path: "/Skill",
  },
  {
    title: "Socials",
    path: "/Social",
  },
];

type About_me = {
  title: string;
  imageSrc: string;
};

export const aboutme: About_me[] = [
  {
    title: "HTML",
    imageSrc: "/img/html5.png",
  },
  {
    title: "CSS",
    imageSrc: "/img/css3.png",
  },
  {
    title: "JavaScript",
    imageSrc: "/img/js.png",
  },
  {
    title: "TypeScript",
    imageSrc: "/img/typescript.png",
  },
  {
    title: "React",
    imageSrc: "/img/react.png",
  },
  {
    title: "Next",
    imageSrc: "/img/nextjs.png",
  },
];

export default constants;
