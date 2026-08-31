import { useLanguage } from "../../hooks/useLanguage";
import type { CSSProperties, MouseEvent } from "react";

export function HomeHero() {
  const { t } = useLanguage();
  const scrollToAbout = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    document.querySelector("#about")?.scrollIntoView({ behavior: "smooth" });
  };
  const line = (i: number): CSSProperties => ({ "--i": i }) as CSSProperties;
  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-navy-6 min-h-screen flex items-center"
    >
      <img
        fetchPriority="high"
        decoding="async"
        src="/assets/images/bg_hero-1600.webp"
        width="1600"
        height="868"
        alt={t("hero.imageAlt")}
        className="hero-bg absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pt-24">
        <p
          className="hero-line text-gold-3 font-medium tracking-wide mb-3"
          style={line(0)}
        >
          {t("hero.welcome")}
        </p>
        <h1
          className="hero-line font-heading font-bold text-white text-[clamp(46px,13vw,56px)] sm:text-[clamp(68px,7vw,112px)] leading-[1.15] tracking-[-0.045em] whitespace-pre-line"
          style={line(1)}
        >
          {t("hero.brand")}
        </h1>
        <p
          className="hero-line font-heading font-normal text-white/90 text-[clamp(27px,7vw,32px)] sm:text-[clamp(36px,3.6vw,58px)] leading-none mt-3 mb-8"
          style={line(2)}
        >
          {t("hero.tagline")}
        </p>
        <p className="hero-line max-w-md text-white mb-10" style={line(3)}>
          {t("hero.sub1")}
          <br />
          {t("hero.sub2")}
        </p>
        <a
          href="#about"
          onClick={scrollToAbout}
          className="hero-line inline-flex items-center rounded-full bg-navy-4 hover:bg-navy-3 text-white px-11 py-3 text-sm font-medium transition-colors"
          style={line(4)}
        >
          {t("common.more")}
        </a>
      </div>
    </section>
  );
}
