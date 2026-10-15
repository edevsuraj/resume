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
    new TextRun({ text: "Full Stack Developer | Node.js | Laravel | React.js | Chrome Extensions | Android Apps", size: 19, color: ACCENT, bold: true, font: "Calibri" }),
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
  spacing: { after: 260, line: LINE },
  children: [
    new TextRun({ text: "LinkedIn: https://www.linkedin.com/in/suraj-chauhan-google/ | Portfolio: https://edevsuraj.github.io/explore-our-apps-and-extensions/", size: 15, color: GRAY, font: "Calibri" }),
  ],
});

function sectionHeading(text) {
  return new Paragraph({
    heading: HeadingLevel.HEADING_2,
    spacing: { before: 300, after: 170, line: LINE },
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
      namePara, titlePara, contactPara, linksPara,

      sectionHeading("Professional Summary"),
      body("Full Stack Developer with 4+ years of experience building scalable web applications, REST APIs, admin dashboards, and operational platforms with Node.js, Laravel, React.js, MongoDB, and MySQL. Proven expertise in JWT/OAuth authentication, RBAC, payment gateway integration (Stripe, Moko Afrika), Firebase Cloud Messaging, and third-party API workflows. Since Jun 2026, after resigning from Shine Web Solutions in May 2026, working full-time as an Independent Developer with 6 published Chrome Extensions (Manifest V3), 2 Android apps live on Google Play, and 2 Windows automation tools, with end-to-end ownership from architecture to Store publishing."),

      sectionHeading("Technical Skills"),
      skillRow("Languages", "JavaScript, PHP, SQL, HTML5, CSS3"),
      skillRow("Frontend", "React.js, Bootstrap, Responsive UI, Chrome Extension UI (Manifest V3, Content Scripts, Service Workers)"),
      skillRow("Backend", "Node.js, Express.js, Laravel, CodeIgniter, Core PHP, REST API Design, MVC Architecture"),
      skillRow("Mobile, Extensions and Tools", "Android Apps (Google Play), Chrome Web Store (6 Live Extensions), Windows Batch Automation, PWA Concepts"),
      skillRow("Databases", "MongoDB, MySQL - Schema Design, Indexing, Aggregations, Query Optimization"),
      skillRow("Auth and Security", "JWT, OAuth 2.0, Role-Based Access Control (RBAC), SHA-256 Encryption, Secure API Authorization"),
      skillRow("Notifications and Payments", "Firebase Cloud Messaging (FCM), Stripe, Moko Afrika Payment Gateway, Wallet and Transaction Systems"),
      skillRow("Tools and Practices", "Git, Postman, Chrome DevTools, Google Play Console, Core Web Vitals, Agile Workflows"),

      sectionHeading("Professional Experience"),
      jobHeader("Independent Developer - Chrome Extensions and Android Apps", "Self-Employed", "Jun 2026 - Present"),
      bullet("Full-time indie work after resignation: ", "Building and publishing own products after resigning from Shine Web Solutions in May 2026."),
      bullet("Shipped and published: ", "6 Chrome Extensions live on Chrome Web Store, 2 Android apps live on Google Play, and 2 Windows automation tools."),
      bullet("Ownership: ", "End-to-end development including Manifest V3 architecture, Play Store listings, updates, and user support."),
      jobHeader("Full Stack Developer", "Shine Web Solutions", "Jun 2024 - May 2026"),
      bullet("REST APIs and Workflows: ", "Designed and shipped scalable REST APIs and operational workflows using Node.js, Express.js, and Laravel with MongoDB/MySQL backends."),
      bullet("Admin Dashboards: ", "Built React.js admin dashboards for operations management including user and role management, real-time monitoring, and reporting modules."),
      bullet("Auth, Payments and Integrations: ", "Implemented JWT and OAuth authentication, RBAC, Stripe and Moko Afrika payment flows, Firebase notifications, and third-party API integrations."),
      bullet("Quality and Delivery: ", "Improved API reliability and dashboard performance through optimized queries, reusable components, and Postman-tested endpoints."),

      jobHeader("PHP Developer", "Logibloq IT Services", "Dec 2023 - Jun 2024"),
      bullet("Product Development: ", "Developed business websites, admin panels, and backend systems using CodeIgniter and Core PHP."),
      bullet("Full-stack Integration: ", "Delivered frontend-backend integrations, form workflows, session and auth handling, and MySQL-driven CRUD modules."),

      jobHeader("Web Developer", "Kutumbh Care Pvt. Ltd.", "Mar 2022 - Dec 2023"),
      bullet("Web Platforms: ", "Built business websites and operational systems using Laravel, JavaScript, HTML, CSS, and Bootstrap."),
      bullet("Modules and Data: ", "Developed frontend modules, backend workflows, and database integrations for day-to-day business operations."),

      sectionHeading("Independent Products - Published Apps and Extensions"),
      body("Built full-time after resigning from Shine Web Solutions in May 2026. Portfolio: https://edevsuraj.github.io/explore-our-apps-and-extensions/ - All extensions live on Chrome Web Store, apps live on Google Play."),
      jobHeader("Chrome Extensions Developer", "Self-Employed / Indie", "Jun 2026 - Present"),
      bullet("Lock Website (Privacy): ", "Password-protect any site by domain with SHA-256 encryption, per-tab sessions, and smart subdomain matching."),
      bullet("Custom Tab Wallpaper (Customization): ", "Turns new tab into custom image and video wallpaper with uploads or remote URLs and persistent settings."),
      bullet("SiteSwift - Website Speed Audit (DevTools): ", "One-click audit for slow resources, Core Web Vitals issues, and prioritized performance and SEO fixes."),
      bullet("Indian Fake Filler (DevTools): ", "Fills forms with realistic Indian test data, saved preferences, and smart random values for QA productivity."),
      bullet("Remindy (Productivity): ", "Reminders with new-tab countdowns and browser notifications for time-based task tracking."),
      bullet("Yogi Adityanath New Tab (Education): ", "Inspirational new-tab experience with quotes in English and Hindi."),

      jobHeader("Android App Developer", "Self-Employed / Indie", "Jun 2026 - Present"),
      bullet("Mathify: Maths Practice (Education): ", "Math practice app for kids and students with addition, subtraction, multiplication, division, quizzes, and progress tracking. Live on Google Play."),
      bullet("English Set Go (Education): ", "Learn English grammar via Hindi with all 12 tenses, 11,000+ verbs, 8,000+ phrases, and multiple practice formats. Live on Google Play."),

      jobHeader("Windows Tools Developer", "Self-Employed / Indie", "Jun 2026 - Present"),
      bullet("PC Deep Cleaner: ", "1-click batch optimizer with live CMD animation that cleans temp, cache, and junk across 7 zones. No install required."),
      bullet("UserCleanup: ", "1-click Windows account remover with popup picker that deletes profile folder and registry leftovers. No install required."),

      sectionHeading("Selected Professional Projects"),
      jobHeader("Dispatcher Management System", "Node.js, Express.js, React.js, MongoDB, Firebase FCM", ""),
      bullet("", "REST APIs and React admin for dispatcher operations, calls, zones, units, and workflow management with live monitoring and admin terminate-call controls. JWT/OAuth and FCM integration."),
      jobHeader("Pet and Fitness Activity Platform", "Node.js, MongoDB, Firebase FCM", ""),
      bullet("", "Backend for activity tracking, rewards, challenges, and leaderboards with multi-pet profiles, walking tracking, and user plus admin global challenges. FCM reminders and engagement pushes."),
      jobHeader("School Activity and Task Management", "Laravel, React.js, MySQL", ""),
      bullet("", "Laravel REST APIs and React UI for class-wise activities, participation tracking, submissions and approvals, scoring, and achievement-point calculation."),
      jobHeader("Ride Management Platform", "Node.js, MongoDB, Moko Afrika Gateway", ""),
      bullet("", "Ride operations, vehicle management, and pricing engine including destination, airport, hotel, and extra fares with wallet, bookings, transactions, and admin modules."),
      jobHeader("Mentorship and Learning Platform", "Laravel, React.js, MySQL, Stripe", ""),
      bullet("", "Booking, scheduling, rescheduling, cancellation, mentor payouts, and Stripe payments with React admin for mentor approvals and course monitoring."),

      sectionHeading("Education"),
      body("Bachelor of Computer Applications (BCA), 2019 - 2022. Foundation in programming, DBMS, web technologies, and software engineering principles."),

      sectionHeading("Links"),
      bullet("Portfolio: ", "https://edevsuraj.github.io/explore-our-apps-and-extensions/"),
      bullet("Chrome Web Store: ", "6 live extensions (Lock Website, Custom Tab Wallpaper, SiteSwift, Indian Fake Filler, Remindy, Yogi Adityanath New Tab)"),
      bullet("Google Play: ", "Mathify: Maths Practice, English Set Go"),
      bullet("Contact: ", "+91 8112773132 | edev.suraj@gmail.com | Noida, Sector 62, UP | DOB: 05 Apr 2002"),
    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("Suraj_Chauhan_FullStack_Resume.docx", buffer);
  console.log("DOCX saved:", buffer.length);
});
