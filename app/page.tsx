import Container from "./components/Container";
import HoverBadge from "./components/HoverBadge";
import FadeUp from "./components/FadeUp";

export default function Home() {
  return (
    <main className="relative flex-1 flex items-center justify-center py-16">
      {/* Top-left: mountain badge */}
      <div className="absolute top-25 left-30">
        <HoverBadge
          src="/mountain.png"
          alt="Mountain"
          caption="Originally from Nepal"
          width={166}
          captionPosition="bottom"
        />
      </div>

      {/* Bottom-right: UK flag badge */}
      <div className="absolute bottom-20 right-25">
        <HoverBadge
          src="/uk-flag.png"
          alt="UK Flag"
          caption="Currently living in the UK"
          width={78}
          captionPosition="left"
        />
      </div>

      <Container>
        <FadeUp>
        {/* Avatar + Name */}
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 rounded-xl flex-shrink-0 overflow-hidden">
            <video
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            >
              <source src="/manoj_gif.mp4" type="video/mp4" />
              <source src="/manoj_gif.mov" type="video/quicktime" />
            </video>
          </div>
          <div>
            <img src="/manoj-logo.svg" alt="manoj" width={60} height={26} />
            <p
              style={{
  fontFamily: '"Instrument Serif", Georgia, serif',
  fontStyle: "italic",
  fontWeight: 400,
  fontSize: "18px",
  color: "#000000",
}}
            >
              product designer
            </p>
          </div>
        </div>

        {/* Description */}
        <p className="text-secondary leading-relaxed mb-8">
          Product Designer in the UK with 4+ years of experience designing user-centric digital products.
        </p>

        {/* Nav buttons */}
        <nav className="flex flex-wrap gap-2">
          <a href="/projects" className="btn-nav">
            projects
          </a>
          <a href="/about-me" className="btn-nav">
            about me
          </a>
          <a
            href="https://medium.com/@manojraihello"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav"
          >
            writing
          </a>
          <a
            href="https://www.linkedin.com/in/manojrai-ux/"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-nav"
          >
            linkedIn
          </a>
          <a
            href="mailto:manojraihello@gmail.com"
            className="btn-nav"
            style={{ backgroundColor: "#FBE6A2" }}
          >
            mail
          </a>
        </nav>
        </FadeUp>
      </Container>
    </main>
  );
}
