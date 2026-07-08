import type { CSSProperties, ReactNode } from "react";
import { ClientEffects } from "@/components/ClientEffects";
import { Icon } from "@/components/Icon";
import { Navbar } from "@/components/Navbar";
import { ShaderBackground } from "@/components/ShaderBackground";

const projectImages = {
  analytics:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCUGKl5tGygAJV8ZDxepD4EDUwdWmdRXbu21fTyeIGexz83zQsb9e9zXc4mjdfTtLK6bFcBQO3pznpN32ie1hmod06Z3QNhJ-GNbwrhnRNTHhlM7mXrfuUZ8Jcf0SiQ_vol3D6Vhr-d_fEqj3Vupy8LZhEEcINviDEZAmOZ8cI-Uun1_iMHU5l4EUjN1Pxaqc0sxqsvuNl73oDrZrykrZqmgJ9unGBgjwttgQX1tJr9Y_E8aidux-FwqX2wK2f24Lz8mVyUi5-vsbY",
  wallet:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD8IWoMj60POUK0TEhpqZJn8ky1HLmF50hO1oT3jECL3mD5inVIz6zmm7RCM1HWF_c27-dzWSwUO7D95j-uqBIYpXxD62nk0-TdOURfZK8Hd1ypUKIGjMp6y170PIuXAGVUw9MKRKCa4gwzDAyH7kvTgcoUL6WDTYs07SYJyhJTFojSWWo5aJz_BlosgOg4gRUeSi0rhTPULXWvEhoxR0qbzO-BoE4bFhXoVUCT2GzOal2s19PDLBZqDmulGz4vEzE1hsG6XwsQBSU",
  laravel:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDVwWGCXqJJXm4sRH9ZNhu9sIzGLHXunRuwAIlFQyZ8u0q-o3vSwODEUsXtKiDTp7KbfIuNFIVWM0CSWN2dgot_3MX_y9SNjuloiWMfsZnC65InaJ2ztl2gXlq8G9P-Ozv2F7YJI3LPhyeNUnCjW4JsQn1yj7sC5SvXhH6mdgV2BkgtyFDf_YNaZjW4gNasaEyx-LPV3nfIg7l-eUIiXlx62d0YyNj2zYDEOpSBBjtb_73tA_p5umfK3THC6ITTZ354f8jGiY-o0V8",
  reactNative:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuB6B18kRKtdn33bA-tknYnCLTWqNAc9CNKuZOZSZgQRhV2Zf3ilE46JpTW2_0MJbZ7vRmIzxE0vEjMiLWehVbtUbobBBrECrdR8ovEh9aTOHWEhK2qvh3mW4z8VTdOl5c7Pynx_tIuXj4h_15nsuv9_VnkEWnHGNlv4vzZ2viT1h0c54VOB-b2_h8yEbDiHQulMoMiDXtdJYyMAVxQv6R1ne8r1rZEIjOM4wegui7yv8QG924JF5gz0XLUmde54zzuZbHMrv9UC6Lw",
  typescript:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBlgjv8ox3zVYUHX1EIQqt4nQMNNlJtHU8SYjg1XLTg-zMn0F_XwwgbA6ggYg9DPmhojRU5WdC-i8AUq6ad6uWk5CVJ8QgmN0XDkU0zoSUdlMKrCfp1_JBY5dTzAt8XFk1GPebs4KYAGC1hIiik80hT4lyW8FqsrxayYApQvW3KUIythHHdK496LqMfjGCeIhs_hzthrpspYL5nfng2j9Z0ukMF7giVvxgVPga6WyDRaPbxyfuRKU5jijqDzZfyZ28gWcw42ejcG2w",
};

const contributionHeights = [
  23, 18, 63, 68, 25, 33, 27, 39, 21, 31, 27, 58, 51, 59, 60, 58, 69, 13,
  53, 25, 59, 66, 23, 10, 58, 25, 11, 13, 69, 69, 35, 45, 42, 32, 16, 57,
  65, 15, 18, 27, 55, 18, 31, 69, 60, 57, 22, 28, 62, 48, 34, 20,
];

