export interface Project {
  slug: string;
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
    slug: "hris-mobile-application",
    title: "HRIS mobile Application",
    description: "",
    technologies: ["React Native", "Typescript", "Postgre SQL", "Expo"],
    repository: "https://github.com/Iemaduddin/mobile-hris",
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/hris/mobile-hris.webp",
      },
      {
        title: "Login",
        description: "",
        src: "/documentation/hris/mobile-login.webp",
      },
      {
        title: "Beranda",
        description: "",
        src: "/documentation/hris/mobile-beranda.webp",
      },
      {
        title: "Jadwal Kerja",
        description: "",
        src: "/documentation/hris/mobile-jadwal.webp",
      },
      {
        title: "Kalender",
        description: "",
        src: "/documentation/hris/mobile-kalender.webp",
      },
      {
        title: "Presensi",
        description: "",
        src: "/documentation/hris/mobile-presensi.webp",
      },
      {
        title: "Koreksi Presensi",
        description: "",
        src: "/documentation/hris/mobile-koreksi-presensi.webp",
      },
      {
        title: "Pengajuan Cuti/Izin/Sakit/Lembur/Dinas/WFH",
        description: "",
        src: "/documentation/hris/mobile-pengajuan.webp",
      },
      {
        title: "Approval Pengajuan",
        description: "",
        src: "/documentation/hris/mobile-approval.webp",
      },
      {
        title: "Slip Gaji",
        description: "",
        src: "/documentation/hris/mobile-slip-gaji.webp",
      },
      {
        title: "Tukar Shift",
        description: "",
        src: "/documentation/hris/mobile-tukar-shift.webp",
      },
      {
        title: "Pengumuman",
        description: "",
        src: "/documentation/hris/mobile-pengumuman.webp",
      },
      {
        title: "Profil",
        description: "",
        src: "/documentation/hris/mobile-profil.webp",
      },
      {
        title: "Popup Notifikasi",
        description: "",
        src: "/documentation/hris/mobile-notifikasi.webp",
      },
      {
        title: "Halaman List Notifikasi",
        description: "",
        src: "/documentation/hris/mobile-notifikasi-2.webp",
      },
      {
        title: "Tim",
        description: "",
        src: "/documentation/hris/mobile-tim.webp",
      },
      {
        title: "Menu Lainnya",
        description: "",
        src: "/documentation/hris/mobile-menu-lainnya.webp",
      },
      {
        title: "Pengaturan",
        description: "",
        src: "/documentation/hris/mobile-pengaturan.webp",
      },
    ],
  },
  {
    slug: "hris-web-application",
    title: "HRIS Web Application",
    description: "",
    technologies: ["Next Js", "Typescript", "Postgre SQL", "Tailwind CSS"],
    repository: "https://github.com/Iemaduddin/hris",
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/hris/hris-cover.webp",
      },
      {
        title: "Dashboard",
        description: "",
        src: "/documentation/hris/web-dashboard.webp",
      },
      {
        title: "Data Karyawan",
        description: "",
        src: "/documentation/hris/web-data-karyawan.webp",
      },
      {
        title: "Presensi Karyawan",
        description: "",
        src: "/documentation/hris/web-presensi.webp",
      },
      {
        title: "Koreksi Presensi",
        description: "",
        src: "/documentation/hris/web-koreksi-presensi.webp",
      },
      {
        title: "Rekapan Presensi",
        description: "",
        src: "/documentation/hris/web-rekapan-presensi.webp",
      },
      {
        title: "Payroll",
        description: "",
        src: "/documentation/hris/web-payrol.webp",
      },
      {
        title: "Slip Gaji",
        description: "",
        src: "/documentation/hris/web-slip-gaji.webp",
      },
      {
        title: "Pengajuan Cuti/Izin/Sakit/Lembur/Dinas/WFH",
        description: "",
        src: "/documentation/hris/web-pengajuan.webp",
      },
      {
        title: "Approval Pengajuan",
        description: "",
        src: "/documentation/hris/web-approval.webp",
      },
      {
        title: "Struktur Organisasi",
        description: "",
        src: "/documentation/hris/web-struktur-organisasi.webp",
      },
      {
        title: "Update Data Karyawan",
        description: "",
        src: "/documentation/hris/web-update-data.webp",
      },
    ],
  },
  {
    slug: "intelligent-point-of-sale-and-business-analytics",
    title: "Intelligent Point of Sale & Business Analytics (NEXPOS)",
    description: "",
    technologies: ["Laravel","Python", "React Js", "Typescript", "Inertia Js", "Postgre SQL", "Tailwind CSS", "Nivo Charts" ],
    repository: "https://github.com/Iemaduddin/nexpos",
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-nexpos.webp",
      },
      {
        title: "Point of Sale",
        description: "",
        src: "/documentation/nexpos/01-pos.png",
      },
      {
        title: "Dashboard",
        description: "",
        src: "/documentation/nexpos/02-dashboard.png",
      },
      {
        title: "Reports",
        description: "",
        src: "/documentation/nexpos/03-reports.png",
      },
      {
        title: "AI Assistant",
        description: "",
        src: "/documentation/nexpos/04-ai.png",
      },
      {
        title: "Session List",
        description: "",
        src: "/documentation/nexpos/05-session.png",
      },
      {
        title: "Inventory Management",
        description: "",
        src: "/documentation/nexpos/06-inventory.png",
      },
    ],
  },
  {
    slug: "social-media-analytics-tracking-platform",
    title: "Social Media Analytics & Tracking Platform",
    description: "",
    technologies: ["PHP","Python", "MySQL", "Javascript", "Tailwind CSS"],
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-social-media.webp",
      },
    ],
  },
  {
    slug: "kost-rental-platform",
    title: "Kost Rental Platform",
    description: "",
    technologies: ["Next Js", "MySQL", "TypeScript", "Tailwind CSS", "Nivo Charts", "Prisma ORM"],
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-kost.webp",
      },
      {
        title: "Home Page",
        description: "",
        src: "/documentation/01-kost.webp",
      },
      {
        title: "Listing Kost Page",
        description: "",
        src: "/documentation/02-kost.webp",
      },
      {
        title: "Detail Kost Page",
        description: "",
        src: "/documentation/03-kost.webp",
      },
    ],
  },
  {
    slug: "real-estate-advertising-platform",
    title: "Real Estate Advertising Platform",
    description: "",
    technologies: ["Next Js", "MySQL", "TypeScript", "Tailwind CSS", "Nivo Charts", "Prisma ORM"],
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-property.webp",
      },
      {
        title: "Home Page",
        description: "",
        src: "/documentation/01-property.webp",
      },
      {
        title: "Listing Property Page",
        description: "",
        src: "/documentation/02-property.webp",
      },
      {
        title: "Detail Property Page",
        description: "",
        src: "/documentation/03-property.webp",
      },
    ],
  },
  {
    slug: "cooperative-system",
    title: "Cooperative System",
    description: "",
    technologies: ["React Js", "Inertia Js", "Laravel", "MySQL", "TypeScript", "Tailwind CSS", "Nivo Charts"],
    repository: "https://github.com/Iemaduddin/sistem-koperasi",
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-koperasi.webp",
      },
      {
        title: "Dashboard",
        description: "",
        src: "/documentation/sistem-koperasi/dashboard-koperasi.png",
      },
      {
        title: "Form Simpanan",
        description: "",
        src: "/documentation/sistem-koperasi/simpanan-koperasi-1.png",
      },
      {
        title: "Daftar Simpanan",
        description: "",
        src: "/documentation/sistem-koperasi/simpanan-koperasi-2.png",
      },
      {
        title: "Detail Transaksi Simpanan Anggota",
        description: "",
        src: "/documentation/sistem-koperasi/simpanan-koperasi-3.png",
      },
      {
        title: "Form & Daftar Pinjaman",
        description: "",
        src: "/documentation/sistem-koperasi/pinjaman-koperasi-1.png",
      },
      {
        title: "Detail Angsuran Pinjaman Anggota",
        description: "",
        src: "/documentation/sistem-koperasi/pinjaman-koperasi-2.png",
      },
      {
        title: "Form & Daftar Simpanan Deposito",
        description: "",
        src: "/documentation/sistem-koperasi/deposito-koperasi-1.png",
      },
      {
        title: "Detail Transaksi Simpanan Deposito",
        description: "",
        src: "/documentation/sistem-koperasi/deposito-koperasi-2.png",
      },
      {
        title: "Reminder Bagi Hasil Simpanan Deposito",
        description: "",
        src: "/documentation/sistem-koperasi/reminder-bagi-hasil-koperasi.png",
      },
      {
        title: "Riwayat Audit Sistem Koperasi",
        description: "",
        src: "/documentation/sistem-koperasi/riwayat-audit-koperasi.png",
      },
      {
        title: "Rekapan Anggota Koperasi",
        description: "",
        src: "/documentation/sistem-koperasi/rekapan-anggota-koperasi.png",
      },
      {
        title: "Riwayat Transaksi Koperasi",
        description: "",
        src: "/documentation/sistem-koperasi/riwayat-transaksi-koperasi.png",
      },
      {
        title: "Notifikasi Koperasi",
        description: "",
        src: "/documentation/sistem-koperasi/notifikasi-koperasi.png",
      },
      {
        title: "Portal Anggota Koperasi (Tanpa Login)",
        description: "",
        src: "/documentation/sistem-koperasi/portal-anggota-koperasi.png",
      },
    ],
  },
  {
    slug: "inventory-management-system",
    title: "Inventory Management System",
    description: "",
    technologies: ["React Js", "Laravel", "MySQL", "TypeScript", "Tailwind CSS", "Apexchart.Js"],
    repository: "https://github.com/Iemaduddin/inventory-management-system",
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-ims.webp",
      },
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
    slug: "simeva",
    title: "Event and Asset Management System",
    description: "",
    technologies: ["Laravel", "MySQL", "Laravel Excel", "Laravel Spatie"],
    repository: "https://github.com/Iemaduddin/simeva",
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-simeva.webp",
      },
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
    slug: "whatsapp-data-forensic",
    title: "WhatsApp Data Forensic Web Platform",
    description: "",
    technologies: ["TypeScript (Adonis Js)", "Python", "SQLite", "MySQL", "Ubuntu"],
    repository: "https://github.com/Iemaduddin/wa_forensic",
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-wa-extract.webp",
      },
      {
        title: "WhatsApp Data Forensic",
        description: "",
        src: "/documentation/wa-extract.png",
      },
    ],
  },
  {
    slug: "control-airshipment-permission",
    title: "Control Airshipment Permission",
    description: "",
    technologies: ["Laravel", "Laravel-Excel", "ApexCharts.Js", "MySQL"],
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-cap.webp",
      },
      {
        title: "Control Airshipment Permission",
        description: "",
        src: "/documentation/cap.png",
      },
    ],
  },
  {
    slug: "e-voting-system",
    title: "E-Voting System",
    description: "",
    technologies: ["Laravel", "Livewire", "Laravel-Spatie", "MySQL"],
    repository: "https://github.com/Iemaduddin/e-voting",
    images: [
  {
        title: "Cover",
        description: "",
        src: "/documentation/cover-e-voting.webp",
      },
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
    slug: "visualization-occupancy-material",
    title: "Visualization Occupancy Material",
    description: "",
    technologies: ["Laravel", "Laravel-Excel", "ApexCharts.Js", "MySQL"],
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-vomate.webp",
      },
      {
        title: "Visualization Occupancy Material",
        description: "",
        src: "/documentation/vomate.png",
      },
    ],
  },
  {
    slug: "organizational-letter-management-system",
    title: "Organizational Letter Management System",
    description: "",
    technologies: ["Laravel", "MySQL", "ApexCharts.Js", "Google Drive API", "Google Sheets API"],
    repository: "https://github.com/Iemaduddin/sistem_persuratan",
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-org-letter.webp",
      },
      {
        title: "Organizational Letter Management System",
        description: "",
        src: "/documentation/sistem-persuratan.png",
      },
    ],
  },
  {
    slug: "vehicle-license-management",
    title: "Vehicle License Management",
    description: "",
    technologies: ["Laravel", "Laravel-Excel", "MySQL"],
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-vehicle.webp",
      },
      {
        title: "Vehicle License Management",
        description: "",
        src: "/documentation/vehicle.png",
      },
    ],
  },
  {
    slug: "cms-news-portal",
    title: "Content Management System (News Portal)",
    description: "",
    technologies: ["React Js", "Express Js", "PostgreSQL", "TypeScript", "Tailwind CSS", "Prisma ORM"],
    repository: "https://github.com/Iemaduddin/react-project/tree/main/cms-app",
    images: [
      {
        title: "Cover",
        description: "",
        src: "/documentation/cover-cms.webp",
      },
      {
        title: "Home Page",
        description: "",
        src: "/documentation/cms1.webp",
      },
      {
        title: "Dashboard Admin",
        description: "",
        src: "/documentation/cms2.png",
      },
    ],
  },
];
