import Container from "./components/Container";
import HoverBadge from "./components/HoverBadge";
import FadeUp from "./components/FadeUp";

export default function Home() {
  return (
    <main
      className="relative flex-1 flex items-center justify-center py-16"
      style={{ paddingBottom: "120px" }}
    >
      {/* Top-left: mountain badge */}
      <div className="absolute bottom-20 left-30">
        <HoverBadge
          src="/mountain.svg"
          alt="Mountain"
          caption="Originally from Nepal"
          width={166}
          captionPosition="bottom"
        />
      </div>

      {/* Bottom-right: UK flag badge */}
      <div className="absolute bottom-20 right-25">
        <HoverBadge
          src="/uk-flag.svg"
          alt="UK Flag"
          caption="Currently living in the UK"
          width={78}
          captionPosition="bottom"
        />
      </div>

      <Container>
        <FadeUp>
          {/* Avatar */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src="/manoj.png"
                alt="Manoj"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Description */}
          <p className="text-secondary leading-relaxed mb-6">
            I&apos;m <a href="/about-me">Manoj</a>, a leader and Product Designer.
          </p>
          <p className="text-secondary leading-relaxed mb-6">
            Explore my <a href="/projects">selected work</a> , read my <a href="/articles">articles</a>, check out my designs on <a href="https://dribbble.com/manojrai" target="_blank" rel="noopener noreferrer">Dribbble</a>, or find me on{" "}
            <a
              href="https://www.linkedin.com/in/manojrai-ux/" target="_blank" rel="noopener noreferrer">
              LinkedIn
            </a>.
          </p>
            <p>
              Have something in mind? <a href="mailto:manojraiux@gmail.com">Let's connect</a> 
            </p>
        </FadeUp>
      </Container>
    </main>
  );
}
