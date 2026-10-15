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
  doc.moveDown(0.9);
  doc.font("Helvetica-Bold").fontSize(11).fillColor(BLUE).text(text.toUpperCase(), { lineGap: 2 });
  doc.moveTo(doc.page.margins.left, doc.y + 4).lineTo(doc.page.width - doc.page.margins.right, doc.y + 4).strokeColor(ACCENT).lineWidth(1).stroke();
  doc.moveDown(0.6);
}
function body(t) {
  doc.font("Helvetica").fontSize(9.5).fillColor(BLACK).text(t, { align: "left", lineGap: 5 });
  doc.moveDown(0.6);
}
function bullet(bold, rest) {
  doc.font("Helvetica").fontSize(9.5).fillColor(BLACK).text(`\u2022  ${bold}${rest}`, { indent: 15, lineGap: 4 });
  doc.moveDown(0.4);
}
function job(role, company, dates) {
  const line = dates ? `${role}, ${company} | ${dates}` : `${role} | ${company}`;
  doc.moveDown(0.5);
  doc.font("Helvetica-Bold").fontSize(10).fillColor(BLACK).text(line, { lineGap: 3 });
  doc.moveDown(0.25);
}
function skill(label, value) {
  doc.font("Helvetica-Bold").fontSize(9.5).fillColor(BLACK).text(label + ": ", { continued: true, lineGap: 4 });
  doc.font("Helvetica").fontSize(9.5).fillColor(BLACK).text(value, { lineGap: 4 });
  doc.moveDown(0.4);
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
body("Full Stack Developer with 4+ years of experience building scalable web applications, REST APIs, admin dashboards, and operational platforms with Node.js, Laravel, React.js, MongoDB, and MySQL. Proven expertise in JWT/OAuth authentication, RBAC, payment gateway integration (Stripe, Moko Afrika), Firebase Cloud Messaging, and third-party API workflows. Independent product developer with 6 published Chrome Extensions (Manifest V3), 2 Android apps live on Google Play, and 2 Windows automation tools, with end-to-end ownership from architecture to Store publishing.");

header("Technical Skills");
skill("Languages", "JavaScript, PHP, SQL, HTML5, CSS3");
skill("Frontend", "React.js, Bootstrap, Responsive UI, Chrome Extension UI (Manifest V3, Content Scripts, Service Workers)");
skill("Backend", "Node.js, Express.js, Laravel, CodeIgniter, Core PHP, REST API Design, MVC Architecture");
skill("Mobile, Extensions and Tools", "Android Apps (Google Play), Chrome Web Store (6 Live Extensions), Windows Batch Automation, PWA Concepts");
skill("Databases", "MongoDB, MySQL - Schema Design, Indexing, Aggregations, Query Optimization");
skill("Auth and Security", "JWT, OAuth 2.0, Role-Based Access Control (RBAC), SHA-256 Encryption, Secure API Authorization");
skill("Notifications and Payments", "Firebase Cloud Messaging (FCM), Stripe, Moko Afrika Payment Gateway, Wallet and Transaction Systems");
skill("Tools and Practices", "Git, Postman, Chrome DevTools, Google Play Console, Core Web Vitals, Agile Workflows");

header("Professional Experience");
job("Full Stack Developer", "Shine Web Solutions", "Jun 2024 - May 2026");
bullet("REST APIs and Workflows: ", "Designed scalable REST APIs and operational workflows using Node.js, Express.js, Laravel with MongoDB/MySQL.");
bullet("Admin Dashboards: ", "Built React.js dashboards for ops management - roles, real-time monitoring, reporting.");
bullet("Auth, Payments and Integrations: ", "JWT + OAuth, RBAC, Stripe / Moko Afrika flows, FCM, third-party APIs.");
bullet("Quality and Delivery: ", "Improved reliability and performance via optimized queries, reusable components, Postman-tested endpoints.");

job("PHP Developer", "Logibloq IT Services", "Dec 2023 - Jun 2024");
bullet("Product Development: ", "Websites, admin panels, backend systems in CodeIgniter and Core PHP.");
bullet("Full-stack Integration: ", "Frontend-backend integrations, auth/sessions, MySQL CRUD modules.");

job("Web Developer", "Kutumbh Care Pvt. Ltd.", "Mar 2022 - Dec 2023");
bullet("Web Platforms: ", "Business websites and operational systems in Laravel, JS, HTML, CSS, Bootstrap.");
bullet("Modules and Data: ", "Frontend modules, backend workflows, database integrations.");

header("Independent Products - Published Apps and Extensions");
body("Portfolio: https://edevsuraj.github.io/explore-our-apps-and-extensions/ - Extensions live on Chrome Web Store, apps on Google Play.");
job("Chrome Extensions Developer", "Self-Employed / Indie", "2024 - Present");
bullet("Lock Website (Privacy): ", "Password-protect sites by domain, SHA-256, per-tab sessions, subdomain matching.");
bullet("Custom Tab Wallpaper: ", "Custom image/video new-tab wallpaper; uploads or remote URLs.");
bullet("SiteSwift - Speed Audit (DevTools): ", "One-click audit for slow resources, Core Web Vitals, SEO fixes.");
bullet("Indian Fake Filler (DevTools): ", "Realistic Indian test data, saved prefs, smart randoms for QA.");
bullet("Remindy (Productivity): ", "Reminders with new-tab countdowns + notifications.");
bullet("Yogi Adityanath New Tab: ", "Inspirational new-tab with EN/HI quotes.");

job("Android App Developer", "Self-Employed / Indie", "2024 - Present");
bullet("Mathify: Maths Practice: ", "Addition, subtraction, multiplication, division, quizzes, progress tracking. Live on Play.");
bullet("English Set Go: ", "English via Hindi - 12 tenses, 11,000+ verbs, 8,000+ phrases. Live on Play.");

job("Windows Tools Developer", "Self-Employed / Indie", "2025 - Present");
bullet("PC Deep Cleaner: ", "1-click batch optimizer with CMD animation; 7-zone temp/cache/junk clean. No install.");
bullet("UserCleanup: ", "1-click account remover; deletes profile + registry leftovers.");

header("Selected Professional Projects");
job("Dispatcher Management System", "Node.js, Express, React, MongoDB, FCM", "");
bullet("", "REST APIs + React admin for calls, zones, units; live monitoring; admin terminate-call; JWT/OAuth + FCM.");
job("Pet and Fitness Activity Platform", "Node.js, MongoDB, FCM", "");
bullet("", "Activity tracking, rewards, challenges, leaderboards; multi-pet profiles; global challenges; FCM pushes.");
job("School Activity and Task Management", "Laravel, React, MySQL", "");
bullet("", "Class-wise activities, participation, submissions/approvals, scoring, achievement points.");
job("Ride Management Platform", "Node.js, MongoDB, Moko Afrika", "");
bullet("", "Ride ops, vehicle mgmt, destination/airport/hotel pricing, wallet, bookings, transactions.");
job("Mentorship and Learning Platform", "Laravel, React, MySQL, Stripe", "");
bullet("", "Booking, scheduling, cancellation, payouts, Stripe; admin mentor approvals and course monitoring.");

header("Education");
body("Bachelor of Computer Applications (BCA), 2019 - 2022. Foundation in programming, DBMS, web tech, software engineering.");

header("Links");
bullet("Portfolio: ", "https://edevsuraj.github.io/explore-our-apps-and-extensions/");
bullet("Chrome Web Store: ", "6 live extensions | Google Play: Mathify, English Set Go");
bullet("Contact: ", "+91 8112773132 | edev.suraj@gmail.com | Noida, Sector 62, UP");

doc.end();
stream.on("finish", () => {
  const size = fs.statSync(out).size;
  console.log("PDF saved:", size);
});
