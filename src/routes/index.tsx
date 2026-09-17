import { createFileRoute } from "@tanstack/react-router";
import projectDashboard from "@/assets/project-dashboard.jpg";
import projectStorefront from "@/assets/project-storefront.jpg";
import projectTracker from "@/assets/project-tracker.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Kutlwano Mavimbela — Full-Stack Developer Portfolio" },
      {
        name: "description",
        content:
          "Portfolio of Kutlwano Mavimbela, full-stack developer. Projects, skills, experience, education, certifications and contact details.",
      },
      { property: "og:title", content: "Kutlwano Mavimbela — Full-Stack Developer Portfolio" },
      {
        property: "og:description",
        content:
          "Projects, skills, experience and contact details for Kutlwano Mavimbela, full-stack developer.",
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
  { href: "#contact", label: "Contact" },
];

const technicalSkills = [
  "TypeScript",
  "React",
  "Node.js",
  "Python",
  "PostgreSQL",
  "Tailwind CSS",
  "REST APIs",
  "Git & GitHub",
];

const softSkills = [
  "Communication",
  "Problem-solving",
  "Teamwork",
  "Time management",
  "Adaptability",
  "Mentoring",
];

const projects = [
  {
    title: "PulseBoard",
    year: "2026",
    description:
      "Realtime analytics dashboard that streams live metrics over WebSockets with custom, zoomable charts.",
    tech: ["React", "TypeScript", "WebSockets", "D3"],
    image: projectDashboard,
    alt: "Analytics dashboard interface with charts and live metrics",
  },
  {
    title: "ShopSmart",
    year: "2025",
    description:
      "E-commerce storefront with cart, checkout and order tracking — a 3-tap flow that keeps conversion high on mobile.",
    tech: ["Next.js", "Stripe", "Tailwind CSS"],
    image: projectStorefront,
    alt: "Minimal online store checkout screen on a mobile phone",
  },
  {
    title: "TaskFlow",
    year: "2024",
    description:
      "Team task manager with boards, deadlines and activity feeds. Cut project admin time for a 15-person team.",
    tech: ["React", "Node.js", "PostgreSQL"],
    image: projectTracker,
    alt: "Kanban task board with columns of project cards",
  },
];

const experience = [
  {
    period: "2024 — now",
    role: "Junior Full-Stack Developer · Nodal Labs",
    summary:
      "Build and maintain client web platforms end to end — API design, data modelling and front-end features.",
  },
  {
    period: "2023 — 2024",
    role: "Software Development Intern · Braintech Solutions",
    summary:
      "Shipped internal tooling and wrote tests across a legacy codebase while completing a structured mentorship.",
  },
];

const education = [
  {
    period: "2020 — 2023",
    title: "BSc Computer Science · University of Johannesburg",
    detail: "Focus on software engineering, databases and distributed systems.",
  },
];

const certifications = [
  { title: "AWS Certified Cloud Practitioner", detail: "Amazon Web Services · 2025" },
  { title: "Meta Front-End Developer", detail: "Coursera · 2024" },
  { title: "Google Data Analytics", detail: "Coursera · 2023" },
];

const stats = [
  { value: "3+", label: "years building" },
  { value: "15+", label: "projects shipped" },
  { value: "3", label: "certifications" },
  { value: "10+", label: "technologies" },
];

const contactLinks = [
  { label: "kutlwano.mavimbela@gmail.com", href: "mailto:kutlwano.mavimbela@gmail.com", icon: "@", primary: true },
  { label: "GitHub", href: "https://github.com/kutlwano-mavimbela", icon: "G", primary: false },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/kutlwano-mavimbela", icon: "in", primary: false },
];

