const PDFDocument = require("pdfkit");
const fs = require("fs");

const out = "Suraj_Chauhan_FullStack_Resume.pdf";
// ATS-friendly: bigger margins, more leading, single column, standard fonts
const doc = new PDFDocument({ size: "A4", margins: { top: 50, bottom: 50, left: 55, right: 55 } });
const stream = fs.createWriteStream(out);
doc.pipe(stream);

const BLUE = "#1A365D";
const ACCENT = "#2B6CB0";
const GRAY = "#4A5568";
const BLACK = "#111111";

function header(text) {
  doc.moveDown(0.75);
  doc.font("Helvetica-Bold").fontSize(10.8).fillColor(BLUE).text(text.toUpperCase(), { lineGap: 2 });
  doc.moveTo(doc.page.margins.left, doc.y + 4).lineTo(doc.page.width - doc.page.margins.right, doc.y + 4).strokeColor(ACCENT).lineWidth(1).stroke();
  doc.moveDown(0.52);
}
function body(t) {
  doc.font("Helvetica").fontSize(9.3).fillColor(BLACK).text(t, { align: "left", lineGap: 4.5 });
  doc.moveDown(0.52);
}
function bullet(bold, rest) {
  doc.font("Helvetica").fontSize(9.3).fillColor(BLACK).text(`\u2022  ${bold}${rest}`, { indent: 14, lineGap: 3.5 });
  doc.moveDown(0.36);
}
function job(role, company, dates) {
  const line = dates ? `${role}, ${company} | ${dates}` : `${role} | ${company}`;
  doc.moveDown(0.46);
  doc.font("Helvetica-Bold").fontSize(9.6).fillColor(BLACK).text(line, { lineGap: 2 });
  doc.moveDown(0.25);
}
function skill(label, value) {
  doc.font("Helvetica-Bold").fontSize(9.3).fillColor(BLACK).text(label + ": ", { continued: true, lineGap: 3.5 });
  doc.font("Helvetica").fontSize(9.3).fillColor(BLACK).text(value, { lineGap: 3.5 });
  doc.moveDown(0.36);
}

// Header - airy, centered, plain text links
doc.font("Helvetica-Bold").fontSize(23).fillColor(BLUE).text("SURAJ CHAUHAN", { align: "center", lineGap: 4 });
doc.moveDown(0.25);
doc.font("Helvetica-Bold").fontSize(9.5).fillColor(ACCENT).text("Full Stack Developer  |  Node.js  |  Laravel  |  React.js  |  Chrome Extensions  |  Android Apps", { align: "center", lineGap: 3 });
doc.moveDown(0.4);
doc.font("Helvetica").fontSize(9).fillColor(BLACK).text("Noida, Sector 62, Uttar Pradesh  |  +91 8112773132  |  edev.suraj@gmail.com", { align: "center", lineGap: 3 });
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(8.5).fillColor(GRAY).text("LinkedIn: https://www.linkedin.com/in/suraj-chauhan-google/", { align: "center", lineGap: 2 });
doc.font("Helvetica").fontSize(8.5).fillColor(GRAY).text("Portfolio: https://edevsuraj.github.io/explore-our-apps-and-extensions/", { align: "center", lineGap: 2 });

header("Professional Summary");
body("Full Stack Developer with 4+ years of experience building scalable web applications, REST APIs, admin dashboards, and operational platforms with Node.js, Laravel, React.js, MongoDB, and MySQL. Proven expertise in JWT/OAuth, RBAC, Stripe and Moko Afrika payments, Firebase Cloud Messaging, and third-party API workflows. Since Jun 2026, after resigning from Shine Web Solutions in May 2026, working full-time as an Independent Developer directing AI coding assistants (OpenCode, ChatGPT Codex, GitHub Copilot) to design and ship 6 Chrome Extensions with 500+ installs on top app and 200+ installs each on others with majority USA users, plus 2 Android apps on Google Play and 2 Windows tools. Full ownership of requirements, architecture, QA, and Store publishing.");

header("Technical Skills");
skill("Languages", "JavaScript, PHP, SQL, HTML5, CSS3");
skill("Frontend", "React.js, Bootstrap, Responsive UI, Chrome Extension UI (Manifest V3, Content Scripts, Service Workers)");
skill("Backend", "Node.js, Express.js, Laravel, CodeIgniter, Core PHP, REST API Design, MVC Architecture");
skill("Mobile, Extensions and Tools", "Android Apps (Google Play), Chrome Web Store (6 Live Extensions), Windows Batch Automation, PWA Concepts");
skill("Databases", "MongoDB, MySQL - Schema Design, Indexing, Aggregations, Query Optimization");
skill("Auth and Security", "JWT, OAuth 2.0, Role-Based Access Control (RBAC), SHA-256 Encryption, Secure API Authorization");
skill("Notifications and Payments", "Firebase Cloud Messaging (FCM), Stripe, Moko Afrika Payment Gateway, Wallet and Transaction Systems");
skill("Tools and Practices", "Git, Postman, Chrome DevTools, Google Play Console, Core Web Vitals, Agile Workflows");
skill("AI Tools and Workflow", "OpenCode, ChatGPT Codex, GitHub Copilot - Requirements Definition, Prompt Engineering, AI Code Review, Debugging AI Outputs, QA and Publishing");

