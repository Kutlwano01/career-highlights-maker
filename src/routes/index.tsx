import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import workVat from "@/assets/work-vat.jpg";
import workCipc from "@/assets/work-cipc.jpg";
import workPayroll from "@/assets/work-payroll.jpg";
import cvAsset from "@/assets/cv.pdf.asset.json";
import certAiEssentials from "@/assets/cert-ai-essentials.pdf.asset.json";
import certIntroAi from "@/assets/cert-intro-ai.pdf.asset.json";
import certProductivity from "@/assets/cert-productivity.pdf.asset.json";
import certPrompting from "@/assets/cert-prompting.pdf.asset.json";
import certResponsible from "@/assets/cert-responsible.pdf.asset.json";
import certCurve from "@/assets/cert-curve.pdf.asset.json";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Intellegent Kutlwano Mavimbela — Financial & Compliance Administrator" },
      {
        name: "description",
        content:
          "Financial Management Administrator in Gauteng. Sage Pastel, Draftworx, SARS eFiling, VAT and tax, CIPC compliance, payroll and Google AI Essentials certified.",
      },
      {
        property: "og:title",
        content: "Intellegent Kutlwano Mavimbela — Financial & Compliance Administrator",
      },
      {
        property: "og:description",
        content:
          "N6 Financial Management. VAT/tax processing, CIPC compliance, payroll and labour statutory work, plus Google AI Essentials.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const navLinks = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#education", label: "Education" },
  { href: "#certifications", label: "Certifications" },
  { href: "#contact", label: "Contact" },
];

const skillGroups = [
  {
    title: "Accounting systems",
    items: ["Sage Pastel v19 (Intermediate/Advanced)", "Draftworx", "MS Excel"],
  },
  {
    title: "Taxation",
    items: ["SARS eFiling", "VAT201", "EMP201 / EMP501 reconciliations", "Tax status management"],
  },
  {
    title: "Statutory compliance",
    items: ["CIPC company registrations", "Beneficial Ownership filings", "Annual returns"],
  },
  {
    title: "Payroll & labour",
    items: ["Sage Pastel Payroll 2019", "UIF declarations", "COIDA / Return of Earnings"],
  },
  {
    title: "AI tools",
    items: ["Prompt writing", "AI-assisted productivity", "Responsible AI use"],
  },
  {
    title: "Soft skills",
    items: [
      "Accuracy under high volume",
      "Works unsupervised",
      "Client communication",
      "Deadline-driven",
    ],
  },
];

const projects = [
  {
    title: "Full-cycle VAT & tax processing",
    year: "Ongoing",
    description:
      "End-to-end VAT and tax processing for SME clients — VAT201 and EMP201/501 submissions, reconciliations and annual financial statements prepared in Draftworx.",
    tech: ["SARS eFiling", "VAT201", "EMP501", "Draftworx"],
    image: workVat,
    alt: "Tax return paperwork and a calculator on a dark desk",
  },
  {
    title: "CIPC company compliance",
    year: "Ongoing",
    description:
      "New company registrations kept fully compliant: Beneficial Ownership registers filed on time and annual returns lodged without lapses.",
    tech: ["CIPC", "Beneficial Ownership", "Annual returns"],
    image: workCipc,
    alt: "Company registration documents in a folder with an official stamp",
  },
  {
    title: "Payroll & labour compliance",
    year: "Ongoing",
    description:
      "Monthly payroll runs plus the statutory work around them — UIF declarations and COIDA Return of Earnings renewals, with clean bank reconciliations behind them.",
    tech: ["Sage Pastel Payroll", "UIF", "COIDA ROE"],
    image: workPayroll,
    alt: "Payroll spreadsheets and a laptop showing rows of figures",
  },
];

const experience = [
  {
    period: "2024 — present",
    role: "Financial & Compliance Administrator",
    org: "ManalaSnail Accountants, Hatfield",
    points: [
      "Executes end-to-end VAT and tax processing and prepares Annual Financial Statements using Draftworx and Sage Pastel.",
      "Manages CIPC compliance, including new company registrations and mandatory Beneficial Ownership registers.",
      "Handles monthly SARS eFiling, UIF declarations and COIDA Return of Earnings renewals.",
      "Maintains 100% accuracy in high-volume data capturing and bank reconciliations for SME clients.",
    ],
  },
  {
    period: "2022 — 2023",
    role: "Brand Ambassador",
    org: "Tradeway Promotions, Bryanston",
    points: [
      "Carried out promotional events, interacted with customers and documented sales across various products.",
      "Designed eye-catching displays and communicated professionally with stakeholders.",
    ],
  },
];

