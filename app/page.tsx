import type { ReactNode } from "react";
import Image, { type StaticImageData } from "next/image";
import imgLabware from "@/public/products/labware.webp";
import imgIvd from "@/public/products/ivd.png";
import imgColdChain from "@/public/products/cold-chain.png";
import imgInstrument from "@/public/products/lab-instrument.webp";
import imgHygienic from "@/public/products/hygienic.png";
import imgLiverscan from "@/public/products/liverscan.png";
import imgCareway from "@/public/products/hfcwo-careway.webp";
import imgVeinVu from "@/public/products/vein-vu-200.webp";
import imgZCool from "@/public/products/z-cool.png";

const LINE_URL = "https://line.me/R/ti/p/@zestmed";
const PHONE_URL = "tel:+6626829151";
const FACEBOOK_URL = "https://www.facebook.com/zestmed";
const WEBSITE_URL = "https://www.zest-med.com/";
const MAP_URL =
  "https://www.google.com/maps/search/?api=1&query=SV+City+Office+Tower+1+Rama+III+Bangkok";

/* ---------- ไอคอน (วาดเอง ไม่ใช้รูปจากเว็บอื่น) ---------- */
function Icon({ children, className = "h-6 w-6" }: { children: ReactNode; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

const icons = {
  sparkle: <path d="M12 3l1.8 5.2L19 10l-5.2 1.8L12 17l-1.8-5.2L5 10l5.2-1.8L12 3zM19 16l.8 2.2L22 19l-2.2.8L19 22l-.8-2.2L16 19l2.2-.8L19 16z" />,
  hand: (
    <>
      <path d="M12 21s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 11c0 5.6-7 10-7 10z" />
    </>
  ),
  search: (
    <>
      <circle cx="11" cy="11" r="6.5" />
      <path d="M20 20l-4.2-4.2" />
    </>
  ),
  flask: (
    <>
      <path d="M9 3h6M10 3v6L4.5 18.5A1.7 1.7 0 0 0 6 21h12a1.7 1.7 0 0 0 1.5-2.5L14 9V3" />
      <path d="M7.5 15h9" />
    </>
  ),
  dna: (
    <>
      <path d="M7 3c0 6 10 6 10 12s-10 6-10 6M17 3c0 6-10 6-10 12" />
      <path d="M8.5 7h7M8.5 17h7" />
    </>
  ),
  snow: (
    <>
      <path d="M12 2v20M4.9 6.5l14.2 11M19.1 6.5L4.9 17.5" />
      <path d="M9.5 3.5L12 6l2.5-2.5M9.5 20.5L12 18l2.5 2.5" />
    </>
  ),
  microscope: (
    <>
      <path d="M6 21h12M9 21v-3a5 5 0 0 1 9-3" />
      <path d="M8.5 3.5l3 1.5-3 6-3-1.5 3-6zM10 8.5l2 1" />
      <circle cx="12.5" cy="16" r="1.5" />
    </>
  ),
  shield: (
    <>
      <path d="M12 3l7.5 3v5.5c0 4.6-3.2 8.3-7.5 9.5-4.3-1.2-7.5-4.9-7.5-9.5V6L12 3z" />
      <path d="M9 12l2 2 4-4" />
    </>
  ),
  badge: (
    <>
      <circle cx="12" cy="9" r="5.5" />
      <path d="M8.5 13.5L7 21l5-2.5 5 2.5-1.5-7.5" />
    </>
  ),
  check: <path d="M5 12.5l4.5 4.5L19 7.5" />,
  wrench: <path d="M14.5 6.5a4 4 0 0 0 5 5L21 13l-8 8-3-3 8-8-1.5-1.5zM14.5 6.5L13 5a4 4 0 0 0-5.5 5.5L3 15l3 3 4.5-4.5" />,
  headset: (
    <>
      <path d="M4 14v-2a8 8 0 0 1 16 0v2" />
      <path d="M4 14h3v5H5a1 1 0 0 1-1-1v-4zM20 14h-3v5h2a1 1 0 0 0 1-1v-4zM17 19c0 1.5-2 2-5 2" />
    </>
  ),
  swap: <path d="M7 4L3 8l4 4M3 8h14M17 20l4-4-4-4M21 16H7" />,
  phone: <path d="M5 3h4l2 5-2.5 1.5a11 11 0 0 0 6 6L16 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3z" />
    </>
  ),
  plus: <path d="M12 5v14M5 12h14" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
};

function LineIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 3C6.5 3 2 6.6 2 11c0 3.9 3.5 7.2 8.3 7.9.3.1.8.2.9.5.1.3.1.7 0 1l-.1.9c0 .3-.2 1 .9.5 1.1-.5 5.9-3.5 8-6C21.4 14.2 22 12.7 22 11c0-4.4-4.5-8-10-8zM8.1 13.6H6.2c-.3 0-.5-.2-.5-.5V9.3c0-.3.2-.5.5-.5s.5.2.5.5v3.3h1.4c.3 0 .5.2.5.5s-.2.5-.5.5zm2-.5c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.3c0-.3.2-.5.5-.5s.5.2.5.5v3.8zm4.6 0c0 .2-.1.4-.3.5h-.2c-.2 0-.3-.1-.4-.2l-2-2.7v2.4c0 .3-.2.5-.5.5s-.5-.2-.5-.5V9.3c0-.2.1-.4.3-.5h.2c.2 0 .3.1.4.2l2 2.7V9.3c0-.3.2-.5.5-.5s.5.2.5.5v3.8zm3.1-2.4c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9h1.4c.3 0 .5.2.5.5s-.2.5-.5.5h-1.9c-.3 0-.5-.2-.5-.5V9.3c0-.3.2-.5.5-.5h1.9c.3 0 .5.2.5.5s-.2.5-.5.5h-1.4v.9h1.4z" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M13.5 21v-7.5H16l.4-3h-2.9V8.6c0-.9.3-1.5 1.5-1.5h1.6V4.4c-.3 0-1.2-.1-2.3-.1-2.3 0-3.8 1.4-3.8 3.9v2.3H8v3h2.5V21h3z" />
    </svg>
  );
}