header("Professional Experience");
job("Independent Developer - Chrome Extensions and Android Apps", "Self-Employed", "Jun 2026 - Present");
bullet("AI-directed development after resignation: ", "Building and publishing own products full-time after resigning from Shine Web Solutions in May 2026 by defining requirements and directing OpenCode, ChatGPT Codex, and GitHub Copilot on what to build and how to build it.");
bullet("Traction: ", "6 Chrome Extensions live with 500+ installs on Lock Website and 200+ installs each on other extensions, majority users from USA. 2 Android apps live on Google Play plus 2 Windows automation tools.");
bullet("Ownership and QA: ", "Owned product direction, Manifest V3 architecture, prompt workflows, code review, manual testing, Store listings, updates, and user support.");
job("Full Stack Developer", "Shine Web Solutions", "Jun 2024 - May 2026");
bullet("REST APIs and Dashboards: ", "Shipped scalable REST APIs with Node, Express, Laravel and React admin dashboards for ops, roles, and monitoring.");
bullet("Auth, Payments and Integrations: ", "JWT/OAuth, RBAC, Stripe / Moko Afrika flows, FCM, third-party APIs with Postman-tested endpoints.");
job("PHP Developer", "Logibloq IT Services", "Dec 2023 - Jun 2024");
bullet("", "Websites, admin panels, backend systems in CodeIgniter/Core PHP with MySQL CRUD and integrations.");
job("Web Developer", "Kutumbh Care Pvt. Ltd.", "Mar 2022 - Dec 2023");
bullet("", "Business websites and systems in Laravel, JS, HTML, CSS, Bootstrap with workflows and DB integrations.");

header("Independent Products - Published Apps and Extensions");
body("Built full-time after resigning from Shine Web Solutions in May 2026 through AI-directed development using OpenCode, ChatGPT Codex, and GitHub Copilot - I defined requirements and guided AI on what and how to build. Portfolio: https://edevsuraj.github.io/explore-our-apps-and-extensions/");
job("Chrome Extensions Developer", "Self-Employed / Indie", "Jun 2026 - Present");
bullet("Lock Website - 500+ installs, USA majority: ", "Password-protect sites by domain, SHA-256, per-tab sessions, subdomain matching.");
bullet("Custom Tab Wallpaper - 200+ installs: ", "Custom image/video new-tab wallpaper; uploads or remote URLs.");
bullet("SiteSwift Speed Audit - 200+ installs: ", "One-click audit for slow resources, Core Web Vitals, SEO fixes.");
bullet("Indian Fake Filler - 200+ installs: ", "Realistic Indian test data, saved prefs, smart randoms for QA.");
bullet("Remindy - 200+ installs: ", "Reminders with new-tab countdowns + notifications.");
bullet("Yogi Adityanath New Tab - 200+ installs: ", "Inspirational new-tab with EN/HI quotes.");

job("Android Apps - Live on Google Play", "Self-Employed / Indie", "Jun 2026 - Present");
bullet("Mathify + English Set Go: ", "Maths practice with quizzes and tracking; English via Hindi with 12 tenses, 11k verbs, 8k phrases.");
job("Windows Tools", "Self-Employed / Indie", "Jun 2026 - Present");
bullet("PC Deep Cleaner + UserCleanup: ", "1-click optimizer for 7-zone clean and 1-click account remover. No install.");

header("Selected Professional Projects");
bullet("Dispatcher System (Node, React, Mongo, FCM): ", "REST APIs + React admin for calls, zones, units with live monitoring.");
bullet("Pet and Fitness Platform (Node, Mongo, FCM): ", "Tracking, rewards, challenges, leaderboards, multi-pet profiles.");
bullet("School Management (Laravel, React, MySQL): ", "Activities, submissions, approvals, scoring, achievement points.");
bullet("Ride Management (Node, Mongo, Moko Afrika): ", "Ride ops, pricing, wallet, bookings, transactions.");
bullet("Mentorship Platform (Laravel, React, Stripe): ", "Booking, payouts, Stripe, mentor approvals.");

header("Education");
body("Bachelor of Computer Applications (BCA), 2019 - 2022.");

header("Links");
bullet("Portfolio: ", "https://edevsuraj.github.io/explore-our-apps-and-extensions/ | Store: 6 extensions | Play: Mathify, English Set Go");
bullet("Contact: ", "+91 8112773132 | edev.suraj@gmail.com | Noida, Sector 62, UP");

doc.end();
stream.on("finish", () => {
  const size = fs.statSync(out).size;
  console.log("PDF saved:", size);
});
