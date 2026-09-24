/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Project, Experience, Certification, Organization } from "./types";
import posmindImg from "./assets/images/Posmind.png";
import arenaConnectImg from "./assets/images/ArenaConnect.png";
import tuneticImg from "./assets/images/Tunetic.png";
import burgerImg from "./assets/images/Burger.png";
import larvalandImg from "./assets/images/Larvaland.png";
import guardianwalkImg from "./assets/images/guardianwalk.jpeg";

export const PERSONAL_INFO = {
  name: "Naela Syifa",
  role: "UI/UX Designer & Front-End Developer",
  tagline: "Designing meaningful digital experiences through creativity, user-centered design, and modern development.",
  description: "I transform ideas into intuitive interfaces and functional digital products by combining design thinking with front-end development skills.",
  location: "Kudus, Central Java",
  college: "Politeknik Negeri Semarang",
  degree: "D3 Informatics Engineering",
  gpa: "3.82 / 4.00",
  graduation: "Class of 2026",
  email: "naelasyifa1234@gmail.com",
  phone: "082134383102",
  linkedin: "naela-syifa-212254330",
  portfolioUrl: "bit.ly/3VE1ySF",
  linkedinUrl: "https://www.linkedin.com/in/naela-syifa-212254330",
  cvUrl: "https://drive.google.com/uc?export=download&id=1KbF9dBREpahDPaqo30R5O8gtNGffmYHf",
  bio: "Naela Syifa is a D3 Informatics Engineering graduate with experience as a UI/UX Designer and Fullstack Developer at PT Data Andalan Utama. Passionate about creating user-centered digital products, she specializes in transforming complex problems into intuitive, aesthetic, and impactful solutions.",
};

export const SKILL_CATEGORIES = [
  {
    title: "Design Tools",
    skills: ["Figma", "CorelDRAW", "Canva", "Adobe Premiere", "CapCut"],
  },
  {
    title: "Development Tools",
    skills: ["HTML5", "CSS3", "JavaScript", "React", "TypeScript", "Tailwind CSS", "SQLite", "Flutter", "Python", "Firebase"],
  },
  {
    title: "Methodologies",
    skills: ["User-Centered Design", "Wireframing & Prototyping", "Design System", "REST API Integration", "Agile"],
  },
  {
    title: "Technical Skills",
    skills: ["Git", "Arduino IDE", "Unity (C#)", "Augmented Reality", "Microsoft Office"],
  },
];

export const EXPERIENCE_HISTORY = [
  {
    company: "PT Data Andalan Utama",
    location: "Semarang, Central Java, Indonesia",
    role: "UI/UX Designer & Fullstack Developer (Intern)",
    period: "August 4 - December 31, 2025",
    achievements: [
      "Implemented Payload CMS features using TypeScript and JSX on a Next.js-based project, including collections, authentication, and REST API integration.",
      "Contributed to the development of multi-tenancy features, ensuring the application could support multiple tenants with isolated data structures.",
      "Designed UI screens in Figma and built the corresponding frontend layouts using Tailwind CSS for a Point of Sale (POS) system.",
      "Developed frontend pages for user management, payment methods, and registration forms, connecting them to backend APIs.",
      "Improved the login flow with OTP verification, forgot/reset password features, and responsive UI fixes.",
      "Collaborated with the team on debugging, code review, and API integration throughout the development cycle.",
    ],
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "cert-1",
    title: "BNSP Intermediate Multimedia Designer",
    issuer: "Badan Nasional Sertifikasi Profesi (BNSP) Indonesia",
    isVerified: true,
    year: "2025",
    credentialUrl: "https://drive.google.com/file/d/1bu5lFruBpQ_ublZUha7dWdNQH1dbF4ns/view?usp=sharing",
  },
  {
    id: "cert-2",
    title: "Oracle Database Design",
    issuer: "Oracle Academy",
    isVerified: true,
    year: "2024",
    credentialUrl: "https://drive.google.com/file/d/1NPVt2aLI4KcBtoVoHk5MxEYG9TaYlrb7/view?usp=sharing",
  },
  {
    id: "cert-3",
    title: "Oracle Database Programming with SQL",
    issuer: "Oracle Academy",
    isVerified: true,
    year: "2024",
    credentialUrl: "https://drive.google.com/file/d/1abDQFIrH1faMyVeREDTE-C-h9Cfy7NvY/view?usp=drive_link",
  },
  {
    id: "cert-4",
    title: "Polytechnic Computer Club Certification",
    issuer: "Politeknik Negeri Semarang",
    isVerified: true,
    year: "2024",
    credentialUrl: "https://drive.google.com/file/d/1mYjtaPTe6taNTwAFf--I8PdlLk8oGUPA/view?usp=drive_link",
  },
  {
    id: "cert-5",
    title: "GuardianWalk — Gold Medal, IIIEX 2026",
    issuer: "Indonesian Young Scientist Association (IYSA)",
    isVerified: true,
    year: "2026",
    credentialUrl: "https://drive.google.com/file/d/1Q73AYlZbPeRj5WKSQsQHeklZn9C2thfX/view?usp=sharing",
  },
  {
    id: "cert-6",
    title: "GuardianWalk — 1st Place, KMIPN VIII 2026",
    issuer: "Politeknik Negeri Ujung Pandang (KMIPN VIII)",
    isVerified: true,
    year: "2026",
    credentialUrl: "https://drive.google.com/file/d/1tCe-ugefFjBtUGcLg0cQdOppJEh1tVqU/view?usp=sharing",
  },
  {
    id: "cert-7",
    title: "MikroTik Certified Network Associate (MTCNA)",
    issuer: "MikroTik (Mikrotikls SIA)",
    isVerified: true,
    year: "2026",
    credentialUrl: "https://drive.google.com/file/d/1X_i3u7wxbjhqvqdO-OzFv19y1Z6bRFL-/view?usp=drive_link",
  },
];

