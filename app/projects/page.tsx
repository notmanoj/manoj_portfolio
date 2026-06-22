import Image from "next/image";
import Container from "../components/Container";
import BackButton from "../components/BackButton";
import FadeUp from "../components/FadeUp";

type Project = {
  name: string;
  tag: string;
  tools: string;
  role: string;
  icon?: string;
  mainImage?: string;
  subImages?: [string?, string?];
  link?: string;
};

const projects: Project[] = [
  {
    name: "bettercollected",
    tag: "web app",
    tools: "Figma, Google Analytics, Microsoft Clarity",
    role: "UI/UX Designer, Researcher",
    icon: "/projects/bettercollected/icon.png",
    mainImage: "/projects/bettercollected/main.png",
    subImages: [
      "/projects/bettercollected/sub-1.png",
      "/projects/bettercollected/sub-2.png",
    ],
    link: "https://bettercollected.com/",
  },
  {
    name: "Evolis",
    tag: "website",
    tools: "Figma, Framer",
    role: "UI/UX Designer, Logo Designer, Developer",
    icon: "/projects/evolis/icon.png",
    mainImage: "/projects/evolis/main.png",
    subImages: [
      "/projects/evolis/sub-1.png",
      "/projects/evolis/sub-2.png",
    ],
    link: "https://www.evoliscapital.com/",
  },
  {
    name: "SurgicalWay",
    tag: "logo",
    tools: "Illustrator",
    role: "Logo Designer",
    icon: "/projects/surgicalway/icon.png",
    mainImage: "/projects/surgicalway/main.png",
    subImages: [
      "/projects/surgicalway/sub-1.png",
      "/projects/surgicalway/sub-2.png",
    ],
  },
  {
    name: "Soluris",
    tag: "website",
    tools: "Figma, Framer",
    role: "UI/UX Designer, Researcher, Logo Designer, Developer",
    icon: "/projects/soluris/icon.png",
    mainImage: "/projects/soluris/main.png",
    subImages: [
      "/projects/soluris/sub-1.png",
      "/projects/soluris/sub-2.png",
    ],
    link: "https://solurisconsulting.com/",
  },
];

export default function Projects() {
  return (
    <main className="flex-1 py-10">
      <BackButton />
      <Container>
        <h1 className="page-title mb-6">projects</h1>

        <div className="flex flex-col gap-20">
          {projects.map((project, index) => (
            <FadeUp key={project.name} delay={index * 0.05}>
              <div>
              <div className="relative w-full bg-[#E5E5E0] rounded-[4px] mb-3 overflow-hidden" style={{ height: "260px" }}>
                {project.mainImage && (
                 <Image
  src={project.mainImage}
  alt={`${project.name} preview`}
  fill
  className="object-contain"
/>
                )}
              </div>

              {/* Sub previews */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                {[0, 1].map((i) => (
                  <div
                    key={i}
                    className="relative h-[141px] bg-[#E5E5E0] rounded-[4px] overflow-hidden"
                  >
                    {project.subImages?.[i] && (
                      <Image
                        src={project.subImages[i]!}
                        alt={`${project.name} detail ${i + 1}`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                ))}
              </div>

              {/* Title row */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8 rounded-md bg-[#E5E5E0] overflow-hidden flex-shrink-0">
                    {project.icon && (
                      <Image
                        src={project.icon}
                        alt={`${project.name} icon`}
                        fill
                        className="object-cover"
                      />
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-black">
                    {project.link ? (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:underline"
                      >
                        {project.name}
                      </a>
                    ) : (
                      project.name
                    )}
                  </h3>
                </div>
                <span className="tag">{project.tag}</span>
              </div>

              {/* Details */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-secondary text-sm mb-1">Tools Used</p>
                  <p className="text-sm leading-relaxed font-medium text-black">{project.tools}</p>
                </div>
                <div>
                  <p className="text-secondary text-sm mb-1">My Role</p>
                  <p className="text-sm leading-relaxed font-medium text-black">{project.role}</p>
                </div>
              </div>
            </div>
            </FadeUp>
          ))}
        </div>
      </Container>
    </main>
  );
}
