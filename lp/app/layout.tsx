import type { Metadata } from "next";
import { headers } from "next/headers";
import "./globals.css";

const title = "PITAL｜人材手配を標準化し、営業生産性を高める";
const description = "PITALは、案件ごとにスタッフを手配する事業者向けに、案件、スタッフ、応募、配置、出勤、勤怠を一元管理するSaaSです。属人的な人材手配をチームの業務へ変えます。";

export async function generateMetadata(): Promise<Metadata> {
  const headerList = await headers();
  const host = headerList.get("host") ?? "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  const socialImage = `${protocol}://${host}/og.png`;

  return {
    title,
    description,
    icons: { icon: "/pital-logo-source.svg", shortcut: "/pital-logo-source.svg" },
    openGraph: { title, description, type: "website", images: [{ url: socialImage, width: 1200, height: 630, alt: title }] },
    twitter: { card: "summary_large_image", title, description, images: [socialImage] },
  };
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ja"><body>{children}</body></html>;
}
