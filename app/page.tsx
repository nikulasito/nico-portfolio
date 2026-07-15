import { ContactForm } from "@/components/ContactForm";
import { Navbar } from "@/components/Navbar";
import { ProjectVisual } from "@/components/ProjectVisual";
import { Reveal } from "@/components/Reveal";

const projects = [
  {
    number: "01",
    title: "ENREMCO Management System",
    category: "Operational system / Laravel",
    description:
      "A production management platform for members, savings, shares, withdrawals, loans, payments, imports, reporting, and day-to-day cooperative operations.",
    stack: ["Laravel", "PHP", "MySQL", "Blade", "Excel workflows"],
    type: "system" as const,
    tone: "lime",
    note: "Private production system",
  },
  {
    number: "02",
    title: "Homeowner Agent Connect",
    category: "Product engineering / React",
    description:
      "Feature development and interface refinement for a property platform, including buyer activity, journey progress, client profiles, dashboards, alerts, and GraphQL-driven workflows.",
    stack: ["React", "TypeScript", "GraphQL", "Product UI", "Git workflow"],
    type: "platform" as const,
    tone: "blue",
    note: "Commercial product work",
  },
  {
    number: "03",
    title: "TukodPH Digital Experience",
    category: "Web design & development / Next.js",
    description:
      "A responsive web experience shaped from design prototype to deployable Next.js build, covering migration, component architecture, hosting, and domain configuration.",
    stack: ["Next.js", "React", "TypeScript", "Vercel", "UI implementation"],
    type: "web" as const,
    tone: "orange",
    note: "Website and deployment",
    href: "https://github.com/uxdesignninja/Tukodph",
  },
  {
    number: "04",
    title: "Reverse Focus Media Production",
    category: "Post-production / Motion",
    description:
      "Recurring podcast, interview, and industry-update production with editorial pacing, two-shot coverage, sponsor packages, disclaimers, sound design, graphics, and platform-ready delivery.",
    stack: [
      "Premiere Pro",
      "After Effects",
      "Audition",
      "Illustrator",
      "Motion graphics",
    ],
    type: "motion" as const,
    tone: "rose",
    note: "Weekly media production",
    href: "https://vimeo.com/voxelworksdigital",
  },
];

const capabilityGroups = [
  {
    index: "01",
    title: "Product Engineering",
    body: "I turn operational requirements and product flows into maintainable web applications, from database logic and APIs to responsive interfaces.",
    items: [
      "Laravel & PHP",
      "Next.js & React",
      "TypeScript",
      "MySQL",
      "GraphQL",
    ],
  },
  {
    index: "02",
    title: "Mobile & Interface",
    body: "I build and refine mobile experiences with attention to navigation, reusable components, state, accessibility, and real-world usability.",
    items: [
      "React Native",
      "Expo",
      "UI implementation",
      "Design systems",
      "Responsive UX",
    ],
  },
  {
    index: "03",
    title: "Creative Production",
    body: "I combine editing, motion, audio, illustration, and 3D skills to produce polished visual communication—not just functional software.",
    items: [
      "Video editing",
      "Motion graphics",
      "Audio post",
      "Graphic design",
      "3D workflows",
    ],
  },
];

const experience = [
  {
    role: "Systems, Data & Administrative Technology",
    place: "DENR Region X",
    detail:
      "Operational systems, data control, procurement support, process improvement, and technology-enabled public-service workflows.",
  },
  {
    role: "Technology & Multimedia Instructor",
    place: "USTP",
    detail:
      "Teaching Mobile Programming and previously handling multimedia-focused subjects that connect code, design, and production practice.",
  },
  {
    role: "Independent Developer & Creative Partner",
    place: "Remote / International clients",
    detail:
      "Web and mobile development, product implementation, branding support, video post-production, and recurring content delivery.",
  },
];