export const ORGANIZATION_HISTORY = [
  {
    name: "Polytechnic Computer Club (PCC)",
    location: "Semarang, Indonesia",
    role: "Human Resource Development Staff",
    period: "March 2024 - May 2025",
    responsibilities: [
      "Carried out cadre regeneration processes to prepare potential future members.",
      "Conducted performance evaluations of PCC club administrators.",
      "Compiled and maintained data records of active members.",
      "Worked with the selection committee to assist the elected administrator in choosing candidates for the club's new board.",
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "pos-app",
    title: "POS Web Application",
    category: "UI/UX Design & Fullstack Web Development",
    tools: ["Figma", "HTML5", "CSS3", "JavaScript", "REST API", "PHP & MySQL"],
    highlight: "Designed and implemented a complete point of sale system for multi-outlet retail.",
    imageAccent: "from-[#A7D8FF] to-[#DDF1FF]",
    iconName: "shopping-bag",
    thumbnail: posmindImg,
    filterGroup: "web",
    githubUrl: "https://github.com/naelasyifa/POSMind.git",
    figmaUrl: "https://www.figma.com/design/JtjunLOXmSVVkAVpfVI1EX/Projek-DAU?node-id=18-735&t=EHOBkS2niSOyyeMh-1",
    simpleSummary:
      "A complete point of sale system built for multi-outlet retail, covering the checkout flow, inventory tracking, and payment handling end to end. Designed in Figma and implemented as a full-stack web app during a professional internship.",
    keyFeatures: ["Fast checkout flow with QRIS, credit card, and cash payment options", "Real-time inventory tracking across outlets", "Discount and loyalty voucher support", "Responsive dashboard with category filtering"],
  },
  {
    id: "arena-connect",
    title: "Arena Connect",
    category: "Mobile Application",
    tools: ["Flutter", "Dart", "Figma", "UI/UX Design", "Geolocations API"],
    highlight: "Innovative mobile platform for renting local sports fields/arenas instantly.",
    imageAccent: "from-[#FFB4A2]/30 to-[#DDF1FF]",
    iconName: "map-pin",
    thumbnail: arenaConnectImg,
    filterGroup: "fullstack",
    figmaUrl: "https://www.figma.com/proto/aLD8QsN2YC0RJHIKrGBMWC/UI-UX-KEL-2?node-id=1-2671&t=9oGMYFsuUhxo4TzG-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2671&show-proto-sidebar=1",
    githubUrl: "https://github.com/Iniwizzy/arena-connect-owner",
    simpleSummary: "A mobile platform concept for renting local sports fields and arenas instantly, built with Flutter and Google Maps integration for real-time court discovery and booking.",
    keyFeatures: ["Map-based nearby court discovery", "Hourly slot booking calendar", "Team split payment calculator", "Digital payment proof after booking confirmation"],
  },
  {
    id: "tunetic",
    title: "TuNetic",
    category: "Web Application",
    tools: ["PHP", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "MySQL"],
    highlight: "Digital waste collection and green incentive tracking dashboard.",
    imageAccent: "from-[#7EC8FF]/20 to-[#A7D8FF]",
    iconName: "recycle",
    thumbnail: tuneticImg,
    filterGroup: "web",
    figmaUrl: "https://www.figma.com/design/3xOJY1QNdeltBxPQK0NbxC/TuNetic?node-id=0-1&t=ot7ifHRNAyOx4I1Q-1",
    githubUrl: "https://github.com/faizismail06/TuNetic",
    simpleSummary: "A web dashboard concept for digital waste collection tracking, letting households request recycling pickups and receive a verified weight record once the pickup is completed.",
    keyFeatures: ["Pickup request scheduling with address input", "Driver assignment and weight verification flow", "Verified weight receipt after pickup", "Impact analytics dashboard"],
  },
  {
    id: "burger-website",
    title: "Hot Spicy Chicken Burger",
    category: "Website Design",
    tools: ["Figma", "Digital Illustration", "Commercial Graphic Design", "High-Contrast UI Layouts"],
    highlight: "Engaging, high-conversion restaurant splash and food ordering landing page.",
    imageAccent: "from-[#FFB4A2]/30 to-[#A7D8FF]/20",
    iconName: "flame",
    thumbnail: burgerImg,
    filterGroup: "uiux",
    figmaUrl: "https://www.figma.com/design/Xx179id7CLXeGJKauBNfDQ/MULMED-NAELA?node-id=0-1&t=TBoGW7jDPJM6dCJb-1",
    simpleSummary: "A high-conversion restaurant landing page concept for a spicy chicken burger brand, focused on rich food photography and an interactive spice-level customizer.",
    keyFeatures: ["Interactive spice-level slider with dynamic visuals", "Toppings customizer grid", "High-contrast, food-forward visual design", "Streamlined checkout section"],
  },
  {
    id: "larva-land",
    title: "Larva Land",
    category: "Game",
    tools: ["Unity 3D", "C# Programming"],
    highlight: "Educational mobile mini-game featuring three games: Nusa Music, Larva Spike, and Larva Bites.",
    imageAccent: "from-[#A7D8FF]/30 to-[#FFB4A2]/20",
    iconName: "sparkles",
    thumbnail: larvalandImg,
    filterGroup: "game",
    githubUrl: "https://github.com/Iniwizzy/larva_land",
    simpleSummary: "An educational mobile mini-game collection built in Unity, featuring three short games — Nusa Music, Larva Spike, and Larva Bites — designed to make insect lifecycle concepts more engaging for young learners.",
    keyFeatures: ["Three distinct mini-games in one package", "Simple, icon-based UI for young players", "Score tracking and progress badges", "Built with Unity 3D and C#"],
  },
  {
    id: "guardianwalk",
    title: "GuardianWalk",
    category: "IoT & Mobile Application",
    tools: ["ESP32", "MPU6050", "SIM808 GPS/GSM", "Flutter", "Firebase", "Figma"],
    highlight: "IoT-based smart walker with real-time fall detection and caregiver monitoring for elderly safety — IIIEX Competition Winner.",
    imageAccent: "from-[#C8B6FF]/30 to-[#DDF1FF]",
    iconName: "shield",
    thumbnail: guardianwalkImg,
    filterGroup: "fullstack",
    githubUrl: "https://github.com/MilaDewii/smart_walker_monitoring.git",
    figmaUrl: "https://www.figma.com/design/Jc9f1g9rWXSQki6vb3tmCw/Tugas-Akhir?node-id=245-1921&t=dw09EaEG9QRkhYF6-1",
    caseStudy: {
      problemStatement:
        "Elderly individuals living independently or with limited caregiver supervision face high risks from unnoticed falls and disorientation while walking. Conventional walkers offer no way to detect a fall, alert a caregiver, or track location in real time, leaving critical minutes lost during emergencies.",
      userResearch:
        "We tested GuardianWalk directly with 10 elderly respondents aged 55-79, gathering satisfaction feedback (kuesioner) rather than relying only on simulated data. The results scored 93.3% ('Sangat Baik'), and feedback confirmed caregivers wanted immediate SMS alerts even without an internet connection, not just in-app notifications.",
      userPersona: {
        name: "Ibu Sumiyati",
        role: "Elderly Walker User, Lives With Family Caregiver",
        age: 68,
        quote: "I don't want to feel like a burden by calling my daughter every time I feel unsteady, but I also don't want a fall to go unnoticed.",
        behaviors: ["Uses a walker daily around the house and yard.", "Lives with an adult child who works during the day.", "Occasionally forgets to bring her phone with her."],
        goals: ["Feel safe walking alone without constant supervision.", "Have falls detected and reported automatically.", "Let her caregiver check her location if she doesn't return on time."],
        painPoints: ["Falls at home often go unnoticed for a long time.", "Feels guilty asking family to check on her constantly.", "Existing wearable alert devices are uncomfortable or easy to forget to wear."],
        avatarSeed: "elderly_woman_walker",
      },
      userFlow: {
        steps: [
          { title: "Power On Walker", description: "ESP32 initializes sensors (MPU6050, dual HC-SR04) and connects to Firebase.", type: "start" },
          { title: "Continuous Monitoring", description: "Motion, tilt, and distance data streamed and evaluated in real time.", type: "action" },
          { title: "Fuzzy Risk Evaluation", description: "Fuzzy Logic Mamdani calculates fuzzy_risk score; Z-Score anomaly detection runs as a separate check.", type: "decision" },
          { title: "WASPADA Alert", description: "fuzzy_risk 0.30-0.44 triggers an app notification only, no buzzer.", type: "action" },
          { title: "DARURAT Alert", description: "fuzzy_risk above 0.45 (or prolonged stillness over 30s) triggers buzzer, app alert, and SMS via SIM808 to caregiver.", type: "end" },
        ],
      },
      wireframes: [
        {
          title: "Flutter App Screen Structure",
          items: ["Monitoring screen: live status, risk level indicator, GPS position", "History screen: timestamp-based event log with online/offline SQLite sync", "Profile & Settings: caregiver contact, device pairing, alert thresholds"],
        },
      ],
      designSystem: {
        colors: [
          { name: "Primary Blue", hex: "#1E3A8A", desc: "Main brand color, used for headers and navigation elements." },
          { name: "Secondary Blue", hex: "#3B82F6", desc: "Interactive accent for buttons and clickable elements." },
          { name: "Background", hex: "#F8FAFC", desc: "Base app background color." },
          { name: "Text Dark", hex: "#1F2937", desc: "Primary text color for headings and body copy." },
          { name: "Text Grey", hex: "#6B7280", desc: "Secondary text color for labels and less prominent copy." },
          { name: "Status Green (Safe)", hex: "#22C55E", desc: "Indicates safe/normal status when no risk is detected." },
          { name: "Status Yellow (Warning)", hex: "#F59E0B", desc: "Indicates WASPADA status at moderate risk." },
          { name: "Status Red (Danger)", hex: "#EF4444", desc: "Indicates DARURAT status at high risk." },
        ],
        typography: [{ name: "App Interface Typography", font: "Poppins", usage: "Status labels and readable alert text for family caregivers of all ages." }],
        components: ["Real-time risk status card", "Fall event history list with sync indicator", "Caregiver contact & geofence settings panel"],
      },
      finalScreens: {
        title: "GuardianWalk Companion App",
        description: "A Flutter-based caregiver app showing live walker status, fall history, and location built to stay usable offline and sync automatically once reconnected.",
        accent: "bg-[#3B82F6]/10",
        mockupType: "mobile",
        screens: [
          { name: "Live Monitoring Dashboard", feat: ["Real-time risk level status", "GPS location on map", "Connection indicator"] },
          { name: "Fall & Activity History", feat: ["Timestamp-matched event log", "Offline SQLite caching with auto-sync", "Step counter records"] },
          { name: "Caregiver Alert Settings", feat: ["Geofence radius configuration", "SMS fallback contact setup", "Notification threshold controls"] },
        ],
      },
      developmentProcess: [
        "Designed and calibrated Fuzzy Logic Mamdani rules for fall detection, keeping Z-Score anomaly detection as an independent verification layer.",
        "Built firmware on ESP32 integrating MPU6050 motion sensing, dual HC-SR04 distance sensors, and SIM808 GPS/GSM for SMS fallback alerts.",
        "Developed the Flutter app: notification system, history screen with SQLite offline caching and online sync, step counter using rising-edge detection, and redesigned ERD with user_id foreign keys.",
        "Fixed real-world firmware issues including a Firebase PATCH overwrite bug on geofence data, rear ultrasonic sensor instability, and GNSS pause/resume race conditions.",
        "Validated the system with 10 real elderly users (ages 55-79), achieving a 93.3% satisfaction score.",
      ],
      lessonsLearned: [
        "For safety-critical IoT devices, an SMS fallback is essential Wi-Fi/app notifications alone aren't reliable enough when a caregiver isn't looking at their phone.",
        "Testing with real elderly users surfaced usability needs that simulated data never would have like offline-first history so nothing gets lost when connectivity drops.",
      ],
    },
  },
];
