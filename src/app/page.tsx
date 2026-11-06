import Image from "next/image";
import type { ReactNode } from "react";
import ShowcaseSlider from "./showcase-slider";
import { Check, ChevronsDown, Gift, Minus, Plus, ShieldCheck, X } from "lucide-react";

const IMG = "/assets";
// Preço e checkout desta página (cada página tem os seus). OLD_PRICE null = sem preço riscado.
const CURRENCY = "$";
const PRICE = "18.900";
const OLD_PRICE: string | null = "37.800";
// TODO(Luan): link de checkout desta página ainda não enviado. Enquanto isso o botão leva à oferta.
const CHECKOUT = "#offer";
const display = "font-display";

/** "37.800" e "18.900" → 50 (o ponto é separador de milhar). */
function discountPercent(from: string, to: string) {
  const n = (v: string) => Number(v.replace(/\./g, "").replace(",", "."));
  return Math.round((1 - n(to) / n(from)) * 100);
}

/* ------------------------------------------------------------------ */
/* Conteúdo                                                            */
/* ------------------------------------------------------------------ */

const AUTHOR = "Juliana Duarte";
const MAIN_PRODUCT = "Guía de Bordado Ruso";
const MAIN_PRODUCT_FULL = "Guía para aprender Bordado Ruso desde cero";
const MAIN_MOCKUP = { img: "mockup-principal.png", w: 1200, h: 800 };

const HERO_BULLETS = ["Acceso inmediato por e-mail y WhatsApp", "Más de 100 moldes listos para usar", "Garantía de 14 días"];

// Mesmas peças do carrossel da página de referência.
const HERO_RESULTS = [
  { img: "hero-1.jpg", alt: "Cuadro con textura y relieve" },
  { img: "hero-2.jpg", alt: "Almohadón de bordado ruso" },
  { img: "hero-3.jpg", alt: "Bolso personalizado" },
  { img: "hero-4.jpg", alt: "Diseño infantil personalizado" },
  { img: "hero-5.jpg", alt: "Posavasos, llaveros y souvenirs" },
  { img: "hero-6.jpg", alt: "Nombre bordado personalizado" },
  { img: "hero-7.jpg", alt: "Pieza de bordado ruso" },
  { img: "hero-8.jpg", alt: "Pieza de bordado ruso" },
];

const IDENTIFIED = [
  {
    title: "Pensás que necesitás saber dibujar",
    text: "Ves diseños que te encantan, pero no sabés cómo llevarlos a la tela.",
  },
  {
    title: "No sabés dónde comprar los materiales",
    text: "No sabés qué comprar y temés gastar de más en materiales que no necesitás.",
  },
  {
    title: "Arrancás y abandonás por falta de claridad",
    text: "Los tutoriales sueltos te confunden y terminás trabándote en los primeros pasos.",
  },
  {
    title: "Querés generar ingresos, pero no sabés por dónde empezar",
    text: "Querés vender tus creaciones, pero no sabés qué piezas hacer ni cómo comenzar.",
  },
];

// Mesma ordem da referência: videos → materiales → moldes → ideas, com mais detalhe em cada etapa.
const INCLUDES = [
  "Videos claros paso a paso para aprender Bordado Ruso desde cero, siguiendo cada técnica en orden, desde la primera puntada hasta la terminación.",
  "Cómo usar la herramienta especial de bordado ruso, para que tus puntadas queden parejas y con relieve desde las primeras piezas.",
  "Qué materiales necesitás y dónde comprarlos para gastar muy poco, en tu ciudad o por internet, sin pagar por cosas que no vas a usar.",
  "Más de 100 moldes listos para imprimir: imprimí, transferí a la tela y empezá, sin necesidad de saber dibujar.",
  "Cómo lograr terminaciones profesionales, para que cada pieza quede prolija y lista para regalar o vender.",
  "Ideas para crear cuadros, almohadones, bolsos, souvenirs y piezas personalizadas para regalar, decorar tu casa o vender.",
  "Un Excel de costos para calcular a qué precio vender cada pieza, si decidís convertir este hobby en una fuente de ingresos.",
  "Soporte por WhatsApp con Juliana para resolver tus dudas mientras aprendés.",
  "Certificado de finalización al completar la guía, para reconocer todo lo que aprendiste.",
  "Acceso desde el celular, la tablet o la computadora, para aprender a tu ritmo y desde donde quieras.",
];