const toolbox = [
  {
    icon: "auto_awesome",
    iconClass: "text-primary",
    title: "Frontend",
    skills: ["Next.js", "React", "Tailwind", "TS"],
    delay: "",
  },
  {
    icon: "database",
    iconClass: "text-secondary",
    title: "Backend",
    skills: ["Laravel", "PHP", "Node.js"],
    delay: "delay-100",
  },
  {
    icon: "smartphone",
    iconClass: "text-primary",
    title: "Mobile",
    skills: ["React Native", "Expo"],
    delay: "delay-200",
  },
  {
    icon: "cloud",
    iconClass: "text-tertiary",
    title: "Tools",
    skills: ["Docker", "Git", "Vercel"],
    delay: "delay-300",
  },
];

const expertise = [
  {
    icon: "api",
    color: "text-primary",
    title: "REST API Design",
    body: "Architecting scalable, secure, and well-documented APIs that serve millions of requests.",
  },
  {
    icon: "brush",
    color: "text-secondary",
    title: "UI/UX Implementation",
    body: "Translating complex design systems into pixel-perfect, accessible React components.",
  },
  {
    icon: "speed",
    color: "text-tertiary",
    title: "Performance Tuning",
    body: "Optimizing Core Web Vitals, database queries, and bundle sizes for maximum speed.",
  },
  {
    icon: "motion_photos_on",
    color: "text-primary",
    title: "Motion Graphics",
    body: "Adding life to interfaces with subtle animations using Framer Motion and GSAP.",
  },
  {
    icon: "videocam",
    color: "text-secondary",
    title: "Video Production",
    body: "Editing professional software demos and educational content for developer communities.",
  },
  {
    icon: "security",
    color: "text-tertiary",
    title: "App Security",
    body: "Implementing OAuth2, JWT, and modern security practices to protect user data.",
  },
];

const posts = [
  {
    image: projectImages.laravel,
    meta: "OCT 12, 2024 • 5 MIN READ",
    title: "Mastering Laravel Performance",
    body: "How we optimized our database queries to handle 10x the traffic without increasing infrastructure costs.",
  },
  {
    image: projectImages.reactNative,
    meta: "SEP 28, 2024 • 8 MIN READ",
    title: "The Future of React Native",
    body: "Exploring the New Architecture, TurboModules, and what the JSI brings to mobile performance.",
  },
  {
    image: projectImages.typescript,
    meta: "AUG 15, 2024 • 4 MIN READ",
    title: "Clean Code in TypeScript",
    body: "Moving beyond 'any' and leveraging advanced types for more resilient applications.",
  },
];

function imageStyle(url: string): CSSProperties {
  return { "--image": `url("${url}")` } as CSSProperties;
}

function TechTag({ children }: { children: ReactNode }) {
  return (
    <span className="rounded-full border border-outline-variant/20 bg-surface-container-high px-3 py-1 text-xs text-outline">
      {children}
    </span>
  );
}

