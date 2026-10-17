"use client";

import Image, { type StaticImageData } from "next/image";
import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
  type RefObject,
} from "react";
import imgLiverscan from "@/public/products/liverscan.png";
import imgVeinVu from "@/public/products/vein-vu-200.webp";
import imgCareway from "@/public/products/hfcwo-careway.webp";
import imgZCool from "@/public/products/z-cool.png";
import imgIvd from "@/public/products/ivd.png";

const LINE_URL = "https://line.me/R/ti/p/@zestmed";

/* สินค้าที่ตัวที่ 1 จะเดินมาแนะนำ (ข้อมูลจาก zest-med.com) */
const tips: { img: StaticImageData; name: string; text: string }[] = [
  { img: imgLiverscan, name: "Liverscan®", text: "ตรวจสุขภาพตับแบบพกพา แม่นยำระดับโรงพยาบาล" },
  { img: imgVeinVu, name: "Vein Vu 200", text: "สแกนหาเส้นเลือดแบบ Real-time เจาะเลือดง่ายขึ้น" },
  { img: imgCareway, name: "HFCWO Careway", text: "เครื่องเคาะปอดความถี่สูง ช่วยระบายเสมหะ" },
  { img: imgZCool, name: "ตู้เย็น Z-Cool 2–8 °C", text: "เก็บยา วัคซีน และน้ำยาตรวจ ได้อย่างมั่นใจ" },
  { img: imgIvd, name: "ชุดตรวจ IVD", text: "แม่นยำ รวดเร็ว พร้อมใบ COA ทุกล็อต" },
];

/* ---------- เดินไปทั่วจอ ---------- */
function useRoam(
  elRef: RefObject<HTMLDivElement | null>,
  pausedRef: RefObject<boolean>,
  speed: number,
  startX: number,
  startY: number,
  onArrive?: () => void,
) {
  const arriveRef = useRef(onArrive);
  useEffect(() => {
    arriveRef.current = onArrive;
  }, [onArrive]);

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const bounds = () => {
      const w = window.innerWidth;
      const h = window.innerHeight;
      const minY = 72; // ใต้เมนูด้านบน
      const bottomGap = w < 768 ? 92 : 12; // เว้นปุ่มไลน์ลอยในมือถือ
      return {
        minX: 8,
        maxX: Math.max(8, w - el.offsetWidth - 8),
        minY,
        maxY: Math.max(minY, h - el.offsetHeight - bottomGap),
      };
    };
    const pick = () => {
      const b = bounds();
      return [b.minX + Math.random() * (b.maxX - b.minX), b.minY + Math.random() * (b.maxY - b.minY)];
    };

    const b0 = bounds();
    let x = b0.minX + (b0.maxX - b0.minX) * startX;
    let y = b0.minY + (b0.maxY - b0.minY) * startY;
    let [tx, ty] = pick();
    const place = () => {
      el.style.transform = `translate3d(${x}px, ${y}px, 0)`;
    };
    place();
    el.style.visibility = "visible";

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.dataset.moving = "false";
      return;
    }

    let last = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const dt = Math.min(0.05, (now - last) / 1000);
      last = now;
      const b = bounds();
      x = Math.min(Math.max(x, b.minX), b.maxX);
      y = Math.min(Math.max(y, b.minY), b.maxY);

      if (pausedRef.current) {
        el.dataset.moving = "false";
      } else {
        const dx = tx - x;
        const dy = ty - y;
        const d = Math.hypot(dx, dy);
        if (d < 3) {
          [tx, ty] = pick();
          arriveRef.current?.();
        } else {
          const step = Math.min(d, speed * dt);
          x += (dx / d) * step;
          y += (dy / d) * step;
          el.dataset.moving = "true";
          if (Math.abs(dx) > 2) el.dataset.face = dx < 0 ? "left" : "right";
        }
      }
      place();
      raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [elRef, pausedRef, speed, startX, startY]);
}

type Place = { h: "left" | "right"; v: "up" | "down" };
function placeOf(el: HTMLElement | null): Place {
  const r = el?.getBoundingClientRect();
  if (!r) return { h: "left", v: "up" };
  return { h: r.left > window.innerWidth / 2 ? "right" : "left", v: r.top < 230 ? "down" : "up" };
}

function Bubble({ place, children }: { place: Place; children: ReactNode }) {
  return (
    <div
      className={`absolute w-60 rounded-2xl border border-line bg-white p-3.5 text-sm text-ink shadow-xl ${
        place.h === "right" ? "right-0" : "left-0"
      } ${place.v === "down" ? "top-full mt-2" : "bottom-full mb-2"}`}
    >
      {children}
    </div>
  );
}