/* ---------- ข้อมูล (จากเว็บ zest-med.com) ---------- */
const highlights = [
  {
    icon: icons.sparkle,
    title: "ประสบการณ์กว่า 27 ปี",
    text: "ก่อตั้งปี 1999 ผู้นำด้าน Bio-Medical และเครื่องมือแพทย์ ที่หน่วยงานรัฐและเอกชนไว้วางใจมายาวนาน",
  },
  {
    icon: icons.badge,
    title: "เอกสารรับรองครบ พร้อมตรวจประเมิน",
    text: "ใบรับรองคุณภาพรองรับมาตรฐาน HA, JCI, LA, ISO 15189 และ ISO 15190 พร้อมใช้ทุกการตรวจประเมิน",
  },
  {
    icon: icons.headset,
    title: "ดูแลครบ จบในที่เดียว",
    text: "ตั้งแต่ให้คำปรึกษา ติดตั้ง ฝึกอบรม ไปจนถึงบำรุงรักษาและบริการหลังการขายโดยทีมผู้เชี่ยวชาญ",
  },
];

const products: { icon: ReactNode; img?: StaticImageData; en: string; th: string; text: string }[] = [
  {
    icon: icons.flask,
    img: imgLabware,
    en: "Innovative Labware",
    th: "อุปกรณ์ห้องปฏิบัติการ",
    text: "อุปกรณ์แล็บสำหรับ Clinical Lab รวมถึงแบรนด์ “Greenlabb” ที่เป็นมิตรต่อสิ่งแวดล้อม",
  },
  {
    icon: icons.dna,
    img: imgIvd,
    en: "IVD Clinical Diagnostics",
    th: "ชุดตรวจวินิจฉัยโรค",
    text: "ชุดตรวจที่แม่นยำและรวดเร็ว พร้อมใบ COA ทุกล็อต",
  },
  {
    icon: icons.snow,
    img: imgColdChain,
    en: "Cold Chain Solutions",
    th: "ระบบควบคุมอุณหภูมิ",
    text: "ตู้เย็นเก็บยา วัคซีน และระบบขนส่งควบคุมอุณหภูมิ พร้อมเอกสาร Thermal Validation",
  },
  {
    icon: icons.microscope,
    img: imgInstrument,
    en: "High-Quality Lab Instruments",
    th: "เครื่องมือแพทย์และแล็บ",
    text: "เครื่องมือทันสมัย นวัตกรรมใหม่ ช่วยเพิ่มความแม่นยำและลดความผิดพลาด",
  },
  {
    icon: icons.shield,
    img: imgHygienic,
    en: "Specialist Hygienic Products",
    th: "ผลิตภัณฑ์ป้องกันการติดเชื้อ",
    text: "ผลิตภัณฑ์กลุ่มป้องกันการติดเชื้อคุณภาพสูง สำหรับโรงพยาบาลและห้องปฏิบัติการ",
  },
  {
    icon: icons.badge,
    en: "Certifications & Standards",
    th: "เอกสารรับรองมาตรฐาน",
    text: "ใบรับรองจากหน่วยงานตรวจสอบมาตรฐาน ช่วยให้ผ่านการตรวจประเมินได้อย่างมั่นใจ",
  },
];