const TRUST_BADGES = [
  { label: "Garantía de 14 Días", icon: null },
  { label: "Acceso Inmediato", icon: "icone-acesso.png" },
  { label: "Soporte por WhatsApp", icon: "icone-suporte.png" },
  { label: "Satisfacción Garantizada", icon: "icone-satisfacao.png" },
  { label: "Compra 100% Segura", icon: "icone-compra-segura.png" },
];

// Bônus da referência sem o antigo bônus 3 (tutoriais), com os mockups desta página.
const BONUSES = [
  {
    title: "+100 Moldes Creativos Listos para Imprimir",
    text: "Diseños listos para imprimir y transferir a la tela, para que empieces a bordar sin saber dibujar.",
    img: "bono-1-moldes.png",
    w: 1000,
    h: 1000,
    price: "$9.900",
  },
  {
    title: "Guía paso a paso para conseguir los materiales económicos",
    text: "Qué comprar y dónde conseguirlo sin gastar de más.",
    img: "bono-2-materiales.png",
    w: 1000,
    h: 1000,
    price: "$8.900",
  },
  {
    title: "Excel de Costos: calculá a qué precio vender",
    text: "Para saber cuánto cobrar por cada pieza si decidís vender.",
    img: "bono-3-excel.png",
    w: 1000,
    h: 1000,
    price: "$6.900",
  },
  {
    title: "Certificado de finalización de la Guía de Bordado Ruso",
    text: "Recibí tu certificado al completar la formación y reconocé todo lo que aprendiste.",
    img: "bono-4-certificado.jpg",
    w: 1200,
    h: 800,
    price: "$9.900",
  },
];

const WHY = [
  "Un método paso a paso y en orden, para que sepas exactamente qué hacer desde la primera puntada hasta la pieza terminada.",
  "Videos claros donde ves cada movimiento de cerca, sin teoría que nunca vas a usar.",
  "Más de 100 moldes listos, para que empieces a crear sin saber dibujar.",
  "Una guía de materiales económicos, para empezar sin gastar de más.",
  "Ideas de piezas y un Excel de costos, para que sepas qué hacer y a qué precio venderlo si decidís vender.",
];

const FOR_WHOM = [
  "Quien quiere aprender Bordado Ruso desde cero, sin ninguna experiencia.",
  "Quien cree que necesita saber dibujar para crear piezas lindas.",
  "Quien ya probó con tutoriales sueltos y terminó abandonando.",
  "Quien busca un hobby que también pueda convertirse en una fuente de ingresos.",
  "Quien quiere crear piezas para regalar, decorar su casa o vender desde casa.",
];

const PROOFS = [
  { title: "Mensaje de una alumna", img: "prueba-1.jpg", w: 843, h: 1866 },
  { title: "Mensaje de una alumna", img: "prueba-2.jpg", w: 853, h: 1761 },
  { title: "Mensaje de una alumna", img: "prueba-3.jpg", w: 853, h: 1844 },
  { title: "Mensaje de una alumna", img: "prueba-4.jpg", w: 853, h: 1755 },
  { title: "Mensaje de una alumna", img: "prueba-5.jpg", w: 852, h: 1757 },
  { title: "Mensaje de una alumna", img: "prueba-6.jpg", w: 857, h: 1835 },
];

const OFFER_ITEMS = [
  MAIN_PRODUCT_FULL,
  "Videos prácticos paso a paso",
  `Soporte por WhatsApp con ${AUTHOR.split(" ")[0]} para resolver tus dudas`,
  ...BONUSES.map((b) => `Bono: ${b.title}`),
  "Acceso desde el celular, la tablet o la computadora",
  "Acceso inmediato por e-mail y WhatsApp",
];

