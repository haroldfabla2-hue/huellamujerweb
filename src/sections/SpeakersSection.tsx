import { useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SpeakersSection = () => {
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

  const speakers = [
    {
      ref: card1Ref,
      name: t('speakers.cards.eleanor.name'),
      role: t('speakers.cards.eleanor.role'),
      image: '/images/mentor-eleanor.jpg',
    },
    {
      ref: card2Ref,
      name: t('speakers.cards.joshua.name'),
      role: t('speakers.cards.joshua.role'),
      image: '/images/mentor-joshua.jpg',
    },
    {
      ref: card3Ref,
      name: t('speakers.cards.marci.name'),
      role: t('speakers.cards.marci.role'),
      image: '/images/mentor-marci.jpg',
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen bg-warm overflow-hidden z-[60]"
    >
      <div className="absolute inset-0 p-[10vh_5vw]">
        {/* Header */}
        <div ref={headerRef} className="absolute left-[5vw] top-[10vh] w-[40vw]">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('speakers.headline')}
          </h2>
          <p className="text-base md:text-lg text-dark/70">
            {t('speakers.subheadline')}
          </p>
        </div>

        {/* Cards */}
        <div className="absolute top-[32vh] left-0 right-0 flex justify-center gap-[3vw] px-[5vw]">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              ref={speaker.ref}
              className="w-[28vw] h-[58vh] rounded-[28px] bg-white section-card overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="h-[55%] overflow-hidden">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="flex-grow p-6 flex flex-col justify-center">
                <h3
                  className="text-xl md:text-2xl font-bold text-dark mb-2"
                  style={{ fontFamily: 'Montserrat, sans-serif' }}
                >
                  {speaker.name}
                </h3>
                <p className="text-sm md:text-base text-dark/70">
                  {speaker.role}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpeakersSection;