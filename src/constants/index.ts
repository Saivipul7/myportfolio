// Contains constant data for using in website
// ! Don't remove anything from here if not sure

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  fooddish,
  loomify,
  aiprompts,
  user1,
  user2,
  user3,
  youtube,
  linkedin,
  twitter,
  github,
  oracle,
  python,
  sql,
  nptel,
  infosys,
  n8n,
  freecodecamp,
  patent_details,
  firstgig,
  coursera,
  skillshare,
  editing,
  design,
} from "../assets";

// Navbar Links
export const NAV_LINKS = [
  {
    id: "about",
    title: "About",
    link: null,
  },
  {
    id: "work",
    title: "Internship",
    link: null,
  },
  {
    id: "tech",
    title: "Skills",
    link: null,
  },
  {
    id: "projects",
    title: "Projects",
    link: null,
  },
  {
    id: "certifications",
    title: "Certifications",
    link: null,
  },
  {
    id: "contact",
    title: "Contact",
    link: null,
  },
  {
    id: "cv",
    title: "CV",
    link: "https://drive.google.com/file/d/1eqI-rpGGzwIO53xGz-rA0RTfFM_lmApC/view?usp=drive_link",
  },
] as const;

// Services
export const SERVICES = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Content Creator",
    icon: creator,
  },
] as const;

// Technologies
export const TECHNOLOGIES = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
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
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
] as const;

// Education
export const EDUCATION = [
  {
    institution: "Lovely Professional University",
    location: "Phagwara, Punjab",
    degree: "Bachelor of Technology",
    duration: "Aug'23 – Present",
    details: "Computer Science and Engineering",
  },
  {
    institution: "Narayana Collage",
    location: "Vishkapatnam, Andra Pradesh",
    degree: "Intermediate",
    duration: "Mar'21 – May'23",
    details: "PCM; Percentage: 93%",
  },
  {
    institution: "St Ann's Convent School",
    location: "Pathapatnam, Andra Pradesh",
    degree: "Matriculation",
    duration: "Mar'20 – May'21",
    details: "Percentage: 79.2%",
  },
] as const;

// Experiences
export const EXPERIENCES = [
  {
    title: "Front End Web Development Virtual Internship",
    company_name: "Edu net foundation (in collaboration with AICTC & IBM Skill Build)",
    icon: web,
    iconBg: "#383E56",
    date: "Jun 2025 – Jul 2025",
    points: [
      "Completed a 6-weeks virtual Internship focused on front-end web development fundamentals and responsive design principles.",
      "Designed a interactive web pages and implemented best practices for accessibility and performance optimization.",
      "Collaborated in virtual learning sessions and project discussions under the AICTE – Edu net Foundation initiative.",
    ],
    view_link: null,
  },
  {
    title: "Patent",
    company_name: "Research and Development",
    icon: creator,
    iconBg: "#E6DEDD",
    date: "2nd Year, 2nd Semester",
    points: [
      "Co-authored an approved patent during 2nd year (2nd semester), contributing to research, ideation, and development.",
      "Demonstrated excellence in technical innovation and systematic approach to problem-solving.",
    ],
    view_link: patent_details,
  },
] as const;

// Testimonials
export const TESTIMONIALS = [
  {
    testimonial:
      "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate - Validating core OCI knowledge.",
    name: "Oracle Certified Foundations Associate",
    designation: "Feb 26, 2026",
    company: "Oracle University",
    image: oracle,
    link: "",
  },
  {
    testimonial:
      "Successfully completed intensive training in Python Development, covering fundamental and advanced concepts.",
    name: "Python Development",
    designation: "July 2025",
    company: "CipherSchools",
    image: python,
    link: "",
  },
  {
    testimonial:
      "In recognition of dedication and successful completion of the SQL - Skill Up course for database proficiency.",
    name: "SQL - Skill Up",
    designation: "Completed",
    company: "GeeksforGeeks",
    image: sql,
    link: "",
  },
  {
    testimonial:
      "Successfully completed the NPTEL Online Certification in Cloud Computing with a consolidated score of 54%.",
    name: "Cloud Computing",
    designation: "Jan-Apr 2025",
    company: "NPTEL | IIT Kharagpur",
    image: nptel,
    link: "",
  },
  {
    testimonial:
      "Achieved course completion certificate for Prompt Engineering from Infosys Springboard.",
    name: "Prompt Engineering",
    designation: "June 4, 2025",
    company: "Infosys Springboard",
    image: infosys,
    link: "",
  },
  {
    testimonial:
      "Successfully completed the n8n course, mastering workflow automation and integration.",
    name: "n8n Certification",
    designation: "2026",
    company: "n8n.io",
    image: n8n,
    link: "",
  },
  {
    testimonial:
      "Earned the Responsive Web Design Developer Certification, representing approximately 300 hours of work.",
    name: "Responsive Web Design",
    designation: "October 19, 2023",
    company: "freeCodeCamp",
    image: freecodecamp,
    link: "",
  },
  {
    testimonial:
      "Successfully completed Adobe Premiere Pro for Beginners: Quickstart Video-Editing, an online non-credit project authorized by Coursera Project Network.",
    name: "Adobe Premiere Pro for Beginners",
    designation: "Jun 2, 2025",
    company: "Coursera",
    image: editing,
    link: "https://coursera.org/verify/3MMID6KFK966",
  },
  {
    testimonial:
      "Successfully completed Canva Design Essentials Pt. 1: Core Tools & Layouts, an online non-credit course authorized by Skillshare and offered through Coursera.",
    name: "Canva Design Essentials",
    designation: "Sep 29, 2025",
    company: "Skillshare",
    image: design,
    link: "https://coursera.org/verify/8SU0DJTMWO0O",
  },
] as const;

// Projects
export const PROJECTS = [
  {
    name: "Neuro-fridge",
    description:
      "A comprehensive food delivery platform offering a wide variety of dishes from top restaurants.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: fooddish,
    source_code_link: "https://github.com/Saivipul7",
    live_site_link: "https://saivipul7.github.io/food-guide/",
  },
  {
    name: "Loomify",
    description:
      "An intuitive video messaging tool that helps you communicate effectively with your team.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
      {
        name: "php",
        color: "orange-text-gradient",
      },
    ],
    image: loomify,
    source_code_link: "https://github.com/Saivipul7",
    live_site_link: "https://loomify.great-site.net/?i=2",
  },
  {
    name: "AI-Prompts",
    description:
      "A platform for exploring and sharing high-quality AI prompts to enhance your generative AI experience.",
    tags: [
      {
        name: "html",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "green-text-gradient",
      },
      {
        name: "javascript",
        color: "pink-text-gradient",
      },
    ],
    image: aiprompts,
    source_code_link: "https://github.com/Saivipul7/AI-Prompts",
    live_site_link: "https://saivipul7.github.io/AI-Prompts/",
  },
  {
    name: "FirstGig",
    description:
      "A freelance platform that connects users with their first clients to launch their freelance careers.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: firstgig,
    source_code_link: "",
    live_site_link: "",
  },
] as const;

export const SOCIALS = [
  {
    name: "YouTube",
    icon: youtube,
    link: "https://www.youtube.com/@saivipul",
  },
  {
    name: "Linkedin",
    icon: linkedin,
    link: "https://www.linkedin.com/in/saivipul",
  },
  {
    name: "Twitter",
    icon: twitter,
    link: "https://twitter.com/saivipul",
  },
  {
    name: "GitHub",
    icon: github,
    link: "https://github.com/Saivipul7",
  },
] as const;