export default function Home() {
  return (
    <>
      <ClientEffects />
      <Navbar />

      <main>
        <section
          id="home"
          className="relative flex min-h-screen items-center justify-center overflow-hidden"
        >
          <ShaderBackground />
          <div className="relative z-10 mx-auto max-w-container-max px-gutter text-center">
            <h1 className="reveal active mb-stack-sm font-display text-display-lg-mobile md:text-display-lg">
              Hi, I&apos;m Nico.
            </h1>
            <p className="reveal active mx-auto mb-stack-md max-w-2xl font-display text-headline-sm text-on-surface-variant delay-100">
              Full Stack Developer crafting fast, scalable, and intuitive digital experiences.
            </p>
            <p className="reveal active mb-stack-lg text-body-lg text-outline delay-200">
              Expertise in Laravel, Next.js, React Native, and TypeScript.
            </p>
            <div className="reveal active flex flex-col justify-center gap-4 delay-300 sm:flex-row">
              <a
                className="rounded-xl bg-primary px-8 py-4 font-semibold text-on-primary transition-all hover:shadow-[0_0_20px_rgba(192,193,255,0.4)]"
                href="#projects"
              >
                View Projects
              </a>
              <a
                className="rounded-xl border border-white/15 bg-white/5 px-8 py-4 font-semibold text-on-surface backdrop-blur-sm transition-colors hover:bg-white/10"
                href="#contact"
              >
                Contact Me
              </a>
            </div>
          </div>
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <Icon className="text-outline">expand_more</Icon>
          </div>
        </section>

        <section id="about" className="mx-auto max-w-container-max px-gutter py-section-gap">
          <div className="grid grid-cols-1 items-center gap-stack-lg lg:grid-cols-2">
            <div className="reveal">
              <h2 className="mb-stack-md font-display text-headline-md">
                Engineering digital solutions with passion.
              </h2>
              <div className="space-y-stack-md text-on-surface-variant">
                <p>
                  I specialize in building robust web and mobile applications that bridge the gap
                  between complex functionality and seamless user experience. My journey in
                  development is driven by a constant curiosity for new technologies and a
                  commitment to clean, maintainable code.
                </p>
                <p>
                  Whether it&apos;s architecting a scalable backend with Laravel or crafting fluid
                  interfaces with React, I prioritize performance and accessibility in every line
                  of code I write.
                </p>
              </div>
            </div>

            <div className="glass-card reveal rounded-xl p-stack-lg delay-200">
              <div className="mb-stack-md flex items-center gap-4">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-surface-container-highest">
                  <Icon className="text-4xl text-primary">person</Icon>
                </div>
                <div>
                  <div className="font-display text-headline-sm">Nico</div>
                  <div className="font-mono text-label-mono text-secondary">
                    AVAILABLE FOR FREELANCE
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                {[
                  ["Location", "Philippines"],
                  ["Experience", "5+ Years"],
                  ["Languages", "English, Tagalog"],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="flex justify-between border-b border-outline-variant/10 pb-2"
                  >
                    <span className="text-on-surface-variant">{label}</span>
                    <span className="text-on-surface">{value}</span>
                  </div>
                ))}
              </div>
              <div className="mt-stack-md">
                <div className="mb-2 font-mono text-label-mono uppercase text-outline">
                  Main Stack
                </div>
                <div className="flex flex-wrap gap-2">
                  {['TypeScript', 'Laravel', 'React Native'].map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs text-primary"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-surface-container-lowest/50 py-section-gap">
          <div className="mx-auto max-w-container-max px-gutter">
            <h2 className="reveal mb-stack-lg text-center font-display text-headline-md">
              The Toolbox
            </h2>
            <div className="grid grid-cols-1 gap-stack-md md:grid-cols-3 lg:grid-cols-4">
              {toolbox.map((group) => (
                <div
                  key={group.title}
                  className={`glass-card glow-hover reveal rounded-xl p-stack-md ${group.delay}`}
                >
                  <Icon className={`mb-2 ${group.iconClass}`}>{group.icon}</Icon>
                  <h3 className="mb-4 font-display text-headline-sm">{group.title}</h3>
                  <div className="flex flex-wrap gap-2">
                    {group.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded border border-outline-variant/20 bg-surface-container-high px-2 py-1 font-mono text-label-mono"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="mx-auto max-w-container-max px-gutter py-section-gap">
          <h2 className="reveal mb-stack-lg font-display text-headline-md">Featured Projects</h2>
          <div className="space-y-section-gap">
            <article className="reveal grid grid-cols-1 items-center gap-stack-lg lg:grid-cols-12">
              <div className="glass-card group aspect-video overflow-hidden rounded-3xl lg:col-span-7">
                <div
                  role="img"
                  aria-label="Dark analytics dashboard project preview"
                  className="image-panel h-full w-full transition-transform duration-700 group-hover:scale-105"
                  style={imageStyle(projectImages.analytics)}
                />
              </div>
              <div className="lg:col-span-5">
                <div className="mb-2 font-mono text-label-mono text-primary">WEB APPLICATION</div>
                <h3 className="mb-4 font-display text-headline-md">Nova Analytics Suite</h3>
                <p className="mb-6 text-on-surface-variant">
                  A real-time analytics platform built with Next.js and Laravel. Features live
                  socket updates, complex data aggregation, and highly customizable reporting
                  dashboards.
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  <TechTag>Next.js</TechTag>
                  <TechTag>Laravel</TechTag>
                  <TechTag>Recharts</TechTag>
                </div>
                <div className="flex gap-4">
                  <a
                    href="#contact"
                    className="flex items-center gap-2 font-semibold text-primary transition-transform hover:translate-x-1"
                  >
                    Live Demo <Icon>arrow_forward</Icon>
                  </a>
                  <a
                    href="https://github.com"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-on-surface-variant hover:text-on-surface"
                  >
                    <Icon>code</Icon> GitHub
                  </a>
                </div>
              </div>
            </article>

            <article className="reveal grid grid-cols-1 items-center gap-stack-lg lg:grid-cols-12">
              <div className="order-2 lg:order-1 lg:col-span-5">
                <div className="mb-2 font-mono text-label-mono text-secondary">MOBILE APP</div>
                <h3 className="mb-4 font-display text-headline-md">Zenith Wallet</h3>
                <p className="mb-6 text-on-surface-variant">
                  Cross-platform cryptocurrency wallet using React Native. Implements biometrics,
                  secure storage, and integrated fiat-to-crypto gateways.
                </p>
                <div className="mb-8 flex flex-wrap gap-2">
                  <TechTag>React Native</TechTag>
                  <TechTag>Node.js</TechTag>
                  <TechTag>Firebase</TechTag>
                </div>
                <a
                  href="#contact"
                  className="flex items-center gap-2 font-semibold text-primary transition-transform hover:translate-x-1"
                >
                  Case Study <Icon>arrow_forward</Icon>
                </a>
              </div>
              <div className="glass-card order-1 aspect-video overflow-hidden rounded-3xl lg:order-2 lg:col-span-7">
                <div
                  role="img"
                  aria-label="Digital wallet mobile application preview"
                  className="image-panel h-full w-full"
                  style={imageStyle(projectImages.wallet)}
                />
              </div>
            </article>
          </div>
        </section>

        <section className="bg-surface py-section-gap">
          <div className="mx-auto max-w-3xl px-gutter">
            <h2 className="reveal mb-stack-lg text-center font-display text-headline-md">
              Career Milestones
            </h2>
            <div className="relative ml-4 space-y-stack-lg border-l border-outline-variant/20">
              {[
                {
                  years: "2022 - PRESENT",
                  title: "Senior Full Stack Engineer",
                  company: "TechFlow Solutions",
                  body: "Leading development of core product features using Laravel and React. Improved platform performance by 40% through database optimization and caching strategies.",
                  current: true,
                },
                {
                  years: "2020 - 2022",
                  title: "Web Developer",
                  company: "Creative Pulse Agency",
                  body: "Developed high-end landing pages and complex web applications for international clients. Specialized in Next.js and headless CMS integrations.",
                },
                {
                  years: "2018 - 2020",
                  title: "Junior Developer",
                  company: "Startup Incubator",
                  body: "Started as an intern and quickly moved to a full-time role focusing on PHP/MySQL backends and jQuery frontends before migrating to modern frameworks.",
                },
              ].map((item, index) => (
                <div key={item.years} className="reveal relative pl-8"
                  style={{ transitionDelay: `${index * 100}ms` }}>
                  <div
                    className={`absolute -left-[9px] top-0 h-4 w-4 rounded-full ${
                      item.current
                        ? "bg-primary ring-4 ring-primary/20"
                        : "bg-surface-container-highest ring-4 ring-white/5"
                    }`}
                  />
                  <div
                    className={`mb-1 font-mono text-label-mono ${
                      item.current ? "text-primary" : "text-outline"
                    }`}
                  >
                    {item.years}
                  </div>
                  <h3 className="font-display text-headline-sm">{item.title}</h3>
                  <div className="mb-2 text-on-surface-variant">{item.company}</div>
                  <p className="text-outline">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-gap">
          <h2 className="reveal mb-stack-lg font-display text-headline-md">Core Expertise</h2>
          <div className="grid grid-cols-1 gap-stack-md sm:grid-cols-2 lg:grid-cols-3">
            {expertise.map((item, index) => (
              <article
                key={item.title}
                className="glass-card reveal rounded-xl p-stack-md"
                style={{ transitionDelay: `${Math.min(index, 5) * 100}ms` }}
              >
                <Icon className={`mb-4 text-3xl ${item.color}`}>{item.icon}</Icon>
                <h3 className="mb-2 font-display text-headline-sm">{item.title}</h3>
                <p className="text-on-surface-variant">{item.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="bg-surface-container-low py-section-gap">
          <div className="mx-auto max-w-container-max px-gutter">
            <div className="glass-card reveal rounded-3xl p-stack-lg">
              <div className="mb-stack-lg flex flex-col items-start justify-between gap-stack-md md:flex-row md:items-center">
                <div>
                  <h2 className="font-display text-headline-md">Open Source Activity</h2>
                  <p className="text-on-surface-variant">
                    Tracking commits and contribution milestones across GitHub.
                  </p>
                </div>
                <a
                  className="flex items-center gap-2 rounded-lg bg-surface-container-high px-4 py-2 transition-colors hover:bg-surface-container-highest"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon>launch</Icon> @nico-dev
                </a>
              </div>
              <div className="mb-stack-lg grid grid-cols-1 gap-stack-md md:grid-cols-4">
                {[
                  ["1.2k+", "COMMITS", "text-primary"],
                  ["45", "REPOS", "text-secondary"],
                  ["200+", "STARS", "text-tertiary"],
                  ["12", "FORKS", "text-primary-fixed-dim"],
                ].map(([value, label, color]) => (
                  <div
                    key={label}
                    className="rounded-xl border border-outline-variant/10 bg-background/40 p-stack-md text-center"
                  >
                    <div className={`text-3xl font-bold ${color}`}>{value}</div>
                    <div className="font-mono text-caption text-outline">{label}</div>
                  </div>
                ))}
              </div>
              <div className="overflow-x-auto">
                <div className="flex h-24 min-w-[800px] items-end gap-1">
                  {contributionHeights.map((height, index) => (
                    <div
                      key={`${height}-${index}`}
                      className="flex-1 rounded-t-sm bg-primary"
                      style={{ height: `${height}%`, opacity: height / 70 }}
                    />
                  ))}
                </div>
                <div className="mt-2 flex justify-between font-mono text-caption text-outline">
                  {['Jan', 'Mar', 'May', 'Jul', 'Sep', 'Nov'].map((month) => (
                    <span key={month}>{month}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mx-auto max-w-container-max px-gutter py-section-gap">
          <div className="mb-stack-lg flex items-end justify-between gap-4">
            <h2 className="font-display text-headline-md">Latest Writings</h2>
            <a
              className="flex items-center gap-1 font-semibold text-primary transition-all hover:gap-2"
              href="#contact"
            >
              All Posts <Icon>chevron_right</Icon>
            </a>
          </div>
          <div className="grid grid-cols-1 gap-stack-md md:grid-cols-3">
            {posts.map((post, index) => (
              <article key={post.title} className="group reveal" style={{ transitionDelay: `${index * 100}ms` }}>
                <div className="glass-card mb-stack-sm aspect-video overflow-hidden rounded-2xl">
                  <div
                    role="img"
                    aria-label={`${post.title} article cover`}
                    className="image-panel h-full w-full transition-transform duration-500 group-hover:scale-105"
                    style={imageStyle(post.image)}
                  />
                </div>
                <div className="mb-2 font-mono text-caption text-outline">{post.meta}</div>
                <h3 className="mb-2 font-display text-headline-sm transition-colors group-hover:text-primary">
                  {post.title}
                </h3>
                <p className="line-clamp-2 text-on-surface-variant">{post.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="uses" className="bg-surface-container-lowest py-section-gap">
          <div className="mx-auto max-w-container-max px-gutter">
            <h2 className="reveal mb-stack-lg font-display text-headline-md">Gear &amp; Setup</h2>
            <div className="grid grid-cols-1 gap-stack-md md:grid-cols-2 lg:grid-cols-3">
              {[
                ["laptop_mac", "text-primary", "MacBook Pro M3", "Primary Workstation"],
                ["monitor", "text-secondary", 'Dell UltraSharp 27"', "4K Productivity"],
                ["keyboard", "text-tertiary", "Keychron K2", "Brown Switches"],
              ].map(([icon, color, title, caption], index) => (
                <div
                  key={title}
                  className="glass-card reveal flex items-center gap-stack-md rounded-xl p-stack-md"
                  style={{ transitionDelay: `${index * 100}ms` }}
                >
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-surface-container-high">
                    <Icon className={color}>{icon}</Icon>
                  </div>
                  <div>
                    <div className="text-body-lg font-semibold">{title}</div>
                    <div className="text-caption text-outline">{caption}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="mx-auto max-w-container-max px-gutter py-section-gap">
          <div className="glass-card reveal rounded-3xl p-stack-lg text-center">
            <h2 className="mb-stack-sm font-display text-display-lg-mobile md:text-headline-md">
              Let&apos;s build something together.
            </h2>
            <p className="mx-auto mb-stack-lg max-w-xl text-on-surface-variant">
              Whether you have a question or just want to say hi, my inbox is always open.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-4 font-semibold text-on-primary transition-transform hover:scale-105"
                href="mailto:hello@nico.dev"
              >
                <Icon>mail</Icon> Email Me
              </a>
              <div className="flex gap-2">
                <a
                  aria-label="GitHub"
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface-container-high transition-colors hover:bg-surface-container-highest"
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Icon>link</Icon>
                </a>
                <a
                  aria-label="Resume"
                  className="flex h-14 w-14 items-center justify-center rounded-xl bg-surface-container-high transition-colors hover:bg-surface-container-highest"
                  href="#contact"
                >
                  <Icon>description</Icon>
                </a>
              </div>
            </div>
            <div className="mt-stack-lg flex flex-wrap justify-center gap-8 border-t border-outline-variant/10 pt-stack-md">
              {['GitHub', 'LinkedIn', 'X / Twitter'].map((network) => (
                <a
                  key={network}
                  className="font-mono text-label-mono text-on-surface-variant transition-colors hover:text-primary"
                  href={network === 'GitHub' ? 'https://github.com' : '#contact'}
                >
                  {network}
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full border-t border-outline-variant/10 bg-background py-stack-lg">
        <div className="mx-auto flex max-w-container-max flex-col items-center justify-between gap-base px-gutter md:flex-row">
          <div className="font-mono text-label-mono text-on-surface">NICO.DEV</div>
          <div className="text-caption text-secondary">
            © {new Date().getFullYear()} Nico. Built with Next.js
          </div>
          <div className="flex gap-stack-md">
            <a
              className="text-caption text-on-surface-variant transition-colors hover:text-primary"
              href="https://github.com"
            >
              GitHub
            </a>
            <a
              className="text-caption text-on-surface-variant transition-colors hover:text-primary"
              href="#contact"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
