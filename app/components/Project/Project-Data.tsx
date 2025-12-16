export interface Project {
  title: string;
  description: string;
  technologies: string[];
  images?: {
    src: string;
    title: string;
    description: string;
  }[];
}

export const projectsData: Project[] = [
  {
    title: "Inventory Management System",
    description: "",
    technologies: ["React Js", "Laravel", "MySQL", "TypeScript", "Tailwind CSS", "Apexchart.Js"],
    images: [
      {
        title: "Home Page",
        description: "",
        src: "/documentation/ims1.png",
      },
      {
        title: "Dashboard",
        description: "dasdsa",
        src: "/documentation/ims2.png",
      },
    ],
  },
  {
    title: "Event and Asset Management System",
    description: "",
    technologies: ["Laravel", "MySQL", "Laravel Excel", "Laravel Spatie"],
    images: [
      {
        title: "Home Page",
        description: "",
        src: "/documentation/simeva1.png",
      },
      {
        title: "dasdas",
        description: "dasdsa",
        src: "/documentation/simeva2.png",
      },
      {
        title: "dasdas",
        description: "dasdsa",
        src: "/documentation/simeva3.png",
      },
      {
        title: "dasdas",
        description: "dasdsa",
        src: "/documentation/simeva4.png",
      },
      {
        title: "dasdas",
        description: "dasdsa",
        src: "/documentation/simeva5.png",
      },
      {
        title: "dasdas",
        description: "dasdsa",
        src: "/documentation/simeva6.png",
      },
      {
        title: "dasdas",
        description: "dasdsa",
        src: "/documentation/simeva7.png",
      },
      {
        title: "dasdas",
        description: "dasdsa",
        src: "/documentation/simeva8.png",
      },
      {
        title: "dasdas",
        description: "dasdsa",
        src: "/documentation/simeva9.png",
      },
      {
        title: "dasdas",
        description: "dasdsa",
        src: "/documentation/simeva10.png",
      },
    ],
  },
  {
    title: "WhatsApp Data Forensic Web Platform",
    description: "",
    technologies: ["TypeScript (Adonis Js)", "Python", "SQLite", "MySQL", "Ubuntu"],
    images: [
      {
        title: "WhatsApp Data Forensic",
        description: "",
        src: "/documentation/wa-extract.png",
      },
    ],
  },
  {
    title: "Control Airshipment Permission",
    description: "",
    technologies: ["Laravel", "Laravel-Excel", "ApexCharts.Js", "MySQL"],
    images: [
      {
        title: "Control Airshipment Permission",
        description: "",
        src: "/documentation/cap.png",
      },
    ],
  },
  {
    title: "Visualization Occupancy Material",
    description: "",
    technologies: ["Laravel", "Laravel-Excel", "ApexCharts.Js", "MySQL"],
    images: [
      {
        title: "Visualization Occupancy Material",
        description: "",
        src: "/documentation/vomate.png",
      },
    ],
  },
  {
    title: "Organizational Letter Management System",
    description: "",
    technologies: ["Laravel", "MySQL", "ApexCharts.Js", "Google Drive API", "Google Sheets API"],
    images: [
      {
        title: "Organizational Letter Management System",
        description: "",
        src: "/documentation/sistem-persuratan.png",
      },
    ],
  },
  {
    title: "Vehicle License Management",
    description: "",
    technologies: ["Laravel", "Laravel-Excel", "MySQL"],
    images: [
      {
        title: "Vehicle License Management",
        description: "",
        src: "/documentation/vehicle.png",
      },
    ],
  },
  {
    title: "Content Management System (News Portal)",
    description: "",
    technologies: ["React Js", "Express Js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Prisma ORM"],
    images: [
      {
        title: "Home Page",
        description: "",
        src: "/documentation/cms1.png",
      },
      {
        title: "Dashboard Admin",
        description: "",
        src: "/documentation/cms2.png",
      },
    ],
  },
];
