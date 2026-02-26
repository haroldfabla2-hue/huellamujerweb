import { useRef, useLayoutEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Phone, Mail, MapPin, Clock, Instagram, Video } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const ContactSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const detailsRef = useRef<HTMLDivElement>(null);
  const photoRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        taglineRef.current,
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        detailsRef.current,
        { x: 40, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 70%',
            toggleActions: 'play none none reverse',
          },
        }
      );

      gsap.fromTo(
        photoRef.current,
        { y: 60, scale: 0.98, opacity: 0 },
        {
          y: 0,
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 60%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const contactDetails = [
    { icon: Phone, label: t('contact.phone'), href: `tel:${t('contact.phone').replace(/\s/g, '')}` },
    { icon: Mail, label: t('contact.email'), href: `mailto:${t('contact.email')}` },
    { icon: MapPin, label: t('contact.address'), sublabel: t('contact.reference'), href: '#' },
  ];

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: 'https://instagram.com/huellamujer' },
    { icon: Video, label: 'TikTok', href: 'https://tiktok.com/@huellamujer' },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-dark py-24 z-[90]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Top section */}
        <div className="grid lg:grid-cols-2 gap-16 mb-16">
          {/* Tagline */}
          <div ref={taglineRef}>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {t('contact.tagline1')}
            </h2>
            <h2
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gold"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {t('contact.tagline2')}
            </h2>
          </div>

          {/* Contact Details */}
          <div ref={detailsRef} className="space-y-8">
            {/* Contact info */}
            <div className="space-y-4">
              {contactDetails.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  className="flex items-start gap-4 text-white/80 hover:text-gold transition-colors group"
                >
                  <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-gold/20 transition-colors">
                    <item.icon className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block">{item.label}</span>
                    {item.sublabel && (
                      <span className="text-sm text-white/50">{item.sublabel}</span>
                    )}
                  </div>
                </a>
              ))}
            </div>

            {/* Hours */}
            <div className="flex items-start gap-4 text-white/80">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
                <Clock className="w-5 h-5" />
              </div>
              <div>
                <span className="block font-semibold text-white mb-1">
                  {t('contact.hours.title')}
                </span>
                <span className="block text-sm">{t('contact.hours.weekdays')}</span>
                <span className="block text-sm">{t('contact.hours.saturday')}</span>
              </div>
            </div>

            {/* Social */}
            <div className="flex items-center gap-4 pt-4">
              <span className="text-white/50 text-sm">{t('contact.social')}:</span>
              {socialLinks.map((item, index) => (
                <a
                  key={index}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/80 hover:text-gold transition-colors"
                >
                  <item.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Photo Card */}
        <div
          ref={photoRef}
          className="w-full h-[40vh] md:h-[52vh] rounded-[28px] overflow-hidden"
        >
          <img
            src="/images/closing-office.jpg"
            alt="Huella Mujer"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;