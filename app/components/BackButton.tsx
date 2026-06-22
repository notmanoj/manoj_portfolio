import Link from "next/link";

export default function BackButton() {
  return (
    <div
      className="static mb-4 ml-5 flex flex-col items-start gap-0.5 md:fixed md:top-10 md:mb-0 md:ml-0 md:z-50"
      style={{
        left: "max(20px, calc(50% - 270px - 32px - 70px))",
      }}
    >
      <Link href="/" className="btn-pill">
  <img src="/back-icon.svg" alt="back" width={13} height={13} />
  <span className="ml-1">home</span>
</Link>
    </div>
  );
}
