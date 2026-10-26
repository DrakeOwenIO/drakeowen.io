import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, MoveDown } from "lucide-react";
import { projects, journal } from "@/config/content";
import { site } from "@/config/site";
import { ContactLinks } from "@/components/contact-links";
import { Reveal } from "@/components/reveal";
export function Hero() {
  return (
    <section className="hero shell">
      <div className="eyebrow">
        <span className="status-dot" />
        IT OPERATIONS MANAGER / TECHNOLOGIST
      </div>
      <h1>
        I like figuring out
        <br className="desktop-break" /> how things work.
        <br />
        <em>Then making them work better.</em>
      </h1>
      <div className="hero-bottom">
        <div>
          <p>
            I’m Drake, an IT Operations Manager at Automated Results in Western
            North Carolina. I spend my days working with networks, servers, and
            infrastructure projects. Outside of work, I’m usually building
            something, writing code, or finding an excuse to go flying.
          </p>
          <div className="actions">
            <Link className="button primary" href="/work">
              Explore My Work <ArrowUpRight size={18} aria-hidden />
            </Link>
            <Link className="text-link" href="/connect">
              Let’s Connect <ArrowRight size={17} aria-hidden />
            </Link>
          </div>
        </div>
        <div className="hero-location">
          <span className="crosshair">+</span>
          <span>
            BASED IN
            <br />
            WESTERN NORTH CAROLINA
          </span>
        </div>
      </div>
      <div className="hero-caption">
        <span>ENGINEERING / OPERATIONS / EXPLORATION</span>
        <a href="#what-i-do" aria-label="Discover what I do">
          <MoveDown size={18} aria-hidden />
        </a>
      </div>
    </section>
  );
}
export function Experience() {
  return (
    <section id="what-i-do" className="section shell split">
      <div className="section-index">01 / WHAT I DO</div>
      <Reveal>
        <h2>
          Getting things working.
          <br />
          <span className="muted">Understanding why they weren’t.</span>
        </h2>
        <p className="reading">
          My background is hands-on: troubleshooting systems, setting up
          networks, and keeping servers running. I like working through a
          problem until I understand what’s actually going on. These days, I
          also spend more time planning infrastructure changes, coordinating
          projects, and keeping day-to-day IT work moving.
        </p>
        <ul className="expertise">
          {[
            "Infrastructure",
            "Networking",
            "Systems Administration",
            "IT Operations",
            "Technical Project Coordination",
          ].map((item, i) => (
            <li key={item}>
              <span className="mono">0{i + 1}</span>
              {item}
              <span aria-hidden>↗</span>
            </li>
          ))}
        </ul>
        {site.companyUrl && (
          <a className="text-link" href={site.companyUrl}>
            Automated Results <ArrowUpRight size={16} aria-hidden />
          </a>
        )}
      </Reveal>
    </section>
  );
}
export function WorkPreview() {
  const project = projects[0];
  return (
    <section className="section shell">
      <div className="section-heading">
        <div>
          <div className="section-index">02 / IN PRACTICE</div>
          <h2>
            Selected Work<span className="accent">.</span>
          </h2>
        </div>
        <Link className="text-link" href="/work">
          Explore work <ArrowUpRight size={17} aria-hidden />
        </Link>
      </div>
      <div className="featured-project">
        <div className="project-art">
          <Image
            src={project.image!}
            alt="Abstract infrastructure diagram; illustrative placeholder for project photography"
            width={1000}
            height={680}
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <span className="art-caption">
            INFRASTRUCTURE / ILLUSTRATIVE STUDY
          </span>
        </div>
        <div className="project-info">
          <div className="eyebrow">PROFESSIONAL WORK</div>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <div className="tags">
            {project.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </div>
          <p className="project-note">Case study coming soon</p>
        </div>
      </div>
    </section>
  );
}
export function PersonalProjects() {
  return (
    <section className="section shell">
      <div className="section-heading">
        <div>
          <div className="section-index">03 / AFTER HOURS</div>
          <h2>
            Beyond the Office<span className="accent">.</span>
          </h2>
          <p>
            Technology doesn’t stop being interesting when the workday ends.
          </p>
        </div>
      </div>
      <div className="personal-grid">
        {projects
          .filter((p) => p.category === "personal")
          .map((project, i) => (
            <article className="personal-project" key={project.slug}>
              <div className={`personal-art art-${i}`} aria-hidden="true">
                {i === 0 ? (
                  <>
                    <div className="flight-canopy" />
                    <div className="flight-line one" />
                    <div className="flight-line two" />
                    <span className="flight-point" />
                    <span className="drawing-label">
                      FLIGHT / PHYSICS / PLAY
                    </span>
                  </>
                ) : (
                  <>
                    <div className="nfc-card">
                      <span>drake.owen</span>
                      <span className="nfc-mark">)))</span>
                      <small>TAP TO CONNECT ↗</small>
                    </div>
                    <span className="drawing-label">
                      DESIGN / PRINT / CONNECT
                    </span>
                  </>
                )}
              </div>
              <div className="personal-copy">
                <div className="eyebrow">
                  {i === 0 ? "AVIATION + CODE" : "PHYSICAL + DIGITAL"}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
}
export function AboutPreview() {
  return (
    <section className="section shell split">
      <div className="section-index">04 / THE PERSON BEHIND THE WORK</div>
      <div>
        <h2>
          I learn by doing.
          <br />
          <span className="muted">And by trying again.</span>
        </h2>
        <p className="reading">
          I’m still the engineer who wants to get hands-on with a problem.
          Managing IT operations means I’m thinking more about planning and
          coordination, but I haven’t lost the itch to troubleshoot and build
          things.
        </p>
        <p className="reading">
          Away from work, I’m into aviation, 3D printing, and tinkering in my
          homelab. I like projects that give me something new to figure out,
          whether that’s a bit of code, a CAD model, or how something flies.
        </p>
        <Link className="text-link" href="/about">
          A little more about me <ArrowUpRight size={17} aria-hidden />
        </Link>
      </div>
    </section>
  );
}
export function JournalPreview() {
  return (
    <section className="section shell">
      <div className="section-heading">
        <div>
          <div className="section-index">05 / FIELD NOTES & DEEP DIVES</div>
          <h2>
            From the Journal<span className="accent">.</span>
          </h2>
          <p>
            Technical notes, lessons learned, and experiments worth documenting.
          </p>
        </div>
      </div>
      {journal.some((entry) => entry.status === "published") ? (
        <ul className="journal-list">
          {journal
            .filter((entry) => entry.status === "published")
            .map((entry) => (
              <li key={entry.slug}>
                <h3>{entry.title}</h3>
                <p>{entry.description}</p>
              </li>
            ))}
        </ul>
      ) : (
        <div className="journal-empty">
          <span className="mono accent">[ IN THE WORKS ]</span>
          <p>
            Good notes take time.
            <br />
            <span className="muted">The first entries are coming soon.</span>
          </p>
          <Link className="text-link" href="/journal">
            Visit the journal <ArrowUpRight size={17} aria-hidden />
          </Link>
        </div>
      )}
    </section>
  );
}
export function ContactSection() {
  return (
    <section className="contact-section shell">
      <div className="eyebrow">A CONVERSATION IS A GOOD PLACE TO START</div>
      <h2>
        Let’s Connect<span className="accent">.</span>
      </h2>
      <div className="contact-bottom">
        <p>
          Talking infrastructure, exchanging ideas, or meeting at IT Nation.
          <br className="desktop-break" /> I’m always glad to connect with
          fellow technologists.
        </p>
        <Link className="button primary" href="/connect">
          Say hello <ArrowUpRight size={18} aria-hidden />
        </Link>
      </div>
      <div className="social-links">
        <ContactLinks />
      </div>
    </section>
  );
}
