import { useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ShoppingCart, Share2, Package } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ModulesSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=140%',
          pin: true,
          scrub: 0.7,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(
          headerRef.current,
          { y: '-30vh', opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          card1Ref.current,
          { x: '-60vw', opacity: 0, rotate: -2 },
          { x: 0, opacity: 1, rotate: 0, ease: 'none' },
          0
        )
        .fromTo(
          card2Ref.current,
          { y: '100vh', opacity: 0, scale: 0.92 },
          { y: 0, opacity: 1, scale: 1, ease: 'none' },
          0.05
        )
        .fromTo(
          card3Ref.current,
          { x: '60vw', opacity: 0, rotate: 2 },
          { x: 0, opacity: 1, rotate: 0, ease: 'none' },
          0.1
        );

      // SETTLE (30% - 70%) - hold position

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(
          headerRef.current,
          { y: 0, opacity: 1 },
          { y: '-12vh', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          card1Ref.current,
          { x: 0, opacity: 1 },
          { x: '-22vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          card2Ref.current,
          { y: 0, opacity: 1 },
          { y: '-18vh', opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo(
          card3Ref.current,
          { x: 0, opacity: 1 },
          { x: '22vw', opacity: 0, ease: 'power2.in' },
          0.74
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const modules = [
    {
      ref: card1Ref,
      icon: ShoppingCart,
      title: t('modules.cards.marketplaces.title'),
      desc: t('modules.cards.marketplaces.desc'),
    },
    {
      ref: card2Ref,
      icon: Share2,
      title: t('modules.cards.social.title'),
      desc: t('modules.cards.social.desc'),
    },
    {
      ref: card3Ref,
      icon: Package,
      title: t('modules.cards.brand.title'),
      desc: t('modules.cards.brand.desc'),
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="modules"
      className="relative w-full h-screen bg-warm overflow-hidden z-30"
    >
      <div className="absolute inset-0 p-[10vh_5vw]">
        {/* Header */}
        <div ref={headerRef} className="absolute left-[5vw] top-[10vh] w-[40vw]">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('modules.headline')}
          </h2>
          <p className="text-base md:text-lg text-dark/70">
            {t('modules.subheadline')}
          </p>
        </div>

        {/* Cards */}
        <div className="absolute top-[32vh] left-0 right-0 flex justify-center gap-[3vw] px-[5vw]">
          {modules.map((module, index) => (
            <div
              key={index}
              ref={module.ref}
              className="w-[28vw] h-[58vh] rounded-[28px] bg-white section-card p-8 flex flex-col"
            >
              <div className="flex-shrink-0 w-14 h-14 rounded-full bg-gold/10 flex items-center justify-center mb-6">
                <module.icon className="w-6 h-6 text-gold" />
              </div>
              <span className="label-uppercase text-gold mb-4">
                Módulo {index + 1}
              </span>
              <h3
                className="text-xl md:text-2xl font-bold text-dark mb-4"
                style={{ fontFamily: 'Montserrat, sans-serif' }}
              >
                {module.title}
              </h3>
              <p className="text-sm md:text-base text-dark/70 leading-relaxed">
                {module.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ModulesSection;