const education = [
  {
    period: "2019 — 2021",
    title: "N6 Financial Management",
    detail: "Central Johannesburg College",
  },
  {
    period: "2018",
    title: "National Senior Certificate (Matric)",
    detail: "Prestigious Aureate High School",
  },
];

const certifications = [
  {
    title: "Introduction to AI",
    issuer: "Google · Coursera · Sep 2026",
    verify: "https://coursera.org/verify/N57QMLP7453E",
    file: certIntroAi.url,
  },
  {
    title: "Maximize Productivity With AI Tools",
    issuer: "Google · Coursera · Sep 2026",
    verify: "https://coursera.org/verify/KMU8ZJIMENRA",
    file: certProductivity.url,
  },
  {
    title: "Discover the Art of Prompting",
    issuer: "Google · Coursera · Sep 2026",
    verify: "https://coursera.org/verify/8UMQLD2K3CRO",
    file: certPrompting.url,
  },
  {
    title: "Use AI Responsibly",
    issuer: "Google · Coursera · Sep 2026",
    verify: "https://coursera.org/verify/3GOI84ZMNNC0",
    file: certResponsible.url,
  },
  {
    title: "Stay Ahead of the AI Curve",
    issuer: "Google · Coursera · Sep 2026",
    verify: "https://coursera.org/verify/97M4JSHO9BHS",
    file: certCurve.url,
  },
];

const stats = [
  { value: "N6", label: "Financial Management" },
  { value: "2+", label: "years in practice" },
  { value: "6", label: "Google AI certificates" },
  { value: "100%", label: "capturing accuracy" },
];

const contactLinks = [
  {
    label: "Kutlwanomawela1@gmail.com",
    href: "mailto:Kutlwanomawela1@gmail.com",
    icon: "@",
    primary: true,
  },
  { label: "081 458 3735", href: "tel:+27814583735", icon: "T", primary: false },
  { label: "084 757 2130", href: "tel:+27847572130", icon: "T", primary: false },
];

