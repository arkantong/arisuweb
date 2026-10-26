import Image from "next/image";
import { Arrow } from "@/components/arrow";
import { SiteHeader } from "@/components/site-header";
import { SiteMotion } from "@/components/site-motion";
import { ProjectDialog } from "@/components/project-dialog";

const services = [
  {
    name: "Campaign",
    description: "Visual Concept · Key Visual · Storyboard Visual",
  },
  { name: "Brand", description: "Branding · Visual Identity · Art Direction" },
  {
    name: "Content",
    description: "Editorial Plan · Social Design · Video / Motion Design",
  },
  {
    name: "Craft",
    description: "3D Design · Digital Imaging · Deck Presentation",
  },
];
const process = [
  ["Discover", "Align on your brief, goals and audience."],
  ["Define", "Set the strategy and visual direction."],
  ["Craft", "Bring ideas to life through design."],
  ["Refine", "Collaborate, iterate and fine-tune."],
  ["Deliver", "Deliver work ready to make an impact."],
];

export default function HomePage() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <SiteHeader />
      <SiteMotion>
        <main id="main">
          <section className="hero" id="home" aria-labelledby="hero-title">
            <div className="hero-stage wrap">
              <div className="hero-copy">
                <h1 id="hero-title">
                  <span>Great ideas.</span>
                  <span>Excellent</span>
                  <span className="iridescent">craft.</span>
                </h1>
                <p>We turn ideas into crafted visual experiences.</p>
                <div className="hero-actions">
                  <a className="button button-light" href="#work">
                    Explore our work <Arrow />
                  </a>
                  <a className="text-link" href="#studio">
                    Discover ARISU
                  </a>
                </div>
              </div>
              <div className="hero-art" aria-hidden="true">
                <div className="hero-art-inner">
                  <Image
                    src="/images/idea-knot.webp"
                    alt=""
                    width={1254}
                    height={1254}
                    preload
                    sizes="(max-width: 700px) 100vw, 65vw"
                  />
                </div>
              </div>
            </div>
            <div className="hero-baseline wrap">
              <span>Design-driven. Detail-obsessed.</span>
              <a href="#studio">
                Scroll to explore <Arrow direction="down" />
              </a>
            </div>
          </section>
          <section
            id="studio"
            className="studio section-pad"
            aria-labelledby="studio-title"
          >
            <div className="wrap">
              <div className="studio-intro">
                <p className="section-label">
                  <span>01</span> / The studio
                </p>
                <div data-reveal>
                  <h2 id="studio-title">
                    Design is how we turn your next idea into{" "}
                    <span className="iridescent">what’s next.</span>
                  </h2>
                  <p className="intro-description">
                    A creative agency driven by design, turning ideas into
                    crafted visual experiences.
                  </p>
                </div>
              </div>
              <div
                id="services"
                className="service-list"
                aria-label="Our services"
              >
                {services.map((service, i) => (
                  <a
                    className="service-row"
                    data-reveal
                    key={service.name}
                    href={`mailto:arisu.creative@gmail.com?subject=${encodeURIComponent(`Let’s talk ${service.name} — ARISU`)}`}
                    aria-label={`Discuss ${service.name}: ${service.description}`}
                  >
                    <span className="service-index">0{i + 1}</span>
                    <h3>{service.name}</h3>
                    <p>{service.description}</p>
                    <Arrow />
                  </a>
                ))}
              </div>
            </div>
          </section>
          <section
            id="work"
            className="work section-pad"
            aria-labelledby="work-title"
          >
            <div className="wrap">
              <p className="section-label">
                <span>02</span> / Selected work
              </p>
              <div className="section-heading" data-reveal>
                <h2 id="work-title">
                  Good ideas.
                  <br />
                  Real-world impact.
                </h2>
                <p>
                  A visual identity,
                  <br />
                  thoughtfully crafted.
                </p>
              </div>
              <div className="work-artwork" data-reveal>
                <div className="work-main-image">
                  <Image
                    src="/images/gulo-identity.jpeg"
                    alt="Original Gulo Bakes logo with organic dough-inspired shapes"
                    fill
                    sizes="(max-width: 700px) 100vw, 60vw"
                  />
                </div>
                <div className="work-secondary-image">
                  <Image
                    src="/images/gulo-packaging.jpeg"
                    alt="Gulo Bakes kraft packaging with pink, orange and cocoa brand patterns"
                    fill
                    sizes="(max-width: 700px) 50vw, 35vw"
                  />
                </div>
                <div className="work-pattern-image">
                  <Image
                    src="/images/gulo-pattern.jpeg"
                    alt="Gulo Bakes repeating pink and orange brand pattern"
                    fill
                    sizes="(max-width: 700px) 50vw, 35vw"
                  />
                </div>
              </div>
              <div className="work-caption">
                <div>
                  <h3>Gulo Bakes</h3>
                  <p>Brand identity · Packaging · Social design</p>
                </div>
                <ProjectDialog>
                  <div className="project-intro">
                    <p className="section-label">Brand identity / Gulo Bakes</p>
                    <h2 id="project-title">
                      Sugar. Sweet.
                      <br />
                      <span>Sunshine.</span>
                    </h2>
                    <p>
                      A visual identity inspired by the flexibility of dough,
                      the softness of every bite, and the warmth of a little
                      everyday joy.
                    </p>
                  </div>
                  <Image
                    className="project-wide"
                    src="/images/gulo-identity.jpeg"
                    alt="Gulo Bakes full visual identity"
                    width={1000}
                    height={564}
                    sizes="(max-width: 700px) 95vw, 900px"
                  />
                  <div className="project-story">
                    <h3>
                      A little dough.
                      <br />A whole identity.
                    </h3>
                    <p>
                      The rounded logo takes its cue from dough. Brown Sugar,
                      Sweet Pink and Orange Sunshine build a visual language
                      that carries across packaging, patterns and social
                      content.
                    </p>
                  </div>
                  <div className="project-colors">
                    <div style={{ background: "#3a1a22", color: "#fff8f1" }}>
                      Brown Sugar<span>#3A1A22</span>
                    </div>
                    <div style={{ background: "#f8b5b8" }}>
                      Sweet Pink<span>#F8B5B8</span>
                    </div>
                    <div style={{ background: "#f0522d", color: "#251018" }}>
                      Orange Sunshine<span>#F0522D</span>
                    </div>
                  </div>
                  <div className="project-gallery">
                    <Image
                      src="/images/gulo-packaging.jpeg"
                      alt="Gulo Bakes packaging design"
                      width={416}
                      height={281}
                      sizes="(max-width: 700px) 90vw, 450px"
                    />
                    <Image
                      src="/images/gulo-bags.jpeg"
                      alt="Gulo Bakes branded paper bags"
                      width={398}
                      height={281}
                      sizes="(max-width: 700px) 90vw, 450px"
                    />
                  </div>
                  <Image
                    className="project-wide"
                    src="/images/gulo-social-top.jpeg"
                    alt="Gulo Bakes social content combining product photography and brand graphics"
                    width={874}
                    height={259}
                    sizes="(max-width: 700px) 95vw, 900px"
                  />
                  <Image
                    className="project-wide"
                    src="/images/gulo-social-bottom.jpeg"
                    alt="Gulo Bakes social posts featuring cookies and its pink and orange identity"
                    width={874}
                    height={258}
                    sizes="(max-width: 700px) 95vw, 900px"
                  />
                  <a
                    className="button button-dark"
                    href="mailto:arisu.creative@gmail.com?subject=Let%E2%80%99s%20build%20a%20brand%20together"
                  >
                    Let’s build your next idea <Arrow />
                  </a>
                </ProjectDialog>
              </div>
            </div>
          </section>
          <section
            id="approach"
            className="approach section-pad"
            aria-labelledby="approach-title"
          >
            <div className="wrap">
              <p className="section-label">
                <span>03</span> / The process
              </p>
              <h2 id="approach-title" data-reveal>
                From the first spark.
                <br />
                To the finest detail.
              </h2>
              <ol className="process-list">
                {process.map(([name, description], i) => (
                  <li key={name} data-reveal>
                    <div className="process-node" aria-hidden="true" />
                    <span className="process-number">0{i + 1}</span>
                    <h3>{name}</h3>
                    <p>{description}</p>
                  </li>
                ))}
              </ol>
              <div className="strategy" data-reveal>
                <p>
                  <span>Problem + Insight = </span>Creative solution.
                </p>
                <p className="strategy-note">
                  We solve it through design &amp; craft.
                </p>
              </div>
            </div>
          </section>
          <section
            id="contact"
            className="contact section-pad"
            aria-labelledby="contact-title"
          >
            <div className="wrap">
              <div className="contact-top">
                <p className="section-label">
                  <span>04</span> / Let’s create
                </p>
                <p>
                  We care about the idea.
                  <br />
                  The design. The smallest details.
                  <br />
                  And we love impact.
                </p>
              </div>
              <div className="contact-stage">
                <div className="contact-art" aria-hidden="true">
                  <Image
                    src="/images/glass-ribbon.webp"
                    alt=""
                    width={1536}
                    height={1024}
                    sizes="(max-width: 700px) 100vw, 60vw"
                  />
                </div>
                <div className="contact-copy" data-reveal>
                  <h2 id="contact-title">
                    Let’s cook
                    <br />
                    something
                    <br />
                    <span className="iridescent">great together.</span>
                  </h2>
                  <a
                    className="button button-light"
                    href="mailto:arisu.creative@gmail.com?subject=Let%E2%80%99s%20create%20something%20great"
                  >
                    Start a conversation <Arrow />
                  </a>
                </div>
              </div>
              <div className="contact-links">
                <a href="mailto:arisu.creative@gmail.com">
                  arisu.creative@gmail.com <Arrow />
                </a>
                <a
                  href="https://wa.me/6281219880286"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Chat on WhatsApp: +62 812 1988 0286"
                >
                  +62 812 1988 0286 <Arrow />
                </a>
                <a
                  href="https://www.instagram.com/arisu.creative/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Instagram <Arrow />
                </a>
              </div>
              <footer className="footer">
                <a href="#home" aria-label="ARISU — back to top">
                  <Image
                    src="/images/arisu-logo.png"
                    width={478}
                    height={122}
                    alt="ARISU"
                    className="footer-logo"
                    sizes="(max-width: 700px) 60vw, 360px"
                  />
                </a>
                <div>
                  <p>
                    Great ideas.
                    <br />
                    Excellent craft.
                  </p>
                  <small>© {new Date().getFullYear()} ARISU Creative</small>
                </div>
                <a className="back-top" href="#home" aria-label="Back to top">
                  <Arrow direction="up" />
                </a>
              </footer>
            </div>
          </section>
        </main>
      </SiteMotion>
    </>
  );
}
