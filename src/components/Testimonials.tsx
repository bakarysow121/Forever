import React from 'react';
import { Star, Quote } from 'lucide-react';

export const Testimonials: React.FC = () => {
  const testimonials = [
    {
      id: 1,
      name: 'Aminata Koné',
      location: 'Cocody, Abidjan',
      rating: 5,
      comment: 'J\'utilise les produits Forever Living depuis 2 ans. L\'Aloe Vera Gel m\'a vraiment aidée avec mes problèmes digestifs. Je recommande vivement !',
      product: 'Aloe Vera Gel',
      image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg'
    },
    {
      id: 2,
      name: 'Jean-Baptiste Ouattara',
      location: 'Plateau, Abidjan',
      rating: 5,
      comment: 'En tant que sportif, Forever Multi-Maca m\'apporte l\'énergie nécessaire pour mes entraînements. Produit naturel et efficace.',
      product: 'Forever Multi-Maca',
      image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg'
    },
    {
      id: 3,
      name: 'Marie-Claire Diabaté',
      location: 'Marcory, Abidjan',
      rating: 5,
      comment: 'Les produits de soins Forever Living ont transformé ma peau. La livraison est rapide et le service client excellent.',
      product: 'Aloe Moisturizing Lotion',
      image: 'https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg'
    }
  ];

  return (
    <section className="py-16 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Ce que disent nos clients
          </h2>
          <p className="text-xl text-gray-600">
            Découvrez les témoignages de nos clients satisfaits à Abidjan
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white rounded-xl shadow-lg p-8 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.location}</p>
                </div>
              </div>

              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>

              <div className="relative">
                <Quote className="absolute top-0 left-0 h-8 w-8 text-green-200" />
                <p className="text-gray-700 mb-4 pl-10 italic">
                  {testimonial.comment}
                </p>
              </div>

              <div className="border-t pt-4">
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
                  {testimonial.product}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};