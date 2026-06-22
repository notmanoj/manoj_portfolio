import Image from "next/image";
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import FadeUp from "../components/FadeUp";

export default function AboutMe() {
  const journey = [
    {
      time: "Jul 2024 – Present",
      role: "Product Designer & No-Code Product Builder (Freelance)",
      description:
        "Helping startups and businesses transform ideas into user-centered digital products through design, strategy, and no-code development.",
    },
    {
      time: "Apr 2023 – Jul 2024",
      role: "Creative Head — Sireto Technology",
      description:
        "Led creative direction across digital products and brand experiences while collaborating with cross-functional teams to deliver impactful solutions.",
    },
    {
      time: "Dec 2022 – Apr 2023",
      role: "UI/UX Designer — Tootle",
      description:
        "Designed user experiences and interfaces that improved usability and supported business goals in a fast-paced product environment.",
    },
    {
      time: "Jun 2022 – Dec 2022",
      role: "Freelance UI/UX Designer",
      description:
        "Worked with clients across different industries, helping them create user-friendly and visually engaging digital experiences.",
    },
    {
      time: "Jan 2020 – Jun 2022",
      role: "UI/UX Designer — Idea Breed Technology",
      description:
        "Built a strong foundation in user experience design, research, prototyping, and product thinking while working on a variety of digital products.",
    },
  ];

  const books = [
    { caption: "Show Your Work!", image: "/about/books/book-1.jpg" },
    { caption: "To Kill a Mockingbird", image: "/about/books/book-2.jpg" },
    { caption: "The Kite Runner", image: "/about/books/book-3.jpg" },
    { caption: "For One More Day", image: "/about/books/book-4.jpg" },
    { caption: "A Man Called Ove", image: "/about/books/book-5.jpg" },
  ];

  const coverImage = "/about/cover.jpg";
  const profileImage = "/about/profile.jpg";

  return (
    <main className="flex-1 py-10">
      <BackButton />
      <Container>
        <FadeUp>
          <h1 className="page-title mb-6">about me</h1>
        </FadeUp>

       {/* Cover image */}
<FadeUp delay={0.1}>
  <div className="relative mb-12">
    <div className="relative w-full h-[180px] bg-[#E5E5E0] rounded-[16px] overflow-hidden">
      <Image src={coverImage} alt="Cover" fill className="object-cover" />
    </div>
    <div
      className="absolute w-16 h-16 rounded-[4px]"
      style={{ bottom: "-30px", left: "16px" }}
    >
      <Image src={profileImage} alt="Manoj Rai" fill className="object-cover" />
    </div>
  </div>
</FadeUp>

        {/* Greeting */}
        <FadeUp delay={0.15} className="mb-20">
          <p className="text-secondary text-sm mb-2">
            Hello, नमस्ते  👋
          </p>
          <h2 className="section-heading mb-3">I&apos;m Manoj Rai</h2>
          <p className="text-secondary leading-relaxed mb-4">
            A Product Designer and No-Code Product
            Builder originally from Nepal, now based in the UK with my wife
            since 2025.
          </p>
          
        </FadeUp>

        {/* Self-taught section */}
        <FadeUp className="mb-20">
          
          <h2 className="section-heading mb-3">A Self-Taught Designer</h2>
          <p className="text-secondary leading-relaxed mb-4">
            My design journey has been driven by curiosity, persistence, and
            a constant desire to improve.
          </p>
          <p className="text-secondary leading-relaxed mb-4">
            Let’s just say it’s been a wild ride full of late nights, coffee, and lots of creative breakthroughs (and a few breakdowns, but who’s counting?).

I’m constantly pushing myself to grow and improve because I’m aiming for one thing: to be one of the best in the business.
          </p>
        </FadeUp>

        {/* My Journey */}
        <FadeUp className="mb-20">
          <h2 className="section-heading mb-4">My Journey</h2>
          <div className="flex flex-col gap-6">
            {journey.map((item, i) => (
              <FadeUp key={i} delay={i * 0.08}>
                <h3 className="font-medium leading-relaxed text-black" style={{ fontSize: "16px" }}>
                  {item.role}
                </h3>
                <p className="text-secondary text-sm mb-2">{item.time}</p>
                <p className="text-secondary leading-relaxed" style={{ fontSize: "16px" }}>
                  {item.description}
                </p>
              </FadeUp>
            ))}
          </div>
        </FadeUp>

        {/* Life Outside Figma */}
        <FadeUp>
          <h2 className="section-heading mb-3">Life Outside Figma</h2>
          <p className="text-secondary leading-relaxed mb-4">
            When I&apos;m away from the screen, you&apos;ll usually find me
            exploring new cafés, reading books, learning new skills, or
            playing Mobile Legends: Bang Bang.
          </p>
          <p className="text-secondary leading-relaxed mb-6">
            Some of my favorite books:
          </p>

          {/* Books grid */}
          <div className="grid grid-cols-3 gap-9">
            {books.map((book, i) => (
              <FadeUp key={i} delay={i * 0.07}>
                <div className="flex flex-col gap-2">
                  <div className="relative w-[118px] h-[180px] bg-[#E5E5E0] rounded-[4px] overflow-hidden shadow-[0_2px_2px_#D3CEB9]">
                    <Image
                      src={book.image}
                      alt={book.caption}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p className="text-secondary" style={{ fontSize: "14px" }}>
                    {book.caption}
                  </p>
                </div>
              </FadeUp>
            ))}
          </div>
        </FadeUp>
      </Container>
    </main>
  );
}