const featured = [
  {
    img: imgLiverscan,
    name: "Liverscan®",
    tag: "ตรวจประเมินสุขภาพตับ",
    text: "ระบบตรวจสุขภาพตับด้วยเทคโนโลยี Transient Elastography แม่นยำระดับโรงพยาบาลในขนาดพกพา",
  },
  {
    img: imgCareway,
    name: "HFCWO Careway",
    tag: "เครื่องเคาะปอดความถี่สูง",
    text: "ช่วยระบายเสมหะด้วยแรงสั่นความถี่สูงที่ผนังทรวงอก ควบคุมผ่านหน้าจอสัมผัสและแอปพลิเคชัน",
  },
  {
    img: imgVeinVu,
    name: "Vein Vu 200",
    tag: "เครื่องสแกนเส้นเลือด",
    text: "แสดงภาพเส้นเลือดแบบ Real-time ด้วย Near-Infrared สำหรับโรงพยาบาลและคลินิก",
  },
  {
    img: imgZCool,
    name: "ตู้เย็น Z-Cool 2–8 °C",
    tag: "ตู้เก็บยาและวัคซีน",
    text: "ตู้ควบคุมอุณหภูมิสำหรับเก็บน้ำยา ยา และวัคซีน ขนาด 1 ประตู ความจุ 390 ลิตร",
  },
];

const services = [
  { icon: icons.check, title: "ตรวจคุณภาพก่อนส่งมอบ", text: "ตรวจสอบผลิตภัณฑ์ทุกรายการ และติดตามคุณภาพต่อเนื่อง" },
  { icon: icons.headset, title: "ทีมเทคนิคมืออาชีพ", text: "One-Stop Service ให้คำปรึกษาและฝึกอบรมการใช้งาน" },
  { icon: icons.wrench, title: "บำรุงรักษาเชิงป้องกัน", text: "ช่างที่ผ่านการอบรมจากผู้ผลิต พร้อมบันทึกประวัติแบบดิจิทัล" },
  { icon: icons.swap, title: "เครื่องสำรองระหว่างซ่อม", text: "งานของคุณเดินต่อได้ ไม่สะดุด" },
];

const clients = [
  "โรงพยาบาลและศูนย์การแพทย์ทั้งภาครัฐและเอกชน",
  "สถาบันการศึกษาและโรงเรียนแพทย์",
  "ศูนย์วิจัยและห้องปฏิบัติการมาตรฐานระดับประเทศ",
  "หน่วยงานด้านสาธารณสุขและองค์กรวิชาชีพ",
  "ห้องปฏิบัติการอุตสาหกรรมยาและอาหาร",
];