const FAQ: { q: string; a: ReactNode }[] = [
  {
    q: "¿Cómo recibo el acceso?",
    a: (
      <>
        Apenas se confirma el pago, <strong>recibís todo automáticamente</strong> en tu e-mail y en tu WhatsApp.
        <br />
        No tenés que enviar comprobante ni hacer nada más. Solo revisá que escribiste bien tu e-mail y tu WhatsApp en
        el momento de la compra.
      </>
    ),
  },
  {
    q: "¿Es un producto físico?",
    a: (
      <>
        No. Es un <strong>producto digital</strong>: recibís el acceso a los videos, la guía y los bonos después de
        confirmarse el pago.
      </>
    ),
  },
  {
    q: "¿Necesito experiencia para empezar?",
    a: (
      <>
        No. El método fue pensado <strong>para principiantes</strong> y explica la técnica desde cero.
      </>
    ),
  },
  {
    q: "¿Los materiales son difíciles de conseguir?",
    a: (
      <>
        No. La herramienta especial para bordado ruso y el resto de los materiales son{" "}
        <strong>económicos y fáciles de conseguir</strong>. Dentro del método vas a encontrar una guía simple para saber
        qué comprar sin gastar de más.
      </>
    ),
  },
  {
    q: "¿Puedo verlo desde el celular?",
    a: (
      <>
        Sí. Podés acceder desde <strong>el celular, una tablet o la computadora</strong>.
      </>
    ),
  },
  {
    q: "¿Puedo vender las piezas que haga?",
    a: (
      <>
        Sí. Podés crear para uso personal, regalar o vender. Los resultados económicos dependen de cada persona y de
        cómo comercialice sus piezas.
      </>
    ),
  },
  {
    q: "¿Tiene garantía?",
    a: (
      <>
        ¡Claro!
        <br />
        Tenés <strong>14 días de garantía incondicional</strong>. Si por cualquier motivo no es lo que esperabas, pedís
        el reembolso total. Sin vueltas y sin preguntas.
      </>
    ),
  },
];

/* ------------------------------------------------------------------ */
/* Peças de clay                                                       */
/* ------------------------------------------------------------------ */

/** Seção cereja; o topo branco vem de .sp-slab-top, .sp-split ou .sp-inside-top dentro dela. */
function CherrySlab({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`sp-slab relative w-full overflow-hidden pb-14 text-white ${className}`}>
      <div className="relative z-10">{children}</div>
    </section>
  );
}

/** Seção clara: equivale às seções de fundo branco da página original. */
function LightSection({ id, className = "", children }: { id?: string; className?: string; children: ReactNode }) {
  return (
    <section id={id} className={`relative w-full py-16 ${className}`}>
      {children}
    </section>
  );
}

function Container({ className = "", children }: { className?: string; children: ReactNode }) {
  return <div className={`mx-auto w-full max-w-[680px] px-4 sm:px-6 ${className}`}>{children}</div>;
}

/**
 * Grifo das headlines: faixa sólida com carimbo preto.
 * on="light" → faixa cereja, letras brancas (sobre branco); on="orange" → faixa branca, letras pretas (sobre cereja).
 */
function Mark({ on, children }: { on: "light" | "orange"; children: ReactNode }) {
  return <span className={`sp-mark ${on === "orange" ? "sp-mark--on-orange" : ""}`}>{children}</span>;
}

/** Destaque dentro de parágrafos sobre o cereja: chip branco discreto. */
function SoftMark({ children }: { children: ReactNode }) {
  return <span className="sp-mark-soft">{children}</span>;
}

function CheckOrb({ size = "md" }: { size?: "sm" | "md" }) {
  const dims = size === "sm" ? "h-6 w-6" : "h-7 w-7";
  return (
    <span
      className={`clay-orb inline-flex ${dims} shrink-0 items-center justify-center rounded-full bg-sp-go text-white`}
    >
      <Check className={size === "sm" ? "h-3.5 w-3.5" : "h-4 w-4"} strokeWidth={3.5} />
    </span>
  );
}

function CheckList({ items, onRed = false, className = "" }: { items: string[]; onRed?: boolean; className?: string }) {
  return (
    <ul className={`flex flex-col gap-3.5 ${className}`}>
      {items.map((item) => (
        <li key={item} className="flex items-start gap-3">
          <CheckOrb />
          <span
            className={`pt-0.5 text-base font-medium leading-relaxed ${onRed ? "text-white" : "text-ink"}`}
          >
            {item}
          </span>
        </li>
      ))}
    </ul>
  );
}

function CtaButton({ href, children, className = "" }: { href: string; children: ReactNode; className?: string }) {
  return (
    <a
      href={href}
      className={`clay-button ${display} inline-flex min-h-14 w-full items-center justify-center rounded-[6px] px-8 py-3 text-center text-lg font-extrabold sm:w-auto sm:text-xl ${className}`}
    >
      {children}
    </a>
  );
}

