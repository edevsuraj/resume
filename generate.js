const { Document, Packer, Paragraph, TextRun, HeadingLevel, AlignmentType, BorderStyle } = require("docx");
const fs = require("fs");

const BLUE = "1A365D";
const ACCENT = "2B6CB0";
const GRAY = "4A5568";

// ATS-friendly: single column, standard font, simple headings, generous spacing, line 1.15 (276)
const LINE = 276;

const namePara = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 60, line: LINE },
  children: [new TextRun({ text: "SURAJ CHAUHAN", bold: true, size: 56, color: BLUE, font: "Calibri" })],
});

const titlePara = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 120, line: LINE },
  children: [
    new TextRun({ text: "Full Stack Developer | Node.js | Laravel | React.js | REST APIs | MongoDB | MySQL", size: 20, color: ACCENT, bold: true, font: "Calibri" }),
  ],
});

const contactPara = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 60, line: LINE },
  children: [
    new TextRun({ text: "Noida, Sector 62, Uttar Pradesh | +91 8112773132 | edev.suraj@gmail.com", size: 18, font: "Calibri" }),
  ],
});

const linksPara = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 40, line: LINE },
  children: [
    new TextRun({ text: "LinkedIn: https://www.linkedin.com/in/suraj-chauhan-google/ | Portfolio: https://edevsuraj.github.io/explore-our-apps-and-extensions/", size: 15, color: GRAY, font: "Calibri" }),
  ],
});

const storesPara = new Paragraph({
  alignment: AlignmentType.CENTER,
  spacing: { after: 260, line: LINE },
  children: [
    new TextRun({ text: "Chrome Web Store: 6 live extensions | Google Play: Mathify, English Set Go", size: 15, color: GRAY, font: "Calibri" }),
  ],
});

function sectionHeading(text, pageBreakBefore = false) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 170, line: LINE },
    pageBreakBefore,
    border: { bottom: { color: ACCENT, space: 4, style: BorderStyle.SINGLE, size: 12 } },
    children: [new TextRun({ text: text.toUpperCase(), bold: true, size: 22, color: BLUE, font: "Calibri" })],
  });
}

function body(text) {
  return new Paragraph({
    spacing: { after: 170, line: LINE },
    children: [new TextRun({ text, size: 19, font: "Calibri" })],
  });
}

function bullet(boldPart, rest) {
  return new Paragraph({
    bullet: { level: 0 },
    spacing: { after: 90, line: LINE },
    indent: { left: 360 },
    children: [
      new TextRun({ text: boldPart, bold: true, size: 19, font: "Calibri" }),
      new TextRun({ text: rest, size: 19, font: "Calibri" }),
    ],
  });
}

// ATS-safe: single line, no tabs/columns - "Role, Company | Dates"
function jobHeader(role, company, dates) {
  const line = dates ? `${role}, ${company} | ${dates}` : `${role} | ${company}`;
  return new Paragraph({
    spacing: { before: 190, after: 90, line: LINE },
    children: [new TextRun({ text: line, bold: true, size: 20, font: "Calibri" })],
  });
}

function skillRow(label, value) {
  return new Paragraph({
    spacing: { after: 90, line: LINE },
    children: [
      new TextRun({ text: label + ": ", bold: true, size: 19, font: "Calibri" }),
      new TextRun({ text: value, size: 19, font: "Calibri" }),
    ],
  });
}

