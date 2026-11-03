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
  doc.font("Helvetica").fontSize(9.3).fillColor(BLACK).text("\u2022  ", { indent: 14, lineGap: 3.5, continued: true });
  doc.font("Helvetica-Bold").fontSize(9.3).fillColor(BLACK).text(bold, { lineGap: 3.5, continued: true });
  doc.font("Helvetica").fontSize(9.3).fillColor(BLACK).text(rest, { lineGap: 3.5 });
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
doc.font("Helvetica-Bold").fontSize(9.5).fillColor(ACCENT).text("Full Stack Developer  |  Node.js  |  Laravel  |  React.js  |  REST APIs  |  MongoDB  |  MySQL", { align: "center", lineGap: 3 });
doc.moveDown(0.4);
doc.font("Helvetica").fontSize(9).fillColor(BLACK).text("Noida, Sector 62, Uttar Pradesh  |  +91 8112773132  |  edev.suraj@gmail.com", { align: "center", lineGap: 3 });
doc.moveDown(0.2);
doc.font("Helvetica").fontSize(8.5).fillColor(GRAY).text("LinkedIn: https://www.linkedin.com/in/suraj-chauhan-google/", { align: "center", lineGap: 2 });
doc.font("Helvetica").fontSize(8.5).fillColor(GRAY).text("Portfolio: https://edevsuraj.github.io/explore-our-apps-and-extensions/", { align: "center", lineGap: 2 });
doc.font("Helvetica").fontSize(8.5).fillColor(GRAY).text("Chrome Web Store: 6 live extensions  |  Google Play: Mathify, English Set Go", { align: "center", lineGap: 2 });

header("Professional Summary");
body("Full Stack Developer with 4+ years of experience building scalable web applications, REST APIs, admin dashboards, and operational platforms using Node.js, Express.js, Laravel, React.js, MongoDB, and MySQL. Experienced in JWT/OAuth authentication, RBAC, Stripe and Moko Afrika payment integrations, Firebase Cloud Messaging, and third-party API workflows. Strong ownership of features end to end, from requirements and database design through implementation, API testing, release, and production support. Since Jun 2026, has independently shipped 6 Chrome extensions (500+ installs on the flagship product, 200+ each on the others), 2 Android apps on Google Play, and 2 Windows tools, using AI-assisted development to accelerate delivery.");

header("Professional Experience");
job("Full Stack Developer", "Shine Web Solutions", "Jun 2024 - May 2026");
bullet("REST APIs and Dashboards: ", "Delivered scalable REST APIs and React.js admin dashboards for operations, roles, and real-time monitoring using Node.js, Express.js, Laravel, MongoDB, and MySQL.");
bullet("Auth, Payments and Integrations: ", "Implemented JWT/OAuth authentication, role-based access control (RBAC), Stripe and Moko Afrika payment flows, FCM notifications, and third-party API integrations; validated endpoints with Postman.");
bullet("Backend and Data Design: ", "Designed reusable backend modules and database schemas to support maintainable feature delivery and evolving business workflows.");
job("PHP Developer", "Logibloq IT Services", "Dec 2023 - Jun 2024");
bullet("Web and Admin Systems: ", "Developed business websites, admin panels, and backend systems using CodeIgniter, Core PHP, and MySQL.");
bullet("Workflow Integrations: ", "Built CRUD workflows and frontend-backend integrations to support daily operations and data management.");
job("Web Developer", "Kutumbh Care Pvt. Ltd.", "Mar 2022 - Dec 2023");
bullet("Business Websites: ", "Developed business websites and operational systems using Laravel, JavaScript, HTML, CSS, and Bootstrap.");
bullet("Database Integration: ", "Integrated backend workflows and databases to support service operations and internal reporting.");
job("Independent Developer", "Self-Employed", "Jun 2026 - Present");
bullet("Product Delivery: ", "Designed, built, and published 6 Chrome extensions (500+ installs on the flagship product, 200+ each on the others), 2 Android apps on Google Play, and 2 Windows automation tools.");
bullet("End-to-End Ownership: ", "Own the full product lifecycle: requirements, architecture (Manifest V3), implementation, QA, store publishing, updates, and user support.");
bullet("AI-Assisted Development: ", "Use AI coding assistants (OpenCode, ChatGPT Codex, GitHub Copilot) to accelerate development, code review, debugging, and testing while retaining ownership of architecture and quality.");