function IconOrb({ children, tone = "red" }: { children: ReactNode; tone?: "red" | "white" }) {
  const toneClass =
    tone === "red"
      ? "bg-gradient-to-br from-sp-400 to-sp-600 text-white"
      : "bg-gradient-to-br from-white to-sp-cream text-sp-600";
  return (
    <span className={`clay-orb inline-flex h-16 w-16 items-center justify-center rounded-full ${toneClass}`}>
      {children}
    </span>
  );
}

/** tone="dark" → preto profundo (fundo branco); tone="light" → branco (fundo cereja). */
function SectionTitle({ children, tone = "dark", className = "" }: { children: ReactNode; tone?: "dark" | "light"; className?: string }) {
  return (
    <h2
      className={`${display} text-center text-3xl font-black leading-[1.1] tracking-tight sm:text-4xl md:text-5xl ${
        tone === "light" ? "sp-title--light" : "sp-title--dark"
      } ${className}`}
    >
      {children}
    </h2>
  );
}

function Kicker({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <p className={`${display} text-balance text-center text-sm font-black uppercase tracking-[0.2em] text-sp-500 ${className}`}>
      {children}
    </p>
  );
}

/** Mockup principal: PNG com fundo transparente, mostrado direto, sem caixa atrás. */
function MainMockup({ priority = false, className = "" }: { priority?: boolean; className?: string }) {
  return (
    <Image
      src={`${IMG}/${MAIN_MOCKUP.img}`}
      alt="Piezas de bordado ruso: almohadón, bolso, fundas y monederos"
      width={MAIN_MOCKUP.w}
      height={MAIN_MOCKUP.h}
      priority={priority}
      sizes="(min-width: 700px) 640px, 100vw"
      className={`mx-auto w-full ${className}`}
    />
  );
}

/* ------------------------------------------------------------------ */
/* Página                                                              */
/* ------------------------------------------------------------------ */