/* ---------- ตู้เย็น Z-Cool จิ๋ว (วาดเอง) ---------- */
function FridgeShape() {
  return (
    <g stroke="#2f2f2f" strokeWidth="2" strokeLinejoin="round">
      <rect x="1" y="1" width="38" height="68" rx="4" fill="#fff" />
      <rect x="1" y="1" width="38" height="13" rx="4" fill="#e9f4fd" />
      <text x="6" y="11.5" fontSize="10" fontWeight="800" fill="#1f5fbf" stroke="none" fontFamily="Arial, sans-serif">
        Z
      </text>
      <text x="13.5" y="10.5" fontSize="6.5" fontWeight="700" fill="#1e9be0" stroke="none" fontFamily="Arial, sans-serif">
        cool
      </text>
      <rect x="5" y="17" width="30" height="42" rx="2" fill="#cfe8f8" />
      <path d="M5 27 H35 M5 37 H35 M5 47 H35" stroke="#9cc9e8" strokeWidth="1.4" />
      <rect x="31.5" y="26" width="2" height="14" rx="1" fill="#9aa3ad" stroke="none" />
      <rect x="5" y="61" width="30" height="5" rx="1" fill="#8f98a3" strokeWidth="1.2" />
    </g>
  );
}

/* ---------- ตัวน้อง (วาดใหม่จากตัวการ์ตูนบนเว็บ zest-med.com) ---------- */
function Girl({ carry = false }: { carry?: boolean }) {
  return (
    <svg
      viewBox={carry ? "-2 -18 128 158" : "0 0 100 140"}
      className="h-auto w-full overflow-visible"
      aria-hidden="true"
    >
      <ellipse cx="50" cy="134" rx="22" ry="4" fill="rgba(6,20,40,0.15)" />
      <g className="mascot-bob" stroke="#2f2f2f" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
        {carry && (
          <g transform="translate(80 -16) rotate(30) scale(1.2)">
            <FridgeShape />
          </g>
        )}

        <path className="mascot-tail" d="M64 14 C84 6 97 22 89 40 C85 50 91 56 84 61 C80 50 72 40 69 26 Z" fill="#3b3b3b" />

        <g className="mascot-leg-l">
          <rect x="41" y="102" width="6" height="23" rx="3" fill="#fbe1cc" />
          <ellipse cx="44" cy="127" rx="6.5" ry="3.5" fill="#aab1b9" />
        </g>
        <g className="mascot-leg-r">
          <rect x="53" y="102" width="6" height="23" rx="3" fill="#fbe1cc" />
          <ellipse cx="56" cy="127" rx="6.5" ry="3.5" fill="#aab1b9" />
        </g>

        <path d="M43 66 L57 66 L62 110 L38 110 Z" fill="#bfe0f5" />
        <path d="M37 67 Q30 71 30 80 L26 110 Q35 114 47 112 L48 69 Z" fill="#fff" />
        <path d="M63 67 Q70 71 70 80 L74 110 Q65 114 53 112 L52 69 Z" fill="#fff" />
        <path d="M44 67 L48 78 L50 70 L52 78 L56 67" fill="none" />
        <rect x="31" y="93" width="11" height="9" rx="1.5" fill="none" strokeWidth="1.6" />
        <rect x="58" y="93" width="11" height="9" rx="1.5" fill="none" strokeWidth="1.6" />
        <rect x="58.5" y="78" width="5" height="4" rx="0.8" fill="#1e9be0" stroke="none" />

        <g className="mascot-arm-l">
          <rect x="29" y="69" width="9" height="22" rx="4.5" fill="#fff" />
          <circle cx="33.5" cy="93" r="4" fill="#fbe1cc" />
        </g>
        <g className="mascot-arm-r">
          <rect x="62" y="69" width="9" height="22" rx="4.5" fill="#fff" />
          <circle cx="66.5" cy="93" r="4" fill="#fbe1cc" />
        </g>

        <rect x="46" y="60" width="8" height="9" fill="#fbe1cc" stroke="none" />
        <circle cx="50" cy="40" r="28" fill="#3b3b3b" />
        <ellipse cx="50" cy="44" rx="24" ry="22.5" fill="#fbe1cc" />
        <path d="M26 41 C25 19 45 11 60 15 C71 18 77 29 75 41 C68 31 58 27 52 31 C46 25 34 29 26 41 Z" fill="#3b3b3b" />
        <path d="M27 30 C36 13 64 9 74 26" fill="none" stroke="#1e9be0" strokeWidth="3.2" />

        <circle cx="32.5" cy="53" r="3.6" fill="#f6a5a5" stroke="none" opacity="0.75" />
        <circle cx="67.5" cy="53" r="3.6" fill="#f6a5a5" stroke="none" opacity="0.75" />

        <g className="mascot-eyes" stroke="none" fill="#222">
          <ellipse cx="39" cy="43.5" rx="2.3" ry="2.8" />
          <ellipse cx="61" cy="43.5" rx="2.3" ry="2.8" />
        </g>
        <g fill="rgba(255,255,255,0.2)" stroke="#1e9be0" strokeWidth="2.4">
          <rect x="30.5" y="37.5" width="17" height="12" rx="3" />
          <rect x="52.5" y="37.5" width="17" height="12" rx="3" />
          <path d="M47.5 42 L52.5 42 M30.5 41 L26 39.5 M69.5 41 L74 39.5" fill="none" />
        </g>
        <path d="M42 53.5 Q50 55 58 53.5 Q57 62.5 50 62.5 Q43 62.5 42 53.5 Z" fill="#fff" strokeWidth="1.6" />

        {carry && <path className="mascot-sweat" d="M22 26 C19 31 19 34 22 34 C25 34 25 31 22 26 Z" fill="#8cc4f5" strokeWidth="1.2" />}
      </g>
    </svg>
  );
}

