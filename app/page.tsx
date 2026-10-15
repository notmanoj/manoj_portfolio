import Container from "./components/Container";
import HoverBadge from "./components/HoverBadge";
import FadeUp from "./components/FadeUp";

export default function Home() {
  return (
<main className="relative flex-1 flex items-center justify-center py-16" style={{ paddingBottom: "120px" }}>      {/* Top-left: mountain badge */}
      <div className="absolute top-25 left-30">
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
          captionPosition="left"
        />
      </div>

      <Container>
        <FadeUp>
         <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex-shrink-0 overflow-hidden rounded-lg">
              <img
                src="/manoj.png"
                alt="Manoj"
                className="w-full h-full object-cover"
              />
            </div>
                </div>
        

          {/* 
              <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 flex-shrink-0 overflow-hidden">
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
          </div> */}

          {/* Description */}
          <p className="text-secondary leading-relaxed mb-6">
            I’m Manoj, a designer who ships with effort, care and taste.
          </p>
          <p className="text-secondary leading-relaxed mb-6">
            Product Designer (UK) with 4+ years of experience in websites, web
            apps, mobile apps, and design systems.
          </p>
          <p className="text-secondary leading-relaxed mb-3">
            You can find me on{" "}
            <a
              href="https://www.linkedin.com/in/manojrai-ux/"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
                textDecorationColor: "#B2B2B2",
              }}
            >
              LinkedIn
            </a>
            , explore my{" "}
            <a
              href="/projects"
              style={{
                textDecoration: "underline",
                textDecorationColor: "#B2B2B2",
              }}
            >
              projects
            </a>
            , or check out my latest UI/UX design work on{" "}
            <a
              href="https://dribbble.com/manoj_rai"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                textDecoration: "underline",
                textDecorationColor: "#B2B2B2",
              }}
            >
              Dribbble
            </a>
            . If you&apos;d like to say Hi!, feel free to{" "}
            <a
              href="mailto:manojraiux@gmail.com"
              style={{
                textDecoration: "underline",
                textDecorationColor: "#B2B2B2",
              }}
            >
              get in touch
            </a>
            .
          </p>
        </FadeUp>
      </Container>
    </main>
  );
}
