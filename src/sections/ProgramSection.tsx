import { useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BookOpen, Users, Lightbulb, ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ProgramSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const photoCardRef = useRef<HTMLDivElement>(null);
  const textPanelRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const pillarsRef = useRef<HTMLDivElement>(null);

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
          photoCardRef.current,
          { x: '-60vw', opacity: 0, scale: 0.96 },
          { x: 0, opacity: 1, scale: 1, ease: 'none' },
          0
        )
        .fromTo(
          textPanelRef.current,
          { x: '60vw', opacity: 0 },
          { x: 0, opacity: 1, ease: 'none' },
          0
        )
        .fromTo(
          headlineRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, ease: 'none' },
          0.05
        )
        .fromTo(
          pillarsRef.current?.children || [],
          { x: '10vw', opacity: 0 },
          { x: 0, opacity: 1, stagger: 0.03, ease: 'none' },
          0.1
        );

      // SETTLE (30% - 70%) - hold position

      // EXIT (70% - 100%)
      scrollTl
        .fromTo(
          photoCardRef.current,
          { x: 0, opacity: 1 },
          { x: '-28vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          textPanelRef.current,
          { x: 0, opacity: 1 },
          { x: '18vw', opacity: 0, ease: 'power2.in' },
          0.7
        )
        .fromTo(
          headlineRef.current,
          { y: 0, opacity: 1 },
          { y: -20, opacity: 0, ease: 'power2.in' },
          0.72
        )
        .fromTo(
          pillarsRef.current?.children || [],
          { x: 0, opacity: 1 },
          { x: '6vw', opacity: 0, stagger: 0.02, ease: 'power2.in' },
          0.74
        );
    }, section);

    return () => ctx.revert();
  }, []);

  const scrollToModules = () => {
    const element = document.getElementById('modules');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const pillars = [
    { icon: BookOpen, title: t('program.pillars.training.title'), desc: t('program.pillars.training.desc') },
    { icon: Lightbulb, title: t('program.pillars.mentorship.title'), desc: t('program.pillars.mentorship.desc') },
    { icon: Users, title: t('program.pillars.community.title'), desc: t('program.pillars.community.desc') },
  ];

  return (
    <section
      ref={sectionRef}
      id="program"
      className="relative w-full h-screen bg-warm overflow-hidden z-20"
    >
      <div className="absolute inset-0 flex items-center justify-center p-[10vh_5vw]">
        {/* Photo Card (Left) */}
        <div
          ref={photoCardRef}
          className="absolute left-[5vw] top-[10vh] w-[44vw] h-[80vh] rounded-[28px] overflow-hidden section-card"
        >
          <img
            src="/images/programa-collaboration.jpg"
            alt="Programa Huella Mujer"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Text Panel (Right) */}
        <div
          ref={textPanelRef}
          className="absolute left-[52vw] top-[10vh] w-[43vw] h-[80vh] rounded-[28px] bg-white section-card p-[clamp(24px,3vw,56px)] flex flex-col justify-center"
        >
          <div ref={headlineRef}>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {t('program.headline')}
            </h2>
            <p className="text-base md:text-lg text-dark/70 mb-10 leading-relaxed">
              {t('program.body')}
            </p>
          </div>

          <div ref={pillarsRef} className="space-y-6">
            {pillars.map((pillar, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center">
                  <pillar.icon className="w-5 h-5 text-gold" />
                </div>
                <div>
                  <h3 className="font-semibold text-dark mb-1">{pillar.title}</h3>
                  <p className="text-sm text-dark/60">{pillar.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={scrollToModules}
            className="mt-10 inline-flex items-center text-sm font-semibold text-gold hover:text-dark transition-colors group"
          >
            {t('program.link')}
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ProgramSection;