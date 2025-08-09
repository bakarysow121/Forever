import React from 'react';
import { Star, ShoppingCart } from 'lucide-react';

export const FeaturedProducts: React.FC = () => {
  const products = [
    {
      id: 1,
      name: 'Aloe Vera Gel',
      description: 'Gel d\'Aloe Vera pur à 99,7% pour une santé optimale',
      price: '25.000',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/6195116/pexels-photo-6195116.jpeg',
      benefits: ['Système digestif', 'Immunité', 'Énergie naturelle']
    },
    {
      id: 2,
      name: 'Forever Bee Propolis',
      description: 'Complément alimentaire à base de propolis d\'abeille',
      price: '18.500',
      rating: 4.8,
      image: 'https://images.pexels.com/photos/8828590/pexels-photo-8828590.jpeg',
      benefits: ['Défenses naturelles', 'Antioxydant', 'Bien-être général']
    },
    {
      id: 3,
      name: 'Aloe Moisturizing Lotion',
      description: 'Lotion hydratante à l\'Aloe Vera pour tous types de peau',
      price: '22.000',
      rating: 4.7,
      image: 'https://images.pexels.com/photos/5069432/pexels-photo-5069432.jpeg',
      benefits: ['Hydratation', 'Peau douce', 'Anti-âge naturel']
    },
    {
      id: 4,
      name: 'Forever Multi-Maca',
      description: 'Complément énergisant à base de maca péruvien',
      price: '28.000',
      rating: 4.9,
      image: 'https://images.pexels.com/photos/4202325/pexels-photo-4202325.jpeg',
      benefits: ['Énergie', 'Vitalité', 'Performance naturelle']
    }
  ];

  const handleWhatsAppOrder = (productName: string) => {
    const message = `Bonjour, je souhaite commander le produit: ${productName}`;
    window.open(`https://wa.me/2250123456789?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Nos Produits Vedettes
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Découvrez notre sélection de produits Forever Living les plus appréciés 
            par nos clients à Abidjan et partout en Côte d'Ivoire.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-yellow-400 text-white px-2 py-1 rounded-lg text-xs font-semibold">
                  ⭐ {product.rating}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4 text-sm">{product.description}</p>
                
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {product.benefits.map((benefit, index) => (
                      <span
                        key={index}
                        className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs"
                      >
                        {benefit}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="text-2xl font-bold text-green-600">
                    {product.price} FCFA
                  </div>
                  <button
                    onClick={() => handleWhatsAppOrder(product.name)}
                    className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200 flex items-center space-x-2"
                  >
                    <ShoppingCart className="h-4 w-4" />
                    <span>Commander</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-green-700 transition-all duration-300">
            Voir tous les produits
          </button>
        </div>
      </div>
    </section>
  );
};