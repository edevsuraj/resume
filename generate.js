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
      body("Full Stack Developer with 4+ years of experience building scalable web applications, REST APIs, admin dashboards, and operational platforms with Node.js, Laravel, React.js, MongoDB, and MySQL. Proven expertise in JWT/OAuth, RBAC, Stripe and Moko Afrika payments, Firebase Cloud Messaging, and third-party API workflows. Since Jun 2026, after resigning from Shine Web Solutions in May 2026, working full-time as an Independent Developer directing AI coding assistants (OpenCode, ChatGPT Codex, GitHub Copilot) to design and ship 6 Chrome Extensions with 500+ installs on top app and 200+ installs each on others with majority USA users, plus 2 Android apps on Google Play and 2 Windows tools. Full ownership of requirements, architecture, QA, and Store publishing."),

      sectionHeading("Technical Skills"),
      skillRow("Languages", "JavaScript, PHP, SQL, HTML5, CSS3"),
      skillRow("Frontend", "React.js, Bootstrap, Responsive UI, Chrome Extension UI (Manifest V3, Content Scripts, Service Workers)"),
      skillRow("Backend", "Node.js, Express.js, Laravel, CodeIgniter, Core PHP, REST API Design, MVC Architecture"),
      skillRow("Mobile, Extensions and Tools", "Android Apps (Google Play), Chrome Web Store (6 Live Extensions), Windows Batch Automation, PWA Concepts"),
      skillRow("Databases", "MongoDB, MySQL - Schema Design, Indexing, Aggregations, Query Optimization"),
      skillRow("Auth and Security", "JWT, OAuth 2.0, Role-Based Access Control (RBAC), SHA-256 Encryption, Secure API Authorization"),
      skillRow("Notifications and Payments", "Firebase Cloud Messaging (FCM), Stripe, Moko Afrika Payment Gateway, Wallet and Transaction Systems"),
      skillRow("Tools and Practices", "Git, Postman, Chrome DevTools, Google Play Console, Core Web Vitals, Agile Workflows"),
      skillRow("AI Tools and Workflow", "OpenCode, ChatGPT Codex, GitHub Copilot - Requirements Definition, Prompt Engineering, AI Code Review, Debugging AI Outputs, QA and Publishing"),

      sectionHeading("Professional Experience"),
      jobHeader("Independent Developer - Chrome Extensions and Android Apps", "Self-Employed", "Jun 2026 - Present"),
      bullet("AI-directed development after resignation: ", "Building and publishing own products full-time after resigning from Shine Web Solutions in May 2026 by defining requirements and directing OpenCode, ChatGPT Codex, and GitHub Copilot on what to build and how to build it."),
      bullet("Traction: ", "6 Chrome Extensions live with 500+ installs on Lock Website and 200+ installs each on other extensions, majority users from USA. 2 Android apps live on Google Play plus 2 Windows automation tools."),
      bullet("Ownership and QA: ", "Owned product direction, Manifest V3 architecture, prompt workflows, code review, manual testing, Store listings, updates, and user support."),
      jobHeader("Full Stack Developer", "Shine Web Solutions", "Jun 2024 - May 2026"),
      bullet("REST APIs and Dashboards: ", "Shipped scalable REST APIs with Node.js, Express.js, Laravel and React.js admin dashboards for operations, roles, and real-time monitoring."),
      bullet("Auth, Payments and Integrations: ", "JWT/OAuth, RBAC, Stripe and Moko Afrika flows, FCM notifications, and third-party APIs with Postman-tested endpoints."),
      jobHeader("PHP Developer", "Logibloq IT Services", "Dec 2023 - Jun 2024"),
      bullet("", "Websites, admin panels, and backend systems in CodeIgniter/Core PHP with MySQL CRUD and frontend-backend integrations."),
      jobHeader("Web Developer", "Kutumbh Care Pvt. Ltd.", "Mar 2022 - Dec 2023"),
      bullet("", "Business websites and operational systems in Laravel, JS, HTML, CSS, Bootstrap with backend workflows and DB integrations."),

      sectionHeading("Independent Products - Published Apps and Extensions"),
      body("Built full-time after resigning from Shine Web Solutions in May 2026 through AI-directed development using OpenCode, ChatGPT Codex, and GitHub Copilot - I defined requirements and guided AI on what and how to build. Portfolio: https://edevsuraj.github.io/explore-our-apps-and-extensions/"),
      jobHeader("Chrome Extensions Developer", "Self-Employed / Indie", "Jun 2026 - Present"),
      bullet("Lock Website (Privacy) - 500+ installs, USA majority: ", "Password-protect any site by domain with SHA-256 encryption, per-tab sessions, and smart subdomain matching."),
      bullet("Custom Tab Wallpaper - 200+ installs: ", "Custom image and video new-tab wallpaper with uploads or remote URLs and persistent settings."),
      bullet("SiteSwift Speed Audit - 200+ installs: ", "One-click audit for slow resources, Core Web Vitals issues, and prioritized performance and SEO fixes."),
      bullet("Indian Fake Filler - 200+ installs: ", "Fills forms with realistic Indian test data, saved preferences, and smart random values for QA productivity."),
      bullet("Remindy - 200+ installs: ", "Reminders with new-tab countdowns and browser notifications for time-based tracking."),
      bullet("Yogi Adityanath New Tab - 200+ installs: ", "Inspirational new-tab experience with quotes in English and Hindi."),

      jobHeader("Android Apps - Live on Google Play", "Self-Employed / Indie", "Jun 2026 - Present"),
      bullet("Mathify + English Set Go: ", "Maths practice with quizzes and progress tracking; English grammar via Hindi with 12 tenses, 11,000+ verbs, 8,000+ phrases."),
      jobHeader("Windows Tools", "Self-Employed / Indie", "Jun 2026 - Present"),
      bullet("PC Deep Cleaner + UserCleanup: ", "1-click batch optimizer for 7-zone junk clean and 1-click Windows account remover. No install."),

      sectionHeading("Selected Professional Projects"),
      bullet("Dispatcher Management System (Node, React, Mongo, FCM): ", "REST APIs + React admin for calls, zones, units with live monitoring and terminate-call controls."),
      bullet("Pet and Fitness Platform (Node, Mongo, FCM): ", "Activity tracking, rewards, challenges, leaderboards, multi-pet profiles, FCM pushes."),
      bullet("School Activity Management (Laravel, React, MySQL): ", "Class-wise activities, submissions, approvals, scoring, achievement points."),
      bullet("Ride Management (Node, Mongo, Moko Afrika): ", "Ride ops, vehicle mgmt, destination/airport/hotel pricing, wallet, bookings."),
      bullet("Mentorship Platform (Laravel, React, Stripe): ", "Booking, scheduling, payouts, Stripe payments, mentor approvals."),

      sectionHeading("Education"),
      body("Bachelor of Computer Applications (BCA), 2019 - 2022."),

      sectionHeading("Links"),
      bullet("Portfolio: ", "https://edevsuraj.github.io/explore-our-apps-and-extensions/ | Chrome Web Store: 6 extensions | Google Play: Mathify, English Set Go"),
      bullet("Contact: ", "+91 8112773132 | edev.suraj@gmail.com | Noida, India | https://www.linkedin.com/in/suraj-chauhan-google/"),
    ],
  }],
});

Packer.toBuffer(doc).then((buffer) => {
  fs.writeFileSync("Suraj_Chauhan_FullStack_Resume.docx", buffer);
  console.log("DOCX saved:", buffer.length);
});
