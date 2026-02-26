import { useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Calendar, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ConferencesSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const mediaCardRef = useRef<HTMLDivElement>(null);
  const statementCardRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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
          mediaCardRef.current,
          { x: '-70vw', opacity: 0, scale: 0.98 },
          { x: 0, opacity: 1, scale: 1, ease: 'none' },
          0
        )
        .fromTo(
          statementCardRef.current,
          { x: '70vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          contentRef.current,
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.1
        );

      // SETTLE (30% - 70%) - hold position

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(
          mediaCardRef.current,
          { x: 0, opacity: 1 },
          { x: '-20vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          statementCardRef.current,
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          contentRef.current,
          { y: 0, opacity: 1 },
          { y: -16, opacity: 0, ease: 'power2.in' },
          0.72
        );
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="conferences"
      className="relative w-full h-screen bg-warm overflow-hidden z-40"
    >
      <div className="absolute inset-0 p-[10vh_5vw]">
        {/* Media Card (Left) */}
        <div
          ref={mediaCardRef}
          className="absolute left-[5vw] top-[10vh] w-[56vw] h-[80vh] rounded-[28px] overflow-hidden section-card"
        >
          <img
            src="/images/conferencias-speaker.jpg"
            alt="Conferencias"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Statement Card (Right) */}
        <div
          ref={statementCardRef}
          className="absolute left-[62vw] top-[10vh] w-[33vw] h-[80vh] rounded-[28px] bg-white section-card p-10 flex flex-col justify-center"
        >
          <div ref={contentRef}>
            <span className="label-uppercase text-gold mb-6 block">
              {t('nav.conferences')}
            </span>
            <h2
              className="text-3xl md:text-4xl font-bold text-dark mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {t('conferences.headline')}
            </h2>
            <p className="text-base md:text-lg text-dark/70 mb-10 leading-relaxed">
              {t('conferences.body')}
            </p>
            <button className="btn-primary group">
              <Calendar className="mr-2 w-4 h-4" />
              {t('conferences.cta')}
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ConferencesSection;