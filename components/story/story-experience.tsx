"use client";

import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowDown,
  ArrowUp,
  ArrowUpRight,
  FileText,
  Send,
  X,
} from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

import { InteractiveDots } from "@/components/interactive-dots";
import { MagneticButton } from "@/components/magnetic-button";
import { Button } from "@/components/ui/button";
import { ME } from "@/lib/config";
import {
  CHAPTERS,
  CTA,
  FOCUS,
  FOUNDATION,
  FOUNDATION_COPY,
  NOW,
  NOW_COPY,
  PROJECTS_COPY,
  RETRIEVAL,
  RETRIEVAL_COPY,
  STORY_META,
  STORY_PROJECTS,
  WORK,
  WORK_COPY,
  WORK_STATS,
} from "@/lib/story";

const EASE = [0.22, 0.61, 0.36, 1] as const;

/* -------------------------------------------------------------------------- */
/*  Motion primitives                                                          */
/* -------------------------------------------------------------------------- */

function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

function TitleLines({ lines }: { lines: readonly string[] }) {
  return (
    <h1
      className="story-title"
      id="story-title"
      aria-label={lines.join(" ")}
    >
      {lines.map((line, index) => (
        <span className="story-title__line" key={line}>
          <motion.span
            className="story-title__inner"
            initial={{ y: "112%" }}
            animate={{ y: "0%" }}
            transition={{
              duration: 0.95,
              ease: EASE,
              delay: 0.15 + index * 0.1,
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </h1>
  );
}

function CountUp({ value, suffix = "" }: { value: number; suffix?: string }) {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (reduce) {
      setDisplay(value);
      return;
    }
    if (!inView) return;

    let frame = 0;
    const started = performance.now();
    const duration = 900;
    const tick = (now: number) => {
      const progress = Math.min(1, (now - started) / duration);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(value * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, reduce, value]);

  return (
    <span className="story-stat__value" ref={ref}>
      <span aria-hidden>
        {display.toLocaleString("en-US")}
        {suffix}
      </span>
      <span className="sr-only">
        {value.toLocaleString("en-US")}
        {suffix}
      </span>
    </span>
  );
}

function ChapterHead({
  index,
  label,
  years,
  title,
  titleId,
}: {
  index: string;
  label: string;
  years: string;
  title: string;
  titleId: string;
}) {
  return (
    <header className="story-chapter__head">
      <Reveal>
        <div className="story-chapter__meta">
          <span className="story-chapter__index">{index}</span>
          <span className="story-chapter__label">{label}</span>
          <span className="story-chapter__years">{years}</span>
        </div>
        <motion.span
          aria-hidden
          className="story-chapter__rule"
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.8, ease: EASE }}
        />
      </Reveal>
      <Reveal delay={0.05}>
        <h2 id={titleId} className="story-chapter__title">
          {title}
        </h2>
      </Reveal>
    </header>
  );
}

/* -------------------------------------------------------------------------- */
/*  Chapters                                                                   */
/* -------------------------------------------------------------------------- */

function Cover({ onScroll }: { onScroll: () => void }) {
  return (
    <section
      className="story-chapter story-chapter--cover"
      id="story-start"
      data-story-chapter="start"
      aria-labelledby="story-title"
    >
      <div className="story-chapter__inner">
        <motion.p
          className="story-kicker"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          {STORY_META.kicker}
        </motion.p>

        <TitleLines lines={STORY_META.titleLines} />

        <motion.p
          className="story-deck"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.42 }}
        >
          {STORY_META.deck}
        </motion.p>

        <motion.div
          className="story-byline"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.56 }}
        >
          <span className="story-byline__name">{ME.name}</span>
          <span aria-hidden className="story-byline__dot" />
          <span>{ME.title}</span>
          <span aria-hidden className="story-byline__dot" />
          <span>{STORY_META.location}</span>
        </motion.div>

        <motion.div
          className="story-cue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, ease: EASE, delay: 0.72 }}
        >
          <button type="button" className="story-cue__button" onClick={onScroll}>
            <span>Scroll</span>
            <span aria-hidden className="story-cue__line" />
            <ArrowDown aria-hidden />
          </button>
        </motion.div>
      </div>

      <div className="story-dots screen-line-top screen-line-bottom">
        <InteractiveDots className="story-dots__canvas" />
      </div>
    </section>
  );
}

