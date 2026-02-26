import { useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const TestimonialsSection = () => {
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

  const testimonials = [
    {
      ref: card1Ref,
      name: t('testimonials.cards.lucia.name'),
      role: t('testimonials.cards.lucia.role'),
      quote: t('testimonials.cards.lucia.quote'),
      avatar: '/images/avatar-lucia.jpg',
    },
    {
      ref: card2Ref,
      name: t('testimonials.cards.mariana.name'),
      role: t('testimonials.cards.mariana.role'),
      quote: t('testimonials.cards.mariana.quote'),
      avatar: '/images/avatar-mariana.jpg',
    },
    {
      ref: card3Ref,
      name: t('testimonials.cards.sofia.name'),
      role: t('testimonials.cards.sofia.role'),
      quote: t('testimonials.cards.sofia.quote'),
      avatar: '/images/avatar-sofia.jpg',
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full h-screen bg-warm overflow-hidden z-50"
    >
      <div className="absolute inset-0 p-[10vh_5vw]">
        {/* Header */}
        <div ref={headerRef} className="absolute left-[5vw] top-[10vh] w-[40vw]">
          <h2
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-4"
            style={{ fontFamily: 'Montserrat, sans-serif' }}
          >
            {t('testimonials.headline')}
          </h2>
          <p className="text-base md:text-lg text-dark/70">
            {t('testimonials.subheadline')}
          </p>
        </div>

        {/* Cards */}
        <div className="absolute top-[32vh] left-0 right-0 flex justify-center gap-[3vw] px-[5vw]">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              ref={testimonial.ref}
              className="w-[28vw] h-[58vh] rounded-[28px] bg-white section-card p-8 flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-base md:text-lg text-dark/80 leading-relaxed flex-grow">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4 mt-6 pt-6 border-t border-dark/10">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-14 h-14 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-semibold text-dark">{testimonial.name}</h4>
                  <p className="text-sm text-dark/60">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;