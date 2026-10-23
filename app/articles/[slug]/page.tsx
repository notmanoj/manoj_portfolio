import Image from "next/image";
import Container from "../../components/Container";
import BackButton from "../../components/BackButton";
import Nav from "../../components/Nav";
import { notFound } from "next/navigation";

type Section = {
  icon: string;
  title: string;
  subtitle: string;
  remember: string[];
  example: string;
};

type Article = {
  title: string;
  description: string;
  coverImage: string;
  sections: Section[];
};

const articles: Record<string, Article> = {
  "principles-of-great-design-apple": {
    title: "Principles of Great Design – Apple",
    description:
      "Great design is about understanding people: what they need, how they think, and how they use a product. These principles help designers make better decisions and create products that people enjoy using.",
    coverImage: "/articles/article-1.jpg",
    sections: [
      {
        icon: "/articles/icons/purposee.png",
        title: "1. Purpose",
        subtitle: "Make something that is useful and meaningful.",
        remember: [
          "Before designing, ask:",
          "What problem am I solving?",
          "Why will people use this?",
          "Focus on the most important features.",
          "Don't add unnecessary things.",
          "Make your product different by solving the problem better.",
        ],
        example: "A calculator app should help people calculate quickly not include social media features.",
      },
      {
        icon: "/articles/icons/agency.png",
        title: "2. Agency",
        subtitle: "Give people control over the experience.",
        remember: [
          "People should feel free to use the app their own way.",
          "Don't force users through unnecessary steps.",
          "Let users skip tutorials or onboarding if they want.",
          "Always allow Undo or Back when possible.",
          "Help users recover from mistakes easily.",
        ],
        example: 'If someone deletes a photo, show an "Undo" option.',
      },
      {
        icon: "/articles/icons/responsibility.png",
        title: "3. Responsibility",
        subtitle: "Respect people's privacy and build trust.",
        remember: [
          "Users trust your app with their information.",
          "Explain why you need permissions.",
          "Collect only the data you actually need.",
          "Protect users' information.",
          "Be honest about how data is used.",
        ],
        example: 'If your app asks for location, explain: "We use your location to show nearby restaurants."',
      },
      {
        icon: "/articles/icons/familiarity.png",
        title: "4. Familiarity",
        subtitle: "Use designs people already understand.",
        remember: [
          "People learn faster when things work the way they expect.",
          "Follow common design patterns.",
          "Keep buttons and navigation consistent.",
          "Give clear feedback after every action.",
        ],
        example: "Use a shopping cart icon for purchases because everyone recognizes it.",
      },
      {
        icon: "/articles/icons/flexibility.png",
        title: "5. Flexibility",
        subtitle: "Design for different people and different situations.",
        remember: [
          "Everyone uses technology differently.",
          "Make your app accessible.",
          "Support different screen sizes.",
          "Support touch, keyboard, mouse, voice, and other inputs.",
          "Keep the experience consistent across devices.",
        ],
        example: "Your app should work well on both phones and tablets.",
      },
      {
        icon: "/articles/icons/simplicity.png",
        title: "6. Simplicity",
        subtitle: "Keep everything clear and easy.",
        remember: [
          "Simple doesn't mean empty. It means removing anything that isn't helpful.",
          "Show only what's necessary.",
          "Use short and clear text.",
          "Organize content so people know where to look.",
        ],
        example: 'Instead of writing: "Proceed to Authentication." Write: "Sign In".',
      },
      {
        icon: "/articles/icons/craft.png",
        title: "7. Craft",
        subtitle: "Pay attention to every detail.",
        remember: [
          "Small details make a product feel professional.",
          "Use high-quality visuals.",
          "Create smooth animations.",
          "Write clear text.",
          "Test your design often.",
          "Keep improving after launch.",
        ],
        example: "A button should respond instantly when tapped.",
      },
      {
        icon: "/articles/icons/delight.png",
        title: "8. Delight",
        subtitle: "Make people enjoy using your product.",
        remember: [
          "People remember how your app makes them feel.",
          "Think about the emotion you want to create.",
          "Add small enjoyable moments.",
          "Don't let fun get in the way of usability.",
          "Great experiences come from many small details.",
        ],
        example: "A cheerful animation after completing a task makes users smile without slowing them down.",
      },
    ],
  },
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = articles[slug];
  if (!article) notFound();

  return (
    <>
      <Nav />
      <main style={{ paddingTop: "140px", paddingBottom: "40px", minHeight: "100vh" }}>
        <BackButton />
        <Container>
          <div className="relative w-full h-[220px] bg-[#E5E5E0] rounded-[16px] mb-6 overflow-hidden">
            <Image src={article.coverImage} alt={article.title} fill className="object-cover" />
          </div>

          <div style={{ marginBottom: "48px" }}>
            <h1 style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, fontSize: "24px", lineHeight: 1.3, marginBottom: "16px", color: "#000000" }}>
              {article.title}
            </h1>
            <p style={{ fontSize: "16px", color: "#545454", lineHeight: 1.4 }}>
              {article.description}
            </p>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "64px" }}>
            {article.sections.map((section, i) => (
              <div key={i}>
                <div style={{ position: "relative", width: "64px", height: "64px", marginBottom: "12px" }}>
                  <Image src={section.icon} alt={section.title} fill className="object-contain" />
                </div>
                <h2 style={{ fontFamily: '"Instrument Serif", Georgia, serif', fontWeight: 400, fontSize: "24px", lineHeight: 1.3, marginBottom: "8px", color: "#000000" }}>
                  {section.title}
                </h2>
                <p style={{ fontSize: "16px", fontWeight: 500, color: "#000000", marginBottom: "16px" }}>
                  {section.subtitle}
                </p>
                <p style={{ fontSize: "16px", fontWeight: 500, color: "#000000", marginBottom: "6px" }}>
                  Remember:
                </p>
                <ul style={{ marginBottom: "16px", display: "flex", flexDirection: "column" }}>
                  {section.remember.map((item, j) => (
                    <li key={j} style={{ display: "flex", gap: "4px", fontSize: "16px", color: "#545454" }}>
                      <span>–</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <p style={{ fontSize: "16px", lineHeight: 1.4 }}>
                  <span style={{ fontWeight: 500, color: "#000000" }}>Example: </span>
                  <span style={{ color: "#545454" }}>{section.example}</span>
                </p>
              </div>
            ))}
          </div>
        </Container>
      </main>
    </>
  );
}

export async function generateStaticParams() {
  return [{ slug: "principles-of-great-design-apple" }];
}