import { useRef, useLayoutEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Send, Check } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

gsap.registerPlugin(ScrollTrigger);

const FormSection = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const leftRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useLayoutEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const ctx = gsap.context(() => {
      // Left content animation
      gsap.fromTo(
        leftRef.current,
        { y: 40, opacity: 0 },
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

      // Form fields animation
      const formFields = formRef.current?.querySelectorAll('.form-field');
      if (formFields) {
        gsap.fromTo(
          formFields,
          { y: 24, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 70%',
              toggleActions: 'play none none reverse',
            },
          }
        );
      }
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  return (
    <section
      ref={sectionRef}
      id="form"
      className="relative w-full min-h-screen bg-warm py-24 z-[80]"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <div ref={leftRef} className="lg:sticky lg:top-32 lg:self-start">
            <span className="label-uppercase text-gold mb-6 block">
              Participa
            </span>
            <h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark mb-6"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              {t('form.headline')}
            </h2>
            <p className="text-base md:text-lg text-dark/70 leading-relaxed">
              {t('form.body')}
            </p>

            {/* Vertical line decoration */}
            <div className="hidden lg:block absolute right-0 top-0 w-px h-full bg-dark/10" />
          </div>

          {/* Right Column - Form */}
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-field space-y-2">
                <Label htmlFor="firstname">{t('form.fields.firstname')}</Label>
                <Input
                  id="firstname"
                  placeholder={t('form.fields.firstname')}
                  className="h-12 rounded-xl border-dark/10 bg-white"
                  required
                />
              </div>
              <div className="form-field space-y-2">
                <Label htmlFor="lastname">{t('form.fields.lastname')}</Label>
                <Input
                  id="lastname"
                  placeholder={t('form.fields.lastname')}
                  className="h-12 rounded-xl border-dark/10 bg-white"
                  required
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="form-field space-y-2">
                <Label htmlFor="phone">{t('form.fields.phone')}</Label>
                <Input
                  id="phone"
                  type="tel"
                  placeholder={t('form.fields.phone')}
                  className="h-12 rounded-xl border-dark/10 bg-white"
                  required
                />
              </div>
              <div className="form-field space-y-2">
                <Label htmlFor="age">{t('form.fields.age')}</Label>
                <Input
                  id="age"
                  type="number"
                  placeholder={t('form.fields.age')}
                  className="h-12 rounded-xl border-dark/10 bg-white"
                  required
                />
              </div>
            </div>

            <div className="form-field space-y-2">
              <Label htmlFor="email">{t('form.fields.email')}</Label>
              <Input
                id="email"
                type="email"
                placeholder={t('form.fields.email')}
                className="h-12 rounded-xl border-dark/10 bg-white"
                required
              />
            </div>

            <div className="form-field space-y-2">
              <Label htmlFor="district">{t('form.fields.district')}</Label>
              <Input
                id="district"
                placeholder={t('form.fields.district')}
                className="h-12 rounded-xl border-dark/10 bg-white"
                required
              />
            </div>

            <div className="form-field space-y-2">
              <Label>{t('form.fields.product')}</Label>
              <Select>
                <SelectTrigger className="h-12 rounded-xl border-dark/10 bg-white">
                  <SelectValue placeholder={t('form.fields.product')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="textiles">{t('form.options.product.textiles')}</SelectItem>
                  <SelectItem value="ceramics">{t('form.options.product.ceramics')}</SelectItem>
                  <SelectItem value="jewelry">{t('form.options.product.jewelry')}</SelectItem>
                  <SelectItem value="decor">{t('form.options.product.decor')}</SelectItem>
                  <SelectItem value="food">{t('form.options.product.food')}</SelectItem>
                  <SelectItem value="fashion">{t('form.options.product.fashion')}</SelectItem>
                  <SelectItem value="eco">{t('form.options.product.eco')}</SelectItem>
                  <SelectItem value="services">{t('form.options.product.services')}</SelectItem>
                  <SelectItem value="retail">{t('form.options.product.retail')}</SelectItem>
                  <SelectItem value="other">{t('form.options.product.other')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="form-field space-y-2">
              <Label>{t('form.fields.digitalLevel')}</Label>
              <Select>
                <SelectTrigger className="h-12 rounded-xl border-dark/10 bg-white">
                  <SelectValue placeholder={t('form.fields.digitalLevel')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="basic">{t('form.options.digitalLevel.basic')}</SelectItem>
                  <SelectItem value="intermediate">{t('form.options.digitalLevel.intermediate')}</SelectItem>
                  <SelectItem value="advanced">{t('form.options.digitalLevel.advanced')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="form-field space-y-2">
              <Label>{t('form.fields.motivation')}</Label>
              <Select>
                <SelectTrigger className="h-12 rounded-xl border-dark/10 bg-white">
                  <SelectValue placeholder={t('form.fields.motivation')} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="income">{t('form.options.motivation.income')}</SelectItem>
                  <SelectItem value="learn">{t('form.options.motivation.learn')}</SelectItem>
                  <SelectItem value="formalize">{t('form.options.motivation.formalize')}</SelectItem>
                  <SelectItem value="brand">{t('form.options.motivation.brand')}</SelectItem>
                  <SelectItem value="markets">{t('form.options.motivation.markets')}</SelectItem>
                  <SelectItem value="grow">{t('form.options.motivation.grow')}</SelectItem>
                  <SelectItem value="other">{t('form.options.motivation.other')}</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <button
              type="submit"
              className="btn-primary w-full md:w-auto mt-8 group"
              disabled={isSubmitted}
            >
              {isSubmitted ? (
                <>
                  <Check className="mr-2 w-4 h-4" />
                  {t('form.success')}
                </>
              ) : (
                <>
                  <Send className="mr-2 w-4 h-4" />
                  {t('form.submit')}
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default FormSection;