import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";

const plexThai = IBM_Plex_Sans_Thai({
  variable: "--font-thai",
  subsets: ["thai", "latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const title = "Zest-Med | เครื่องมือแพทย์และอุปกรณ์แล็บมาตรฐานสากล";
const description =
  "เซสท์-เมด ผู้นำด้าน Bio-Medical กว่า 27 ปี ได้รับความไว้วางใจจากกว่า 5,000 หน่วยงานทางการแพทย์ ครบทั้งอุปกรณ์แล็บ ชุดตรวจ IVD ระบบ Cold Chain พร้อมเอกสารรับรองมาตรฐาน";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    siteName: "Zest-Med",
    locale: "th_TH",
    type: "website",
  },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="th" className={`${plexThai.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
