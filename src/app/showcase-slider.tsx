"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Slide = { title: string; img: string; w?: number; h?: number };

/** Slides (prints de depoimento): um por vez, com setas e arrasto. */
export default function ShowcaseSlider({
  slides,
  imgBase,
  altPrefix,
  imgClassName = "w-full",
}: {
  slides: Slide[];
  imgBase: string;
  altPrefix: string;
  imgClassName?: string;
}) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const track = trackRef.current;
    if (!track) return;
    const next = (i + slides.length) % slides.length;
    track.scrollTo({ left: next * track.clientWidth, behavior: "smooth" });
  };

  const onScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    setIndex(Math.round(track.scrollLeft / track.clientWidth));
  };

  return (
    <div className="relative">
      <div ref={trackRef} onScroll={onScroll} className="showcase-track">
        {slides.map((s, i) => (
          <div key={s.img} className="showcase-slide">
            <Image
              src={`${imgBase}/${s.img}`}
              alt={`${altPrefix}: ${s.title}`}
              width={s.w ?? 1054}
              height={s.h ?? 1492}
              sizes="(min-width: 640px) 500px, 100vw"
              loading="eager"
              className={`mx-auto h-auto rounded-[16px] bg-white shadow-[0_8px_18px_rgba(70,8,25,0.22)] ${imgClassName}`}
            />
            <span className="sr-only">
              Testimonio {i + 1} de {slides.length}
            </span>
          </div>
        ))}
      </div>

      <button type="button" aria-label="Anterior" onClick={() => goTo(index - 1)} className="showcase-arrow left-1 sm:-left-6">
        <ChevronLeft className="h-7 w-7" strokeWidth={3} />
      </button>
      <button type="button" aria-label="Siguiente" onClick={() => goTo(index + 1)} className="showcase-arrow right-1 sm:-right-6">
        <ChevronRight className="h-7 w-7" strokeWidth={3} />
      </button>

      <p className="mt-4 text-center text-sm font-bold text-sp-ink-soft">
        {index + 1} / {slides.length}
      </p>
    </div>
  );
}
