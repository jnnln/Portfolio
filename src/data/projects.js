import ObservershipDashboard from "../assets/projects/observership/dashboard.png";
import ObservershipDashboard1 from "../assets/projects/observership/dashboard1.png";
import ObservershipDashboard2 from "../assets/projects/observership/dashboard2.png";
import ObservershipDashboard3 from "../assets/projects/observership/dashboard3.png";
import ObservershipDashboard4 from "../assets/projects/observership/dashboard4.png";
import ObservershipDashboard5 from "../assets/projects/observership/dashboard5.png";
import ObservershipDashboard6 from "../assets/projects/observership/dashboard6.png";

import ObservershipApplicant from "../assets/projects/observership/applicant.png";
import ObservershipApplicant1 from "../assets/projects/observership/applicant1.png"; 

import Mentorship from "../assets/projects/mentorship/cover.png";
import Mentorship1 from "../assets/projects/mentorship/screen1.png";
import Mentorship2 from "../assets/projects/mentorship/screen2.png";
import Mentorship3 from "../assets/projects/mentorship/screen3.png";
import Mentorship4 from "../assets/projects/mentorship/screen4.png";

import AmeriYoung from "../assets/projects/ameriyoung/cover.png";

import Mocra from "../assets/projects/mocra/cover.png";
import Mocra1 from "../assets/projects/mocra/mocra1.png";

import LaanRMS from "../assets/projects/laanrms/cover.png";

import Elaan from "../assets/projects/elaan/cover.png";

