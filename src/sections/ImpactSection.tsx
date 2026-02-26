import { useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { TrendingUp, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ImpactSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '+=130%',
          pin: true,
          scrub: 0.6,
        },
      });

      // ENTRANCE (0% - 30%)
      scrollTl
        .fromTo(
          textPanelRef.current,
          { x: '-60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          photoCardRef.current,
          { x: '60vw', opacity: 0, scale: 0.98 },
          { x: 0, opacity: 1, scale: 1, ease: 'none' },
          0
        )
        .fromTo(
          statsRef.current?.children || [],
          { y: 24, opacity: 0 },
          { y: 0, opacity: 1, stagger: 0.03, ease: 'none' },
          0.1
        );

      // SETTLE (30% - 70%) - hold position

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(
          textPanelRef.current,
          { x: 0, opacity: 1 },
          { x: '-18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          photoCardRef.current,
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          statsRef.current?.children || [],
          { y: 0, opacity: 1 },
          { y: -12, opacity: 0, stagger: 0.02, ease: 'power2.in' },
          0.72
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToForm = () => {
    const element = document.getElementById('form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { value: t('impact.stats.trained.value'), label: t('impact.stats.trained.label') },
    { value: t('impact.stats.improvement.value'), label: t('impact.stats.improvement.label') },
    { value: t('impact.stats.partners.value'), label: t('impact.stats.partners.label') },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-warm overflow-hidden z-[70]"
    >
      <div className="absolute inset-0 p-[10vh_5vw]">
        {/* Text Panel (Left) */}
        <div
          ref={textPanelRef}
          className="absolute left-[5vw] top-[10vh] w-[44vw] h-[80vh] rounded-[28px] bg-white section-card p-10 flex flex-col justify-center"
        >
          <span className="label-uppercase text-gold mb-6 block">
            Impacto
          </span>
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('impact.headline')}
          </h2>
          <p className="text-base md:text-lg text-dark/70 mb-10 leading-relaxed">
            {t('impact.body')}
          </p>

          {/* Stats */}
          <div ref={statsRef} className="space-y-6 mb-10">
            {stats.map((stat, index) => (
              <div key={index} className="flex items-center gap-6">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <TrendingUp className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <span
                    className="text-2xl md:text-3xl font-bold text-dark block"
                    style={{ fontFamily: 'Montserrat, sans-serif' }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-sm text-dark/60">{stat.label}</span>
                </div>
              </div>
            ))}
          </div>

          <button onClick={scrollToForm} className="btn-primary group w-fit">
            {t('impact.cta')}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>

        {/* Photo Card (Right) */}
        <div
          ref={photoCardRef}
          className="absolute left-[52vw] top-[10vh] w-[43vw] h-[80vh] rounded-[28px] overflow-hidden section-card"
        >
          <img
            src="/images/impacto-group.jpg"
            alt="Impacto"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;