export default function BordadoRusoPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      {/* Blobs de fundo (luz ambiente do canvas) */}
      <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-[10%] -top-[10%] h-[60vh] w-[60vh] rounded-full bg-sp-500/10 blur-3xl" />
        <div className="absolute -right-[10%] top-[20%] h-[60vh] w-[60vh] rounded-full bg-sp-400/10 blur-3xl" />
      </div>

      {/* Barra promocional fixa */}
      <div className="fixed inset-x-0 top-0 z-50">
        <div
          className={`${display} flex h-11 w-full items-center justify-center gap-1.5 sp-topbar px-3 text-center text-[13px] font-extrabold text-white min-[400px]:text-[15px] sm:tracking-wide`}
        >
          {OLD_PRICE ? `¡${discountPercent(OLD_PRICE, PRICE)}% de descuento solo` : "¡Oferta especial solo"}
          <span className="animate-clay-blink rounded-full bg-white px-2.5 py-0.5 text-sp-600 underline underline-offset-2">
            HOY
          </span>
          en esta página!
        </div>
      </div>

      <main className="flex flex-col pt-11">
        {/* 1 · HERO: mesma estrutura da referência (autora, headline, subheadline e carrossel de peças) */}
        <CherrySlab>
          <div className="sp-slab-top pb-4 pt-6 sm:pt-12">
            <Container className="flex flex-col items-center text-center">
              <span className="sp-author">
                <Image
                  src={`${IMG}/juliana-avatar.jpg`}
                  alt={AUTHOR}
                  width={240}
                  height={240}
                  priority
                  className="h-11 w-11 rounded-full object-cover"
                />
                <span className="flex flex-col leading-tight">
                  <strong className={`${display} text-[15px] font-extrabold text-sp-ink`}>{AUTHOR}</strong>
                  <span className="text-xs font-bold text-sp-ink-soft">Especialista en Bordado Ruso</span>
                </span>
              </span>

              <h1 className={`${display} sp-hero-title mt-6`}>
                Aprendé Bordado Ruso desde cero y convertí{" "}
                <span className="sp-hero-accent">este hobby en una nueva fuente de ingresos</span>
              </h1>

              <p className="mt-6 text-lg font-medium leading-relaxed text-sp-ink-soft sm:text-xl">
                Creá piezas con <strong className="font-extrabold text-sp-ink">terminaciones profesionales y listas para vender</strong>,
                siguiendo <strong className="font-extrabold text-sp-ink">videos paso a paso</strong> y más de{" "}
                <strong className="font-extrabold text-sp-ink">100 moldes listos para usar</strong>. Empezá sin experiencia, sin
                saber dibujar y sin necesitar materiales caros.
              </p>
            </Container>
          </div>

          {/* A onda passa atrás do meio do carrossel. */}
          <div className="sp-split" aria-label="Ejemplos de piezas de bordado ruso">
            <div className="sp-rail">
              <div className="sp-rail-track">
                {[0, 1].map((group) => (
                  <div key={group} className="sp-rail-group" aria-hidden={group === 1 ? true : undefined}>
                    {HERO_RESULTS.map((r) => (
                      <figure key={r.img} className="sp-rail-card m-0">
                        <Image
                          src={`${IMG}/${r.img}`}
                          alt={group === 0 ? r.alt : ""}
                          width={800}
                          height={1000}
                          sizes="230px"
                          priority={group === 0}
                        />
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <Container className="flex flex-col items-center pt-6 text-center">
            <CheckList items={HERO_BULLETS} onRed className="w-full text-left" />

            <CtaButton href="#offer" className="mt-10">
              ¡Sí, quiero empezar!
            </CtaButton>
          </Container>
        </CherrySlab>

        {/* 2 · ¿Te sentís identificado? */}
        <LightSection>
          <Container>
            <SectionTitle>
              ¿Te sentís <Mark on="light">identificado?</Mark>
            </SectionTitle>
            <p className="mt-6 text-center text-lg font-medium leading-relaxed text-sp-ink-soft">
              Si alguna de estas situaciones te resulta familiar, esta guía es para vos.
            </p>

            <div className="mt-10 flex flex-col gap-5">
              {IDENTIFIED.map((item) => (
                <article key={item.title} className="clay-card flex items-start gap-4 rounded-[24px] p-5">
                  <span className="sp-x clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full">
                    <X className="h-5 w-5" strokeWidth={3.5} />
                  </span>
                  <div>
                    <h3 className={`${display} text-lg font-extrabold leading-snug text-sp-ink`}>{item.title}</h3>
                    <p className="mt-1 text-base font-medium leading-relaxed text-muted">{item.text}</p>
                  </div>
                </article>
              ))}
            </div>

            <p className="sp-note mt-10">Si respondiste “sí” a alguna de estas situaciones, tenemos la solución.</p>
          </Container>
        </LightSection>

        {/* 3 · Tudo o que vem */}
        <LightSection className="pt-0">
          <Container>
            <SectionTitle>
              Mirá todo lo que vas a encontrar <Mark on="light">adentro</Mark>
            </SectionTitle>
            <p className="mt-6 text-center text-lg font-medium leading-relaxed text-sp-ink-soft">
              Todo lo que necesitás para aprender desde cero y crear tus primeras piezas, aunque nunca hayas bordado.
            </p>

            <CheckList items={INCLUDES} className="mt-10" />
          </Container>
        </LightSection>

        {/* 4 · Selos de confiança */}
        <LightSection className="pt-0">
          <Container className="grid grid-cols-1 gap-5">
            {TRUST_BADGES.map((badge) => (
              <div key={badge.label} className="clay-card flex flex-col items-center gap-3 rounded-[32px] px-6 py-6 text-center">
                {badge.icon ? (
                  <Image src={`${IMG}/${badge.icon}`} alt="" width={512} height={512} className="h-[84px] w-[84px]" />
                ) : (
                  <span className="clay-orb inline-flex h-[84px] w-[84px] items-center justify-center rounded-full bg-sp-go text-white">
                    <Check className="h-11 w-11" strokeWidth={3.5} />
                  </span>
                )}
                <span className={`${display} text-2xl font-extrabold text-ink`}>{badge.label}</span>
              </div>
            ))}
          </Container>
        </LightSection>

        {/* 5 · Bônus */}
        <CherrySlab id="bonos">
          <div className="sp-inside-top pt-14">
            <Container>
              <Kicker>Recursos que acompañan tu curso</Kicker>
              <SectionTitle className="mt-3">
                <Mark on="light">4 BONOS EXCLUSIVOS</Mark> para ayudarte a crear desde el primer día
              </SectionTitle>
              <div className="mt-8 flex justify-center">
                <IconOrb>
                  <Gift className="h-8 w-8" strokeWidth={2.5} />
                </IconOrb>
              </div>
            </Container>
          </div>

          <Container>
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center">
              <h2 className={`${display} text-3xl font-black leading-[1.15] tracking-tight text-white sm:text-4xl md:text-5xl`}>
                ASEGURANDO <Mark on="orange">HOY</Mark> TAMBIÉN RECIBÍS
              </h2>
              <IconOrb tone="white">
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <p className="mt-10 text-center text-lg font-medium leading-relaxed text-white/95">
              Además de la guía, te llevás <SoftMark>4 bonos exclusivos</SoftMark> que facilitan cada etapa: moldes para
              empezar sin dibujar, materiales económicos, el cálculo del precio de venta y tu certificado.
            </p>

            <div className="mt-10 flex flex-col gap-8">
              {BONUSES.map((b, i) => (
                <article key={b.title} className="clay-red-card flex flex-col gap-5 rounded-[32px] p-4 pb-8 text-center sm:p-8">
                  <p className={`${display} text-sm font-black uppercase tracking-[0.2em] text-white/80`}>Bono {i + 1}</p>
                  <Image
                    src={`${IMG}/${b.img}`}
                    alt={b.title}
                    width={b.w}
                    height={b.h}
                    sizes="(min-width: 700px) 600px, 92vw"
                    className="mx-auto w-full rounded-[16px]"
                  />
                  <h3 className={`${display} px-2 text-2xl font-extrabold leading-tight text-white`}>{b.title}</h3>
                  <p className="px-2 text-base font-medium leading-relaxed text-white/90">{b.text}</p>
                  <BonusPrice price={b.price} />
                </article>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offer">¡Quiero la guía!</CtaButton>
            </div>
          </Container>
        </CherrySlab>

        {/* 6 · ¿Por qué? + ¿Para quién? */}
        <CherrySlab>
          <div className="sp-slab-top pt-14">
            <Container>
              <SectionTitle>
                Por qué la <Mark on="light">{MAIN_PRODUCT}</Mark> va a ser tu paso a paso hasta tus primeras piezas
              </SectionTitle>
            </Container>
          </div>

          <div className="sp-split sp-split--b pt-8">
            <Container>
              <MainMockup />
            </Container>
          </div>

          <Container>
            <div className="clay-red-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={WHY} onRed />
            </div>

            <SectionTitle tone="light" className="mt-14">
              ¿Para quién es la guía?
            </SectionTitle>

            <div className="clay-red-card mt-10 rounded-[32px] p-6 sm:p-8">
              <CheckList items={FOR_WHOM} onRed />
            </div>
          </Container>
        </CherrySlab>

        {/* 7 · Depoimentos (mesmos prints da referência), logo acima da oferta */}
        <LightSection>
          <Container>
            <Kicker>Ellas ya se animaron</Kicker>
            <SectionTitle className="mt-3">
              Empezaron <Mark on="light">desde cero</Mark>
            </SectionTitle>
            <p className="mt-6 text-center text-lg font-medium leading-relaxed text-sp-ink-soft">
              Mirá los mensajes de alumnas que se animaron a crear, mostrar sus trabajos y empezar a recibir sus primeros
              pedidos.
            </p>
            <p className="mt-3 text-center text-lg font-bold text-sp-ink-soft">Deslizá para ver más →</p>
          </Container>
          <div className="mx-auto mt-8 w-full max-w-[600px] px-1.5 sm:px-10">
            <ShowcaseSlider
              slides={PROOFS}
              imgBase={IMG}
              altPrefix="Experiencia de una alumna"
              imgClassName="w-[min(78%,340px)]"
            />
          </div>
          <Container className="mt-8 flex justify-center">
            <CtaButton href="#offer">¡Yo también quiero empezar!</CtaButton>
          </Container>
        </LightSection>

        {/* 8 · Oferta */}
        <LightSection id="offer" className="scroll-mt-20 pt-4">
          <Container>
            <SectionTitle>TENEMOS ALGO ESPECIAL PARA VOS</SectionTitle>
            <div className="mt-8 flex justify-center">
              <IconOrb>
                <ChevronsDown className="h-8 w-8" strokeWidth={3} />
              </IconOrb>
            </div>

            <OfferCard
              badge="🌟 Más Vendido"
              tier="PAQUETE COMPLETO"
              items={OFFER_ITEMS}
              oldPrice={OLD_PRICE}
              price={PRICE}
              href={CHECKOUT}
              className="mt-14"
            />
          </Container>
        </LightSection>

        {/* 9 · Garantia */}
        <CherrySlab className="pt-0">
          <div className="sp-inside-top pt-6" />
          <Container className="-mt-24 sm:-mt-36 lg:-mt-40">
            <div className="clay-red-card flex flex-col items-center gap-6 rounded-[48px] px-6 py-10 text-center sm:px-10">
              <span className="clay-orb inline-flex h-[120px] w-[120px] items-center justify-center rounded-full bg-sp-go text-white">
                <ShieldCheck className="h-16 w-16" strokeWidth={2.25} />
              </span>
              <h2 className={`${display} text-3xl font-black tracking-tight sm:text-4xl sp-title--light`}>GARANTÍA DE 14 DÍAS</h2>
              <p className="text-lg font-medium leading-relaxed text-white/95">
                Comprá con total tranquilidad. Después de confirmada la compra, tenés 14 días para ver los videos, revisar
                cada material y, si sentís que no es lo que esperabas, pedir el reembolso total, sin vueltas.
              </p>
              <CtaButton href={CHECKOUT} className="sm:min-w-[320px]">
                Comprar ahora
              </CtaButton>
            </div>
          </Container>
        </CherrySlab>

        {/* 10 · Quem sou eu (copy da referência, com a Juliana) */}
        <LightSection>
          <Container>
            <div className="clay-card overflow-hidden rounded-[40px]">
              <div className="bg-gradient-to-b from-sp-cream to-white px-6 pt-8">
                <Image
                  src={`${IMG}/juliana.png`}
                  alt={AUTHOR}
                  width={900}
                  height={1125}
                  sizes="(min-width: 700px) 420px, 80vw"
                  className="mx-auto w-[min(82%,420px)]"
                />
              </div>
              <div className="px-6 pb-10 pt-8 sm:px-10">
                <Kicker>Un mensaje de Juliana</Kicker>
                <SectionTitle className="mt-3">
                  Creé este método para que <Mark on="light">empezar te resulte simple</Mark>
                </SectionTitle>
                <div className="mt-6 flex flex-col gap-4 text-lg font-medium leading-relaxed text-sp-ink-soft">
                  <p>
                    Cuando empecé, no encontraba una guía que reuniera en un solo lugar los materiales correctos, la técnica
                    y las terminaciones. El Bordado Ruso es sencillo, pero sin una explicación clara puede parecer mucho más
                    difícil de lo que realmente es.
                  </p>
                  <p>
                    Por eso organicé este método paso a paso: para acompañarte desde tu primera puntada y ayudarte a crear
                    tus propias piezas con seguridad.
                  </p>
                </div>
                <div className="mt-8 border-t border-sp-cream pt-5">
                  <p className={`${display} text-2xl font-black text-sp-ink`}>{AUTHOR}</p>
                  <p className="mt-1 text-sm font-bold text-sp-500">Profesora de bordado ruso y creadora del método</p>
                </div>
              </div>
            </div>
          </Container>
        </LightSection>

        {/* 11 · FAQ */}
        <LightSection className="pt-0">
          <Container>
            <div className="text-center">
              <p className={`${display} clay-text-gradient text-7xl font-black leading-none tracking-tight sm:text-8xl`}>FAQ</p>
              <h2 className={`${display} mt-3 text-2xl font-black tracking-wide sp-title--dark sm:text-3xl`}>
                PREGUNTAS FRECUENTES
              </h2>
            </div>

            <div className="mt-10 flex flex-col gap-5">
              {FAQ.map((item, i) => (
                <details
                  key={item.q}
                  open={i === 0}
                  className="clay-faq clay-card group rounded-[24px] px-5 py-1 hover:-translate-y-1"
                >
                  <summary className="flex min-h-16 cursor-pointer items-center gap-4 py-3">
                    <span className="clay-orb inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-sp-400 to-sp-600 text-white">
                      <Plus className="faq-icon-closed h-5 w-5" strokeWidth={3} />
                      <Minus className="faq-icon-open h-5 w-5" strokeWidth={3} />
                    </span>
                    <span className={`${display} text-left text-lg font-extrabold leading-snug text-ink`}>{item.q}</span>
                  </summary>
                  <div className="pb-5 pl-14 pr-1 text-base font-medium leading-relaxed text-muted [&_strong]:font-bold [&_strong]:text-ink">
                    {item.a}
                  </div>
                </details>
              ))}
            </div>

            <div className="mt-12 flex justify-center">
              <CtaButton href="#offer" className="sm:min-w-[320px]">
                Comprar ahora
              </CtaButton>
            </div>
          </Container>
        </LightSection>

        {/* 12 · Rodapé */}
        <footer className="pb-6 text-center text-[13px]">
          <div className="font-medium">
            <a href="link-para-politica.html" className="mx-2.5 text-sp-link hover:underline">
              Política de Privacidad
            </a>
            <span className="text-muted">|</span>
            <a href="link-para-termos.html" className="mx-2.5 text-sp-link hover:underline">
              Términos de Uso
            </a>
          </div>
          <p className="mx-auto mt-4 max-w-[560px] px-4 text-muted">
            Producto digital. Las imágenes de piezas son ilustrativas.
          </p>
          <p className="mt-2 text-muted">© 2026 Todos los derechos reservados.</p>
        </footer>
      </main>
    </div>
  );
}

/** Card do pacote completo: topo branco com o título e o mockup na fronteira com o cereja. */
function OfferCard({
  badge,
  tier,
  items,
  oldPrice,
  price,
  href,
  className = "",
}: {
  badge?: string;
  tier: string;
  items: string[];
  oldPrice: string | null;
  price: string;
  href: string;
  className?: string;
}) {
  return (
    <div className={`relative ${className}`}>
      {badge && (
        <div className="absolute -top-5 left-1/2 z-20 -translate-x-1/2">
          <span
            className={`${display} clay-orb inline-flex items-center gap-1.5 whitespace-nowrap rounded-full bg-gradient-to-br from-white to-sp-cream px-5 py-2.5 text-sm font-black tracking-wide text-sp-600`}
          >
            {badge}
          </span>
        </div>
      )}

      <div className="sp-slab sp-slab--offer relative overflow-hidden rounded-[48px] pb-10 text-white">
        <div className="relative z-10 flex flex-col items-center text-center">
          <div className="sp-slab-top w-full px-5 pt-14 sm:px-10">
            <h3 className={`${display} text-3xl font-black leading-[1.15] tracking-tight sm:text-4xl sp-title--dark`}>
              {MAIN_PRODUCT.toUpperCase()}
              <br />
              <Mark on="light">{tier}</Mark>
            </h3>
          </div>

          <div className="sp-split w-full px-5 pt-6 sm:px-10">
            <MainMockup />
          </div>

          <div className="w-full px-5 sm:px-10">
            <ul className="mt-8 flex flex-col gap-3 text-left">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckOrb size="sm" />
                  <span className="pt-0.5 text-[15px] font-bold leading-snug text-white">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {oldPrice && (
            <p className={`${display} mt-10 text-xl font-extrabold text-white/75 line-through decoration-2`}>
              DE {CURRENCY}
              {oldPrice}
            </p>
          )}
          <p className={`${display} ${oldPrice ? "mt-1" : "mt-10"} text-2xl font-black tracking-wide`}>SOLO HOY</p>
          <p className={`${display} mt-1 whitespace-nowrap text-7xl font-black leading-none tracking-tight sm:text-8xl`}>
            <span className="mr-1 align-top text-3xl sm:text-4xl">{CURRENCY}</span>
            {price}
          </p>
          <p className="mt-6 text-sm font-bold text-white/90">Pago único</p>

          <div className="w-full px-5 sm:px-10">
            <CtaButton href={href} className="mt-6 sm:min-w-[320px]">
              Comprar ahora
            </CtaButton>
          </div>
          <p className="mt-3 text-xs font-bold uppercase tracking-widest text-white/85">Pago 100% seguro</p>
        </div>
      </div>
    </div>
  );
}

function BonusPrice({ price }: { price: string }) {
  return (
    <div className="flex flex-col items-center gap-3">
      <span className="clay-orb inline-flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-white to-sp-cream text-sp-600">
        <Gift className="h-6 w-6" strokeWidth={2.5} />
      </span>
      <span className={`${display} text-lg font-extrabold text-white/75 line-through decoration-2`}>{price}</span>
      <span
        className={`${display} clay-orb inline-flex items-center rounded-full bg-sp-go px-5 py-1.5 text-base font-black tracking-widest text-white`}
      >
        GRATIS
      </span>
    </div>
  );
}