function HideLink({ onHide }: { onHide: () => void }) {
  return (
    <button type="button" onClick={onHide} className="rounded-full px-3 py-1.5 text-xs text-muted hover:bg-sky-50">
      ซ่อนน้องๆ
    </button>
  );
}

/* ---------- ตัวที่ 1: เดินปกติ แนะนำสินค้า ---------- */
function Guide({ onHide }: { onHide: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const timer = useRef<number | undefined>(undefined);
  const next = useRef(0);
  const [tip, setTip] = useState<number | null>(null);
  const [place, setPlace] = useState<Place>({ h: "left", v: "up" });

  const present = useCallback(() => {
    paused.current = true;
    setPlace(placeOf(ref.current));
    setTip(next.current);
    next.current = (next.current + 1) % tips.length;
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => {
      setTip(null);
      paused.current = false;
    }, 6000);
  }, []);

  const arrive = useCallback(() => {
    if (Math.random() < 0.6) present();
  }, [present]);

  useEffect(() => () => window.clearTimeout(timer.current), []);
  useRoam(ref, paused, 55, 0.15, 0.85, arrive);

  const t = tip === null ? null : tips[tip];
  return (
    <div ref={ref} className={`mascot invisible ${t ? "is-hello" : ""}`} data-pose="walk" data-face="right" data-moving="true">
      {t && (
        <Bubble place={place}>
          <div className="flex items-center gap-3">
            <Image src={t.img} alt={t.name} width={46} loading="eager" className="h-auto w-[46px] shrink-0" />
            <div>
              <p className="text-xs text-muted">แนะนำสินค้าค่ะ ✨</p>
              <p className="font-semibold text-navy-900">{t.name}</p>
            </div>
          </div>
          <p className="mt-2 text-muted">{t.text}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#06C755] px-4 py-1.5 text-xs font-semibold text-white">
              สอบถามทางไลน์
            </a>
            <a href="#products" className="rounded-full border border-line px-3 py-1.5 text-xs font-medium text-navy-800">
              ดูสินค้า
            </a>
            <HideLink onHide={onHide} />
          </div>
        </Bubble>
      )}
      <button type="button" onClick={present} aria-label="มาสคอตแนะนำสินค้า กดเพื่อดูสินค้าแนะนำ" className="mascot-facer block w-14 cursor-pointer md:w-[72px]">
        <Girl />
      </button>
    </div>
  );
}

