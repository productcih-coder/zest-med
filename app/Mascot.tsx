"use client";

import { useRef, useState } from "react";

const LINE_URL = "https://line.me/R/ti/p/@zestmed";

/* มาสคอตนักวิทยาศาสตร์สาว (วาดใหม่จากตัวการ์ตูนบนเว็บ zest-med.com) วิ่งเล่นด้านล่างจอ กดแล้วจะหยุดทักทาย */
export default function Mascot() {
  const runnerRef = useRef<HTMLDivElement>(null);
  const [hello, setHello] = useState(false);
  const [bubbleRight, setBubbleRight] = useState(false);
  const [hidden, setHidden] = useState(false);

  if (hidden) return null;

  function toggle() {
    const box = runnerRef.current?.getBoundingClientRect();
    if (box) setBubbleRight(box.left > window.innerWidth / 2);
    setHello((h) => !h);
  }

  return (
    <div className={`mascot-track ${hello ? "is-hello" : ""}`}>
      <div ref={runnerRef} className="mascot-runner">
        {hello && (
          <div
            className={`absolute bottom-full mb-2 w-56 rounded-2xl border border-line bg-white p-4 text-sm text-ink shadow-xl ${
              bubbleRight ? "right-0" : "left-0"
            }`}
          >
            <p className="font-semibold text-navy-900">สวัสดีค่ะ 👋</p>
            <p className="mt-1 text-muted">อยากได้ข้อมูลสินค้าหรือใบเสนอราคา ทักไลน์มาคุยกันได้เลยนะคะ</p>
            <div className="mt-3 flex items-center gap-2">
              <a
                href={LINE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#06C755] px-4 py-1.5 text-xs font-semibold text-white"
              >
                ทักไลน์เลย
              </a>
              <button
                type="button"
                onClick={() => setHidden(true)}
                className="rounded-full px-3 py-1.5 text-xs text-muted hover:bg-sky-50"
              >
                ซ่อนน้อง
              </button>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={toggle}
          aria-label="มาสคอต Zest-Med กดเพื่อทักทาย"
          className="mascot-facer block w-16 cursor-pointer md:w-20"
        >
          <svg viewBox="0 0 100 140" className="h-auto w-full overflow-visible" aria-hidden="true">
            <ellipse className="mascot-shadow" cx="50" cy="134" rx="22" ry="4" fill="rgba(6,20,40,0.15)" />

            <g className="mascot-bob" stroke="#2f2f2f" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round">
              {/* หางม้า */}
              <path
                className="mascot-tail"
                d="M64 14 C84 6 97 22 89 40 C85 50 91 56 84 61 C80 50 72 40 69 26 Z"
                fill="#3b3b3b"
              />

              {/* ขา */}
              <g className="mascot-leg-l">
                <rect x="41" y="102" width="6" height="23" rx="3" fill="#fbe1cc" />
                <ellipse cx="44" cy="127" rx="6.5" ry="3.5" fill="#aab1b9" />
              </g>
              <g className="mascot-leg-r">
                <rect x="53" y="102" width="6" height="23" rx="3" fill="#fbe1cc" />
                <ellipse cx="56" cy="127" rx="6.5" ry="3.5" fill="#aab1b9" />
              </g>

              {/* ชุดสีฟ้าด้านใน */}
              <path d="M43 66 L57 66 L62 110 L38 110 Z" fill="#bfe0f5" />


              {/* เสื้อกาวน์ */}
              <path d="M37 67 Q30 71 30 80 L26 110 Q35 114 47 112 L48 69 Z" fill="#fff" />
              <path d="M63 67 Q70 71 70 80 L74 110 Q65 114 53 112 L52 69 Z" fill="#fff" />
              <path d="M44 67 L48 78 L50 70 L52 78 L56 67" fill="none" />
              <rect x="31" y="93" width="11" height="9" rx="1.5" fill="none" strokeWidth="1.6" />
              <rect x="58" y="93" width="11" height="9" rx="1.5" fill="none" strokeWidth="1.6" />
              <rect x="58.5" y="78" width="5" height="4" rx="0.8" fill="#1e9be0" stroke="none" />

              {/* แขนซ้าย */}
              <g className="mascot-arm-l">
                <rect x="29" y="69" width="9" height="22" rx="4.5" fill="#fff" />
                <circle cx="33.5" cy="93" r="4" fill="#fbe1cc" />
              </g>
              {/* แขนขวา (โบกมือ) */}
              <g className="mascot-arm-r">
                <rect x="62" y="69" width="9" height="22" rx="4.5" fill="#fff" />
                <circle cx="66.5" cy="93" r="4" fill="#fbe1cc" />
              </g>

              {/* คอ + หัว */}
              <rect x="46" y="60" width="8" height="9" fill="#fbe1cc" stroke="none" />
              <circle cx="50" cy="40" r="28" fill="#3b3b3b" />
              <ellipse cx="50" cy="44" rx="24" ry="22.5" fill="#fbe1cc" />
              <path
                d="M26 41 C25 19 45 11 60 15 C71 18 77 29 75 41 C68 31 58 27 52 31 C46 25 34 29 26 41 Z"
                fill="#3b3b3b"
              />
              <path d="M27 30 C36 13 64 9 74 26" fill="none" stroke="#1e9be0" strokeWidth="3.2" />

              {/* แก้มแดง */}
              <circle cx="32.5" cy="53" r="3.6" fill="#f6a5a5" stroke="none" opacity="0.75" />
              <circle cx="67.5" cy="53" r="3.6" fill="#f6a5a5" stroke="none" opacity="0.75" />

              {/* ตา (กะพริบ) */}
              <g className="mascot-eyes" stroke="none" fill="#222">
                <ellipse cx="39" cy="43.5" rx="2.3" ry="2.8" />
                <ellipse cx="61" cy="43.5" rx="2.3" ry="2.8" />
              </g>

              {/* แว่นสีฟ้า */}
              <g fill="rgba(255,255,255,0.2)" stroke="#1e9be0" strokeWidth="2.4">
                <rect x="30.5" y="37.5" width="17" height="12" rx="3" />
                <rect x="52.5" y="37.5" width="17" height="12" rx="3" />
                <path d="M47.5 42 L52.5 42 M30.5 41 L26 39.5 M69.5 41 L74 39.5" fill="none" />
              </g>

              {/* ยิ้มกว้าง */}
              <path d="M42 53.5 Q50 55 58 53.5 Q57 62.5 50 62.5 Q43 62.5 42 53.5 Z" fill="#fff" strokeWidth="1.6" />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
}