function Foundation() {
  return (
    <section
      className="story-chapter"
      id="story-foundation"
      data-story-chapter="foundation"
      aria-labelledby="story-foundation-title"
    >
      <div className="story-chapter__inner">
        <ChapterHead
          index={FOUNDATION_COPY.index}
          label={FOUNDATION_COPY.label}
          years={FOUNDATION_COPY.years}
          title={FOUNDATION_COPY.title}
          titleId="story-foundation-title"
        />

        <Reveal delay={0.05}>
          <p className="story-body">{FOUNDATION_COPY.body}</p>
          <p className="story-note">{FOUNDATION_COPY.detail}</p>
          <ul className="story-stack" aria-label="Core stack">
            {FOUNDATION_COPY.stack.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </Reveal>

        <div className="story-timeline">
          <motion.span
            aria-hidden
            className="story-timeline__line"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, ease: EASE }}
          />
          <ol className="story-timeline__list">
            {FOUNDATION.map((milestone, index) => (
              <motion.li
                className="story-timeline__item"
                key={`${milestone.date}-${milestone.title}`}
                initial={{ opacity: 0, x: 14 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.6 }}
                transition={{ duration: 0.55, ease: EASE, delay: index * 0.04 }}
              >
                <span className="story-timeline__date">{milestone.date}</span>
                <span aria-hidden className="story-timeline__dot" />
                <span className="story-timeline__content">
                  <span className="story-timeline__title">
                    {milestone.href ? (
                      <a
                        href={milestone.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="story-link"
                      >
                        {milestone.title}
                        <ArrowUpRight aria-hidden />
                      </a>
                    ) : (
                      milestone.title
                    )}
                  </span>
                  <span className="story-timeline__detail">
                    {milestone.detail}
                  </span>
                </span>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section
      className="story-chapter"
      id="story-work"
      data-story-chapter="work"
      aria-labelledby="story-work-title"
    >
      <div className="story-chapter__inner">
        <ChapterHead
          index={WORK_COPY.index}
          label={WORK_COPY.label}
          years={WORK_COPY.years}
          title={WORK_COPY.title}
          titleId="story-work-title"
        />

        <Reveal delay={0.05}>
          <p className="story-body">{WORK_COPY.body}</p>
        </Reveal>

        <Reveal delay={0.05}>
          <div className="story-role">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={WORK.logo}
              alt=""
              width={44}
              height={44}
              loading="lazy"
              decoding="async"
              className="story-role__logo"
            />
            <div className="story-role__body">
              <span className="story-role__company">
                {WORK.href ? (
                  <a
                    href={WORK.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="story-link"
                  >
                    {WORK.company}
                    <ArrowUpRight aria-hidden />
                  </a>
                ) : (
                  WORK.company
                )}
              </span>
              <span className="story-role__line">
                {WORK.role} · {WORK.location}
              </span>
              <span className="story-role__desc">{WORK.description}</span>
            </div>
          </div>
        </Reveal>

        <ul className="story-stats">
          {WORK_STATS.map((stat) => (
            <li className="story-stat" key={stat.label}>
              <CountUp value={stat.value} suffix={stat.suffix} />
              <span className="story-stat__label">{stat.label}</span>
              <span className="story-stat__detail">{stat.detail}</span>
            </li>
          ))}
        </ul>

        <Reveal delay={0.05}>
          <ul className="story-detail-list">
            {WORK_COPY.blocks.map((block, index) => (
              <li className="story-detail" key={block.label}>
                <span aria-hidden className="story-detail__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="story-detail__body">
                  <span className="story-detail__title">{block.label}</span>
                  <span className="story-detail__text">{block.body}</span>
                </span>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={0.05}>
          <p className="story-constraint">{WORK_COPY.constraint}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Retrieval() {
  const reduce = useReducedMotion();
  const rows = [
    {
      key: "before",
      label: "Before",
      value: RETRIEVAL.before,
      detail: RETRIEVAL.beforeDetail,
    },
    {
      key: "after",
      label: "After",
      value: RETRIEVAL.after,
      detail: RETRIEVAL.afterDetail,
    },
  ] as const;

  return (
    <section
      className="story-chapter"
      id="story-retrieval"
      data-story-chapter="retrieval"
      aria-labelledby="story-retrieval-title"
    >
      <div className="story-chapter__inner">
        <ChapterHead
          index={RETRIEVAL_COPY.index}
          label={RETRIEVAL_COPY.label}
          years={RETRIEVAL_COPY.years}
          title={RETRIEVAL_COPY.title}
          titleId="story-retrieval-title"
        />

        <Reveal delay={0.05}>
          <p className="story-body">{RETRIEVAL_COPY.body}</p>
          <ol className="story-pipeline" aria-label="Retrieval pipeline">
            {RETRIEVAL_COPY.pipeline.map((step, index) => (
              <li className="story-pipeline__step" key={step}>
                <span className="story-pipeline__index" aria-hidden>
                  {String(index + 1).padStart(2, "0")}
                </span>
                {step}
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="story-recall" aria-label={RETRIEVAL_COPY.body}>
          {rows.map((row) => (
            <div className="story-recall__row" key={row.key}>
              <div className="story-recall__head">
                <span className="story-recall__label">{row.label}</span>
                <span className="story-recall__value">
                  {row.value.toFixed(2)}
                </span>
              </div>
              <div aria-hidden className="story-recall__track">
                <motion.span
                  className={`story-recall__fill story-recall__fill--${row.key}`}
                  initial={{ width: "0%" }}
                  whileInView={{ width: `${row.value * 100}%` }}
                  viewport={{ once: true, amount: 0.7 }}
                  transition={{ duration: reduce ? 0 : 1.1, ease: EASE }}
                />
              </div>
              <span className="story-recall__detail">{row.detail}</span>
            </div>
          ))}

          <div className="story-recall__meta">
            <span className="story-tag">{RETRIEVAL.delta} recall</span>
            <span className="story-tag">{RETRIEVAL.multiple}</span>
          </div>
        </div>

        <Reveal delay={0.05}>
          <ul className="story-detail-list story-detail-list--compact">
            {RETRIEVAL_COPY.details.map((item) => (
              <li className="story-detail" key={item.label}>
                <span className="story-detail__body">
                  <span className="story-detail__title">{item.label}</span>
                  <span className="story-detail__text">{item.body}</span>
                </span>
              </li>
            ))}
          </ul>
          <p className="story-note">{RETRIEVAL_COPY.challenge}</p>
        </Reveal>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section
      className="story-chapter"
      id="story-projects"
      data-story-chapter="projects"
      aria-labelledby="story-projects-title"
    >
      <div className="story-chapter__inner">
        <ChapterHead
          index={PROJECTS_COPY.index}
          label={PROJECTS_COPY.label}
          years={PROJECTS_COPY.years}
          title={PROJECTS_COPY.title}
          titleId="story-projects-title"
        />

        <Reveal delay={0.05}>
          <p className="story-body">{PROJECTS_COPY.body}</p>
        </Reveal>

        <ol className="story-projects">
          {STORY_PROJECTS.map((project, index) => (
            <motion.li
              className="story-project"
              key={project.slug}
              initial={{ opacity: 0, x: index % 2 === 0 ? -16 : 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.6, ease: EASE, delay: index * 0.03 }}
            >
              <a
                className="story-project__link"
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                <span aria-hidden className="story-project__index">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="story-project__main">
                  <span className="story-project__title">{project.title}</span>
                  <span className="story-project__sub">
                    {project.subheading}
                  </span>
                  <span className="story-project__detail">
                    {project.detail}
                  </span>
                  <span className="story-project__meta">{project.meta}</span>
                </span>
                <span className="story-project__year">{project.year}</span>
                <ArrowUpRight aria-hidden className="story-project__arrow" />
              </a>
            </motion.li>
          ))}
        </ol>

        <Reveal delay={0.05}>
          <p className="story-note">{PROJECTS_COPY.note}</p>
        </Reveal>

        <div aria-hidden className="story-marquee">
          <div className="story-marquee__track">
            {[...STORY_PROJECTS, ...STORY_PROJECTS].map((project, index) => (
              <span
                className="story-marquee__item"
                key={`${project.slug}-${index}`}
              >
                {project.title}
                <span className="story-marquee__sep">·</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Now({ onBackToStart }: { onBackToStart: () => void }) {
  return (
    <section
      className="story-chapter story-chapter--now"
      id="story-now"
      data-story-chapter="now"
      aria-labelledby="story-now-title"
    >
      <div className="story-chapter__inner">
        <ChapterHead
          index={NOW_COPY.index}
          label={NOW_COPY.label}
          years={NOW_COPY.years}
          title={NOW_COPY.title}
          titleId="story-now-title"
        />

        <Reveal delay={0.05}>
          <p className="story-body">{NOW_COPY.body}</p>
        </Reveal>

        <ul className="story-focus">
          {FOCUS.map((item) => (
            <li className="story-focus__item" key={item}>
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <Reveal delay={0.08}>
          <div className="story-cta">
            <MagneticButton
              href={CTA.talk.href}
              label={CTA.talk.label}
              external={false}
              icon={<Send className="size-3.5 shrink-0" aria-hidden />}
            />
            <Button asChild variant="outline" size="sm">
              <a href={NOW.resumeUrl} target="_blank" rel="noopener noreferrer">
                <FileText aria-hidden />
                {CTA.resume.label}
              </a>
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              onClick={onBackToStart}
            >
              <ArrowUp aria-hidden />
              Back to the start
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="story-end">
            <span>{ME.fullName}</span>
            <span aria-hidden>·</span>
            <span>{NOW.location}</span>
            <span aria-hidden>·</span>
            <span>2022 to 2026</span>
          </p>
        </Reveal>
      </div>
    </section>
  );
}

/* -------------------------------------------------------------------------- */
/*  Experience shell                                                           */
/* -------------------------------------------------------------------------- */

export function StoryExperience() {
  const router = useRouter();
  const reduce = useReducedMotion();
  const rootRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState<string>(CHAPTERS[0].id);

  const { scrollYProgress } = useScroll({ container: scrollRef });
  const progress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  const goToChapter = useCallback(
    (id: string) => {
      const scroller = scrollRef.current;
      const target = scroller?.querySelector<HTMLElement>(`#story-${id}`);
      if (!scroller || !target) return;
      const top =
        target.getBoundingClientRect().top -
        scroller.getBoundingClientRect().top +
        scroller.scrollTop;
      scroller.scrollTo({ top, behavior: reduce ? "auto" : "smooth" });
    },
    [reduce],
  );

  // Focus management + scroll lock + Escape to exit.
  useEffect(() => {
    const previous = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;

    document.body.style.overflow = "hidden";
    document.body.setAttribute("data-scroll-locked", "");
    rootRef.current?.focus({ preventScroll: true });

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        router.push("/");
      }
    };
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = previousOverflow;
      document.body.removeAttribute("data-scroll-locked");
      previous?.focus?.({ preventScroll: true });
    };
  }, [router]);

  // Track the chapter sitting in the middle of the screen.
  useEffect(() => {
    const scroller = scrollRef.current;
    if (!scroller) return;
    const sections = Array.from(
      scroller.querySelectorAll<HTMLElement>("[data-story-chapter]"),
    );

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.getAttribute("data-story-chapter");
          if (id) setActive(id);
        }
      },
      { root: scroller, rootMargin: "-45% 0px -45% 0px", threshold: 0 },
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      className="story"
      ref={rootRef}
      tabIndex={-1}
      role="region"
      aria-label="Story"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, ease: EASE }}
    >
      <header className="story-chrome">
        <Link href="/" className="story-chrome__brand">
          <span className="story-wordmark">{ME.wordmark}</span>
          <span aria-hidden className="story-chrome__divider" />
          <span className="story-chrome__kicker">Story</span>
        </Link>

        <div className="story-chrome__right">
          <span className="story-chrome__years">2022 to 2026</span>
          <Button asChild variant="ghost" size="sm" className="story-chrome__exit">
            <Link href="/">
              Exit
              <X aria-hidden />
            </Link>
          </Button>
        </div>

        <div aria-hidden className="story-progress">
          <motion.span
            className="story-progress__bar"
            style={{ scaleX: progress }}
          />
        </div>
      </header>

      <div className="story-scroll" ref={scrollRef} data-lenis-prevent>
        <Cover onScroll={() => goToChapter("foundation")} />
        <Foundation />
        <Work />
        <Retrieval />
        <Projects />
        <Now onBackToStart={() => goToChapter("start")} />
      </div>

      <nav className="story-rail" aria-label="Story chapters">
        {CHAPTERS.map((chapter, index) => (
          <button
            key={chapter.id}
            type="button"
            className="story-rail__item"
            data-active={active === chapter.id || undefined}
            aria-current={active === chapter.id ? "step" : undefined}
            aria-label={`${chapter.label}${
              active === chapter.id ? ", current chapter" : ""
            }`}
            onClick={() => goToChapter(chapter.id)}
          >
            <span aria-hidden className="story-rail__index">
              {String(index).padStart(2, "0")}
            </span>
            <span className="story-rail__label">{chapter.label}</span>
          </button>
        ))}
      </nav>
    </motion.div>
  );
}