doc.addPage();
header("Technical Skills");
skill("Languages", "JavaScript (ES6+), PHP, SQL, HTML5, CSS3");
skill("Backend", "Node.js, Express.js, Laravel, CodeIgniter, Core PHP, REST API Design, MVC Architecture");
skill("Frontend", "React.js, Bootstrap, Responsive UI, Chrome Extension UI (Manifest V3, Content Scripts, Service Workers)");
skill("Databases", "MongoDB, MySQL - Schema Design, Indexing, Aggregations, Query Optimization");
skill("Authentication and Security", "JWT, OAuth 2.0, Role-Based Access Control (RBAC), SHA-256 Encryption, Secure API Authorization");
skill("Payments and Messaging", "Stripe, Moko Afrika Payment Gateway, Wallet and Transaction Systems, Firebase Cloud Messaging (FCM)");
skill("Mobile and Desktop", "Android Apps (Google Play), Chrome Web Store Publishing, Windows Batch Automation, PWA Concepts");
skill("Tools and Practices", "Git, Postman, Chrome DevTools, Google Play Console, Core Web Vitals, Agile Workflows, Manual QA");
skill("AI-Assisted Development", "OpenCode, ChatGPT Codex, GitHub Copilot - Requirements Definition, Prompt Engineering, Code Review, Debugging, QA and Publishing");

header("Selected Professional Projects");
bullet("Dispatcher Management System (Node.js, React.js, MongoDB, FCM): ", "Built REST APIs and a React admin dashboard for call, zone, and unit management with live monitoring and call-termination controls.");
bullet("Pet and Fitness Platform (Node.js, MongoDB, FCM): ", "Delivered activity tracking, rewards, challenges, leaderboards, multi-pet profiles, and push notifications.");
bullet("School Activity Management (Laravel, React.js, MySQL): ", "Built class-wise activity workflows covering submissions, approvals, scoring, and achievement points.");
bullet("Ride Management Platform (Node.js, MongoDB, Moko Afrika): ", "Implemented ride operations, vehicle management, destination/airport/hotel pricing, wallet, bookings, and transactions.");
bullet("Mentorship Platform (Laravel, React.js, Stripe): ", "Developed booking, scheduling, payouts, Stripe payments, and mentor approval workflows.");

header("Independent Products");
bullet("Chrome Extensions (6 live on Chrome Web Store): ", "Lock Website - 500+ installs, privacy-focused site locking with SHA-256 encryption, per-tab sessions, and subdomain matching; Custom Tab Wallpaper, SiteSwift Speed Audit, Indian Fake Filler, Remindy, and Yogi Adityanath New Tab - 200+ installs each.");
bullet("Android Apps (Google Play): ", "Mathify - maths practice with quizzes and progress tracking; English Set Go - English learning via Hindi with 12 tenses, 11,000+ verbs, and 8,000+ phrases.");
bullet("Web Apps: ", "Typing Master - touch typing tutor with structured lessons, seven practice modes, live WPM and accuracy tracking, and browser-based progress persistence.");
bullet("Windows Tools: ", "PC Deep Cleaner - one-click 7-zone junk cleaner; UserCleanup - one-click Windows account remover; both portable with no installation.");

header("Education");
body("Bachelor of Computer Applications (BCA), 2019 - 2022.");

doc.end();
stream.on("finish", () => {
  const size = fs.statSync(out).size;
  console.log("PDF saved:", size);
});
