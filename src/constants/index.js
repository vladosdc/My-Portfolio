import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  freelancehunt,
  nft,
  reactbootstrap,
  sass,
  styledcomponents,
  bootstrap,
  frontend,
  freelance,
  creativeMan,


  //photo project
  liveChatImg,
  weatherAppImg,
  marvelAppImg,
  motoGameImg,
  quoteGeneratorImg,
  todoImg,

} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About me",
  },
  {
    id: "projects",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: frontend,
  },
  {
    title: "Freelancer",
    icon: freelance,
  },
  {
    title: "Creative Man",
    icon: creativeMan,
  },
];

const technologies = [
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "React Bootstrap",
    icon: reactbootstrap
  },
  {
    name: "Styled Components",
    icon: styledcomponents
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "SASS",
    icon: sass
  },
  {
    name: "Bootstrap",
    icon: bootstrap
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Video editor",
    company_name: "Freelancehunt",
    icon: freelancehunt,
    iconBg: "#383E56",
    date: "January 2022 - March 2022",
    points: [
      "Montage of vlogs, promos, business videos.",
      "Edited videos for a channel with over 100 thousand subscribers.",
      "Coming up with ideas for videos.",
      "Create 3D effects in video.",
    ],
  },
  {
    title: "Instagram effects creator",
    company_name: "NFT",
    icon: nft,
    iconBg: "#E6DEDD",
    date: "April 2022 - August 2022",
    points: [
      "Created instagram effects that half a million people use.",
      "Made for different NFT projects unique effects, such as augmented reality.",
      "Increased the interest of the project through effects such as who you are from the universe of this nft project ",
    ],
  },
];

const projects = [
  {
    name: "Live Chat App",
    description:
      "Live Chat SPA, has features such as: Authorization, add user photo, search for users, update correspondence in real time, send message/video/photo, remember me.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React Router Dom",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
      {
        name: "Firebase",
        color: "orange-text-gradient",
      },
    ],
    image: liveChatImg,
    demoLink: "https://live-chat-app-vladosdc.vercel.app/",
    source_code_link: "https://github.com/vladosdc/Live-Chat-App",
  },
  {
    name: "Weather App",
    description:
      "The weather app shows the following data: humidity, temperature, wind speed, pressure, visibility. You can request data for a city or country as well as for an area. It also shows a picture of the searched city/country and a small weather forecast for 3 days.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "Redux",
        color: "green-text-gradient",
      },
      {
        name: "SCSS",
        color: "pink-text-gradient",
      },
    ],
    image: weatherAppImg,
    demoLink: "https://weather-app-vladosdc.vercel.app/",
    source_code_link: "https://github.com/vladosdc/Weather-App",
  },
  {
    name: "Marvel App",
    description:
      "Marvel App, SPA app where the heroes/comics of the Marvel Universe are displayed, your random character for today, when you click on a hero from the list you see a comic strip with him, there is also a search for the hero.",
    tags: [
      {
        name: "React",
        color: "blue-text-gradient",
      },
      {
        name: "React Router Dom",
        color: "green-text-gradient",
      },
      {
        name: "React Helmet",
        color: "pink-white-text-gradient",
      },
      {
        name: "React Transition Group",
        color: "orange-text-gradient",
      },
      {
        name: "Formik",
        color: "yellow-text-gradient",
      },
      {
        name: "Yup",
        color: "yellow-orange-text-gradient"
      },
      {
        name: "SCSS",
        color: "pink-text-gradient"
      }
    ],
    image: marvelAppImg,
    demoLink: "https://marvel-app-vladosdc.vercel.app/",
    source_code_link: "https://github.com/vladosdc/Marvel-App",
  },
  {
    name: "Motorcycle Game",
    description:
        "Infinite Pixel Runner. You play as a motorcyclist, your task is to jump over obstacles to biker music, but it's not that simple! The game will gradually speed up, and the score counter opposite the speed of the game will double the points!",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: motoGameImg,
    demoLink: "https://vladosdc.github.io/Motorcycle-Pixel-Game/",
    source_code_link: "https://github.com/vladosdc/Motorcycle-Pixel-Game",
  },
  {
    name: "Random Quote",
    description:
        "Web application is random quote generator, you can click on a button and get a random quote, also you can copy the quote by clicking one button, and share the quote on Twitter.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: quoteGeneratorImg,
    demoLink: "https://vladosdc.github.io/Random-Quote-Generator/",
    source_code_link: "https://github.com/vladosdc/Random-Quote-Generator",
  },
  {
    name: "Todo-List",
    description:
        "You can make plans for the day, as well as edit a task if you misspelled it, and finally, when a task is completed, you can mark it as completed, and you can change the name of the list to whatever you want! and your plans will be safely stored in the browser memory even after closing or rebooting the device! (local storage)",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: todoImg,
    demoLink: "https://vladosdc.github.io/Todo-List/",
    source_code_link: "https://github.com/vladosdc/Todo-List",
  },
];

export { services, technologies, experiences, projects };