export default function Home() {
  return (
    <>
      <Reveal />
      <Navbar />

      <main id="top">
        <section className="hero">
          <div className="hero-grid" aria-hidden="true" />
          <div className="hero-orb hero-orb-one" aria-hidden="true" />
          <div className="hero-orb hero-orb-two" aria-hidden="true" />

          <div className="hero-kicker" data-reveal>
            <span className="status-dot" />
            Based in Cagayan de Oro · Working remotely
          </div>

          <div className="hero-title-wrap">
            <p className="hero-index" data-reveal>
              PORTFOLIO / 2026
            </p>
            <h1 data-reveal>
              I build <em>systems,</em>
              <br />
              interfaces <span>&amp;</span> stories.
            </h1>
          </div>

          <div className="hero-bottom" data-reveal>
            <p>
              Full-stack developer and creative technologist combining product
              engineering, operational systems, UI implementation, and visual
              production.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Explore selected work <span>↘</span>
              </a>
              <a
                className="text-link"
                href="mailto:n.alumbro@gmail.com?subject=Portfolio%20inquiry"
              >
                n.alumbro@gmail.com ↗
              </a>
            </div>
          </div>

          <div className="hero-marquee" aria-label="Areas of practice">
            <div>
              <span>FULL-STACK DEVELOPMENT</span>
              <i>✦</i>
              <span>PRODUCT INTERFACES</span>
              <i>✦</i>
              <span>MOBILE EXPERIENCES</span>
              <i>✦</i>
              <span>MOTION & POST-PRODUCTION</span>
              <i>✦</i>
              <span>FULL-STACK DEVELOPMENT</span>
              <i>✦</i>
              <span>PRODUCT INTERFACES</span>
              <i>✦</i>
              <span>MOBILE EXPERIENCES</span>
              <i>✦</i>
              <span>MOTION & POST-PRODUCTION</span>
              <i>✦</i>
            </div>
          </div>
        </section>

        <section className="intro section-shell" id="about">
          <div className="section-label" data-reveal>
            <span>01</span> About
          </div>
          <div className="intro-copy" data-reveal>
            <p className="eyebrow">One practice, multiple disciplines.</p>
            <h2>
              I work where <span>technology</span>, design, and communication
              meet.
            </h2>
            <div className="intro-columns">
              <p>
                My background spans software development, data systems,
                teaching, design, motion, and media production. That range helps
                me understand both the logic behind a product and the way people
                experience it.
              </p>
              <p>
                I can move from requirements and database structure to interface
                details, deployment, animation, and final delivery—keeping the
                work coherent from the inside out.
              </p>
            </div>
          </div>
          <div className="intro-facts" data-reveal>
            <div>
              <strong>15+</strong>
              <span>Years across technology, design & media</span>
            </div>
            <div>
              <strong>04</strong>
              <span>Core disciplines in one multidisciplinary practice</span>
            </div>
            <div>
              <strong>PH</strong>
              <span>Philippines-based, collaborating remotely</span>
            </div>
          </div>
        </section>

        <section className="work section-shell" id="work">
          <div className="work-heading" data-reveal>
            <div className="section-label light">
              <span>02</span> Selected work
            </div>
            <h2>Built for real workflows.</h2>
            <p>
              A selection of product, system, web, and media work that reflects
              how I solve problems across disciplines.
            </p>
          </div>

          <div className="project-list">
            {projects.map((project) => (
              <article
                className={`project-card tone-${project.tone}`}
                key={project.title}
                data-reveal
              >
                <div className="project-meta">
                  <span>{project.number}</span>
                  <p>{project.category}</p>
                  <small>{project.note}</small>
                </div>

                <ProjectVisual type={project.type} />

                <div className="project-copy">
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="tag-row">
                    {project.stack.map((item) => (
                      <span key={item}>{item}</span>
                    ))}
                  </div>
                  {project.href ? (
                    <a href={project.href} target="_blank" rel="noreferrer">
                      View related work <span>↗</span>
                    </a>
                  ) : (
                    <span className="private-link">
                      Case details available on request
                    </span>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="capabilities section-shell" id="capabilities">
          <div className="section-label" data-reveal>
            <span>03</span> Capabilities
          </div>
          <div className="capability-heading" data-reveal>
            <p className="eyebrow">From logic to launch.</p>
            <h2>
              A hybrid toolkit for digital products and visual communication.
            </h2>
          </div>

          <div className="capability-list">
            {capabilityGroups.map((group) => (
              <article key={group.title} data-reveal>
                <span className="capability-index">{group.index}</span>
                <div>
                  <h3>{group.title}</h3>
                  <p>{group.body}</p>
                </div>
                <ul>
                  {group.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="experience section-shell">
          <div className="experience-heading" data-reveal>
            <div className="section-label light">
              <span>04</span> Experience
            </div>
            <h2>
              Technical depth.
              <br />
              Creative range.
            </h2>
          </div>
          <div className="experience-list">
            {experience.map((item, index) => (
              <article key={item.role} data-reveal>
                <span>0{index + 1}</span>
                <div>
                  <h3>{item.role}</h3>
                  <p>{item.place}</p>
                </div>
                <p>{item.detail}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="process section-shell">
          <div className="section-label" data-reveal>
            <span>05</span> Approach
          </div>
          <div className="process-main" data-reveal>
            <h2>Clear thinking before visual noise.</h2>
            <p>
              I start by understanding the workflow, the audience, and what
              success actually means. Then I design the structure, build the
              system, refine the experience, and prepare it for real use.
            </p>
          </div>
          <div className="process-steps">
            {["Discover", "Structure", "Build", "Refine", "Deliver"].map(
              (step, index) => (
                <div key={step} data-reveal>
                  <span>0{index + 1}</span>
                  <strong>{step}</strong>
                </div>
              ),
            )}
          </div>
        </section>

        <section className="contact" id="contact">
          <div className="contact-noise" aria-hidden="true" />
          <div className="contact-top section-shell" data-reveal>
            <div className="section-label light">
              <span>06</span> Contact
            </div>
            <p>
              Have a product, system, website, or story that needs to be built
              properly?
            </p>
          </div>
          <div className="contact-main section-shell">
            <div className="contact-heading" data-reveal>
              <h2>
                Let&apos;s make
                <br />
                <em>something useful.</em>
              </h2>
              <p>
                Share the essentials and I&apos;ll reply by email. For sensitive
                or private work, a short overview is enough to start.
              </p>
            </div>
            <div data-reveal>
              <ContactForm />
            </div>
          </div>
          <footer className="footer section-shell">
            <div>
              <strong>Nico Alumbro</strong>
              <span>Developer & Creative Technologist</span>
            </div>
            <div className="footer-links">
              <a
                href="https://github.com/nikulasito"
                target="_blank"
                rel="noreferrer"
              >
                GitHub ↗
              </a>
              <a
                href="https://vimeo.com/voxelworksdigital"
                target="_blank"
                rel="noreferrer"
              >
                Vimeo ↗
              </a>
              <a href="mailto:n.alumbro@gmail.com">Email ↗</a>
            </div>
            <p>© {new Date().getFullYear()} Nico Alumbro</p>
          </footer>
        </section>
      </main>
    </>
  );
}
