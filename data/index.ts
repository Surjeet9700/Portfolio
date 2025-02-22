import {
  SiMongodb,
  SiExpress,
  SiReact,
  SiNodedotjs,
  SiNextdotjs,
  SiTailwindcss,
  SiTypescript,
  SiOpenai,
  SiVercel,
  SiEthers,
 
} from "react-icons/si";

import { FaKey, FaCube } from "react-icons/fa";



export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title:
      "I excel in collaborative environments, actively engaging with peers and mentors to achieve shared goals. ",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title:
      "I adapt quickly, ensuring seamless coordination and problem-solving",
    description: "",
    className: "lg:col-span-2 font-sm md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently building a image Generation site",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];



export const projects = [
  {
    id: 1,
    title: "Personal Blog ",
    des: "Modern, responsive blog with user authentication and sleek design, powered by Vite React and Appwrite.",
    img: "/pp1.png",
    iconLists: [SiReact, SiTailwindcss, SiExpress],
    link: "https://xeets-blog-site.vercel.app/",
  },
  {
    id: 2,
    title: "Hostel Booking System",
    des: "A full-stack web application for booking and managing hostel accommodations with a seamless user experience.",
    img: "/project2.png",
    iconLists: [SiMongodb, SiExpress, SiReact, SiNodedotjs, FaKey],
    link: "https://github.com/Surjeet9700/Hostel-Booking",
  },
  {
    id: 3,
    title: "AI Website Builder",
    des: "An AI-powered platform that enables users to generate fully functional websites with minimal effort.",
    img: "/project3.png",
    iconLists: [SiNextdotjs, SiTailwindcss, SiTypescript, SiOpenai, SiVercel],
    link: "https://github.com/Surjeet9700/AI-Website-Builder",
  },
  {
    id: 4,
    title: "Blockchain-Based E-commerce Store",
    des: "A decentralized e-commerce platform leveraging blockchain technology for secure  transactions.",
    img: "/project4.png",
    iconLists: [SiNextdotjs, SiReact, SiTailwindcss, SiEthers, FaCube],
    link: "https://github.com/Surjeet9700/blockchain-based-ecommerce-store",
  },
];


export const testimonials = [];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
];

export const workExperience = [];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
    link: "https://github.com/Surjeet9700/",
  },
  {
    id: 2,
    img: "/twit.svg",
    link: "",
  },
  {
    id: 3,
    img: "/link.svg",
    link: "https://www.linkedin.com/in/surjeet-kumar-/",
  },
];
