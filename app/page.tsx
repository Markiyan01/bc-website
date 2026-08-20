import Image from "next/image";

type NavItem = {
  label: string;
  href: string;
};

type NavbarProps = {
  brandName: string;
  items: readonly NavItem[];
};

type HeroAction = {
  label: string;
  href: string;
};

type HeroProps = {
  eyebrow: string;
  title: string;
  description: string;
  primaryAction: HeroAction;
  secondaryAction: HeroAction;
  image: {
    src: string;
    alt: string;
  };
};

type FeatureIconName = "energy" | "security" | "layout";

type FeatureItem = {
  title: string;
  description: string;
  icon: FeatureIconName;
};

type FeaturesProps = {
  title: string;
  items: readonly FeatureItem[];
};

const navigationItems = [
  { label: "Переваги", href: "#advantages" },
  { label: "Локація", href: "#location" },
  { label: "Контакти", href: "#contacts" },
] as const satisfies readonly NavItem[];

const heroContent = {
  eyebrow: "Простір для великих рішень",
  title: "Преміум офіси в оренду",
  description:
    "Продумана інфраструктура та цілодобовий доступ для вашого бізнесу",
  primaryAction: { label: "Залишити заявку", href: "#contacts" },
  secondaryAction: { label: "Детальніше", href: "#advantages" },
  image: {
    src: "/images/business-center-hero.png",
    alt: "Сучасний бізнес-центр із панорамним склінням у вечірньому світлі",
  },
} satisfies HeroProps;

const featuresContent = {
  title: "Чому обирають наш бізнес-центр",
  items: [
    {
      icon: "energy",
      title: "Автономне енергопостачання",
      description:
        "Власний генератор та ДБЖ — жодного простою під час відключень.",
    },
    {
      icon: "security",
      title: "Охорона 24/7",
      description:
        "Відеоспостереження та доступ за картками у будь-який час.",
    },
    {
      icon: "layout",
      title: "Гнучкі планування",
      description: "Офіси від 50 до 500 м² під потреби вашої команди.",
    },
  ],
} as const satisfies FeaturesProps;

function Navbar({ brandName, items }: NavbarProps) {
  return (
    <header className="absolute inset-x-0 top-0 z-30 border-b border-white/10">
      <nav
        aria-label="Головна навігація"
        className="mx-auto flex h-20 w-full max-w-[90rem] items-center justify-between px-5 sm:h-24 sm:px-8 lg:px-12"
      >
        <a
          href="#top"
          className="inline-flex rounded-sm text-xl font-bold tracking-[0.16em] text-white transition-opacity duration-300 hover:opacity-75 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white sm:text-2xl"
          aria-label={`${brandName} — на початок сторінки`}
        >
          {brandName}
        </a>

        <ul className="hidden items-center gap-8 md:flex lg:gap-10">
          {items.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="group relative block py-2 text-sm font-medium tracking-wide text-white/85 transition-colors duration-300 hover:text-white focus-visible:rounded-sm focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className="absolute inset-x-0 bottom-0 h-px origin-right scale-x-0 bg-white transition-transform duration-300 ease-out group-hover:origin-left group-hover:scale-x-100"
                />
              </a>
            </li>
          ))}
        </ul>

        <details className="group relative md:hidden">
          <summary className="flex size-11 cursor-pointer list-none items-center justify-center rounded-full border border-white/25 bg-black/10 text-white backdrop-blur-md transition-colors duration-300 hover:border-white/50 hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white [&::-webkit-details-marker]:hidden">
            <span className="sr-only">Відкрити меню</span>
            <svg
              aria-hidden="true"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              className="size-5"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>

          <div className="absolute right-0 top-14 w-52 overflow-hidden rounded-2xl border border-white/15 bg-[#101820]/95 p-2 shadow-2xl shadow-black/30 backdrop-blur-xl">
            <ul className="flex flex-col">
              {items.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="block rounded-xl px-4 py-3 text-sm font-medium text-white/85 transition-colors duration-200 hover:bg-white/10 hover:text-white focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-white"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </details>
      </nav>
    </header>
  );
}