function PillButton({
  href,
  children,
  primary = false,
  download,
  external,
  className = "",
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  download?: boolean;
  external?: boolean;
  className?: string;
}) {
  return (
    <a
      href={href}
      download={download}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer noopener" : undefined}
      className={`${
        primary
          ? "inline-flex min-h-11 items-center gap-2 rounded-full bg-primary py-2 pl-3 pr-4 text-sm font-medium text-primary-foreground ring-1 ring-primary transition hover:brightness-110"
          : "inline-flex min-h-11 items-center gap-2 rounded-full bg-white/5 py-2 pl-3 pr-4 text-sm font-medium text-foreground/90 ring-1 ring-border transition hover:bg-white/10"
      } ${className}`}
    >
      {children}
    </a>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen scroll-smooth bg-background font-display text-foreground antialiased">
      {/* Nav */}
      <header className="sticky top-0 z-50 bg-background/80 ring-1 ring-border backdrop-blur-md">
        <div className="mx-auto grid h-16 max-w-6xl grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-4 sm:px-6 lg:flex lg:justify-between">
          <a
            href="#top"
            className="truncate font-mono text-sm tracking-tight text-primary"
            onClick={() => setMenuOpen(false)}
          >
            I.K. MAVIMBELA
          </a>
          <nav className="hidden items-center gap-6 text-sm text-muted-foreground lg:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          <div className="flex shrink-0 items-center gap-2">
            <PillButton href={cvAsset.url} primary download className="hidden sm:inline-flex">
              <span className="grid size-4 place-items-center">↓</span>CV
            </PillButton>
            <button
              type="button"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((open) => !open)}
              className="grid size-11 shrink-0 place-items-center rounded-full bg-white/5 text-foreground ring-1 ring-border transition hover:bg-white/10 lg:hidden"
            >
              <span className="font-mono text-base leading-none">{menuOpen ? "✕" : "☰"}</span>
            </button>
          </div>
        </div>
        {menuOpen ? (
          <nav className="border-t border-border bg-background/95 px-4 pb-4 pt-2 sm:px-6 lg:hidden">
            <ul className="flex flex-col">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    className="block py-3 text-base text-muted-foreground transition hover:text-foreground"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li className="pt-3">
                <PillButton href={cvAsset.url} primary download>
                  <span className="grid size-4 place-items-center">↓</span>Download CV
                </PillButton>
              </li>
            </ul>
          </nav>
        ) : null}
      </header>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-background">
        <div className="kx-2 pointer-events-none -right-20 -top-28 z-0 h-[520px] w-[620px] -rotate-12" />
        <div className="kx pointer-events-none -left-32 top-40 z-0 h-[460px] w-[560px] rotate-6" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-32">
          <p className="kicker">Gauteng · case file 2026</p>
          <h1 className="mt-5 max-w-[20ch] text-balance text-4xl font-black leading-[1.05] tracking-tight sm:text-5xl md:text-7xl">
            INTELLEGENT KUTLWANO MAVIMBELA
          </h1>
          <p className="mt-4 max-w-[34ch] text-balance text-lg font-semibold text-foreground/90 sm:text-xl md:text-2xl">
            Financial Management Administrator — tax, statutory compliance and payroll.
          </p>
          <p className="mt-6 max-w-[52ch] text-pretty text-base leading-7 text-muted-foreground">
            National N6 Certificate in Financial Management. Highly proficient in Sage Pastel v19
            and Draftworx, with full-cycle VAT/Tax (EMP201/501), CIPC registrations including
            Beneficial Ownership, and labour compliance (UIF/COIDA). Known for high-quality work
            in timely, unsupervised and fast-paced environments.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <PillButton href="#work" primary>
              See the work →
            </PillButton>
            <PillButton href="#contact">Get in touch</PillButton>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative bg-surface ring-1 ring-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-balance text-2xl font-semibold sm:text-3xl">About</h2>
              <p className="mt-5 max-w-[52ch] text-pretty text-base leading-7 text-muted-foreground">
                I'm Kutlwano, a financial and compliance administrator based in Gauteng. My day is
                VAT and tax submissions, CIPC filings, payroll and the statutory paperwork that
                keeps small businesses in good standing with SARS, CIPC and the Department of
                Labour. I hold a valid Code 10 driver's licence, and I've recently completed the
                Google AI Essentials certificate so I can bring AI tools into everyday finance
                admin work.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-panel p-4 ring-1 ring-border">
                  <div className="text-2xl font-black text-primary sm:text-3xl">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-background">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-balance text-2xl font-semibold sm:text-3xl">Skills</h2>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {skillGroups.map((group) => (
              <div key={group.title} className="rounded-2xl bg-panel p-5 ring-1 ring-border sm:p-6">
                <div className="kicker">{group.title}</div>
                <div className="mt-4 flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-full bg-white/5 px-3 py-1 text-sm ring-1 ring-border"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Work highlights */}
      <section id="work" className="bg-surface ring-1 ring-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-balance text-2xl font-semibold sm:text-3xl">Work highlights</h2>
          <p className="mt-3 max-w-[52ch] text-pretty text-sm leading-6 text-muted-foreground">
            Real responsibilities I carry day to day, grouped into the three areas I'm strongest in.
          </p>
          <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden rounded-2xl bg-panel ring-1 ring-border transition hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  width={1024}
                  height={640}
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="min-w-0 text-balance text-lg font-semibold">{project.title}</h3>
                    <span className="shrink-0 font-mono text-xs text-muted-foreground">
                      {project.year}
                    </span>
                  </div>
                  <p className="mt-2 text-pretty text-sm leading-6 text-muted-foreground">
                    {project.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="rounded bg-primary/10 px-2 py-1 text-xs text-primary"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & education */}
      <section id="experience" className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 sm:py-20 md:grid-cols-2">
          <div>
            <h2 className="text-balance text-2xl font-semibold sm:text-3xl">Experience</h2>
            <ol className="mt-6 space-y-8">
              {experience.map((job, index) => (
                <li
                  key={job.role}
                  className={`pl-5 ${index === 0 ? "border-l-2 border-primary/40" : "border-l-2 border-border"}`}
                >
                  <div className="font-mono text-xs text-primary">{job.period}</div>
                  <div className="mt-1 text-lg font-semibold">{job.role}</div>
                  <div className="text-sm text-muted-foreground">{job.org}</div>
                  <ul className="mt-3 space-y-2">
                    {job.points.map((point) => (
                      <li
                        key={point}
                        className="text-pretty text-sm leading-6 text-muted-foreground before:mr-2 before:text-primary before:content-['—']"
                      >
                        {point}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>
          </div>
          <div id="education">
            <h2 className="text-balance text-2xl font-semibold sm:text-3xl">Education</h2>
            <ol className="mt-6 space-y-6">
              {education.map((edu, index) => (
                <li
                  key={edu.title}
                  className={`pl-5 ${index === 0 ? "border-l-2 border-primary/40" : "border-l-2 border-border"}`}
                >
                  <div className="font-mono text-xs text-primary">{edu.period}</div>
                  <div className="mt-1 text-lg font-semibold">{edu.title}</div>
                  <p className="text-pretty text-sm leading-6 text-muted-foreground">
                    {edu.detail}
                  </p>
                </li>
              ))}
            </ol>
            <div id="cv" className="mt-10 rounded-2xl bg-panel p-5 ring-1 ring-border sm:p-6">
              <div className="kicker">CV</div>
              <p className="mb-4 mt-2 text-sm text-muted-foreground">
                My full CV, including references, as a PDF.
              </p>
              <PillButton href={cvAsset.url} primary download>
                <span className="grid size-4 place-items-center">↓</span>Download CV (PDF)
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section id="certifications" className="bg-surface ring-1 ring-border">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-20">
          <h2 className="text-balance text-2xl font-semibold sm:text-3xl">Certifications</h2>
          <div className="mt-8 rounded-2xl bg-panel p-5 ring-1 ring-primary/40 sm:p-6">
            <div className="kicker">Professional certificate</div>
            <h3 className="mt-2 text-balance text-xl font-semibold">
              Google AI Essentials — 5-course specialization
            </h3>
            <p className="mt-2 max-w-[60ch] text-pretty text-sm leading-6 text-muted-foreground">
              Google · Coursera · September 2026. Five courses developed by Google with hands-on
              practice in using AI tools responsibly and improving productivity across a workflow.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <PillButton href={certAiEssentials.url} primary external>
                View certificate
              </PillButton>
              <PillButton
                href="https://coursera.org/verify/specialization/TMTJCH7UF83J"
                external
              >
                Verify on Coursera
              </PillButton>
            </div>
          </div>
          <div className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {certifications.map((cert) => (
              <article
                key={cert.title}
                className="flex flex-col rounded-2xl bg-panel p-5 ring-1 ring-border"
              >
                <h3 className="text-balance text-base font-semibold">{cert.title}</h3>
                <p className="mt-1 text-xs text-muted-foreground">{cert.issuer}</p>
                <div className="mt-4 flex flex-wrap gap-2 pt-1">
                  <a
                    href={cert.file}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-9 items-center rounded-full bg-white/5 px-3 text-xs ring-1 ring-border transition hover:bg-white/10"
                  >
                    View
                  </a>
                  <a
                    href={cert.verify}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="inline-flex min-h-9 items-center rounded-full bg-primary/10 px-3 text-xs text-primary transition hover:bg-primary/20"
                  >
                    Verify
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative overflow-hidden bg-background">
        <div className="kx pointer-events-none -bottom-24 -left-24 z-0 h-[360px] w-[420px] -rotate-6" />
        <div className="relative z-10 mx-auto max-w-6xl px-4 py-16 text-center sm:px-6 sm:py-20">
          <h2 className="text-balance text-2xl font-semibold sm:text-3xl">Let's work together</h2>
          <p className="mx-auto mt-3 max-w-[46ch] text-pretty text-base leading-7 text-muted-foreground">
            Open to financial administration, tax and compliance roles in Gauteng. Email is the
            fastest way to reach me — or call either number below.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {contactLinks.map((link) => (
              <PillButton key={link.label} href={link.href} primary={link.primary}>
                <span className="grid size-4 place-items-center font-mono text-xs">
                  {link.icon}
                </span>
                <span className="truncate">{link.label}</span>
              </PillButton>
            ))}
          </div>
          <p className="mt-6 text-sm text-muted-foreground">
            Gauteng, South Africa · Code 10 driver's licence (valid) · References available on
            request
          </p>
          <p className="mt-8 font-mono text-xs text-muted-foreground">
            © 2026 Intellegent Kutlwano Mavimbela
          </p>
        </div>
      </section>
    </div>
  );
}
