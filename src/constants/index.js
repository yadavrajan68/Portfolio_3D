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
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Software Developer",
    icon: creator,
  },
];

const technologies = [
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
];

const experiences = [
  {
    title: "Web Developer",
    company_name: "Opyra InfoTech",
    icon: starbucks,
    iconBg: "#383E56",
    date: "May 2024 - July 2024",
    points: [
      "Developed responsive and visually appealing websites using HTML, CSS, and JavaScript.",
      "Deployed and hosted websites on GoDaddy and Hostinger for seamless user accessibility.",
      "Designed and built an online printer-selling website with secure interactions and product display features.",
      "Integrated SMTP for automated mail notifications, enhancing communication and customer engagement.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Nixor Obex",
    icon: tesla,
    iconBg: "#E6DEDD",
    date: "July 2024 - August 2024",
    points: [
      "Designed and developed key components of a company portal, including career landing pages, job pages, and an admin panel, using Figma, HTML, CSS, JavaScript, and React.",
      "Built high-quality, responsive web applications with optimized performance, improved rendering efficiency, and ensured cross-browser compatibility.",
      "Collaborated with cross-functional teams, participated in code reviews, and implemented reusable UI components to enhance maintainability.",
      "Utilized Git for version control, debugged UI/UX issues, and stayed updated with the latest frontend development trends to enhance application usability.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "Supes Technology",
    icon: shopify,
    iconBg: "#383E56",
    date: "August 2024 - Nuvember 2024",
    points: [
      "Designed and implemented functionalities for an online selling website, ensuring seamless integration between frontend and backend systems.",
      "Developed efficient backend algorithms, improving data retrieval speeds by 60% and optimizing system performance.",
      "Created thorough documentation to enhance team collaboration and reduce onboarding time by 20%.",
      "Worked closely with the development team to ensure smooth deployment and scalability of the application.",
    ],
  },
  {
    title: "Software Developer",
    company_name: "DSITTC",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Jan 2024 - Present",
    points: [
      "Developed a Learning Management System (LMS) with AI-powered functionalities, handling both frontend and backend using the MERN stack.",
      "Implemented secure user authentication and role-based access control for students, instructors, and admins.",
      "Designed an intuitive and responsive UI, ensuring a seamless user experience across devices.",
      "Integrated AI-driven features to enhance personalized learning, content recommendations, and student performance analysis.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rajan proved me wrong.",
    name: "Yasharth Sonker",
    designation: "CEO & Founder",
    company: "Opyra InfoTech",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rajan does.",
    name: "Bhupendra Chaudhary",
    designation: "SDET",
    company: "Supes Technology",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQEwXbwlZr2v7g/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1700114919147?e=1744848000&v=beta&t=C4h3q-AhIpkj9-u7gSVl4HWUQg4kpC_C5G8iAd5wYO4",
  },
  {
    testimonial:
      "After Rajan optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Asif Saifi",
    designation: "SEO Executive",
    company: "GroCliq",
    image:
      "https://media.licdn.com/dms/image/v2/D5603AQH5qVuDkZuohw/profile-displayphoto-shrink_800_800/B56ZRgIHaBGoAg-/0/1736779529253?e=1744848000&v=beta&t=NPnoNPBZvDDVVx5dWDWkBg2_dVXL-cgf9-NoOk6US1E",
  },
];

const projects = [
  {
    name: "LMS",
    description:
      "A robust platform designed to facilitate online learning with AI-powered functionalities, enabling seamless course management, student progress tracking, and personalized content recommendations.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "clerk",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link:
      "https://github.com/yadavrajan68/Learning-management-system",
  },

  {
    name: "Job Portal",
    description:
      "A full-stack job portal designed to connect job seekers with employers, secure authentication, and a user-friendly interface for seamless job applications and recruitment management.",
    tags: [
      {
        name: "MERN",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "jwt",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link:
      "https://github.com/yadavrajan68/Job-Portal-Using-MERN_Stack",
  },

  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