function Hero({
  eyebrow,
  title,
  description,
  primaryAction,
  secondaryAction,
  image,
}: HeroProps) {
  return (
    <section
      id="top"
      aria-labelledby="hero-heading"
      className="relative isolate flex min-h-screen min-h-svh items-center justify-center overflow-hidden bg-slate-950 px-5 py-32 sm:px-8 lg:px-12"
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        preload
        sizes="100vw"
        className="-z-30 object-cover object-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-gradient-to-b from-black/70 via-black/45 to-black/75"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(2,6,23,0.28)_75%)]"
      />

      <div className="mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.28em] text-white/70 sm:mb-7 sm:text-sm">
          {eyebrow}
        </p>
        <h1
          id="hero-heading"
          className="max-w-5xl text-balance text-5xl font-bold leading-[0.98] tracking-[-0.045em] text-white sm:text-6xl md:text-7xl lg:text-8xl"
        >
          {title}
        </h1>
        <p className="mt-6 max-w-2xl text-pretty text-lg leading-8 text-white/75 sm:mt-8 md:text-xl md:leading-9">
          {description}
        </p>

        <div className="mt-9 flex w-full max-w-sm flex-col gap-3 sm:mt-11 sm:w-auto sm:max-w-none sm:flex-row sm:gap-4">
          <a
            href={primaryAction.href}
            className="inline-flex min-h-14 items-center justify-center rounded-full bg-white px-8 py-4 text-sm font-semibold text-slate-950 shadow-lg shadow-black/10 transition-all duration-300 hover:-translate-y-0.5 hover:bg-sky-100 hover:shadow-xl hover:shadow-black/20 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 sm:min-w-48"
          >
            {primaryAction.label}
          </a>
          <a
            href={secondaryAction.href}
            className="inline-flex min-h-14 items-center justify-center rounded-full border border-white/50 bg-white/5 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-white/15 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white active:translate-y-0 sm:min-w-40"
          >
            {secondaryAction.label}
          </a>
        </div>
      </div>

      <a
        href="#advantages"
        aria-label="Перейти до переваг"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[0.65rem] font-medium uppercase tracking-[0.2em] text-white/55 transition-colors duration-300 hover:text-white sm:flex"
      >
        Гортайте
        <svg
          aria-hidden="true"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className="size-5 animate-bounce"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="m6 9 6 6 6-6" />
        </svg>
      </a>
    </section>
  );
}

function FeatureIcon({ name }: { name: FeatureIconName }) {
  const paths = {
    energy: <path d="m13 2-9 12h7l-1 8 10-12h-7V2Z" />,
    security: (
      <>
        <path d="M20 13c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V5l8-3 8 3v8Z" />
        <path d="m9 12 2 2 4-4" />
      </>
    ),
    layout: (
      <>
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M9 3v18M9 9h12" />
      </>
    ),
  } as const;

  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-7"
    >
      {paths[name]}
    </svg>
  );
}

function Features({ title, items }: FeaturesProps) {
  return (
    <section
      id="advantages"
      aria-labelledby="features-heading"
      className="scroll-mt-20 bg-slate-50 px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <h2
          id="features-heading"
          className="mb-12 text-center text-3xl font-bold tracking-[-0.025em] text-slate-900 sm:text-4xl lg:text-5xl"
        >
          {title}
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-10">
          {items.map((item) => (
            <article
              key={item.title}
              className="group flex min-h-full flex-col rounded-2xl border border-slate-200/70 bg-white p-8 shadow-md shadow-slate-900/5 transition-all duration-300 motion-safe:hover:-translate-y-2 hover:border-sky-200 hover:shadow-xl hover:shadow-slate-900/10"
            >
              <div className="mb-7 flex size-14 items-center justify-center rounded-full bg-sky-100 text-sky-700 transition-colors duration-300 group-hover:bg-sky-700 group-hover:text-white">
                <FeatureIcon name={item.icon} />
              </div>
              <h3 className="text-xl font-bold leading-snug tracking-[-0.015em] text-slate-900">
                {item.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-slate-600">
                {item.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Navbar brandName="BC WAVE" items={navigationItems} />
      <main>
        <Hero {...heroContent} />
        <Features {...featuresContent} />
      </main>
    </>
  );
}
