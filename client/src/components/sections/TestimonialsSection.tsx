import { useTranslation } from 'react-i18next';
import { Star } from 'lucide-react';

/**
 * Testimonials section component
 * Displays customer testimonials and success stories
 */
export default function TestimonialsSection() {
  const { t } = useTranslation();

  const testimonials = [
    {
      name: 'Amara Okafor',
      role: 'E-commerce Seller',
      content: t('testimonials.1', 'Afa\'a Pay has transformed my online business. I can now accept payments safely and focus on growing my sales.'),
      rating: 5,
    },
    {
      name: 'Jean-Pierre Dubois',
      role: 'Freelancer',
      content: t('testimonials.2', 'Getting paid is now instant and secure. No more payment disputes or delayed payments. Highly recommended!'),
      rating: 5,
    },
    {
      name: 'Kofi Mensah',
      role: 'SME Owner',
      content: t('testimonials.3', 'The trust score system has helped me get better payment terms from my suppliers. Afa\'a Pay is a game-changer.'),
      rating: 5,
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            {t('testimonials.title', 'What Our Users Say')}
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            {t('testimonials.subtitle', 'Join thousands of satisfied users across Africa')}
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, idx) => (
            <div key={idx} className="bg-gray-50 border border-gray-200 rounded-lg p-6">
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-600 mb-4 italic">"{testimonial.content}"</p>

              {/* Author */}
              <div>
                <div className="font-bold text-gray-900">{testimonial.name}</div>
                <div className="text-sm text-gray-600">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