export const projects = [
  {
  id: 1,

  title: "Medical Observership",

  subtitle: "Physician Dashboard",

  year: "2026",

  image: ObservershipDashboard,

  images: [
    ObservershipDashboard,
    ObservershipDashboard1,
    ObservershipDashboard2,
    ObservershipDashboard3,
    ObservershipDashboard4,
    ObservershipDashboard5,
    ObservershipDashboard6,
  ],

  technologies: [
    "Power Apps",
    "Power Automate",
    "SharePoint",
  ],

  overview:
    "A Power Platform solution that streamlines physician availability, schedule management, student matching, and observership administration using Power Apps, Power Automate, and SharePoint.",

  contributions: [
    "Developed the physician dashboard in Power Apps",
    "Built Power Automate workflows for business processes",
    "Implemented automated email notifications",
    "Developed the physician onboarding process, including account creation, license verification, and onboarding workflows",
    "Integrated SharePoint Lists, Microsoft Forms, and Microsoft Bookings",
    "Provided ongoing maintenance and production support by troubleshooting issues, implementing bug fixes, and enhancing existing features",
    "Created test cases and performed end-to-end system testing",
  ],

  features: [
    "Physician Dashboard",
    "Schedule & Availability Management",
    "Task, notes, and meetings creation",
    "Student Matching",
    "Automated Email Notifications",
  ],
},
  {
    id: 2,

    title: "Medical Observership",

    subtitle: "Applicant Form",

    year: "2026",

    image: ObservershipApplicant,

    images: [
      ObservershipApplicant,
      ObservershipApplicant1,
    ],

    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
    ],

    overview:
      "A Power Apps application that enables students to complete observership forms, submit required information, and upload supporting documents.",

    contributions: [
      "Developed the Power Apps application",
      "Built document upload functionality",
      "Integrated SharePoint Lists",
      "Implemented Power Automate workflows",
    ],

    features: [
      "Power Apps Forms",
      "Document Upload",
      "Automated Email Notifications",
      "SharePoint Integration",
    ],
  },

  {
    id: 3,

    title: "Rise High Mentorship",

    subtitle: "Mentorship Platform",

    year: "2025",

    image: Mentorship,

    images: [
      Mentorship,
      Mentorship1,
      Mentorship2,
      Mentorship3,
      Mentorship4,
    ],

    technologies: [
      "Power Apps",
      "Power Automate",
      "Dataverse",
      "Microsoft Bookings",
    ],

    overview:
      "A mentorship management platform that centralizes mentee information, meetings, tasks, and progress tracking.",

    contributions: [
      "Helped develop Power Apps interfaces",
      "Integrated Microsoft Bookings",
      "Stored mentor and mentee information in Dataverse",
      "Built Power Automate workflows",
    ],

    features: [
      "Mentor Dashboard",
      "Meetings Management",
      "Meeting Notes",
      "Task Management",
      "Mentee Profiles",
      "Statistics Overview",
    ],
  },  {
    id: 4,

    title: "AmeriYoung",

    subtitle: "Website & Self-Service Kiosk",

    year: "2026",

    image: AmeriYoung,

    images: [
      AmeriYoung,
    ],

    technologies: [
      "WordPress",
      "Elementor",
      "WooCommerce",
      "PWA",
    ],

    overview:
      "An in-progress website and self-service kiosk designed to provide customers with a seamless shopping experience for skincare products in both web and kiosk environments.",

    contributions: [
      "Enhanced the website and kiosk UI/UX",
      "Improved user flows and overall usability",
      "Coordinated project tasks and feature planning",
      "Conducted testing and quality assurance",
      "Collaborated with the development team on new features",
    ],

    features: [
      "WordPress Website",
      "Self-Service Kiosk",
      "Product Catalog",
      "QR Cart Handoff",
      "Responsive Design",
    ],
  },

  {
    id: 5,

    title: "MoCRA",

    subtitle: "Compliance Dashboard",

    year: "2026",

    image: Mocra,

    images: [
      Mocra,
      Mocra1,
    ],

    technologies: [
      "Power Apps",
      "Power Automate",
      "SharePoint",
      "Figma",
    ],

    overview:
      "A compliance management solution for cosmetic businesses designed to centralize client records, product documentation, and regulatory workflows.",

    contributions: [
      "Designed the application prototype in Figma",
      "Developed the initial Power Apps prototype",
      "Planned Power Automate workflows",
      "Designed the SharePoint data structure",
      "Collaborated on solution planning and user experience",
    ],

    features: [
      "Compliance Dashboard",
      "Client Management",
      "Document Library",
      "Product Registry",
      "Workflow Automation",
    ],
  },  

  {
    id: 6,

    title: "eLaan",

    subtitle: "Equipment Borrowing & Appointment System",

    year: "2024",

    image: Elaan,

    images: [
      Elaan
    ],

    technologies: [
      "SvelteKit",
      "Flask",
      "PostgreSQL",
      "Tailwind CSS",
      "Figma",
    ],

    overview:
      "A web application developed during my software engineering internship at the UP Department of Family Life and Child Development to streamline equipment borrowing and appointment management.",

    contributions: [
      "Developed responsive front-end interfaces using SvelteKit and Tailwind CSS",
      "Designed user interfaces and interactive prototypes in Figma",
      "Integrated Flask APIs with the front end",
      "Collaborated with the development team to improve application reliability and performance",
      "Implemented feature enhancements and bug fixes",
    ],

    features: [
      "Equipment Borrowing",
      "Appointment Scheduling",
      "Inventory Management",
      "Admin Dashboard",
      "Responsive Interface",
    ],
  },

  {
    id: 7,

    title: "LAAN RMS",

    subtitle: "NSRC Resource Management System",

    year: "2023",

    image: LaanRMS,

    images: [
      LaanRMS,
    ],

    technologies: [
      "Flask",
      "PostgreSQL",
      "REST APIs",
    ],

    overview:
      "A web-based resource management system developed for the University of the Philippines National Service Reserve Corps (NSRC) to manage reservist information, announcements, and volunteer activities.",

    contributions: [
      "Developed backend services using Flask",
      "Designed and implemented RESTful APIs",
      "Designed and optimized PostgreSQL database structures",
      "Implemented reliable client-server communication",
      "Supported backend architecture and feature development",
    ],

    features: [
      "Reservist Management",
      "Volunteer Opportunities",
      "Announcements",
      "REST API",
      "PostgreSQL Database",
    ],
  }

];