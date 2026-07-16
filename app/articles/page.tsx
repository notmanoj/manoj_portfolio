import Image from "next/image";
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import FadeUp from "../components/FadeUp";
import Link from "next/link";

const articles = [
  {
    slug: "principles-of-great-design-apple",
    title: "Principles of Great Design by Apple",
    description: "Great design is about understanding people.",
    image: "/articles/article-1.jpg",
  },
];

export default function Articles() {
  return (
    <main className="flex-1 py-10">
      <BackButton />
      <Container>
        <FadeUp>
          <h1 className="page-title mb-8">articles</h1>
        </FadeUp>

        <div className="flex flex-col gap-6">
          {articles.map((article, i) => (
            <FadeUp key={article.slug} delay={i * 0.08}>
              <Link href={`/articles/${article.slug}`}>
                <div className="flex gap-4 items-start group cursor-pointer">
                  <div className="relative w-[120px] h-[80px] rounded-[8px] overflow-hidden flex-shrink-0 bg-[#E5E5E0]">
                    <Image
                      src={article.image}
                      alt={article.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <h2 className="section-heading mb-1 group-hover:underline" style={{ fontStyle: "normal" }}>
                      {article.title}
                    </h2>
                    <p className="text-secondary text-sm leading-relaxed">
                      {article.description}
                    </p>
                  </div>
                </div>
              </Link>
            </FadeUp>
          ))}
        </div>
      </Container>
    </main>
  );
}