const faqs = [
  {
    q: "ราคาสินค้าเท่าไร ขอใบเสนอราคาได้อย่างไร?",
    a: "ราคาขึ้นอยู่กับรุ่น จำนวน และบริการที่ต้องการ ทักไลน์ @zestmed หรือโทร 02-682-9151 แจ้งรายการที่สนใจ ทีมงานจะจัดทำใบเสนอราคาให้",
  },
  {
    q: "มีเอกสารรับรองสำหรับการตรวจประเมิน HA / ISO 15189 ไหม?",
    a: "มี เรามีใบรับรองคุณภาพที่รองรับมาตรฐาน HA, JCI, LA, ISO 15189 และ ISO 15190 รวมถึงใบ COA และเอกสาร Thermal Validation สำหรับระบบ Cold Chain",
  },
  {
    q: "มีบริการหลังการขายและซ่อมบำรุงไหม?",
    a: "มีทีมช่างเทคนิคที่ผ่านการอบรมจากผู้ผลิตโดยตรง ดูแลทั้งการบำรุงรักษาเชิงป้องกัน ซ่อมบำรุง และมีเครื่องสำรองให้ใช้ระหว่างซ่อม",
  },
  {
    q: "ให้บริการลูกค้ากลุ่มไหนบ้าง?",
    a: "โรงพยาบาล คลินิก ห้องปฏิบัติการทางคลินิก สถาบันการศึกษาและวิจัย รวมถึงห้องแล็บอุตสาหกรรมยาและอาหาร ครอบคลุมทั่วประเทศกว่า 5,000 หน่วยงาน",
  },
];

