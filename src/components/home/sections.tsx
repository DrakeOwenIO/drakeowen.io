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
        IT OPERATIONS / NETWORKS / SERVERS
      </div>
      <h1>
        I work in IT
        <br className="desktop-break" /> and spend my spare time
        <br />
        <em>building things.</em>
      </h1>
      <div className="hero-bottom">
        <div>
          <p>
            I’m Drake, an IT Operations Manager at Automated Results in Western
            North Carolina. My work covers networks, servers, and infrastructure
            projects. At home, I’m usually working on my homelab, trying out a
            3D print, or finding time to fly.
          </p>
          <div className="actions">
            <Link className="button primary" href="/work">
              See my work <ArrowUpRight size={18} aria-hidden />
            </Link>
            <Link className="text-link" href="/connect">
              Get in touch <ArrowRight size={17} aria-hidden />
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
        <span>IT / 3D PRINTING / AVIATION</span>
        <a href="#what-i-do" aria-label="See what I do">
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
          Networks, servers,
          <br />
          <span className="muted">and the work around them.</span>
        </h2>
        <p className="reading">
          I started with troubleshooting, network setup, and server administration.
          That work is still a big part of how I approach IT. In my current role,
          I also plan infrastructure changes, coordinate projects, and manage
          day-to-day operations.
        </p>
        <ul className="expertise">
          {[
            "Infrastructure",
            "Networking",
            "Systems Administration",
            "IT Operations",
            "Project Coordination",
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
          <div className="section-index">02 / WORK</div>
          <h2>
            IT Projects<span className="accent">.</span>
          </h2>
        </div>
        <Link className="text-link" href="/work">
          See all projects <ArrowUpRight size={17} aria-hidden />
        </Link>
      </div>
      <div className="featured-project">
        <div className="project-art">
          <Image
            src={project.image!}
            alt="Illustration of connected infrastructure components"
            width={1000}
            height={680}
            sizes="(max-width: 768px) 100vw, 55vw"
          />
          <span className="art-caption">
            INFRASTRUCTURE / ILLUSTRATION
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
          <p className="project-note">Project write-up to come</p>
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
            Side Projects<span className="accent">.</span>
          </h2>
          <p>
            A couple of things I’m working on outside of my day job.
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
                      PARAMOTOR SIMULATOR
                    </span>
                  </>
                ) : (
                  <>
                    <Image
                      className="pi-fly-board"
                      src="/images/raspberry-pi.svg"
                      alt=""
                      width={280}
                      height={170}
                    />
                    <span className="drawing-label">
                      RASPBERRY PI / WEATHER DASHBOARD
                    </span>
                  </>
                )}
              </div>
              <div className="personal-copy">
                <div className="eyebrow">
                  {i === 0
                    ? "AVIATION + CODE"
                    : "EMBEDDED SYSTEMS / AVIATION / SOFTWARE"}
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                {project.developmentStatus && (
                  <>
                    <p className="project-note">
                      {project.developmentStatus} · Planned capabilities
                    </p>
                    <div className="tags">
                      {project.tags.map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </div>
                  </>
                )}
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
      <div className="section-index">04 / ABOUT ME</div>
      <div>
        <h2>
          Away from work,
          <br />
          <span className="muted">I keep a few projects going.</span>
        </h2>
        <p className="reading">
          My homelab gives me a place to try things out. I also spend time with
          CAD and 3D printing, working through designs and seeing how they turn
          out as actual objects.
        </p>
        <p className="reading">
          Aviation is another interest. The paramotor simulator is my attempt to
          bring flying and coding together, and I’m learning about flight
          physics and game development as I go.
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
          <div className="section-index">05 / JOURNAL</div>
          <h2>
            Notes<span className="accent">.</span>
          </h2>
          <p>
            A place to keep notes on IT work and personal projects.
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
          <span className="mono accent">[ NO POSTS YET ]</span>
          <p>
            I haven’t published anything yet.
            <br />
            <span className="muted">When I do, you’ll find it here.</span>
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
      <div className="eyebrow">CONTACT</div>
      <h2>
        Get in touch<span className="accent">.</span>
      </h2>
      <div className="contact-bottom">
        <p>
          If we’ve met at IT Nation or talked about an IT project,
          <br className="desktop-break" /> you can save my contact card here.
        </p>
        <Link className="button primary" href="/connect">
          Save my details <ArrowUpRight size={18} aria-hidden />
        </Link>
      </div>
      <div className="social-links">
        <ContactLinks />
      </div>
    </section>
  );
}