const doc = new Document({
  styles: { default: { document: { run: { font: "Calibri" } } } },
  sections: [{
    properties: { page: { margin: { top: 800, bottom: 800, left: 850, right: 850 } } },
    children: [
      namePara, titlePara, contactPara, linksPara, storesPara,

      sectionHeading("Professional Summary"),
      body("Full Stack Developer with 4+ years of experience building scalable web applications, REST APIs, admin dashboards, and operational platforms using Node.js, Express.js, Laravel, React.js, MongoDB, and MySQL. Experienced in JWT/OAuth authentication, RBAC, Stripe and Moko Afrika payment integrations, Firebase Cloud Messaging, and third-party API workflows. Strong ownership of features end to end, from requirements and database design through implementation, API testing, release, and production support. Since Jun 2026, has independently shipped 6 Chrome extensions (500+ installs on the flagship product, 200+ each on the others), 2 Android apps on Google Play, and 2 Windows tools, using AI-assisted development to accelerate delivery."),

      sectionHeading("Professional Experience"),
      jobHeader("Full Stack Developer", "Shine Web Solutions", "Jun 2024 - May 2026"),
      bullet("REST APIs and Dashboards: ", "Delivered scalable REST APIs and React.js admin dashboards for operations, roles, and real-time monitoring using Node.js, Express.js, Laravel, MongoDB, and MySQL."),
      bullet("Auth, Payments and Integrations: ", "Implemented JWT/OAuth authentication, role-based access control (RBAC), Stripe and Moko Afrika payment flows, FCM notifications, and third-party API integrations; validated endpoints with Postman."),
      bullet("Backend and Data Design: ", "Designed reusable backend modules and database schemas to support maintainable feature delivery and evolving business workflows."),
      jobHeader("PHP Developer", "Logibloq IT Services", "Dec 2023 - Jun 2024"),
      bullet("Web and Admin Systems: ", "Developed business websites, admin panels, and backend systems using CodeIgniter, Core PHP, and MySQL."),
      bullet("Workflow Integrations: ", "Built CRUD workflows and frontend-backend integrations to support daily operations and data management."),
      jobHeader("Web Developer", "Kutumbh Care Pvt. Ltd.", "Mar 2022 - Dec 2023"),
      bullet("Business Websites: ", "Developed business websites and operational systems using Laravel, JavaScript, HTML, CSS, and Bootstrap."),
      bullet("Database Integration: ", "Integrated backend workflows and databases to support service operations and internal reporting."),
      jobHeader("Independent Developer", "Self-Employed", "Jun 2026 - Present"),
      bullet("Product Delivery: ", "Designed, built, and published 6 Chrome extensions (500+ installs on the flagship product, 200+ each on the others), 2 Android apps on Google Play, and 2 Windows automation tools."),
      bullet("End-to-End Ownership: ", "Own the full product lifecycle: requirements, architecture (Manifest V3), implementation, QA, store publishing, updates, and user support."),
      bullet("AI-Assisted Development: ", "Use AI coding assistants (OpenCode, ChatGPT Codex, GitHub Copilot) to accelerate development, code review, debugging, and testing while retaining ownership of architecture and quality."),

      sectionHeading("Technical Skills", true),
      skillRow("Languages", "JavaScript (ES6+), PHP, SQL, HTML5, CSS3"),
      skillRow("Backend", "Node.js, Express.js, Laravel, CodeIgniter, Core PHP, REST API Design, MVC Architecture"),
      skillRow("Frontend", "React.js, Bootstrap, Responsive UI, Chrome Extension UI (Manifest V3, Content Scripts, Service Workers)"),
      skillRow("Databases", "MongoDB, MySQL - Schema Design, Indexing, Aggregations, Query Optimization"),
      skillRow("Authentication and Security", "JWT, OAuth 2.0, Role-Based Access Control (RBAC), SHA-256 Encryption, Secure API Authorization"),
      skillRow("Payments and Messaging", "Stripe, Moko Afrika Payment Gateway, Wallet and Transaction Systems, Firebase Cloud Messaging (FCM)"),
      skillRow("Mobile and Desktop", "Android Apps (Google Play), Chrome Web Store Publishing, Windows Batch Automation, PWA Concepts"),
      skillRow("Tools and Practices", "Git, Postman, Chrome DevTools, Google Play Console, Core Web Vitals, Agile Workflows, Manual QA"),
      skillRow("AI-Assisted Development", "OpenCode, ChatGPT Codex, GitHub Copilot - Requirements Definition, Prompt Engineering, Code Review, Debugging, QA and Publishing"),

      sectionHeading("Selected Professional Projects"),
      bullet("Dispatcher Management System (Node.js, React.js, MongoDB, FCM): ", "Built REST APIs and a React admin dashboard for call, zone, and unit management with live monitoring and call-termination controls."),
      bullet("Pet and Fitness Platform (Node.js, MongoDB, FCM): ", "Delivered activity tracking, rewards, challenges, leaderboards, multi-pet profiles, and push notifications."),
      bullet("School Activity Management (Laravel, React.js, MySQL): ", "Built class-wise activity workflows covering submissions, approvals, scoring, and achievement points."),
      bullet("Ride Management Platform (Node.js, MongoDB, Moko Afrika): ", "Implemented ride operations, vehicle management, destination/airport/hotel pricing, wallet, bookings, and transactions."),
      bullet("Mentorship Platform (Laravel, React.js, Stripe): ", "Developed booking, scheduling, payouts, Stripe payments, and mentor approval workflows."),

      sectionHeading("Independent Products"),
      bullet("Chrome Extensions (6 live on Chrome Web Store): ", "Lock Website - 500+ installs, privacy-focused site locking with SHA-256 encryption, per-tab sessions, and subdomain matching; Custom Tab Wallpaper, SiteSwift Speed Audit, Indian Fake Filler, Remindy, and Yogi Adityanath New Tab - 200+ installs each."),
      bullet("Android Apps (Google Play): ", "Mathify - maths practice with quizzes and progress tracking; English Set Go - English learning via Hindi with 12 tenses, 11,000+ verbs, and 8,000+ phrases."),
      bullet("Web Apps: ", "Typing Master - touch typing tutor with structured lessons, seven practice modes, live WPM and accuracy tracking, and browser-based progress persistence."),
      bullet("Windows Tools: ", "PC Deep Cleaner - one-click 7-zone junk cleaner; UserCleanup - one-click Windows account remover; both portable with no installation."),

      sectionHeading("Education"),
      body("Bachelor of Computer Applications (BCA), 2019 - 2022."),
    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("Suraj_Chauhan_FullStack_Resume.docx", buffer);
  console.log("DOCX saved:", buffer.length);
});
