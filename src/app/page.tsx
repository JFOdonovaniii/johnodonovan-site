import Image from "next/image";
import React from "react";
import { ThemeToggle } from "./components/theme-toggle";
import { IconBrandGithub, IconBrandLinkedin, IconMail } from "@tabler/icons-react";

const photos = [
  { src: "/photos/1.jpg", alt: "John O’Donovan headshot" },
  { src: "/photos/2.jpg", alt: "John with family outdoors" },
  { src: "/photos/3.jpg", alt: "John on Mount Misen" },
  { src: "/photos/6.jpeg", alt: "John in Ravello" },
  { src: "/photos/5.jpeg", alt: "John in Nara" },
  { src: "/photos/7.jpg", alt: "Baby Ori" },
];

const experience = [
  {
    org: "Optum Health (UHG)",
    title: "Clinical Informatics Pharmacist",
    dates: "Aug 2022 — Present",
    desc: "Lead health-tech implementations for eVisor, combining Python, SAS, and SQL in Snowflake to refine clinical algorithms, data pipelines, and outreach campaigns. Built Copilot Studio agents and Power Automate tooling to answer rule-logic questions from authoritative datasets and standardize Aha! feature intake.",
  },
  {
    org: "Optum Infusion",
    title: "Clinical Pharmacist",
    dates: "Oct 2020 — Jul 2022",
    desc: "Managed antimicrobial, immunoglobulin, parenteral nutrition, and biologic therapies in a specialty infusion setting. Collaborated with physicians, nurses, and case managers to ensure safe, effective therapy and worked with IT partners to streamline pharmacy systems and documentation.",
  },
  {
    org: "Healix LLC",
    title: "Associate Clinical Pharmacy Manager",
    dates: "Jun 2019 — Feb 2020",
    desc: "Oversaw operations for multiple specialty infusion pharmacies, including inventory management, compliance tracking, and patient charting. Bridged clinical requirements and operational workflows while supporting direct patient infusion care.",
  },
];

export default function Home() {
  return (
    // layout.tsx now handles centering + padding; this just stacks sections
    <main className="space-y-10">
      {/* Top-right toggle */}
      <div className="flex justify-end">
        <ThemeToggle />
      </div>

      {/* Header */}
      <header className="space-y-4">
        <h1 className="text-4xl md:text-4xl lg:text-5xl font-semibold tracking-tight">
          John O’Donovan
        </h1>

        <p className="text-base leading-7 text-neutral-600 dark:text-neutral-300">
          Clinical informatics pharmacist & data analyst building safe, scalable
          AI-enabled decision support for medication and population health.
        </p>

        {/* Icon row */}
        <div className="mt-4 flex items-center gap-5 text-neutral-500 dark:text-neutral-400">
          <a
            href="mailto:JFODonovaniii@gmail.com"
            aria-label="Email"
            className="transition-colors hover:text-[#C06EFF] dark:hover:text-[#C06EFF]"          >
            <IconMail className="h-8 w-8" />
          </a>

          <a
            href="https://github.com/JFOdonovaniii"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="transition-colors hover:text-[#5FED83] dark:hover:text-[#5FED83]"
          >
            <IconBrandGithub className="h-7 w-7" />
          </a>

          <a
            href="https://www.linkedin.com/in/johnodonovaniii/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="transition-colors hover:text-sky-500 dark:hover:text-sky-400"
          >
            <IconBrandLinkedin className="h-8 w-8" />
          </a>
        </div>
      </header>

      {/* Photos */}
      <section className="grid grid-cols-2 gap-3 sm:grid-cols-3">
        {photos.map((p) => (
          <div key={p.src} className="overflow-hidden rounded-2xl">
            <Image
              src={p.src}
              alt={p.alt}
              width={900}
              height={900}
              className="h-56 w-full object-cover sm:h-64 lg:h-72"
              priority
            />
          </div>
        ))}
      </section>

      {/* Experience card */}
      <section>
        <div className="rounded-3xl border border-neutral-200/80 bg-white/90 p-6 shadow-sm ring-1 ring-black/5 dark:border-neutral-800/80 dark:bg-neutral-900/80 dark:ring-white/5">
          {/* Card header */}
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-neutral-100 text-neutral-500 dark:bg-neutral-800 dark:text-neutral-300">
              <span className="text-lg">🖇️</span>
            </div>
            <h2 className="text-sm font-semibold tracking-wide text-neutral-900 dark:text-neutral-50">
              Experience
            </h2>
          </div>

          {/* Timeline list */}
          <ol className="mt-6 space-y-6">
            {experience.map((e) => (
              <li key={`${e.org}-${e.title}`} className="space-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                  <p className="font-medium text-neutral-900 dark:text-neutral-50">
                    {e.org} • {e.title}
                  </p>
                  <p className="text-xs text-neutral-500 dark:text-neutral-400">
                    {e.dates}
                  </p>
                </div>
                <p className="text-sm leading-6 text-neutral-600 dark:text-neutral-300">
                  {e.desc}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </main>
  );
}