"use client";

import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.back()}
      style={{ background: "none", border: "none", cursor: "pointer", padding: "0 0 16px 20px", display: "block" }}
    >
      <img src="/back.svg" alt="back" width={60} height={32} />
    </button>
  );
}