function PillButton({
  href,
  children,
  primary = false,
  download,
}: {
  href: string;
  children: React.ReactNode;
  primary?: boolean;
  download?: boolean;
}) {
  return (
    <a
      href={href}
      download={download}
      className={
        primary
          ? "inline-flex items-center gap-2 rounded-full bg-primary py-2 pl-3 pr-4 text-sm font-medium text-primary-foreground ring-1 ring-primary transition hover:brightness-110"
          : "inline-flex items-center gap-2 rounded-full bg-white/5 py-2 pl-3 pr-4 text-sm font-medium text-foreground/90 ring-1 ring-border transition hover:bg-white/10"
      }
    >
      {children}
    </a>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background font-display text-foreground antialiased">
      {/* Nav */}
      <div className="sticky top-0 z-50 bg-background/70 ring-1 ring-border backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
          <a href="#top" className="font-mono text-sm tracking-tight text-primary">
            K. MAVIMBELA
          </a>
          <nav className="hidden items-center gap-7 text-sm text-muted-foreground md:flex">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="transition hover:text-foreground">
                {link.label}
              </a>
            ))}
          </nav>
          <PillButton href="/Kutlwano-Mavimbela-CV.pdf" primary download>
            <span className="grid size-4 place-items-center">↓</span>CV
          </PillButton>
        </div>
      </div>

      {/* Hero */}
      <section id="top" className="relative overflow-hidden bg-background">
        <div className="kx-2 pointer-events-none -right-20 -top-28 z-0 h-[520px] w-[620px] -rotate-12" />
        <div className="kx pointer-events-none -left-32 top-40 z-0 h-[460px] w-[560px] rotate-6" />
        <div className="relative z-10 mx-auto max-w-6xl px-6 py-24 md:py-32">
          <p className="kicker">Personal desk · case file 2026</p>
          <h1 className="mt-5 max-w-[20ch] text-balance text-5xl font-black leading-none tracking-tight md:text-7xl">
            KUTLWANO MAVIMBELA
          </h1>
          <p className="mt-3 max-w-[28ch] text-balance text-xl font-semibold text-foreground/90 md:text-2xl">
            Full-stack developer building fast, resilient products for the web.
          </p>
          <p className="mt-6 max-w-[48ch] text-pretty text-base leading-7 text-muted-foreground">
            Based in Johannesburg, South Africa. I turn ideas into working software — from
            database schema to interface — and I care about code the next person can read.
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
        <div className="mx-auto max-w-6xl px-6 py-20">
          <div className="grid items-start gap-10 md:grid-cols-2">
            <div>
              <h2 className="text-balance text-3xl font-semibold">About</h2>
              <p className="mt-5 max-w-[48ch] text-pretty text-base leading-7 text-muted-foreground">
                I'm Kutlwano — a developer who enjoys the whole stack: designing APIs and data
                models, then building interfaces people actually enjoy using. I started with
                small self-driven projects and grew into shipping production software for real
                teams, always learning something new with every build.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-3">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-xl bg-panel p-4 ring-1 ring-border">
                  <div className="text-3xl font-black text-primary">{stat.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="bg-background">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-balance text-3xl font-semibold">Skills</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl bg-panel p-6 ring-1 ring-border">
              <div className="kicker">Technical</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {technicalSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm ring-1 ring-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-panel p-6 ring-1 ring-border">
              <div className="kicker">Soft</div>
              <div className="mt-4 flex flex-wrap gap-2">
                {softSkills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full bg-white/5 px-3 py-1 text-sm ring-1 ring-border"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="work" className="bg-surface ring-1 ring-border">
        <div className="mx-auto max-w-6xl px-6 py-20">
          <h2 className="text-balance text-3xl font-semibold">Selected work</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {projects.map((project) => (
              <article
                key={project.title}
                className="flex flex-col overflow-hidden rounded-2xl bg-panel ring-1 ring-border transition hover:-translate-y-1"
              >
                <img
                  src={project.image}
                  alt={project.alt}
                  loading="lazy"
                  className="aspect-[16/10] w-full object-cover"
                />
                <div className="flex flex-1 flex-col p-5">
                  <div className="flex items-baseline justify-between gap-3">
                    <h3 className="text-balance text-lg font-semibold">{project.title}</h3>
                    <span className="font-mono text-xs text-muted-foreground">{project.year}</span>
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

      {/* Experience, education & certifications */}
      <section id="experience" className="bg-background">
        <div className="mx-auto grid max-w-6xl gap-14 px-6 py-20 md:grid-cols-2">
          <div>
            <h2 className="text-balance text-3xl font-semibold">Experience</h2>
            <ol className="mt-6 space-y-6">
              {experience.map((job, index) => (
                <li
                  key={job.role}
                  className={`pl-5 ${index === 0 ? "border-l-2 border-primary/40" : "border-l-2 border-border"}`}
                >
                  <div className="font-mono text-xs text-primary">{job.period}</div>
                  <div className="mt-1 text-lg font-semibold">{job.role}</div>
                  <p className="text-pretty text-sm leading-6 text-muted-foreground">
                    {job.summary}
                  </p>
                </li>
              ))}
            </ol>
            <h2 className="mt-14 text-balance text-3xl font-semibold">Education</h2>
            <ol className="mt-6 space-y-6">
              {education.map((edu) => (
                <li key={edu.title} className="border-l-2 border-primary/40 pl-5">
                  <div className="font-mono text-xs text-primary">{edu.period}</div>
                  <div className="mt-1 text-lg font-semibold">{edu.title}</div>
                  <p className="text-pretty text-sm leading-6 text-muted-foreground">
                    {edu.detail}
                  </p>
                </li>
              ))}
            </ol>
          </div>
          <div>
            <h2 className="text-balance text-3xl font-semibold">Certifications</h2>
            <ol className="mt-6 space-y-5">
              {certifications.map((cert, index) => (
                <li
                  key={cert.title}
                  className={`pl-5 ${index === 0 ? "border-l-2 border-primary/40" : "border-l-2 border-border"}`}
                >
                  <div className="text-lg font-semibold">{cert.title}</div>
                  <p className="text-sm text-muted-foreground">{cert.detail}</p>
                </li>
              ))}
            </ol>
            <div id="cv" className="mt-14 rounded-2xl bg-panel p-6 ring-1 ring-border">
              <div className="kicker">CV</div>
              <p className="mt-2 text-sm text-muted-foreground">
                One page, everything above in a single PDF.
              </p>
              <PillButton href="/Kutlwano-Mavimbela-CV.pdf" primary download>
                <span className="grid size-4 place-items-center">↓</span>Download CV (PDF)
              </PillButton>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="bg-surface ring-1 ring-border">
        <div className="mx-auto max-w-6xl px-6 py-20 text-center">
          <div className="kx pointer-events-none -bottom-24 -left-24 z-0 h-[360px] w-[420px] -rotate-6" />
          <div className="relative z-10">
            <h2 className="text-balance text-3xl font-semibold">Let's build something</h2>
            <p className="mx-auto mt-3 max-w-[44ch] text-pretty text-base leading-7 text-muted-foreground">
              Open to junior and mid-level developer roles, freelance builds and collaborations.
              The fastest way to reach me is email.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              {contactLinks.map((link) => (
                <PillButton key={link.label} href={link.href} primary={link.primary}>
                  <span className="grid size-4 place-items-center font-mono text-xs">
                    {link.icon}
                  </span>
                  {link.label}
                </PillButton>
              ))}
            </div>
            <p className="mt-8 font-mono text-xs text-muted-foreground">
              © 2026 Kutlwano Mavimbela · case file closed with care
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
