export interface Project {
  title: string;
  description: string;
  technologies: string[];
  repository?: string;
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
    repository: "https://github.com/Iemaduddin/inventory-management-system",
    images: [
      {
        title: "Home Page",
        description: "",
        src: "/documentation/ims1.png",
      },
      {
        title: "Dashboard",
        description: "",
        src: "/documentation/ims2.png",
      },
    ],
  },
  {
    title: "Event and Asset Management System",
    description: "",
    technologies: ["Laravel", "MySQL", "Laravel Excel", "Laravel Spatie"],
    repository: "https://github.com/Iemaduddin/simeva",
    images: [
      {
        title: "Home Page",
        description: "",
        src: "/documentation/simeva1.png",
      },
      {
        title: "Home Page - List of Events",
        description: "",
        src: "/documentation/simeva2.png",
      },
      {
        title: "List of Events with Filter",
        description: "",
        src: "/documentation/simeva3.png",
      },
      {
        title: "Detail Page of Event ",
        description: "",
        src: "/documentation/simeva4.png",
      },
      {
        title: "Calendar View of Activities Asset Booking",
        description: "",
        src: "/documentation/simeva5.png",
      },
      {
        title: "List of Assets with Filter",
        description: "",
        src: "/documentation/simeva6.png",
      },
      {
        title: "Dashboard Admin with Statistics",
        description: "",
        src: "/documentation/simeva7.png",
      },
      {
        title: "Asset Booking Approval Page",
        description: "",
        src: "/documentation/simeva8.png",
      },
      {
        title: "Detail Page of Event Management",
        description: "",
        src: "/documentation/simeva9.png",
      },
      {
        title: "Event Management Page",
        description: "",
        src: "/documentation/simeva10.png",
      },
    ],
  },
  {
    title: "WhatsApp Data Forensic Web Platform",
    description: "",
    technologies: ["TypeScript (Adonis Js)", "Python", "SQLite", "MySQL", "Ubuntu"],
    repository: "https://github.com/Iemaduddin/wa_forensic",
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
    title: "E-Voting System",
    description: "",
    technologies: ["Laravel", "Livewire", "Laravel-Spatie", "MySQL"],
    repository: "https://github.com/Iemaduddin/e-voting",
    images: [
      {
        title: "Voting Page",
        description: "",
        src: "/documentation/e-voting/vote_page.png",
      },
      {
        title: "Login",
        description: "",
        src: "/documentation/e-voting/login.png",
      },
      {
        title: "Election Management Page",
        description: "",
        src: "/documentation/e-voting/election_manage.png",
      },
      {
        title: "Home Page",
        description: "",
        src: "/documentation/e-voting/home.png",
      },
      {
        title: "Results ElectionPage",
        description: "",
        src: "/documentation/e-voting/result_election.png",
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
    repository: "https://github.com/Iemaduddin/sistem_persuratan",
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
    repository: "https://github.com/Iemaduddin/react-project/tree/main/cms-app",
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