/* ---------- ส่วนประกอบเล็ก ๆ ---------- */
function LineButton({ className = "", children = "ทักไลน์เลย" }: { className?: string; children?: ReactNode }) {
  return (
    <a
      href={LINE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-2 rounded-full bg-[#06C755] px-7 py-3.5 font-semibold text-white shadow-lg shadow-[#06C755]/25 transition hover:-translate-y-0.5 hover:brightness-105 ${className}`}
    >
      <LineIcon className="h-6 w-6" />
      {children}
    </a>
  );
}

function SectionHead({ eyebrow, title, text, light = false }: { eyebrow: string; title: string; text?: string; light?: boolean }) {
  return (
    <div className="mx-auto mb-10 max-w-2xl text-center md:mb-14">
      <p className={`text-eyebrow font-medium uppercase ${light ? "text-gold" : "text-blue-600"}`}>{eyebrow}</p>
      <h2 className={`mt-3 text-h2 font-semibold ${light ? "text-white" : "text-navy-900"}`}>{title}</h2>
      {text && <p className={`mt-4 text-body ${light ? "text-sky-100/80" : "text-muted"}`}>{text}</p>}
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* ---------- เมนูด้านบน ---------- */}
      <header className="sticky top-0 z-40 border-b border-white/10 bg-navy-950/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 md:px-6">
          <a href="#top" className="flex items-baseline gap-2 text-white">
            <span className="text-lg font-semibold tracking-[0.2em]">ZEST-MED</span>
            <span className="hidden text-xs tracking-widest text-gold sm:inline">BEYOND EXPERTISE</span>
          </a>
          <nav className="hidden items-center gap-7 text-sm text-sky-100/80 md:flex">
            <a href="#why" className="hover:text-white">จุดเด่น</a>
            <a href="#products" className="hover:text-white">สินค้า</a>
            <a href="#service" className="hover:text-white">บริการ</a>
            <a href="#faq" className="hover:text-white">คำถาม</a>
            <a href="#contact" className="hover:text-white">ติดต่อ</a>
          </nav>
          <a
            href={LINE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-[#06C755] px-4 py-2 text-sm font-semibold text-white"
          >
            <LineIcon className="h-4 w-4" />
            ทักไลน์
          </a>
        </div>
      </header>

      <main id="top" className="flex-1">
        {/* ---------- ส่วนหัว ---------- */}
        <section className="relative overflow-hidden bg-navy-950 text-white">
          <div className="pointer-events-none absolute inset-0" aria-hidden="true">
            <div className="absolute -top-40 -right-32 h-[28rem] w-[28rem] rounded-full bg-blue-600/30 blur-3xl" />
            <div className="absolute -bottom-48 -left-24 h-[26rem] w-[26rem] rounded-full bg-sky-300/15 blur-3xl" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.07)_1px,transparent_0)] [background-size:28px_28px]" />
          </div>
          <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pt-16 pb-20 md:grid-cols-[1.25fr_1fr] md:px-6 md:pt-24 md:pb-28">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full border border-gold/40 px-4 py-1.5 text-xs tracking-wide text-gold sm:text-eyebrow">
                Professional Solutions with Dedicated Care
              </p>
              <h1 className="mt-6 text-h1 font-semibold">
                โซลูชัน<span className="whitespace-nowrap">ทางการแพทย์</span>
                <span className="block bg-gradient-to-r from-sky-300 to-blue-500 bg-clip-text text-transparent">
                  <span className="whitespace-nowrap">มาตรฐานสากล</span>{" "}
                  <span className="whitespace-nowrap">ครบวงจร</span>
                </span>
              </h1>
              <p className="mt-6 max-w-xl text-lead text-sky-100/80">
                เซสท์-เมด ผู้นำด้าน Bio-Medical และเครื่องมือแพทย์กว่า 27 ปี
                ครบทั้งอุปกรณ์แล็บ ชุดตรวจ IVD และระบบ Cold Chain
                พร้อมเอกสารรับรองที่ผ่านการตรวจประเมินได้อย่างมั่นใจ
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <LineButton />
                <a
                  href="#products"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/25 px-7 py-3.5 font-medium text-white transition hover:bg-white/10"
                >
                  ดูสินค้าและบริการ
                  <Icon className="h-5 w-5">{icons.arrow}</Icon>
                </a>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              {[
                { n: "27+", l: "ปีแห่งความเชี่ยวชาญ" },
                { n: "5,000+", l: "หน่วยงานไว้วางใจ" },
                { n: "1999", l: "ปีที่ก่อตั้ง" },
                { n: "ISO", l: "15189 · 15190 · HA · JCI" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm sm:p-6"
                >
                  <p className="text-3xl font-semibold text-white sm:text-4xl">{s.n}</p>
                  <p className="mt-2 text-sm leading-relaxed text-sky-100/70">{s.l}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- จุดเด่น 3 ข้อ ---------- */}
        <section id="why" className="scroll-mt-16 bg-sky-50 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Why Zest-Med"
              title="เหตุผลที่สถาบันการแพทย์ชั้นนำไว้วางใจเรา"
            />
            <div className="grid gap-5 md:grid-cols-3">
              {highlights.map((h) => (
                <div
                  key={h.title}
                  className="rounded-3xl border border-line bg-white p-7 shadow-[0_10px_40px_-20px_rgba(10,31,61,0.25)] md:p-8"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-navy-900 text-gold">
                    <Icon>{h.icon}</Icon>
                  </div>
                  <h3 className="mt-6 text-h3 font-semibold text-navy-900">{h.title}</h3>
                  <p className="mt-3 text-body text-muted">{h.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- สินค้า ---------- */}
        <section id="products" className="scroll-mt-16 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              eyebrow="Products"
              title="สินค้าและโซลูชันของเรา"
              text="ผลิตภัณฑ์คุณภาพสูงจากผู้ผลิตชั้นนำระดับโลก ราคาตามรุ่นและจำนวน — ทักไลน์เพื่อขอใบเสนอราคาได้ทันที"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {products.map((p) => (
                <div
                  key={p.en}
                  className="group flex flex-col overflow-hidden rounded-3xl border border-line bg-white transition hover:-translate-y-1 hover:border-blue-500/40 hover:shadow-[0_20px_50px_-25px_rgba(31,95,191,0.45)]"
                >
                  <div className="relative flex h-52 items-center justify-center bg-gradient-to-b from-sky-50 to-sky-100/60">
                    {p.img ? (
                      <Image
                        src={p.img}
                        alt={p.th}
                        sizes="(min-width: 1024px) 360px, (min-width: 640px) 50vw, 100vw"
                        className="h-44 w-auto object-contain mix-blend-multiply transition duration-500 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-navy-900 text-gold">
                        <Icon className="h-11 w-11">{p.icon}</Icon>
                      </div>
                    )}
                  </div>
                  <div className="flex flex-1 flex-col p-7 pt-6">
                  <p className="text-xs font-medium tracking-wider text-blue-600 uppercase">{p.en}</p>
                  <h3 className="mt-1 text-h3 font-semibold text-navy-900">{p.th}</h3>
                  <p className="mt-3 flex-1 text-body text-muted">{p.text}</p>
                  <a
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-800 hover:text-blue-600"
                  >
                    สอบถามราคา
                    <Icon className="h-4 w-4">{icons.arrow}</Icon>
                  </a>
                  </div>
                </div>
              ))}
            </div>

            {/* สินค้าแนะนำ */}
            <div className="mt-20 md:mt-28">
              <SectionHead
                eyebrow="Featured"
                title="สินค้าแนะนำ"
                text="นวัตกรรมทางการแพทย์ที่โรงพยาบาลและคลินิกเลือกใช้"
              />
              <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
                {featured.map((f) => (
                  <a
                    key={f.name}
                    href={LINE_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col overflow-hidden rounded-3xl bg-navy-950 text-white transition hover:-translate-y-1 hover:shadow-[0_24px_60px_-28px_rgba(10,31,61,0.8)]"
                  >
                    <div className="relative flex aspect-[4/5] items-end justify-center bg-gradient-to-b from-navy-800 to-navy-950 px-4 pt-4">
                      <Image
                        src={f.img}
                        alt={f.name}
                        sizes="(min-width: 1024px) 280px, 50vw"
                        className="h-full w-auto object-contain transition duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="flex flex-1 flex-col p-4 sm:p-6">
                      <p className="text-xs font-medium text-gold">{f.tag}</p>
                      <h3 className="mt-1 text-base font-semibold sm:text-h3">{f.name}</h3>
                      <p className="mt-2 line-clamp-3 flex-1 text-xs leading-relaxed text-sky-100/70 sm:line-clamp-none sm:text-sm">{f.text}</p>
                      <span className="mt-3 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-300 group-hover:text-white">
                        สอบถามเลย
                        <Icon className="h-4 w-4">{icons.arrow}</Icon>
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ---------- บริการหลังการขาย + ลูกค้าของเรา ---------- */}
        <section id="service" className="scroll-mt-16 bg-navy-900 px-4 py-20 text-white md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <SectionHead
              light
              eyebrow="After-Sales Service"
              title="บริการหลังการขายระดับมืออาชีพ"
              text="ดูแลต่อเนื่องตลอดอายุการใช้งาน เพื่อให้งานของคุณไม่มีสะดุด"
            />
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {services.map((s) => (
                <div key={s.title} className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
                  <div className="text-gold">
                    <Icon className="h-7 w-7">{s.icon}</Icon>
                  </div>
                  <h3 className="mt-5 text-h3 font-semibold">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-sky-100/70">{s.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-16 rounded-3xl bg-gradient-to-br from-navy-800 to-blue-600/60 p-7 md:p-10">
              <div className="grid gap-8 md:grid-cols-[1fr_1.4fr] md:items-center">
                <div>
                  <p className="text-eyebrow font-medium text-gold uppercase">Trusted by</p>
                  <p className="mt-3 text-h2 font-semibold">กว่า 5,000 หน่วยงาน</p>
                  <p className="mt-3 text-sky-100/80">ทั่วประเทศเลือกใช้ผลิตภัณฑ์และบริการจากเซสท์-เมด</p>
                </div>
                <ul className="grid gap-3">
                  {clients.map((c) => (
                    <li key={c} className="flex items-start gap-3 rounded-2xl bg-white/[0.06] px-4 py-3">
                      <Icon className="mt-0.5 h-5 w-5 shrink-0 text-sky-300">{icons.check}</Icon>
                      <span>{c}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ---------- คำถามที่พบบ่อย ---------- */}
        <section id="faq" className="scroll-mt-16 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-3xl">
            <SectionHead eyebrow="FAQ" title="คำถามที่พบบ่อย" />
            <div className="space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-line bg-white px-6 py-5 open:bg-sky-50">
                  <summary className="flex cursor-pointer items-start justify-between gap-4 font-semibold text-navy-900">
                    {f.q}
                    <Icon className="mt-0.5 h-5 w-5 shrink-0 text-blue-600 transition group-open:rotate-45">
                      {icons.plus}
                    </Icon>
                  </summary>
                  <p className="mt-3 text-body text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ---------- ติดต่อเรา ---------- */}
        <section id="contact" className="scroll-mt-16 bg-sky-50 px-4 py-20 md:px-6 md:py-28">
          <div className="mx-auto max-w-6xl">
            <div className="overflow-hidden rounded-[2rem] bg-navy-950 text-white">
              <div className="grid md:grid-cols-2">
                <div className="p-8 md:p-12">
                  <p className="text-eyebrow font-medium text-gold uppercase">Contact</p>
                  <h2 className="mt-3 text-h2 font-semibold">รับคำปรึกษาฟรี</h2>
                  <p className="mt-4 text-sky-100/80">
                    บอกเราว่าต้องการอะไร ทีมผู้เชี่ยวชาญพร้อมแนะนำโซลูชันที่เหมาะกับหน่วยงานของคุณ
                  </p>
                  <LineButton className="mt-8 w-full sm:w-auto">ทักไลน์เลย @zestmed</LineButton>
                </div>
                <div className="space-y-3 border-t border-white/10 bg-white/[0.03] p-8 md:border-t-0 md:border-l md:p-12">
                  <a href={PHONE_URL} className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-white/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-600">
                      <Icon className="h-5 w-5">{icons.phone}</Icon>
                    </span>
                    <span>
                      <span className="block text-sm text-sky-100/60">โทรศัพท์</span>
                      <span className="font-medium">02-682-9151 ถึง 4</span>
                    </span>
                  </a>
                  <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-white/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#06C755]">
                      <LineIcon />
                    </span>
                    <span>
                      <span className="block text-sm text-sky-100/60">LINE</span>
                      <span className="font-medium">@zestmed</span>
                    </span>
                  </a>
                  <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 rounded-2xl p-3 transition hover:bg-white/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#1877F2]">
                      <FacebookIcon />
                    </span>
                    <span>
                      <span className="block text-sm text-sky-100/60">Facebook</span>
                      <span className="font-medium">@zestmed</span>
                    </span>
                  </a>
                  <a href={MAP_URL} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 rounded-2xl p-3 transition hover:bg-white/5">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white/10 text-gold">
                      <Icon className="h-5 w-5">{icons.pin}</Icon>
                    </span>
                    <span>
                      <span className="block text-sm text-sky-100/60">ที่อยู่</span>
                      <span className="font-medium">
                        896/1-2 อาคาร SV City Office Tower 1 ชั้น 3 ถ.พระราม 3 แขวงบางโพงพาง เขตยานนาวา กรุงเทพฯ 10120
                      </span>
                      <span className="mt-1 block text-sm text-sky-100/60">เปิดทำการ จันทร์–ศุกร์ 08:30–17:30 น.</span>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ---------- ส่วนท้าย ---------- */}
      <footer className="bg-navy-950 px-4 pt-14 pb-28 text-sky-100/70 md:px-6 md:pb-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-lg font-semibold tracking-[0.2em] text-white">ZEST-MED</p>
            <p className="mt-1 text-xs tracking-widest text-gold">UNDERSTANDING TODAY, INNOVATING TOMORROW</p>
            <p className="mt-4 text-sm">บริษัท เซสท์-เมด จำกัด · Zest-Med Co., Ltd.</p>
          </div>
          <div className="flex items-center gap-3">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" aria-label="LINE" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <LineIcon />
            </a>
            <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <FacebookIcon />
            </a>
            <a href={WEBSITE_URL} target="_blank" rel="noopener noreferrer" aria-label="เว็บไซต์หลัก" className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20">
              <Icon className="h-5 w-5">{icons.globe}</Icon>
            </a>
          </div>
        </div>
        <p className="mx-auto mt-10 max-w-6xl border-t border-white/10 pt-6 text-xs">
          © 2026 Zest-Med Co., Ltd. สงวนลิขสิทธิ์
        </p>
      </footer>

      {/* ---------- ปุ่มไลน์ลอย (มือถือ) ---------- */}
      <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <LineButton className="w-full">ทักไลน์เลย</LineButton>
      </div>
    </>
  );
}