/* ---------- ตัวที่ 2: แบกตู้เย็น Z-Cool ---------- */
function Carrier({ onHide }: { onHide: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const [hello, setHello] = useState(false);
  const [place, setPlace] = useState<Place>({ h: "left", v: "up" });
  useRoam(ref, paused, 38, 0.8, 0.3);

  function toggle() {
    paused.current = !hello;
    setPlace(placeOf(ref.current));
    setHello(!hello);
  }

  return (
    <div ref={ref} className={`mascot invisible ${hello ? "is-hello" : ""}`} data-pose="carry" data-face="left" data-moving="true">
      {hello && (
        <Bubble place={place}>
          <p className="font-semibold text-navy-900">ตู้เย็น Z-Cool ของเราเองค่ะ 💪</p>
          <p className="mt-1 text-muted">ควบคุมอุณหภูมิ 2–8 °C สำหรับเก็บยา วัคซีน และน้ำยาตรวจ พร้อมเอกสาร Thermal Validation</p>
          <div className="mt-3 flex items-center gap-2">
            <a href={LINE_URL} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#06C755] px-4 py-1.5 text-xs font-semibold text-white">
              ขอใบเสนอราคา
            </a>
            <HideLink onHide={onHide} />
          </div>
        </Bubble>
      )}
      <button type="button" onClick={toggle} aria-label="มาสคอตแบกตู้เย็น Z-Cool กดเพื่อดูรายละเอียด" className="mascot-facer block w-[72px] cursor-pointer md:w-[92px]">
        <Girl carry />
      </button>
    </div>
  );
}

/* ---------- ตัวที่ 3: วิ่ง + เต้น แล้วตู้เย็นจิ๋วตกเป็นหิมะ ---------- */
function Dancer({ onSnow }: { onSnow: () => void }) {
  const ref = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const timer = useRef<number | undefined>(undefined);
  const [dancing, setDancing] = useState(false);
  useRoam(ref, paused, 110, 0.5, 0.6);

  const dance = useCallback(() => {
    if (paused.current) return;
    paused.current = true;
    setDancing(true);
    onSnow();
    timer.current = window.setTimeout(() => {
      setDancing(false);
      paused.current = false;
    }, 7000);
  }, [onSnow]);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const first = window.setTimeout(dance, 5000);
    const every = window.setInterval(dance, 24000);
    return () => {
      window.clearTimeout(first);
      window.clearInterval(every);
      window.clearTimeout(timer.current);
    };
  }, [dance]);

  return (
    <div ref={ref} className="mascot invisible" data-pose={dancing ? "dance" : "run"} data-face="right" data-moving="true">
      <button type="button" onClick={dance} aria-label="มาสคอตนักเต้น กดเพื่อให้เต้น" className="mascot-facer block w-14 cursor-pointer md:w-[72px]">
        <Girl />
      </button>
    </div>
  );
}

/* ---------- หิมะตู้เย็นจิ๋ว ---------- */
type Flake = { id: number; left: number; size: number; dur: number; delay: number; drift: number; spin: number };

function makeFlakes(count: number): Flake[] {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    left: Math.random() * 100,
    size: 14 + Math.random() * 18,
    dur: 4 + Math.random() * 3.5,
    delay: Math.random() * 3.5,
    drift: (Math.random() - 0.5) * 160,
    spin: (Math.random() - 0.5) * 540,
  }));
}

function FridgeSnow({ flakes }: { flakes: Flake[] }) {
  return (
    <div className="fridge-snow" aria-hidden="true">
      {flakes.map((f) => (
        <svg
          key={f.id}
          viewBox="0 0 40 70"
          className="fridge-flake"
          style={
            {
              left: `${f.left}%`,
              width: f.size,
              height: f.size * 1.75,
              animationDuration: `${f.dur}s`,
              animationDelay: `${f.delay}s`,
              "--drift": `${f.drift}px`,
              "--spin": `${f.spin}deg`,
            } as CSSProperties
          }
        >
          <FridgeShape />
        </svg>
      ))}
    </div>
  );
}

export default function Mascots() {
  const [hidden, setHidden] = useState(false);
  const [snow, setSnow] = useState<{ key: number; flakes: Flake[] } | null>(null);
  const snowTimer = useRef<number | undefined>(undefined);

  const startSnow = useCallback(() => {
    const flakes = makeFlakes(window.innerWidth < 768 ? 36 : 60);
    setSnow({ key: Date.now(), flakes });
    window.clearTimeout(snowTimer.current);
    snowTimer.current = window.setTimeout(() => setSnow(null), 11500);
  }, []);

  useEffect(() => () => window.clearTimeout(snowTimer.current), []);

  if (hidden) return null;
  const hide = () => setHidden(true);

  return (
    <>
      {snow && <FridgeSnow key={snow.key} flakes={snow.flakes} />}
      <Guide onHide={hide} />
      <Carrier onHide={hide} />
      <Dancer onSnow={startSnow} />
    </>
  );
}
