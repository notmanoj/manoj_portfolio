import Link from "next/link";

export default function Nav() {
  return (
    <div style={{
      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      zIndex: 9999,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "24px 24px",
      backgroundColor: "#FAFAF8",
      backgroundImage: "linear-gradient(to right, #F1F1F1 1px, transparent 1px), linear-gradient(to bottom, #F1F1F1 1px, transparent 1px)",
      backgroundSize: "40px 40px",
    }}>
      <Link href="/" className="no-underline">
        <img src="/manoj.png" alt="Manoj" style={{ width: "50px", height: "50px", borderRadius: "8px", objectFit: "cover" }} />
      </Link>
      <div style={{ display: "flex", gap: "32px" }}>
        <a href="https://www.linkedin.com/in/manojrai-ux/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="mailto:manojraiux@gmail.com">Contact Me</a>
      </div>
    </div>
  );
}